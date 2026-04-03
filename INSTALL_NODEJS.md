# How to Install Node.js on Windows

## Quick Installation Steps

### Option 1: Official Installer (Recommended)

1. **Download:**
   - Go to: **https://nodejs.org/**
   - Click the **LTS** button (Long Term Support version)
   - Download the Windows Installer (.msi)

2. **Install:**
   - Double-click the downloaded `.msi` file
   - Click "Next" through the installation wizard
   - **IMPORTANT:** Check "Automatically install the necessary tools" 
   - Complete the installation

3. **Restart:**
   - Close ALL PowerShell/Command Prompt windows
   - Open a NEW PowerShell window
   - Test with: `node --version` and `npm --version`

### Option 2: Using Chocolatey (If you have it)

```powershell
choco install nodejs-lts
```

### Option 3: Using Winget (Windows Package Manager)

```powershell
winget install OpenJS.NodeJS.LTS
```

---

## Verify Installation

After installation, open a **NEW** PowerShell window and run:

```powershell
node --version
npm --version
```

You should see version numbers like:
```
v18.17.0
9.6.7
```

---

## After Installation

Once Node.js is installed, return to the project directory and run:

```powershell
cd D:\portfolio
npm install
npm start
```

---

## Still Having Issues?

1. **Restart your computer** after installation
2. Make sure you're using a **NEW** terminal window
3. Check if Node.js is installed:
   - Open File Explorer
   - Navigate to: `C:\Program Files\nodejs\`
   - If you see `node.exe`, it's installed but not in PATH

4. **Add to PATH manually** (if needed):
   - Search "Environment Variables" in Windows
   - Edit System Environment Variables
   - Add `C:\Program Files\nodejs\` to PATH
   - Restart terminal

