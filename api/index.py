from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List, Dict, Any
import requests
import os

app = FastAPI()

# OpenRouter API Key securely fetched from environment
OPENROUTER_API_KEY = os.getenv("OPENROUTER_API_KEY")
OPENROUTER_URL = "https://openrouter.ai/api/v1/chat/completions"

class ChatRequest(BaseModel):
    messages: List[Dict[str, Any]]

@app.post("/api/chat")
async def chat_endpoint(req: ChatRequest):
    if not OPENROUTER_API_KEY:
        raise HTTPException(status_code=500, detail="OPENROUTER_API_KEY environment variable is missing")

    headers = {
        "Authorization": f"Bearer {OPENROUTER_API_KEY}",
        "Content-Type": "application/json",
        "HTTP-Referer": "https://sanjeev1508.vercel.app",
        "X-Title": "portfolio-app"
    }

    data = {
        "model": "nvidia/nemotron-3-super-120b-a12b-20230311:free",
        "messages": req.messages
    }

    try:
        response = requests.post(OPENROUTER_URL, headers=headers, json=data)
        response.raise_for_status()
        result = response.json()
        
        reply = result.get('choices', [{}])[0].get('message', {}).get('content', "I'm sorry, I couldn't generate a response.")
        return {"reply": reply}
    except requests.exceptions.RequestException as e:
        print(f"Error calling OpenRouter: {e}")
        if response.text:
            print(f"Response text: {response.text}")
        raise HTTPException(status_code=500, detail="Error communicating with AI service")

@app.get("/api/health")
def health_check():
    return {"status": "ok"}
