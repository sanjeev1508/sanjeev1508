import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    const experiences = [
        {
            title: 'AI and CyberSecurity Intern',
            company: 'SQ1 Security Private Limited',
            companyUrl: 'https://www.sq1.security/',
            location: 'India',
            period: 'Jun 2025 – Nov 2025',
            description: [
                'Built AI-based security systems for automated vulnerability detection and remediation using GenAI + RAG',
                'Designed scalable data pipelines with real-time updates and vector-based semantic search',
                'Developed RAG-powered policy intelligence APIs with authentication and version control',
                'Created OCR + NLP pipelines for extracting structured data from medical documents',
                'Integrated tools into a unified LLM-driven server architecture',
                'Researched automated security monitoring, including event correlation and malware analysis',
            ],
            technologies: ['GenAI', 'RAG', 'Vector Search', 'OCR', 'NLP', 'Security Monitoring'],
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -30 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.6 },
        },
    };

    return (
        <section id="experience" className="experience" ref={ref}>
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: -20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    Experience
                </motion.h2>
                <motion.div
                    className="experience-timeline"
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                >
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            className="experience-item"
                            variants={itemVariants}
                            whileHover={{ scale: 1.02, y: -5 }}
                        >
                            <div className="experience-icon">
                                <FaBriefcase />
                            </div>
                            <div className="experience-content">
                                <div className="experience-header">
                                    <h3>{exp.title}</h3>
                                    <h4>
                                        {exp.companyUrl ? (
                                            <a
                                                className="experience-company-link"
                                                href={exp.companyUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                {exp.company}
                                            </a>
                                        ) : (
                                            exp.company
                                        )}
                                    </h4>
                                </div>
                                <div className="experience-meta">
                                    <span className="experience-period">
                                        <FaCalendarAlt /> {exp.period}
                                    </span>
                                    <span className="experience-location">
                                        <FaMapMarkerAlt /> {exp.location}
                                    </span>
                                </div>
                                <ul className="experience-description">
                                    {exp.description.map((desc, descIndex) => (
                                        <li key={descIndex}>{desc}</li>
                                    ))}
                                </ul>
                                <div className="experience-tech">
                                    {exp.technologies.map((tech, techIndex) => (
                                        <span key={techIndex} className="tech-tag">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;

