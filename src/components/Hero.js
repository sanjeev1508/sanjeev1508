import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaDownload } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
    // Image is in public folder, accessed via path
    const profileImage = '/my_picture.JPG';
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
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

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.8, type: 'spring' },
        },
    };

    return (
        <section id="home" className="hero">
            <motion.div
                className="container"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <div className="hero-content">
                    <motion.div className="hero-text" variants={itemVariants}>
                        <motion.h1 className="hero-title">
                            <motion.span
                                className="greeting"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5 }}
                            >
                                Hi, I'm
                            </motion.span>
                            <motion.span
                                className="name"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.7 }}
                            >
                                Sanjeevikumar S
                            </motion.span>
                        </motion.h1>
                        <motion.p
                            className="hero-subtitle"
                            variants={itemVariants}
                        >
                            AI & ML Engineer | Security Researcher | Python Developer
                        </motion.p>
                        <motion.p
                            className="hero-description"
                            variants={itemVariants}
                        >
                            Motivated individual with a solid foundation in AI and ML, looking for an
                            opportunity to apply my skills and contribute to meaningful projects.
                            Passionate about building intelligent systems and security solutions.
                        </motion.p>
                        <motion.div
                            className="hero-buttons"
                            variants={itemVariants}
                        >
                            <motion.a
                                href="#projects"
                                className="btn btn-primary"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                View My Work
                            </motion.a>
                            <motion.a
                                href="https://github.com/sanjeev1508"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-secondary"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Explore GitHub
                            </motion.a>
                            <motion.a
                                href="/SANJEEVIKUMAR_S_Resume.pdf"
                                download="SANJEEVIKUMAR_S_Resume.pdf"
                                className="btn btn-resume"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FaDownload /> Download Resume
                            </motion.a>
                        </motion.div>
                        <motion.div
                            className="social-links"
                            variants={itemVariants}
                        >
                            <motion.a
                                href="https://www.linkedin.com/in/sanjeevikumar-s-737951282"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link"
                                aria-label="LinkedIn"
                                whileHover={{ scale: 1.1, y: -3 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <FaLinkedin />
                            </motion.a>
                            <motion.a
                                href="https://github.com/sanjeev1508"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link"
                                aria-label="GitHub"
                                whileHover={{ scale: 1.1, y: -3 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <FaGithub />
                            </motion.a>
                        </motion.div>
                    </motion.div>
                    <motion.div
                        className="hero-image"
                        variants={imageVariants}
                    >
                        <div className="image-wrapper">
                            <img
                                src={profileImage}
                                alt="Sanjeevikumar S"
                                className="profile-image"
                            />
                            <div className="image-border"></div>
                            <motion.div
                                className="floating-shape shape-1"
                                animate={{
                                    y: [0, -20, 0],
                                    rotate: [0, 5, 0],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                }}
                            />
                            <motion.div
                                className="floating-shape shape-2"
                                animate={{
                                    y: [0, 15, 0],
                                    rotate: [0, -5, 0],
                                }}
                                transition={{
                                    duration: 5,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                }}
                            />
                        </div>
                    </motion.div>
                </div>
            </motion.div>
            <motion.div
                className="scroll-indicator"
                animate={{
                    y: [0, 10, 0],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            >
                <a href="#about">
                    <motion.i
                        className="fas fa-chevron-down"
                        animate={{ y: [0, 5, 0] }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                    />
                </a>
            </motion.div>
        </section>
    );
};

export default Hero;

