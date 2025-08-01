// src/components/About.jsx

import React from "react";
import { motion } from "framer-motion";
import { textVariant, fadeIn } from "../Utils/Motion";

const services = [
    { title: "Web Developer", icon: "🌐" },
    { title: "React Developer", icon: "⚛️" },
    { title: "Backend Developer", icon: "🖥️" },
    { title: "UI/UX Designer", icon: "🎨" },
];

const ServiceCard = ({ title, icon, index }) => (
    <motion.div
        variants={fadeIn("up", "spring", index * 0.2, 0.75)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="w-full sm:w-[250px] p-5 rounded-2xl shadow-xl bg-gradient-to-br from-gray-800/80 via-gray-700/60 to-gray-900/80 text-white hover:scale-105 hover:shadow-2xl transition-transform duration-300 backdrop-blur-md border border-gray-700/40"
    >
        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 mb-4 shadow-lg">
            <span className="text-3xl">{icon}</span>
        </div>
        <h3 className="text-xl font-bold text-white mb-1 tracking-wide drop-shadow-lg">
            {title}
        </h3>
    </motion.div>
);

const About = () => {
    return (
        <section
            id="about"
            className="relative px-6 py-20 min-h-[80vh] bg-gradient-to-br from-black via-gray-900 to-gray-950 text-white overflow-hidden"
        >
            {/* Decorative Gradient Blobs */}
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-gradient-to-tr from-indigo-500/30 via-purple-500/20 to-pink-500/30 rounded-full blur-3xl opacity-60 pointer-events-none z-0" />
            <div className="absolute -bottom-32 right-0 w-96 h-96 bg-gradient-to-br from-pink-500/20 via-indigo-500/20 to-purple-500/30 rounded-full blur-3xl opacity-50 pointer-events-none z-0" />

            <div className="relative max-w-6xl mx-auto z-10">
                <motion.div variants={textVariant(0.2)} initial="hidden" whileInView="show" viewport={{ once: true }}>
                    <p className="text-indigo-400 text-sm uppercase tracking-widest mb-2">Introduction</p>
                    <h2 className="text-4xl sm:text-5xl font-extrabold mt-2 mb-7 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-lg">
                        Overview.
                    </h2>
                </motion.div>

                <motion.p
                    variants={fadeIn("", "tween", 0.3, 0.8)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="text-gray-200 text-lg leading-8 max-w-3xl mb-10 bg-white/5 rounded-xl p-6 shadow-inner backdrop-blur-md border border-white/10"
                >
                    I'm a passionate <span className="font-bold text-indigo-300">MERN Stack Developer</span> with strong skills in
                    TypeScript, JavaScript, and frameworks like <span className="font-bold text-purple-300">React, Node.js, and Express.js</span>.
                    My expertise includes building full-stack applications with <span className="font-bold text-pink-300">MongoDB</span>,
                    RESTful APIs, and modern UI libraries like <span className="font-bold text-indigo-200">Three.js</span> for 3D visuals.
                </motion.p>

                <div className="mt-16 flex flex-wrap gap-8 justify-center sm:justify-start">
                    {services.map((service, index) => (
                        <ServiceCard key={index} {...service} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
