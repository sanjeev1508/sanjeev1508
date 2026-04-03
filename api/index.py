from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import requests
import os

app = FastAPI()

# OpenRouter API Key provided by the user
OPENROUTER_API_KEY = "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"
OPENROUTER_URL = "https://openrouter.ai/api/v1/chat/completions"

class ChatRequest(BaseModel):
    message: str

@app.post("/api/chat")
async def chat_endpoint(req: ChatRequest):
    headers = {
        "Authorization": f"Bearer {OPENROUTER_API_KEY}",
        "Content-Type": "application/json",
        "HTTP-Referer": "https://sanjeev-portfolio.vercel.app", 
        "X-Title": "Portfolio Chatbot"
    }

    data = {
        "model": "mistralai/mistral-7b-instruct:free",
        "messages": [
            {"role": "system", "content": "You are a helpful AI assistant on Sanjeevikumar's portfolio website. Sanjeev is an AI & ML Engineer. Answer concisely and politely."},
            {"role": "user", "content": req.message}
        ]
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
