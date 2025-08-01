import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

const slideIn = (direction = "left", type = "tween", delay = 0, duration = 1) => {
    return {
        hidden: {
            x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
            opacity: 0,
        },
        show: {
            x: 0,
            opacity: 1,
            transition: {
                type,
                delay,
                duration,
                ease: "easeOut",
            },
        },
    };
};

const styles = {
    sectionSubText: "text-[#aaa6c3] text-[17px] uppercase tracking-wider",
    sectionHeadText: "text-white font-black text-[30px] sm:text-[40px]",
};

const Contact = () => {
    const [result, setResult] = useState("");
    const [loading, setLoading] = useState(false);
    const formRef = useRef();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setResult("Sending...");
        const formData = new FormData(event.target);
        formData.append("access_key", "63d0777c-ca08-4b4f-9125-e8edd0c5865c");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });

            const data = await response.json();
            if (data.success) {
                setResult("Form Submitted Successfully");
                event.target.reset();
            } else {
                setResult(data.message);
            }
        } catch (error) {
            setResult("Something went wrong!");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div id="Contact" className='mt-12 flex flex-col-reverse lg:flex-row gap-8 xl:gap-16 overflow-hidden items-stretch max-w-7xl mx-auto'>
            {/* Form Section */}
            <motion.div
                variants={slideIn("left", "tween", 0.2, 1)}
                initial='hidden'
                animate='show'
                className='flex-1 bg-[#1e1e2f] p-6 sm:p-10 rounded-2xl shadow-xl flex flex-col justify-center min-w-0'
            >
                <p className={styles.sectionSubText}>Get in touch</p>
                <h3 className={styles.sectionHeadText}>Contact.</h3>

                <form ref={formRef} onSubmit={handleSubmit} className='mt-8 flex flex-col gap-5 sm:gap-6'>
                    <label className='flex flex-col'>
                        <span className='text-white font-medium mb-2'>Your Name</span>
                        <input
                            type='text'
                            name='name'
                            placeholder='Enter your name'
                            required
                            className='bg-[#2c2c4a] py-3 px-5 placeholder:text-[#999] text-white rounded-lg outline-none border border-[#444]'
                        />
                    </label>
                    <label className='flex flex-col'>
                        <span className='text-white font-medium mb-2'>Phone Number</span>
                        <input
                            type='tel'
                            name='phone'
                            placeholder='Enter your mobile number'
                            required
                            className='bg-[#2c2c4a] py-3 px-5 placeholder:text-[#999] text-white rounded-lg outline-none border border-[#444]'
                        />
                    </label>
                    <label className='flex flex-col'>
                        <span className='text-white font-medium mb-2'>Your Message</span>
                        <textarea
                            rows={6}
                            name='message'
                            placeholder='Enter your message'
                            required
                            className='bg-[#2c2c4a] py-3 px-5 placeholder:text-[#999] text-white rounded-lg outline-none border border-[#444]'
                        />
                    </label>

                    <button
                        type='submit'
                        className='bg-gradient-to-r from-indigo-500 to-purple-600 py-3 px-8 rounded-lg text-white font-semibold transition-all duration-300 hover:scale-105 w-fit shadow-lg'
                    >
                        {loading ? "Sending..." : "Submit Now"}
                    </button>
                </form>
                <span className='text-green-400 mt-4 block min-h-[24px]'>{result}</span>
            </motion.div>

            {/* Image or Illustration */}
            <motion.div
                variants={slideIn("right", "tween", 0.2, 1)}
                initial='hidden'
                animate='show'
                className='flex-1 min-h-[220px] max-h-[400px] bg-gradient-to-br from-purple-700/80 to-indigo-800/80 rounded-2xl flex items-center justify-center p-4 sm:p-6 shadow-lg mt-8 lg:mt-0'
            >
                <img

                    src='contact1.jpg'
                    alt='Contact Illustration'
                    className='mt-25 bg-white w-[500px] max-h-[700px]  object-contain rounded-xl shadow-xl border border-white/1'
                    onError={e => { e.target.onerror = null; e.target.src = 'https://via.placeholder.com/400x220?text=Contact'; }}
                    loading="lazy"
                />
            </motion.div>
        </div>
    );
};

export default Contact;
