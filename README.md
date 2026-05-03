

<h1>SANJEEVIKUMAR S</h1>
<h3>AI Engineer &nbsp;·&nbsp; LLM Systems &nbsp;·&nbsp; AI × CyberSecurity</h3>

<p>
  <a href="mailto:sanjeevikumar15@gmail.com"><img src="https://img.shields.io/badge/Gmail-EA4335?style=flat-square&logo=gmail&logoColor=white" /></a>&nbsp;
  <a href="https://linkedin.com/in/sanjeevikumar-s-737951282"><img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=flat-square&logo=linkedin&logoColor=white" /></a>&nbsp;
  <a href="https://github.com/sanjeev1508"><img src="https://img.shields.io/badge/GitHub-sanjeev1508-181717?style=flat-square&logo=github&logoColor=white" /></a>&nbsp;
  <img src="https://komarev.com/ghpvc/?username=sanjeev1508&style=flat-square&color=0A66C2&label=profile+views" />
</p>

<sub><i>Building AI systems that are hard to fool, hard to drift, and easy to trust.</i></sub>

</div>

---

## `whoami`

```python
sanjeev = {
    "role"     : "AI/ML Engineer  ·  M.Sc. Integrated AI & ML — Semester 8",
    "institute": "Coimbatore Institute of Technology  |  CGPA: 8.63",
    "focus"    : ["LLM Alignment", "Agentic AI", "AI x CyberSecurity", "RL for Control Systems"],
    "currently": "Agentic workflows  ·  LLM deviation tooling  ·  RL-based PI tuning",
    "wins"     : ["1st  —  TechStars Startup Weekend Sustainability 2024",
                  "1st  —  Impairathon 2024 by StartupTN  (360+ teams)",
                  "Finalist  —  Shaastra Programming Contest, IIT Madras 2025"],
}
```



## Featured Projects

### [`TD3-Based-PI-Gain-Tuning`](https://github.com/sanjeev1508/TD3-Based-PI-Gain-Tuning)
> Reinforcement Learning x Industrial Control Systems

Applied **Twin Delayed Deep Deterministic Policy Gradient (TD3)** to auto-tune PI controller gains on a 2nd-order hydraulic actuator without exposing plant parameters to the agent. Pure Python — no MATLAB required.

| Metric | Baseline PI | TD3 Adaptive | Change |
|:--|:--:|:--:|:--:|
| Overshoot % | 33.72 | 21.97 | **-35%** |
| ITAE | 940,819 | 597,404 | **-37%** |
| Settling Time (s) | 427.95 | 420.19 | **-2%** |

```
Architecture:
  Custom Gymnasium Env  ->  TD3 Agent (SB3)  ->  PI Correction Factors [alpha, beta]
  Plant: G(s) = B / (s^2 + Cs + D)          ->  Kp_final = Kp_fixed x alpha
  Agent inputs: [error e(t), disturbance A(t)]   (plant params never exposed)
```

---

### [`Model-Deviation-Summarizer`](https://github.com/sanjeev1508/Model-Deviation-Summarizer)
> LLM Alignment Tooling · Browser Extension + FastAPI Backend

Local-first Edge browser extension that detects semantic drift between a user's original intent and the model's output across conversation turns, then reconstructs optimized expert prompts to correct the deviation.

```
User Intent  ->  [Vector Alignment Engine]  ->  Drift Score
                         |
                  Deviation detected?
                         |
              [Prompt Reconstruction Module]  ->  Expert Corrective Prompt
```

---

### [`AI-Driven-ZeroDay-SOC-Monitoring-Tool`](https://github.com/sanjeev1508/AI-Driven-ZeroDay-SOC-Monitoring-Tool)
> Multi-Agent Architecture · AI x CyberSecurity

4-agent modular SOC system for end-to-end threat intelligence — from real-time log collection to semantic alert generation.

```
Agent 1  Log Collector   ->  Windows Event Logs -> normalized_logs.csv
Agent 2  Threat Intel    ->  Zero-day feed scraping -> Qdrant vector DB
Agent 3  Synthetic Gen   ->  Attack pattern synthesis from latest threat intel
Agent 4  Alert Manager   ->  Semantic search over Qdrant -> alerts.json
```

---

## Other Notable Projects

