# Quick Start Guide

## ⚠️ IMPORTANT: Install Node.js First!

Before you can run this React portfolio, you need Node.js installed.

### Step 1: Install Node.js (5 minutes)

1. Visit: **https://nodejs.org/**
2. Download the **LTS version** (green button)
3. Run the installer and follow the prompts
4. **Restart your computer** or close all terminal windows

### Step 2: Verify Installation

Open a **NEW** PowerShell window and type:

```powershell
node --version
npm --version
```

If you see version numbers, you're ready! ✅

### Step 3: Install Dependencies

```powershell
cd D:\portfolio
npm install
```

Wait for installation to complete (2-5 minutes)

### Step 4: Start the Portfolio

```powershell
npm start
```

Your browser will open automatically at **http://localhost:3000**

---

## 🚀 Deploy to Vercel (After Testing Locally)

1. Push code to GitHub
2. Go to https://vercel.com
3. Import your GitHub repository
4. Deploy automatically!

---

## 📝 Using Static HTML Version (No Node.js Required)

If you don't want to install Node.js, you can use the static version:

1. Simply open `index.html` in your browser
2. All files are ready to use!

---

## ❓ Troubleshooting

**"npm is not recognized"**
- Node.js is not installed or not in PATH
- Install Node.js from nodejs.org
- Restart your terminal/computer

**"Port 3000 already in use"**
```powershell
set PORT=3001
npm start
```

**Installation fails**
```powershell
npm cache clean --force
npm install
```

