/**
 * Sanjeevikumar S — Portfolio Scripts
 */

document.addEventListener('DOMContentLoaded', () => {

    // ===== Scroll-triggered reveal animation =====
    const revealEls = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });

    revealEls.forEach(el => revealObserver.observe(el));

    // ===== Navbar: scroll shadow =====
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 10) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // ===== Hamburger menu =====
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links');
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('open');
    });

    // Close mobile menu on link click
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('open');
        });
    });

    // ===== Smooth active state for nav links =====
    const sections = document.querySelectorAll('section[id]');
    const navLinkEls = document.querySelectorAll('.nav-links a');

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinkEls.forEach(link => {
                    link.style.color = '';
                    if (link.getAttribute('href') === `#${id}`) {
                        link.style.color = '#a78bfa';
                    }
                });
            }
        });
    }, { threshold: 0.4 });

    sections.forEach(sec => sectionObserver.observe(sec));

    // ===== XAN CHAT COMPANION & SCORPION ROAMING =====
    const xanCompanion = document.getElementById('xan-companion');
    const scorpRotator = document.getElementById('scorp-rotator');
    const xanModal = document.getElementById('xan-chat-modal');
    const xanCloseBtn = document.getElementById('xan-close-btn');
    const xanInput = document.getElementById('xan-chat-input');
    const xanSendBtn = document.getElementById('xan-send-btn');
    const xanMessages = document.getElementById('xan-chat-messages');

    let chatHistory = [
        {
            role: "system",
            content: "You are Xan, an AI companion for Sanjeevikumar S's portfolio website. Answer questions based on his profile. He is a Final-year M.Sc. AI & ML student at Coimbatore Institute of Technology (CGPA 8.63). He works on LLM Alignment, Agentic AI, AI x CyberSecurity. Experience: AI and CyberSecurity Intern at SQ1 Security Pvt Ltd (Jun 2025 - Nov 2025). Projects: Edge Extension - Model Deviation Summarizer, TD3-Based PI Gain Tuning, AI-Driven ZeroDay SOC Monitoring Tool. Skills: Python, PyTorch, FastAPI, Qdrant, JavaScript, Docker, Git. Achievements: 1st Prize TechStars Startup Weekend 2024, 1st Place Impairathon 2024. Your goal is to represent him professionally. DO NOT leak personal details. DO NOT answer questions that make the user uncomfortable or are unrelated to his professional profile. Keep answers concise, friendly, and strictly professional. If asked something unrelated, politely steer the conversation back to his portfolio."
        }
    ];

    if (xanCompanion && xanModal) {
        // --- SCORPION ROAMING LOGIC ---
        if (scorpRotator) {
            let posX = window.innerWidth - 120;
            let posY = window.innerHeight - 150;
            let currentAngle = -45;
            let targetX = posX;
            let targetY = posY;
            let isWalking = false;

            // Optional fixed initialization
            xanCompanion.style.position = 'fixed';
            xanCompanion.style.top = '0';
            xanCompanion.style.left = '0';
            xanCompanion.style.bottom = 'auto';
            xanCompanion.style.right = 'auto';
            xanCompanion.style.transform = `translate(${posX}px, ${posY}px)`;
            scorpRotator.style.transform = `rotate(${currentAngle}deg)`;

            const updateScorpion = () => {
                const dx = targetX - posX;
                const dy = targetY - posY;
                const dist = Math.sqrt(dx*dx + dy*dy);

                if (dist > 5 && !xanModal.classList.contains('open')) {
                    if (!isWalking) {
                        xanCompanion.classList.add('is-walking');
                        isWalking = true;
                    }
                    
                    let targetAngle = Math.atan2(dy, dx) * (180 / Math.PI) + 90;
                    let angleDiff = targetAngle - currentAngle;
                    angleDiff = (angleDiff + 540) % 360 - 180;
                    
                    // Smooth, insect-like turning
                    currentAngle += angleDiff * 0.05;

                    scorpRotator.style.transform = `rotate(${currentAngle}deg)`;

                    // Organic scurry speed
                    const speed = 1.0;
                    posX += Math.cos((currentAngle - 90) * Math.PI / 180) * speed;
                    posY += Math.sin((currentAngle - 90) * Math.PI / 180) * speed;

                    xanCompanion.style.transform = `translate(${posX}px, ${posY}px)`;
                } else {
                    if (isWalking) {
                        xanCompanion.classList.remove('is-walking');
                        isWalking = false;
                        if (!xanModal.classList.contains('open')) {
                            // Wait between 3 and 8 seconds before crawling again
                            setTimeout(pickNewTarget, Math.random() * 5000 + 3000);
                        }
                    }
                }
                requestAnimationFrame(updateScorpion);
            };

            const pickNewTarget = () => {
                const margin = 80;
                targetX = margin + Math.random() * (window.innerWidth - margin*2);
                targetY = margin + Math.random() * (window.innerHeight - margin*2);
            };

            setTimeout(pickNewTarget, 2000);
            requestAnimationFrame(updateScorpion);
        }

        // --- CHAT MODAL LOGIC ---
        xanCompanion.addEventListener('click', () => {
            xanModal.classList.add('open');
            xanInput.focus();
        });

        xanCloseBtn.addEventListener('click', () => {
            xanModal.classList.remove('open');
        });

        const appendMessage = (text, sender) => {
            const msgDiv = document.createElement('div');
            msgDiv.classList.add('xan-message', sender === 'user' ? 'xan-user' : 'xan-ai');
            msgDiv.innerHTML = text; // basic html like strong allowed
            xanMessages.appendChild(msgDiv);
            xanMessages.scrollTop = xanMessages.scrollHeight;
            return msgDiv;
        };

        const showTypingIndicator = () => {
            const typingDiv = document.createElement('div');
            typingDiv.classList.add('xan-message', 'xan-ai', 'xan-typing-indicator');
            typingDiv.innerHTML = '<div class="xan-typing"><div class="xan-dot"></div><div class="xan-dot"></div><div class="xan-dot"></div></div>';
            xanMessages.appendChild(typingDiv);
            xanMessages.scrollTop = xanMessages.scrollHeight;
            return typingDiv;
        };

        const handleSend = async () => {
            const text = xanInput.value.trim();
            if (!text) return;

            // Add user message
            appendMessage(text, 'user');
            xanInput.value = '';
            xanInput.disabled = true;
            xanSendBtn.disabled = true;

            chatHistory.push({ role: "user", content: text });

            // Show typing indicator
            const typingIndicator = showTypingIndicator();

            try {
                // WARNING: Exposing the API key on the frontend is a security risk. 
                // This is implemented as requested for this static portfolio, but should ideally be routed through a backend.
                const API_KEY = "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";
                const response = await fetch("https://integrate.api.nvidia.com/v1/chat/completions", {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${API_KEY}`,
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify({
                        model: "meta/llama-3.1-8b-instruct",
                        messages: chatHistory,
                        max_tokens: 250,
                        temperature: 0.3
                    })
                });

                typingIndicator.remove();

                if (response.ok) {
                    const data = await response.json();
                    const reply = data.choices[0].message.content;
                    appendMessage(reply, 'ai');
                    chatHistory.push({ role: "assistant", content: reply });
                } else {
                    const errorText = await response.text();
                    console.error("Xan API Error:", errorText);
                    appendMessage("Oops, I encountered an API error! Please check the console.", 'ai');
                }
            } catch (err) {
                typingIndicator.remove();
                console.error("Xan Chat Fetch Error:", err);
                appendMessage(`Oops, a network error occurred: ${err.message}`, 'ai');
            } finally {
                xanInput.disabled = false;
                xanSendBtn.disabled = false;
                xanInput.focus();
            }
        };

        xanSendBtn.addEventListener('click', handleSend);
        xanInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') handleSend();
        });
    }

});
