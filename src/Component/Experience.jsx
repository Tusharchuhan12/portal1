// src/components/Experience.jsx

import React from "react";
import { motion } from "framer-motion";
import { textVariant, fadeIn } from "../Utils/Motion";

const experiences = [
    {
        title: "MERN Stack Developer (Learning & Projects)",
        company_name: "Self-Learning & Freelance Projects",
        iconBg: "#383E56",
        date: "2025 - Present",
        points: [
            "Built full-stack applications using MongoDB, Express.js, React, and Node.js (MERN).",
            "Developed a **Job Portal (WebCraft)** in a team, implementing user authentication, job listings, and applicant tracking.",
            "Worked with RESTful APIs, JWT authentication, and state management (Redux/Context API).",
            "Practiced responsive design using CSS frameworks like Tailwind and Bootstrap.",
        ],
    },
    {
        title: "React.js Intern/Trainee",
        company_name: "Online Courses & Bootcamps",
        iconBg: "#E6DEDD",
        date: "2024 - 2025",
        points: [
            "Learned React fundamentals, hooks, and component-based architecture.",
            "Created small projects like Todo Apps, Weather Apps, and E-commerce UIs.",
            "Collaborated in team projects via GitHub (Git version control).",
            "Studied backend basics (Node.js, Express) to understand full-stack flow.",
        ],
    },
];

const renderTextWithBold = (text) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**")) {
            return <strong key={i}>{part.slice(2, -2)}</strong>;
        }
        return <span key={i}>{part}</span>;
    });
};

const ExperienceCard = ({ experience }) => {
    return (
        <div className="relative pl-4 xs:pl-8 md:pl-20 pb-10 xs:pb-12 md:pb-16 before:absolute before:top-0 before:left-1 xs:before:left-2 md:before:left-7 before:w-0.5 xs:before:w-1 before:h-full before:bg-gradient-to-b before:from-indigo-400 before:to-pink-400 flex flex-col md:flex-row md:items-start group transition-all duration-300">
            {/* Timeline Dot */}
            <div
                className="absolute w-5 h-5 xs:w-7 xs:h-7 md:w-10 md:h-10 rounded-full left-[-8px] xs:left-[-6px] md:left-[-13px] top-1 xs:top-2 md:top-4 border-2 xs:border-4 border-white dark:border-gray-900 shadow-lg z-10 flex items-center justify-center transition-all duration-300 group-hover:scale-110 bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-400"
                style={{ background: `linear-gradient(135deg, ${experience.iconBg}, #a78bfa 80%)` }}
                aria-hidden="true"
                role="presentation"
            >
                <span className="block w-1.5 h-1.5 xs:w-2.5 xs:h-2.5 md:w-3.5 md:h-3.5 bg-white rounded-full" />
            </div>

            <motion.div
                variants={fadeIn("left", "spring", 0.2, window.innerWidth < 640 ? 1.1 : 0.6)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="relative bg-white/10 dark:bg-gray-900/70 p-4 xs:p-6 md:p-10 rounded-2xl shadow-2xl border border-white/20 dark:border-gray-700/40 backdrop-blur-md transition hover:scale-[1.025] hover:shadow-pink-200/30 w-full md:ml-8 text-white flex flex-col"
            >
                <h3 className="text-lg xs:text-xl md:text-2xl font-extrabold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow mb-1">{experience.title}</h3>
                <p className="text-white font-medium mb-1 text-sm xs:text-base">{experience.company_name}</p>
                <p className="text-xs md:text-sm text-indigo-200 font-semibold mb-2 tracking-wide">{experience.date}</p>

                <ul className="mt-3 xs:mt-4 list-disc pl-4 xs:pl-5 md:pl-8 space-y-2">
                    {experience.points.map((point, i) => (
                        <motion.li
                            key={i}
                            variants={fadeIn("left", "tween", i * 0.12, window.innerWidth < 640 ? 0.8 : 0.4)}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="text-white text-[13px] xs:text-base md:text-lg leading-relaxed"
                        >
                            {renderTextWithBold(point)}
                        </motion.li>
                    ))}
                </ul>
            </motion.div>
        </div>
    );
};

const Experience = () => {
    return (
        <section id="experience" className="relative px-2 sm:px-4 md:px-10 py-16 md:py-24 max-w-4xl mx-auto min-h-[80vh] bg-gradient-to-br from-black via-gray-900 to-gray-950 overflow-hidden rounded-3xl shadow-2xl text-white">
            {/* Decorative Gradient Blobs */}
            <div className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-tr from-indigo-500/30 via-purple-500/20 to-pink-500/30 rounded-full blur-3xl opacity-60 pointer-events-none z-0" />
            <div className="absolute -bottom-32 right-0 w-96 h-96 bg-gradient-to-br from-pink-500/20 via-indigo-500/20 to-purple-500/30 rounded-full blur-3xl opacity-50 pointer-events-none z-0" />

            <motion.div
                variants={textVariant(0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="relative text-center mb-16 z-10"
            >
                <p className="text-sm uppercase tracking-widest text-indigo-400 mb-2">
                    What I have done so far
                </p>
                <h2 className="text-4xl font-extrabold mt-2 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-lg">
                    Work Experience.
                </h2>
            </motion.div>

            <div className="relative mt-10 z-10 flex flex-col gap-10 md:gap-16">
                {experiences.map((experience, index) => (
                    <ExperienceCard key={`experience-${index}`} experience={experience} />
                ))}
            </div>
        </section>
    );
};

export default Experience;
