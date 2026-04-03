# Setup Guide - React Portfolio

## Prerequisites: Install Node.js

To run this React portfolio, you need Node.js installed on your system.

### Step 1: Install Node.js

1. **Download Node.js:**
   - Visit: https://nodejs.org/
   - Download the **LTS (Long Term Support)** version (recommended)
   - Choose the Windows Installer (.msi) for your system (64-bit or 32-bit)

2. **Install Node.js:**
   - Run the downloaded installer
   - Follow the installation wizard
   - **Important:** Make sure to check "Add to PATH" during installation
   - Complete the installation

3. **Verify Installation:**
   - Open a **NEW** PowerShell or Command Prompt window
   - Run these commands:
   ```powershell
   node --version
   npm --version
   ```
   - You should see version numbers (e.g., v18.17.0 and 9.6.7)

### Step 2: Install Project Dependencies

Once Node.js is installed:

```powershell
# Navigate to project directory
cd D:\portfolio

# Install all dependencies
npm install
```

This will install:
- React
- Framer Motion (animations)
- React Icons
- React Intersection Observer
- And other dependencies

### Step 3: Start Development Server

```powershell
npm start
```

This will:
- Start the development server
- Open your browser automatically at http://localhost:3000
- Enable hot-reload (changes appear instantly)

### Step 4: Build for Production

```powershell
npm run build
```

This creates an optimized production build in the `build` folder.

---

## Alternative: Use Static HTML Version

If you prefer not to install Node.js right now, you can use the **static HTML version** that was already created:

1. Simply open `index.html` in your browser
2. All files are already there:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `my_picture.JPG`

The static version works perfectly but doesn't have React's advanced features like:
- Component reusability
- Advanced animations
- Dynamic data fetching
- Easy deployment to Vercel

---

## Troubleshooting

### npm command not found after installing Node.js

1. **Close and reopen** your terminal/PowerShell
2. If still not working, restart your computer
3. Verify Node.js is in PATH:
   ```powershell
   $env:PATH -split ';' | Select-String node
   ```

### Port 3000 already in use

If you get an error about port 3000:
```powershell
# Use a different port
set PORT=3001
npm start
```

### Installation takes too long

- Check your internet connection
- Try clearing npm cache:
  ```powershell
  npm cache clean --force
  ```

---

## Quick Start (After Node.js Installation)

```powershell
# 1. Install dependencies
npm install

# 2. Start development server
npm start

# 3. Open browser to http://localhost:3000
```

---

## Need Help?

- Node.js Installation: https://nodejs.org/
- React Documentation: https://react.dev/
- npm Documentation: https://docs.npmjs.com/

