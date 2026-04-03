import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaShieldAlt, FaLock, FaSmile, FaRobot, FaEnvelope, FaCode } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    const projects = [
        {
            title: 'AI-Driven ZeroDay SOC Monitoring Tool',
            description:
                'An AI-driven Security Operations Center (SOC) system designed with four modular agents for log monitoring, threat intelligence processing, and alert generation. The architecture supports scalable and efficient security monitoring.',
            tech: ['Python', 'AI/ML', 'Cybersecurity'],
            github: 'https://github.com/sanjeev1508/AI-Driven-ZeroDay-SOC-Monitoring-Tool',
            icon: FaShieldAlt,
        },
        {
            title: 'PromptMasker',
            description:
                'PromptMasker is a prompt-sanitization utility that heuristically detects and masks sensitive data in raw text before it is sent to LLMs, logs, or external services. Designed to sit before your LLM calls for enhanced security.',
            tech: ['Python', 'Security', 'LLM'],
            github: 'https://github.com/sanjeev1508/promptmasker',
            icon: FaLock,
        },
        {
            title: 'Customer Sentiment Analysis',
            description:
                'An AI-driven Amazon review analysis system that scrapes, processes, and classifies reviews using sentiment analysis, topic modeling, and emotion detection. Visualizes insights through comprehensive data analysis.',
            tech: ['Python', 'NLP', 'Jupyter'],
            github: 'https://github.com/sanjeev1508/Customer-Sentiment-Analysis',
            icon: FaSmile,
        },
        {
            title: 'Agentic RAG System',
            description:
                'An advanced Retrieval-Augmented Generation system with multi-agent reasoning capabilities. Combines intelligent information retrieval with generative AI for enhanced question-answering and knowledge synthesis.',
            tech: ['Python', 'RAG', 'AI Agents'],
            github: 'https://github.com/sanjeev1508/agentic-rag-system',
            icon: FaRobot,
        },
        {
            title: 'AI Personalized Mail Composer',
            description:
                'A Streamlit-based AI assistant that generates personalized and professional emails by learning from your Gmail sent mail style. Securely logs in with Gmail App Password and creates emails matching your writing style.',
            tech: ['Python', 'Streamlit', 'Gmail API'],
            github: 'https://github.com/sanjeev1508/AI-Personalized-Mail-Composer',
            icon: FaEnvelope,
        },
        {
            title: 'YARA DSL',
            description:
                'A pure-Python domain-specific language for building guaranteed-valid YARA rules with semantic validation, cross-reference checking, and domain knowledge about PE/ELF files. Simplifies malware detection rule creation.',
            tech: ['Python', 'DSL', 'Malware Detection'],
            github: 'https://github.com/sanjeev1508/Yara-dsl',
            icon: FaCode,
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 },
        },
    };

    return (
        <section id="projects" className="projects" ref={ref}>
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: -20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    Featured Projects
                </motion.h2>
                <motion.div
                    className="projects-grid"
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                >
                    {projects.map((project, index) => {
                        const IconComponent = project.icon;
                        return (
                            <motion.div
                                key={index}
                                className="project-card"
                                variants={itemVariants}
                                whileHover={{ y: -10, scale: 1.02 }}
                            >
                                <div className="project-image">
                                    <div className="project-placeholder">
                                        <IconComponent />
                                    </div>
                                </div>
                                <div className="project-content">
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>
                                    <div className="project-tech">
                                        {project.tech.map((tech, techIndex) => (
                                            <span key={techIndex}>{tech}</span>
                                        ))}
                                    </div>
                                    <div className="project-links">
                                        <motion.a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="project-link"
                                            whileHover={{ x: 5 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <FaGithub /> Code
                                        </motion.a>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;

