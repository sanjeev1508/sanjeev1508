/**
 * Sanjeevikumar S — Portfolio Scripts
 */

document.addEventListener('DOMContentLoaded', () => {

    // ===== Custom Cursor =====
    const cursorDot = document.getElementById('cursor-dot');
    const cursorRing = document.getElementById('cursor-ring');

    if (cursorDot && cursorRing && window.matchMedia("(pointer: fine)").matches) {
        let mouseX = window.innerWidth / 2;
        let mouseY = window.innerHeight / 2;
        let ringX = mouseX;
        let ringY = mouseY;

        window.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            cursorDot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
        });

        const renderCursor = () => {
            ringX += (mouseX - ringX) * 0.15;
            ringY += (mouseY - ringY) * 0.15;
            cursorRing.style.transform = `translate(${ringX}px, ${ringY}px)`;
            requestAnimationFrame(renderCursor);
        };
        requestAnimationFrame(renderCursor);

        // Hover effects
        const interactiveEls = document.querySelectorAll('a, button, .proj-card');
        interactiveEls.forEach(el => {
            el.addEventListener('mouseenter', () => cursorRing.classList.add('hover'));
            el.addEventListener('mouseleave', () => cursorRing.classList.remove('hover'));
        });
    }

    // ===== Scroll-triggered reveal animation =====
    const revealEls = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });

    revealEls.forEach((el, index) => {
        if (!el.style.getPropertyValue('--i')) {
            el.style.setProperty('--i', (index % 5));
        }
        revealObserver.observe(el);
    });

    // ===== Navbar: scroll shadow + active tracker =====
    const navbar = document.getElementById('navbar');
    const navTracker = document.getElementById('nav-tracker');
    const navLinksList = document.querySelectorAll('#nav-links a:not(.nav-cta)');

    function updateTracker(activeLink) {
        if (!navTracker || !activeLink) return;
        const navInner = navbar.querySelector('.nav-inner');
        const navRect = navInner.getBoundingClientRect();
        const linkRect = activeLink.getBoundingClientRect();
        navTracker.style.left = (linkRect.left - navRect.left) + 'px';
        navTracker.style.width = linkRect.width + 'px';
    }

    function setActiveNavLink() {
        const scrollY = window.scrollY + 100;
        const sections = ['about', 'experience', 'projects', 'skills', 'education', 'contact'];
        let currentSection = '';

        sections.forEach(id => {
            const el = document.getElementById(id);
            if (el && el.offsetTop <= scrollY) {
                currentSection = id;
            }
        });

        navLinksList.forEach(a => {
            const href = a.getAttribute('href').replace('#', '');
            const isActive = href === currentSection;
            a.classList.toggle('active', isActive);
            if (isActive) updateTracker(a);
        });
    }

    window.addEventListener('scroll', () => {
        if (window.scrollY > 10) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        setActiveNavLink();
    });

    // Initial call after tiny delay so layout is ready
    setTimeout(setActiveNavLink, 200);


    // Xan chip click handler
    const xanChips = document.querySelectorAll('.xan-chip');
    const xanChipsContainer = document.getElementById('xan-chips');
    xanChips.forEach(chip => {
        chip.addEventListener('click', () => {
            const xanInput = document.getElementById('xan-chat-input');
            if (xanInput) {
                xanInput.value = chip.textContent;
                xanInput.focus();
                // Hide chips after first use
                if (xanChipsContainer) xanChipsContainer.classList.add('hidden');
                // Auto-trigger send
                const sendBtn = document.getElementById('xan-send-btn');
                if (sendBtn) sendBtn.click();
            }
        });
    });

    // ===== Typed Text Effect =====
    const typedTextSpan = document.getElementById('typed-text');
    if (typedTextSpan) {
        const textArray = ["AI/ML Engineer", "LLM Alignment Researcher", "AI × CyberSecurity Builder", "Agentic Systems Developer", "AI Nerd"];
        const typingDelay = 100;
        const erasingDelay = 50;
        const newTextDelay = 2000;
        let textArrayIndex = 0;
        let charIndex = 0;

        function type() {
            if (charIndex < textArray[textArrayIndex].length) {
                typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
                charIndex++;
                setTimeout(type, typingDelay);
            } else {
                setTimeout(erase, newTextDelay);
            }
        }

        function erase() {
            if (charIndex > 0) {
                typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
                charIndex--;
                setTimeout(erase, erasingDelay);
            } else {
                textArrayIndex++;
                if (textArrayIndex >= textArray.length) textArrayIndex = 0;
                setTimeout(type, typingDelay + 500);
            }
        }

        setTimeout(type, newTextDelay);
    }

    // ===== tsParticles Init =====
    if (typeof tsParticles !== 'undefined') {
        tsParticles.load("tsparticles", {
            fpsLimit: 60,
            interactivity: {
                events: {
                    onHover: { enable: true, mode: "repulse" },
                    resize: true,
                },
                modes: { repulse: { distance: 100, duration: 0.4 } },
            },
            particles: {
                color: { value: ["#00f5ff", "#7c3aed"] },
                links: { color: "#00f5ff", distance: 150, enable: true, opacity: 0.15, width: 1 },
                move: { enable: true, outModes: { default: "bounce" }, random: false, speed: 1, straight: false },
                number: { density: { enable: true, area: 800 }, value: window.innerWidth < 768 ? 30 : 80 },
                opacity: { value: 0.5 },
                shape: { type: "circle" },
                size: { value: { min: 1, max: 3 } },
            },
            detectRetina: true,
        });
    }

    // ===== Magnetic Buttons =====
    const magneticBtns = document.querySelectorAll('.btn');
    magneticBtns.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            btn.style.transform = `translate(${x / 5}px, ${y / 5}px)`;
        });
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = `translate(0px, 0px)`;
        });
    });

    // ===== Project Filters =====
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.proj-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filterValue = btn.getAttribute('data-filter');

            projectCards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                    card.style.display = 'flex';
                    // Re-trigger reveal animation
                    card.style.animation = 'none';
                    card.offsetHeight; /* trigger reflow */
                    card.style.animation = null;
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // ===== JSON Typewriter =====
    const jsonCode = `sanjeev = {
  "role": "AI/ML Engineer",
  "focus": [
    "Intelligent Systems",
    "Machine Learning",
    "Applied AI",
    "Scalable Solutions"
  ],
  "strengths": [
    "End-to-End Development",
    "Problem Solving",
    "Automation",
    "System Design"
  ],
  "currently": "Building impactful AI systems for real-world applications"
}`;

    const jsonTypewriter = document.getElementById('json-typewriter');
    if (jsonTypewriter) {
        let j = 0;
        let isTyping = false;

        function highlightJSON(str) {
            return str
                .replace(/sanjeev/g, '<span class="code-var">sanjeev</span>')
                .replace(/=/g, '<span class="code-op">=</span>')
                .replace(/"([^"]+)"\s*:/g, '<span class="code-key">"$1"</span>:')
                .replace(/:\s*"([^"]+)"/g, ': <span class="code-str">"$1"</span>')
                .replace(/:\s*\[/g, ': <span class="code-op">[</span>')
                .replace(/\]/g, '<span class="code-op">]</span>')
                .replace(/\{/g, '<span class="code-op">{</span>')
                .replace(/\}/g, '<span class="code-op">}</span>');
        }

        const typeJSON = () => {
            if (j < jsonCode.length) {
                jsonTypewriter.textContent += jsonCode.charAt(j);
                j++;
                setTimeout(typeJSON, 15);
            } else {
                jsonTypewriter.innerHTML = highlightJSON(jsonCode);
            }
        };

        const jsonObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !isTyping) {
                    isTyping = true;
                    setTimeout(typeJSON, 500);
                    jsonObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        const codeBlock = document.querySelector('.code-block');
        if (codeBlock) jsonObserver.observe(codeBlock);
    }

    // ===== CountUp.js =====
    if (typeof countUp !== 'undefined') {
        const statNums = document.querySelectorAll('.stat-num');
        const countUpObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const el = entry.target;
                    const endVal = parseFloat(el.getAttribute('data-count'));
                    const decimals = parseInt(el.getAttribute('data-decimals')) || 0;
                    const suffix = el.getAttribute('data-suffix') || '';

                    const countAnim = new countUp.CountUp(el, endVal, {
                        decimalPlaces: decimals,
                        duration: 2.5,
                        suffix: suffix,
                        useEasing: true
                    });
                    if (!countAnim.error) {
                        countAnim.start();
                    }
                    countUpObserver.unobserve(el);
                }
            });
        }, { threshold: 0.5 });

        statNums.forEach(num => countUpObserver.observe(num));
    }

    // ===== 3D Tilt Effect =====
    const tiltCards = document.querySelectorAll('.tilt-3d');
    tiltCards.forEach(card => {
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = ((y - centerY) / centerY) * -10;
            const rotateY = ((x - centerX) / centerX) * 10;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
        });
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

    // ===== Bento skill bars animate on scroll =====
    const bentoCards = document.querySelectorAll('.bento-card');
    const bentoObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.querySelectorAll('.bar-fill').forEach(bar => {
                    // Read --pct from the inline style string and apply as width
                    const match = bar.getAttribute('style').match(/--pct:\s*([^;]+)/);
                    if (match) bar.style.width = match[1].trim();
                });
                bentoObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    bentoCards.forEach(card => bentoObserver.observe(card));

    // ===== XAN CHAT COMPANION & SCORPION ROAMING =====
    const xanCompanion = document.getElementById('xan-companion');
    const scorpRotator = document.getElementById('scorp-rotator');
    const xanModal = document.getElementById('xan-chat-modal');
    const xanCloseBtn = document.getElementById('xan-close-btn');
    const xanInput = document.getElementById('xan-chat-input');
    const xanSendBtn = document.getElementById('xan-send-btn');
    const xanMessages = document.getElementById('xan-chat-messages');

    let chatHistory = [];

    if (xanCompanion && xanModal) {
        // --- SCORPION ROAMING LOGIC ---
        if (scorpRotator) {
            let posX = window.innerWidth - 80;
            let posY = window.innerHeight - 80;
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
                const dist = Math.sqrt(dx * dx + dy * dy);

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
                targetX = margin + Math.random() * (window.innerWidth - margin * 2);
                targetY = margin + Math.random() * (window.innerHeight - margin * 2);
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
                const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' || window.location.protocol === 'file:';
                const apiUrl = isLocal ? 'http://127.0.0.1:8000/api/chat' : '/api/chat';

                const response = await fetch(apiUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        messages: chatHistory
                    })
                });

                typingIndicator.remove();

                if (response.ok) {
                    const data = await response.json();
                    const reply = data.reply;
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
