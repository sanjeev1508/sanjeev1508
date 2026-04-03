import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './About.css';

const About = () => {
    // Image is in public folder, accessed via path
    const profileImage = '/my_picture.JPG';
    const [ref, inView] = useInView({
        threshold: 0.2,
        triggerOnce: true,
    });

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
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 },
        },
    };

    const stats = [
        { number: '16+', label: 'GitHub Repositories' },
        { number: '6', label: 'Featured Projects' },
        { number: 'AI/ML', label: 'Specialization' },
    ];

    return (
        <section id="about" className="about" ref={ref}>
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: -20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    About Me
                </motion.h2>
                <motion.div
                    className="about-content"
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                >
                    <motion.div className="about-image" variants={itemVariants}>
                        <motion.img
                            src={profileImage}
                            alt="About Me"
                            className="about-img"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        />
                    </motion.div>
                    <motion.div className="about-text" variants={itemVariants}>
                        <p>
                            I'm a motivated individual with a solid foundation in Artificial Intelligence and
                            Machine Learning. My passion lies in developing intelligent systems that solve
                            real-world problems, particularly in the domains of cybersecurity, natural language
                            processing, and data analysis.
                        </p>
                        <p>
                            I specialize in building AI-driven solutions, from SOC monitoring tools to sentiment
                            analysis systems. My work focuses on creating robust, scalable applications using
                            Python and modern ML frameworks. I'm always eager to contribute to meaningful projects
                            and collaborate with teams that value innovation and impact.
                        </p>
                        <div className="about-stats">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    className="stat-item"
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.05, y: -5 }}
                                >
                                    <h3>{stat.number}</h3>
                                    <p>{stat.label}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;

