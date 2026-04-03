import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Skills.css';

const Skills = () => {
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    const skillCategories = [
        {
            title: 'Programming Languages',
            subtitle: 'Core coding proficiency',
            colorClass: 'category-programming',
            items: ['Python'],
        },
        {
            title: 'Databases',
            subtitle: 'Storage & querying',
            colorClass: 'category-database',
            items: ['Firebase', 'MySQL', 'PostgreSQL'],
        },
        {
            title: 'AI Technologies',
            subtitle: 'Intelligent systems & automation',
            colorClass: 'category-ai',
            items: [
                'ML & DL Models',
                'Computer Vision (CV)',
                'NLP',
                'RAG & Multi-modal RAG',
                'MCP',
                'Agentic AI',
                'A2A Protocol',
            ],
        },
        {
            title: 'Big Data & Analytics',
            subtitle: 'Streaming & insights',
            colorClass: 'category-data',
            items: ['Debezium', 'Kafka', 'ZooKeeper', 'Power BI'],
        },
        {
            title: 'Cloud & Version Control',
            subtitle: 'Deployment & collaboration',
            colorClass: 'category-cloud',
            items: ['Docker', 'AWS', 'Git'],
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
        },
    };

    return (
        <section id="skills" className="skills" ref={ref}>
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: -20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    Skills
                </motion.h2>
                <motion.div
                    className="skills-grid"
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                >
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            className={`skill-category ${category.colorClass}`}
                            variants={itemVariants}
                            whileHover={{ y: -5, scale: 1.02 }}
                        >
                            <div className="skill-category-header">
                                <h3>{category.title}</h3>
                                {category.subtitle && (
                                    <p className="skill-category-subtitle">
                                        {category.subtitle}
                                    </p>
                                )}
                            </div>
                            <ul className="skill-items">
                                {category.items.map((item) => (
                                    <motion.li
                                        key={item}
                                        className="skill-item"
                                        whileHover={{ scale: 1.03, x: 4 }}
                                        whileTap={{ scale: 0.97 }}
                                    >
                                        <span className="skill-bullet" />
                                        <span className="skill-text">{item}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;

