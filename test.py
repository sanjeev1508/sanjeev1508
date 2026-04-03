import requests

url = "https://openrouter.ai/api/v1/chat/completions"

headers = {
    "Authorization": "Bearer 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",
    "Content-Type": "application/json",
    "HTTP-Referer": "http://localhost",
    "X-Title": "test-app"
}

data = {
    "model": "nvidia/nemotron-3-super-120b-a12b:free",
    "messages": [
        {"role": "user", "content": "Say hello in one line"}
    ]
}

response = requests.post(url, headers=headers, json=data)

print(response.status_code)
print(response.json())