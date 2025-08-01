import React, { useEffect, useState } from "react";

const navLinks = [
    { id: "about", title: "About" },
    { id: "projects", title: "Projects" },
    { id: "Contact", title: "Contact" },
];

const Navbar = () => {
    const [active, setActive] = useState("");
    const [toggle, setToggle] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 100);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`w-full fixed top-0 z-20 py-5 px-6 flex items-center transition-all duration-300 ${scrolled ? "bg-gray-900 shadow-lg" : "bg-transparent"
                }`}
        >
            <div className="w-full max-w-7xl mx-auto flex justify-between items-center">
                <a
                    href="#"
                    className="flex items-center gap-2"
                    onClick={() => {
                        setActive("");
                        window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                >
                   
                    <p className="text-white text-[18px] font-bold cursor-pointer">
                        | TusharChauhan
                    </p>
                </a>

                {/* Desktop Nav */}
                <ul className="list-none hidden sm:flex flex-row gap-10">
                    {navLinks.map((nav) => (
                        <li
                            key={nav.id}
                            className={`cursor-pointer text-[18px] font-medium ${active === nav.title ? "text-white" : "text-gray-400"
                                } hover:text-white`}
                            onClick={() => setActive(nav.title)}
                        >
                            <a href={`#${nav.id}`}>{nav.title}</a>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Icon */}
                <div className="sm:hidden flex items-center">
                    <img
                        src={
                            toggle
                                ? "https://img.icons8.com/ios-glyphs/30/ffffff/multiply.png"
                                : "https://img.icons8.com/ios-filled/50/ffffff/menu--v1.png"
                        }
                        alt="menu"
                        className="w-[28px] h-[28px] object-contain cursor-pointer"
                        onClick={() => setToggle(!toggle)}
                    />
                </div>

                {/* Mobile Nav */}
                {toggle && (
                    <div className="absolute top-20 right-6 sm:hidden p-6 bg-black rounded-xl shadow-lg min-w-[140px] z-10">
                        <ul className="flex flex-col gap-4">
                            {navLinks.map((nav) => (
                                <li
                                    key={nav.id}
                                    className={`text-[16px] font-medium cursor-pointer ${active === nav.title ? "text-white" : "text-gray-400"
                                        } hover:text-white`}
                                    onClick={() => {
                                        setActive(nav.title);
                                        setToggle(false);
                                    }}
                                >
                                    <a href={`#${nav.id}`}>{nav.title}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
