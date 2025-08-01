import React from "react";

const Hero = () => {
    return (
        <section className="relative w-full min-h-screen bg-black text-white flex flex-col justify-between overflow-hidden">
            {/* Background Gradient Layer */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-gray-900 to-black" />

        

                <div className="flex flex-col-reverse md:flex-row mt-5 items-center justify-between max-w-7xl mx-auto px-4 sm:px-8 pt-24 md:pt-36 gap-8 w-full h-full flex-1">
                    {/* Your content here */}
                

                {/* Left: Text & Timeline */}
                <div className="flex flex-row items-start w-full md:w-1/2 gap-4 md:gap-8">
                    {/* Timeline */}
                    <div className="hidden sm:flex flex-col justify-center items-center mt-2 md:mt-5">
                        <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-[#915EFF] shadow-lg" />
                        <div className="w-1 h-32 md:h-64 bg-gradient-to-b from-[#915EFF] to-transparent" />
                    </div>
                    {/* Text Section */}
                    <div className="flex flex-col justify-center">
                        <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
                            Hi, I'm <span className="text-blue-400 ">
                                Tushar Chauhan
                            </span>
                        </h1>
                        <p className="mt-4 text-base xs:text-lg sm:text-x text-gray-200 font-medium drop-shadow">
                            MERN Stack <br className="sm:block hidden" />
                            Developer I specialize in building full-stack web applications using MongoDB, Express.js, React, and Node.js.
                            With strong frontend and backend skills, I focus on creating seamless user experiences.
                            I’ve built and deployed multiple real-world projects, including job portals and chat apps.
                            Constantly learning and improving, I enjoy solving complex problems with clean code.
                        </p>
                    </div>
                </div>
                {/* Right: Hero Image */}
                <div className="flex justify-center items-center w-full md:w-1/2 mb-8 md:mb-0">
                    <img
                        className=" mt-11 w-48 xs:w-64 sm:w-80  md:w-[350px] : lg:w-[400px] h-auto max-h-[420px] object-cover rounded-2xl shadow-2xl border border-white/10 bg-white/10 sm:mt-4"
                        src="photo2.jpg"
                        alt="Tushar Chauhan"
                        onError={e => { e.target.onerror = null; e.target.src = 'https://via.placeholder.com/400x420?text=Photo'; }}
                        loading="lazy"
                    />
                </div>
            </div>

            {/* Scroll Down Indicator */}
            <div className=" mt-3 w-full flex justify-center items-center pb-8 md:pb-12">
                <a href="#about" aria-label="Scroll to About">
                    <div className="w-[35px] h-[64px] rounded-3xl border-4 border-[#915EFF] flex justify-center items-start p-2 bg-black/40 shadow-lg hover:scale-105 transition">
                        <div className="w-3 h-3 rounded-full bg-[#915EFF] mb-1 animate-bounce" />
                    </div>
                </a>
            </div>
        </section>
    );
};

export default Hero;
