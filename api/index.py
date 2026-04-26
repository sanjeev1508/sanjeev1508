from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from typing import List, Dict, Any
import requests
import os

app = FastAPI()

# Base directory — the portfolio root (one level up from /api)
_base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

@app.get("/")
async def serve_index():
    return FileResponse(os.path.join(_base_dir, "index.html"))

@app.get("/styles.css")
async def serve_css():
    return FileResponse(os.path.join(_base_dir, "styles.css"), media_type="text/css")

@app.get("/script.js")
async def serve_js():
    return FileResponse(os.path.join(_base_dir, "script.js"), media_type="application/javascript")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Automatically load .env file
env_path = os.path.join(os.path.dirname(os.path.dirname(__file__)), ".env")
if os.path.exists(env_path):
    with open(env_path, "r") as f:
        for line in f:
            line = line.strip()
            if line and not line.startswith("#") and "=" in line:
                key, val = line.split("=", 1)
                if key not in os.environ:
                    os.environ[key] = val.strip('"').strip("'")

# Groq API Key securely fetched from environment
GROQ_API_KEY = os.getenv("GROQ_API_KEY")
GROQ_URL = "https://api.groq.com/openai/v1/chat/completions"



SYSTEM_PROMPT = """You are Xan, an AI assistant embedded in Sanjeevikumar S's portfolio. You know everything about Sanjeev:
- M.Sc. AI & ML student at Coimbatore Institute of Technology, CGPA: 8.63 (Sem 7)
- AI & CyberSecurity Intern at SQ1 Security Pvt Ltd (Jun-Nov 2025): built RAG pipelines for CVE analysis, policy classification, biomedical NER (ICD mapping), MCP server integrations
- Projects: Model-Deviation-Summarizer (LLM alignment, browser extension + FastAPI), AI-Driven-ZeroDay-SOC-Monitoring-Tool (4-agent system, Qdrant), TD3-Based-PI-Gain-Tuning (RL control, -35% overshoot), promptmasker (PyPI), Yara-dsl, agentic-rag-system
- Skills: Python, PyTorch, TensorFlow, FastAPI, LangChain, HuggingFace, Qdrant, Kafka, Debezium, Zookeeper, PostgreSQL, MySQL, AWS, Firebase, Streamlit, MCP
- Achievements: 1st Prize TechStars Startup Weekend Sustainability 2024, 1st Place Impairathon 2024 StartupTN (360+ teams), Finalist Shaastra Programming Contest IIT Madras 2025
- Contact: sanjeevikumar15@gmail.com | Location: Coimbatore, Tamil Nadu
- GitHub: github.com/sanjeev1508 | LinkedIn: linkedin.com/in/sanjeevikumar-s-737951282
- Open to: full-time AI/ML roles, research collaborations in AI × Security
Answer questions about Sanjeev naturally and helpfully. Be concise. If asked something you don't know about Sanjeev, say so honestly.
"""
from fastapi import Request

@app.post("/api/chat")
async def chat_endpoint(request: Request):
    try:
        body = await request.json()
    except Exception:
        raise HTTPException(status_code=400, detail="Invalid JSON body")
        
    messages = body.get("messages", [])
    
    if not GROQ_API_KEY:
        raise HTTPException(status_code=500, detail="GROQ_API_KEY environment variable is missing")

    headers = {
        "Authorization": f"Bearer {GROQ_API_KEY}",
        "Content-Type": "application/json"
    }
    
    # 1. Enforce our immutable backend system prompt
    secure_messages = [{"role": "system", "content": SYSTEM_PROMPT}]
    
    # 2. Filter frontend messages: drop client-side system prompts and keep conversation concise
    for msg in messages[-6:]: # Keep only recent history to prevent context overflow
        if msg.get("role") in ["user", "assistant"]:
            secure_messages.append({"role": msg["role"], "content": msg.get("content", "")[:1000]}) # Limit msg length

    data = {
        "model": "llama-3.1-8b-instant",
        "messages": secure_messages,
        "temperature": 0.2, # Lower temperature for strictly factual, concise responses
        "max_tokens": 150
    }

    response = None
    try:
        response = requests.post(GROQ_URL, headers=headers, json=data)
        response.raise_for_status()
        result = response.json()
        
        reply = result.get('choices', [{}])[0].get('message', {}).get('content', "I'm sorry, I couldn't generate a response.")
        return {"reply": reply}
    except requests.exceptions.RequestException as e:
        print(f"Error calling Groq: {e}")
        if response is not None and hasattr(response, 'text'):
            print(f"Response text: {response.text}")
        raise HTTPException(status_code=500, detail="Error communicating with AI service")

@app.get("/api/health")
def health_check():
    return {"status": "ok"}
