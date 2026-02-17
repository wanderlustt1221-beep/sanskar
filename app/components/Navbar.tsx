"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, GraduationCap, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    const menuItems = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Academics", href: "/academics" },
        { name: "Facilities", href: "/facilities" },
        { name: "Scholarship Exam", href: "/scholarship-exam" },
        { name: "Contact", href: "/contact" },
    ];

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 12);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [isOpen]);

    return (
        <>
            <motion.nav
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.55, ease: "easeOut" }}
                className={`sticky top-0 z-50 transition-all duration-300 ${scrolled
                        ? "bg-red-700/98 shadow-[0_4px_32px_rgba(220,38,38,0.28)] backdrop-blur-md"
                        : "bg-red-600"
                    } border-b-[3px] border-yellow-400`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16 lg:h-20">

                        <Link href="/" className="flex items-center gap-2.5 group shrink-0">
                            <motion.div
                                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.08 }}
                                transition={{ duration: 0.4 }}
                                className="w-9 h-9 lg:w-11 lg:h-11 rounded-xl bg-yellow-400 flex items-center justify-center shadow-lg shadow-yellow-500/30 group-hover:shadow-yellow-400/50 transition-shadow duration-300"
                            >
                                <GraduationCap className="text-red-700 w-5 h-5 lg:w-6 lg:h-6" strokeWidth={2.2} />
                            </motion.div>
                            <div className="flex flex-col leading-tight">
                                <span className="text-white font-bold text-sm lg:text-base tracking-wide font-[Poppins,sans-serif]">
                                    Sanskar Group of
                                </span>
                                <span className="text-yellow-300 font-extrabold text-base lg:text-lg tracking-wider font-[Poppins,sans-serif] -mt-0.5">
                                    Institution
                                </span>
                            </div>
                        </Link>

                        <div className="hidden md:flex items-center gap-1 lg:gap-1.5">
                            {menuItems.map((item, i) => {
                                const active = pathname === item.href;
                                return (
                                    <motion.div
                                        key={item.name}
                                        initial={{ opacity: 0, y: -12 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.08 * i + 0.2, duration: 0.35 }}
                                    >
                                        <Link
                                            href={item.href}
                                            className={`relative px-3 lg:px-4 py-2 rounded-lg text-sm lg:text-[0.9rem] font-medium font-[Poppins,sans-serif] transition-all duration-250 group ${active
                                                    ? "text-yellow-300"
                                                    : "text-white hover:text-yellow-300"
                                                }`}
                                        >
                                            <span className="relative z-10">{item.name}</span>
                                            <motion.span
                                                className="absolute inset-0 rounded-lg bg-white/10"
                                                initial={{ opacity: 0, scale: 0.88 }}
                                                whileHover={{ opacity: 1, scale: 1 }}
                                                transition={{ duration: 0.18 }}
                                            />
                                            {active && (
                                                <motion.span
                                                    layoutId="nav-active-pill"
                                                    className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-yellow-400"
                                                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                                                />
                                            )}
                                        </Link>
                                    </motion.div>
                                );
                            })}

                            <motion.div
                                initial={{ opacity: 0, scale: 0.85 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.55, duration: 0.35 }}
                                className="ml-2"
                            >
                                <Link href="/admission-open">
                                    <motion.span
                                        whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(250,204,21,0.55)" }}
                                        whileTap={{ scale: 0.97 }}
                                        className="inline-flex items-center gap-1.5 bg-yellow-400 text-red-700 font-bold text-sm lg:text-[0.9rem] px-5 lg:px-6 py-2.5 rounded-xl shadow-lg shadow-yellow-500/25 hover:bg-yellow-300 transition-colors duration-200 font-[Poppins,sans-serif] cursor-pointer"
                                    >
                                        Admission Open
                                        <ChevronDown className="w-3.5 h-3.5 rotate-[-90deg]" strokeWidth={2.5} />
                                    </motion.span>
                                </Link>
                            </motion.div>
                        </div>

                        <motion.button
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setIsOpen((v) => !v)}
                            className="md:hidden relative z-50 w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center text-white hover:bg-white/25 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
                            aria-label="Toggle menu"
                        >
                            <AnimatePresence mode="wait" initial={false}>
                                {isOpen ? (
                                    <motion.span
                                        key="close"
                                        initial={{ rotate: -90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: 90, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <X size={22} strokeWidth={2.5} />
                                    </motion.span>
                                ) : (
                                    <motion.span
                                        key="open"
                                        initial={{ rotate: 90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: -90, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <Menu size={22} strokeWidth={2.5} />
                                    </motion.span>
                                )}
                            </AnimatePresence>
                        </motion.button>
                    </div>
                </div>
            </motion.nav>

            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            key="backdrop"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.22 }}
                            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
                            onClick={() => setIsOpen(false)}
                        />

                        <motion.div
                            key="drawer"
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", stiffness: 320, damping: 34 }}
                            className="fixed top-0 right-0 z-50 h-full w-[78vw] max-w-xs bg-gradient-to-b from-red-700 to-red-800 shadow-2xl md:hidden flex flex-col"
                        >
                            <div className="flex items-center justify-between px-5 pt-5 pb-4 border-b border-white/10">
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 rounded-lg bg-yellow-400 flex items-center justify-center">
                                        <GraduationCap className="text-red-700 w-4 h-4" strokeWidth={2.3} />
                                    </div>
                                    <div className="leading-tight">
                                        <p className="text-white text-[11px] font-semibold font-[Poppins,sans-serif]">Sanskar Group of</p>
                                        <p className="text-yellow-300 text-sm font-extrabold font-[Poppins,sans-serif] -mt-0.5">Institution</p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                                >
                                    <X size={18} strokeWidth={2.5} />
                                </button>
                            </div>

                            <nav className="flex-1 overflow-y-auto px-4 py-5 flex flex-col gap-1">
                                {menuItems.map((item, i) => {
                                    const active = pathname === item.href;
                                    return (
                                        <motion.div
                                            key={item.name}
                                            initial={{ opacity: 0, x: 28 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.06 * i + 0.05, duration: 0.3, ease: "easeOut" }}
                                        >
                                            <Link
                                                href={item.href}
                                                onClick={() => setIsOpen(false)}
                                                className={`flex items-center gap-3 px-4 py-3.5 rounded-xl font-medium text-[0.95rem] font-[Poppins,sans-serif] transition-all duration-200 ${active
                                                        ? "bg-yellow-400/15 text-yellow-300 border border-yellow-400/30"
                                                        : "text-white/90 hover:bg-white/10 hover:text-white"
                                                    }`}
                                            >
                                                {active && (
                                                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 shrink-0" />
                                                )}
                                                {item.name}
                                            </Link>
                                        </motion.div>
                                    );
                                })}
                            </nav>

                            <div className="px-4 pb-8 pt-2">
                                <motion.div
                                    initial={{ opacity: 0, y: 16 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.42, duration: 0.32 }}
                                >
                                    <Link
                                        href="/admission-open"
                                        onClick={() => setIsOpen(false)}
                                        className="block w-full text-center bg-yellow-400 text-red-700 font-bold px-6 py-3.5 rounded-xl shadow-lg shadow-yellow-500/20 hover:bg-yellow-300 transition-colors duration-200 font-[Poppins,sans-serif] text-base"
                                    >
                                        Admission Open →
                                    </Link>
                                </motion.div>
                                <p className="mt-4 text-center text-white/40 text-[11px] font-[Poppins,sans-serif]">
                                    Danta, Sikar, Rajasthan
                                </p>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}