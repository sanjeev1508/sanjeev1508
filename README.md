<div align="center">

```
╔══════════════════════════════════════════════════════════╗
║   SANJEEVIKUMAR S  ·  AI × Security × Control Systems   ║
╚══════════════════════════════════════════════════════════╝
```

<h2>Building AI that stays aligned, stays secure, and stays useful.</h2>

<p>
  <a href="mailto:sanjeevikumar15@gmail.com"><img src="https://img.shields.io/badge/Gmail-EA4335?style=flat-square&logo=gmail&logoColor=white" /></a>
  <a href="https://linkedin.com/in/sanjeevikumar-s-737951282"><img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=flat-square&logo=linkedin&logoColor=white" /></a>
  <a href="https://github.com/sanjeev1508"><img src="https://img.shields.io/badge/GitHub-sanjeev1508-181717?style=flat-square&logo=github&logoColor=white" /></a>
  <img src="https://komarev.com/ghpvc/?username=sanjeev1508&style=flat-square&color=6e40c9&label=profile+views" />
</p>

</div>

---

## `whoami`

```python
sanjeev = {
    "role"     : "AI/ML Engineer · M.Sc. Integrated AI & ML (Semester 8)",
    "institute": "Coimbatore Institute of Technology  |  CGPA: 8.63",
    "focus"    : ["LLM Alignment", "Agentic AI", "AI × CyberSecurity"],
    "currently": "Building RL-based control systems & LLM deviation tooling",
    "competed" : [
        "🥇 TechStars Startup Weekend Sustainability 2024 — 1st Place",
        "🥇 Impairathon 2024 (360+ teams, StartupTN) — 1st Place",
        "🏆 Shaastra Programming Contest 2025 (IIT Madras) — Finalist",
    ],
}
```

---

## 🏢 Experience

**AI & CyberSecurity Intern — SQ1 Security Pvt. Ltd.** `Jun 2025 – Nov 2025`

> Worked across four production-grade AI pipelines in a security product context:

- **Vulnerability Detection** — RAG pipeline for CVE pattern analysis and automated patch suggestion using embedding-based semantic retrieval
- **Policy Management** — Semantic classifier to auto-categorize and structure organizational compliance repositories
- **OCR-to-LLM Pipeline** — Fine-tuned Biomedical NER model → ICD code mapping via clinical document extraction
- **MCP Server Integration** — Built MCP server orchestration layer connecting multiple AI tools through a unified LLM interface

---

## 🚀 Featured Projects

### 🥇 [`TD3-Based-PI-Gain-Tuning`](https://github.com/sanjeev1508/TD3-Based-PI-Gain-Tuning) — *Most Technically Unique*
> **Reinforcement Learning × Industrial Control Systems**

Applied **Twin Delayed Deep Deterministic Policy Gradient (TD3)** to automatically tune PI controller gains for a 2nd-order hydraulic actuator — without ever exposing the plant model to the agent. Pure Python, no MATLAB required.

| Metric | Baseline PI | TD3 Adaptive | Δ |
|:--|:--:|:--:|:--:|
| Overshoot % | 33.72% | 21.97% | **↓ 35%** |
| ITAE | 940,819 | 597,404 | **↓ 37%** |
| Settling Time | 427.95s | 420.19s | **↓ 2%** |

`Python` `Stable-Baselines3` `Gymnasium` `SciPy` `Control Theory` `TD3`

---

### 🥈 [`AI-Driven-ZeroDay-SOC-Monitoring-Tool`](https://github.com/sanjeev1508/AI-Driven-ZeroDay-SOC-Monitoring-Tool) — *Best Systems Architecture*
> **Multi-Agent AI × CyberSecurity**

4-agent modular SOC system replacing legacy Kafka dependencies with lightweight CSV streaming + Qdrant vector storage. Covers the full threat intelligence pipeline end-to-end.

```
Agent 1 → Log Collection (Windows Event Logs, real-time streaming)
Agent 2 → Threat Intel (Selenium scraper + zero-day feed ingestion)
Agent 3 → Synthetic Pattern Gen (attack pattern synthesis via Qdrant)
Agent 4 → Alert Manager (semantic search → alerts.json generation)
```

