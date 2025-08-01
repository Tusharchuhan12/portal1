import React from "react";
import { motion } from "framer-motion";

// GitHub icon URL
const github = "https://cdn-icons-png.flaticon.com/512/733/733553.png";

// Animation variants
const textVariant = () => ({
    hidden: { opacity: 0, y: -50 },
    show: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", duration: 1.25, delay: 0.2 },
    },
});

const fadeIn = (direction = "", type = "tween", delay = 0, duration = 0.75) => {
    let x = 0, y = 0;
    if (direction === "left") x = 100;
    if (direction === "right") x = -100;
    if (direction === "up") y = 100;
    if (direction === "down") y = -100;

    return {
        hidden: { x, y, opacity: 0 },
        show: {
            x: 0, y: 0, opacity: 1,
            transition: { type, delay, duration, ease: "easeOut" },
        },
    };
};

const styles = {
    sectionSubText: "text-[#aaa6c3] text-[17px] uppercase tracking-wider",
    sectionHeadText: "text-white font-black text-[30px] sm:text-[40px]",
};

// Projects data
const projects = [
    {
        name: "Job Portal",
        description:
            "A full-stack MERN job portal with user authentication, job postings, and application management system. Implemented resume uploads and search filters.",
        tags: [
            { name: "react", color: "text-blue-500" },
            { name: "nodejs", color: "text-green-500" },
            { name: "mongodb", color: "text-pink-400" },
            { name: "jwt", color: "text-orange-400" },
        ],
        image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/b3ccbd166477613.64193343108e1.jpg",
        source_code_link: "https://github.com/Tusharchuhan12/JOB1212",
        live_demo_link: "#",
    },
    {
        name: "Doctor Appointment",
        description:
            "Online appointment platform with patient/doctor dashboards, slot booking, prescription, and notifications.",
        tags: [
            { name: "react", color: "text-blue-500" },
            { name: "express", color: "text-green-500" },
            { name: "scss", color: "text-pink-400" },
        ],
        image: "https://tse2.mm.bing.net/th/id/OIP.ACrqdrpz2Fh64c_7AYyTNQHaDZ?pid=Api&P=0&h=180",
        source_code_link: "https://github.com/Tusharchuhan12/DoctorAppoinment",
        live_demo_link: "#",
    },
    {
        name: "WebCraft (Team Project)",
        description:
            "Team-built job platform with real-time updates, admin dashboard, and application tracking system.",
        tags: [
            { name: "react", color: "text-blue-500" },
            { name: "redux", color: "text-purple-500" },
            { name: "tailwind", color: "text-cyan-400" },
        ],
        image: "https://tse1.mm.bing.net/th/id/OIP.OCZZS2tnlqp8IWLgEOc8yAHaEt?pid=Api&P=0&h=180",
        source_code_link: "https://github.com/Prashantpal123/WebCraft",
        live_demo_link: "#",
    },
];

// Card Component without Tilt
const ProjectCard = ({
    index,
    name,
    description,
    tags,
    image,
    source_code_link,
    live_demo_link,
}) => (
    <motion.div
        variants={fadeIn("up", "spring", index * 0.5, 0.75)}
        initial="hidden"
        animate="show"
        className='bg-[#1e1e2f] p-4 sm:p-5 rounded-2xl w-full max-w-full sm:max-w-[360px] shadow-lg hover:shadow-indigo-500/30 flex flex-col mx-auto'
    >
        <div className='relative w-full h-[180px] xs:h-[200px] sm:h-[230px]'>
            <img
                src={image}
                alt='project'
                className='w-full h-full object-cover rounded-2xl'
            />

            <div className='absolute inset-0 flex justify-between items-start p-2 sm:p-3'>
                <div
                    onClick={() => window.open(source_code_link, "_blank")}
                    className='bg-black bg-opacity-60 w-9 h-9 sm:w-10 sm:h-10 rounded-full flex justify-center items-center cursor-pointer'
                    title='GitHub'
                >
                    <img
                        src={github}
                        alt='source code'
                        className='w-1/2 h-1/2 object-contain'
                    />
                </div>

                {live_demo_link !== "#" && (
                    <button
                        onClick={() => window.open(live_demo_link, "_blank")}
                        className='text-xs px-2 sm:px-3 py-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-white font-medium shadow-md'
                    >
                        Live Demo
                    </button>
                )}
            </div>
        </div>

        <div className='mt-4 sm:mt-5 flex-1 flex flex-col'>
            <h3 className='text-white font-bold text-[20px] sm:text-[24px]'>{name}</h3>
            <p className='mt-2 text-gray-300 text-[13px] sm:text-[14px]'>{description}</p>
        </div>

        <div className='mt-3 sm:mt-4 flex flex-wrap gap-2'>
            {tags.map((tag) => (
                <p key={`${name}-${tag.name}`} className={`text-[13px] sm:text-[14px] ${tag.color}`}>
                    #{tag.name}
                </p>
            ))}
        </div>
    </motion.div>
);

// Main Projects Component
const Projects = () => {
    return (
        <section
        
            id="projects" className="px-2 xs:px-4 sm:px-6 py-8 sm:py-12 w-full max-w-7xl mx-auto">
            <motion.div variants={textVariant()} initial="hidden" animate="show">
                <p className={styles.sectionSubText}>My work</p>
                <h2 className={styles.sectionHeadText}>Projects.</h2>
            </motion.div>

            <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                initial="hidden"
                animate="show"
                className='mt-3 text-secondary text-[15px] sm:text-[17px] max-w-3xl leading-[26px] sm:leading-[30px]'
            >
                These projects showcase my full-stack development experience. Each one includes source code and optional live demos.
            </motion.p>

            <div className='mt-10 sm:mt-16 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 w-full'>
                {projects.map((project, index) => (
                    <ProjectCard key={`project-${index}`} index={index} {...project} />
                ))}
            </div>
        </section>
    );
};

export default Projects;