| Project | Domain | Description |
|:--|:--|:--|
| [`Yara-dsl`](https://github.com/sanjeev1508/Yara-dsl) | Security / DSL | Pure-Python DSL for building guaranteed-valid YARA rules with PE/ELF semantic validation and cross-reference checking |
| [`promptmasker`](https://github.com/sanjeev1508/promptmasker) | LLM Safety | PyPI-published utility for heuristic detection and redaction of sensitive data before it reaches LLMs or external services |
| [`agentic-rag-system`](https://github.com/sanjeev1508/agentic-rag-system) | RAG / Agents | Multi-agent reasoning system with agentic retrieval-augmented generation |
| [`Parkinson-Classification`](https://github.com/sanjeev1508/Parkinson-Classification-using-CNN-and-Streamlit) | Healthcare AI | CNN on MFCC audio features to classify dysarthric vs. healthy speech |

---

## Tech Stack

#### AI / LLM Systems
<p>
  <a href="https://python.langchain.com"><img src="https://img.shields.io/badge/LangChain-1C3C3C?style=flat-square&logo=langchain&logoColor=white" /></a>&nbsp;
  <a href="https://ollama.com"><img src="https://img.shields.io/badge/Ollama-000000?style=flat-square&logo=ollama&logoColor=white" /></a>&nbsp;
  <a href="https://huggingface.co"><img src="https://img.shields.io/badge/HuggingFace-FFD21E?style=flat-square&logo=huggingface&logoColor=black" /></a>&nbsp;
  <a href="https://qdrant.tech"><img src="https://img.shields.io/badge/Qdrant-FF4081?style=flat-square&logo=qdrant&logoColor=white" /></a>&nbsp;
  <a href="https://openai.com"><img src="https://img.shields.io/badge/OpenAI-412991?style=flat-square&logo=openai&logoColor=white" /></a>&nbsp;
  <a href="https://www.anthropic.com"><img src="https://img.shields.io/badge/Anthropic_Claude-CC785C?style=flat-square&logo=anthropic&logoColor=white" /></a>
</p>

#### Reinforcement Learning & Control
<p>
  <a href="https://stable-baselines3.readthedocs.io"><img src="https://img.shields.io/badge/Stable--Baselines3-222222?style=flat-square&logo=python&logoColor=white" /></a>&nbsp;
  <a href="https://gymnasium.farama.org"><img src="https://img.shields.io/badge/Gymnasium-0081A5?style=flat-square&logo=openai&logoColor=white" /></a>&nbsp;
  <a href="https://scipy.org"><img src="https://img.shields.io/badge/SciPy-8CAAE6?style=flat-square&logo=scipy&logoColor=white" /></a>&nbsp;
  <a href="https://numpy.org"><img src="https://img.shields.io/badge/NumPy-013243?style=flat-square&logo=numpy&logoColor=white" /></a>
</p>

#### Backend & Frameworks
<p>
  <a href="https://www.python.org"><img src="https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white" /></a>&nbsp;
  <a href="https://fastapi.tiangolo.com"><img src="https://img.shields.io/badge/FastAPI-009688?style=flat-square&logo=fastapi&logoColor=white" /></a>&nbsp;
  <a href="https://streamlit.io"><img src="https://img.shields.io/badge/Streamlit-FF4B4B?style=flat-square&logo=streamlit&logoColor=white" /></a>&nbsp;
  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"><img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black" /></a>
</p>

#### Data Infrastructure
<p>
  <a href="https://kafka.apache.org"><img src="https://img.shields.io/badge/Apache_Kafka-231F20?style=flat-square&logo=apachekafka&logoColor=white" /></a>&nbsp;
  <a href="https://debezium.io"><img src="https://img.shields.io/badge/Debezium-FF0000?style=flat-square&logo=redhat&logoColor=white" /></a>&nbsp;
  <a href="https://zookeeper.apache.org"><img src="https://img.shields.io/badge/ZooKeeper-E95420?style=flat-square&logo=apache&logoColor=white" /></a>&nbsp;
  <a href="https://www.postgresql.org"><img src="https://img.shields.io/badge/PostgreSQL-4169E1?style=flat-square&logo=postgresql&logoColor=white" /></a>&nbsp;
  <a href="https://www.mysql.com"><img src="https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=mysql&logoColor=white" /></a>&nbsp;
  <a href="https://firebase.google.com"><img src="https://img.shields.io/badge/Firebase-FFCA28?style=flat-square&logo=firebase&logoColor=black" /></a>
</p>

#### Cloud & DevOps
<p>
  <a href="https://aws.amazon.com"><img src="https://img.shields.io/badge/AWS-232F3E?style=flat-square&logo=amazonaws&logoColor=white" /></a>&nbsp;
  <a href="https://www.docker.com"><img src="https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white" /></a>&nbsp;
  <a href="https://git-scm.com"><img src="https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white" /></a>
</p>

---

## GitHub Stats

<div align="center">

<img src="https://github-readme-stats.vercel.app/api?username=sanjeev1508&show_icons=true&theme=tokyonight&hide_border=true&bg_color=0d1117&title_color=58a6ff&icon_color=58a6ff&text_color=c9d1d9" height="165" />
&nbsp;
<img src="https://github-readme-stats.vercel.app/api/top-langs/?username=sanjeev1508&layout=compact&theme=tokyonight&hide_border=true&bg_color=0d1117&title_color=58a6ff&text_color=c9d1d9" height="165" />

<br/><br/>

<img src="https://github-readme-streak-stats.herokuapp.com/?user=sanjeev1508&theme=tokyonight&hide_border=true&background=0d1117&ring=58a6ff&fire=58a6ff&currStreakLabel=58a6ff" />

</div>

---

<div align="center">
<sub>Open to research collaborations and full-time roles in AI × Security &nbsp;·&nbsp; <a href="mailto:sanjeevikumar15@gmail.com">sanjeevikumar15@gmail.com</a></sub>
</div>