`Python` `Qdrant` `Kafka` `ZooKeeper` `Ollama` `Streamlit` `Selenium`

---

### 🥉 [`Model-Deviation-Summarizer`](https://github.com/sanjeev1508/Model-Deviation-Summarizer) — *Most Original Concept*
> **LLM Alignment Tooling · Browser Extension + FastAPI**

Local-first Edge browser extension that detects when an AI model drifts from a user's original intent using **vector alignment metrics**, then reconstructs optimized expert prompts to correct the deviation.

- Tracks semantic distance between user intent and model output across conversation turns
- Reconstructs expert-style corrective prompts on detected drift
- Fully local-first — no data leaves the browser

`JavaScript` `FastAPI` `Vector Embeddings` `Edge Extension` `Prompt Engineering`

---

### Other Notable Work

| Project | Domain | Description |
|:--|:--|:--|
| [`Yara-dsl`](https://github.com/sanjeev1508/Yara-dsl) | Security / DSL | Pure-Python DSL for building guaranteed-valid YARA rules with PE/ELF semantic validation |
| [`promptmasker`](https://github.com/sanjeev1508/promptmasker) | LLM Safety | PyPI-published utility to detect and redact sensitive data before it reaches LLMs |
| [`agentic-rag-system`](https://github.com/sanjeev1508/agentic-rag-system) | RAG / Agents | Multi-agent reasoning system with agentic RAG architecture |
| [`Parkinson-Classification`](https://github.com/sanjeev1508/Parkinson-Classification-using-CNN-and-Streamlit) | Healthcare AI | CNN on MFCC audio features to classify dysarthric vs healthy speech |
| [`AI-Personalized-Mail-Composer`](https://github.com/sanjeev1508/AI-Personalized-Mail-Composer) | GenAI | Learns Gmail sent-mail style to generate personalized emails with Streamlit UI |

---

## 🛠 Tech Stack

**AI / LLM**
`RAG` `Agentic AI` `MCP` `A2A Protocol` `Model Finetuning` `NER` `Embeddings` `Vector DBs` `LangChain` `Ollama`

**Security**
`YARA` `SOC Tooling` `Zero-Day Detection` `CVE Analysis` `Prompt Injection Defense`

**Control & RL**
`TD3` `Gymnasium` `Stable-Baselines3` `SciPy ODE` `PI Controller Tuning`

**Backend & Data**
`Python` `FastAPI` `Streamlit` `Kafka` `ZooKeeper` `Debezium` `PostgreSQL` `MySQL` `Firebase`

**Cloud & DevOps**
`Docker` `AWS` `Git`

**Databases / Vector**
`Qdrant` `PostgreSQL` `MySQL` `Firebase`

---

## 📊 GitHub Stats

<div align="center">

<img src="https://github-readme-stats.vercel.app/api?username=sanjeev1508&show_icons=true&theme=tokyonight&hide_border=true&bg_color=0d1117&title_color=6e40c9&icon_color=6e40c9" height="165" />
<img src="https://github-readme-stats.vercel.app/api/top-langs/?username=sanjeev1508&layout=compact&theme=tokyonight&hide_border=true&bg_color=0d1117&title_color=6e40c9" height="165" />

<br/>

<img src="https://github-readme-streak-stats.herokuapp.com/?user=sanjeev1508&theme=tokyonight&hide_border=true&background=0d1117&ring=6e40c9&fire=6e40c9&currStreakLabel=6e40c9" />

<br/>

<img src="https://github-readme-activity-graph.vercel.app/graph?username=sanjeev1508&theme=tokyo-night&bg_color=0d1117&hide_border=true&color=6e40c9&line=6e40c9&point=ffffff" />

</div>

---

## 🏆 Achievements

```
🥇  1st Place  —  TechStars Startup Weekend Sustainability (2024)
🥇  1st Place  —  Impairathon by StartupTN (2024) · 360+ competing teams
🏆  Finalist   —  Shaastra Programming Contest, IIT Madras (2025)
```

---

<div align="center">

*"I build AI systems that are hard to fool, hard to drift, and easy to trust."*

<sub>Open to research collaborations, internships, and full-time roles in AI × Security · Reach me at sanjeevikumar15@gmail.com</sub>

</div>
