"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useAnimation, useInView } from "framer-motion";
import {
    GraduationCap,
    Award,
    ArrowRight,
    BookOpenCheck,
    Star,
    Users,
    ChevronDown,
    Sparkles,
    Trophy,
} from "lucide-react";

const fadeUp = {
    hidden: { opacity: 0, y: 32 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.14, duration: 0.7, ease: "easeOut" },
    }),
};

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true });

    useEffect(() => {
        if (!inView) return;
        let start = 0;
        const step = Math.ceil(target / 60);
        const timer = setInterval(() => {
            start += step;
            if (start >= target) {
                setCount(target);
                clearInterval(timer);
            } else {
                setCount(start);
            }
        }, 22);
        return () => clearInterval(timer);
    }, [inView, target]);

    return (
        <span ref={ref} className="tabular-nums">
            {count}
            {suffix}
        </span>
    );
}

const stats = [
    { icon: Award, value: 25, suffix: "+", label: "Years of Excellence" },
    { icon: Users, value: 5000, suffix: "+", label: "Alumni Strong" },
    { icon: BookOpenCheck, value: 100, suffix: "%", label: "Board Results" },
    { icon: Trophy, value: 50, suffix: "+", label: "Awards Won" },
];

const Hero: React.FC = () => {
    return (
        <div className="font-[Poppins,sans-serif] overflow-hidden">

            <section className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-rose-700 via-rose-600 to-rose-700 px-4 sm:px-6 lg:px-8 overflow-hidden">

                <div aria-hidden className="pointer-events-none absolute inset-0">
                    <div className="absolute top-[-80px] left-[-80px] w-[420px] h-[420px] rounded-full bg-yellow-400/10 blur-[80px]" />
                    <div className="absolute bottom-[-60px] right-[-60px] w-[360px] h-[360px] rounded-full bg-red-900/40 blur-[80px]" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-red-500/10 blur-3xl" />
                    <div
                        className="absolute inset-0 opacity-[0.035]"
                        style={{
                            backgroundImage:
                                "radial-gradient(circle, white 1px, transparent 1px)",
                            backgroundSize: "36px 36px",
                        }}
                    />
                    <motion.div
                        animate={{ y: [0, -18, 0], rotate: [0, 5, 0] }}
                        transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
                        className="absolute top-16 right-[10%] w-16 h-16 rounded-2xl bg-yellow-400/15 border border-yellow-400/20 backdrop-blur-sm hidden lg:flex items-center justify-center"
                    >
                        <GraduationCap className="w-7 h-7 text-yellow-300/70" strokeWidth={1.6} />
                    </motion.div>
                    <motion.div
                        animate={{ y: [0, 14, 0], rotate: [0, -4, 0] }}
                        transition={{ repeat: Infinity, duration: 9, ease: "easeInOut", delay: 1 }}
                        className="absolute bottom-32 left-[8%] w-14 h-14 rounded-2xl bg-white/8 border border-white/10 backdrop-blur-sm hidden lg:flex items-center justify-center"
                    >
                        <Star className="w-6 h-6 text-yellow-300/60" strokeWidth={1.6} />
                    </motion.div>
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 2 }}
                        className="absolute top-1/3 left-[5%] w-10 h-10 rounded-full bg-yellow-400/10 border border-yellow-400/15 hidden xl:block"
                    />
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut", delay: 0.5 }}
                        className="absolute top-1/4 right-[6%] w-8 h-8 rounded-full bg-white/8 border border-white/10 hidden xl:block"
                    />
                </div>

                <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center pt-10 pb-6">

                    <motion.div
                        initial={{ opacity: 0, y: -16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white text-xs sm:text-sm font-semibold px-4 py-2 rounded-full mb-5 tracking-wider backdrop-blur-sm"
                    >
                        <GraduationCap className="w-4 h-4 text-yellow-300" strokeWidth={2} />
                        Sanskar Group of Institution — Danta, Sikar
                    </motion.div>

                    <motion.h1
                        custom={0}
                        initial="hidden"
                        animate="visible"
                        variants={fadeUp}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.08] tracking-tight mb-6"
                    >
                        Shaping{" "}
                        <span className="relative inline-block">
                            <span className="text-yellow-400 drop-shadow-lg">Bright Futures</span>
                            <motion.span
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ delay: 0.9, duration: 0.6, ease: "easeOut" }}
                                className="absolute -bottom-1 left-0 w-full h-1 bg-yellow-400/50 rounded-full origin-left"
                            />
                        </span>
                        <br className="hidden sm:block" />
                        <span className="text-white/90"> in Rajasthan</span>
                    </motion.h1>

                    <motion.p
                        custom={1}
                        initial="hidden"
                        animate="visible"
                        variants={fadeUp}
                        className="text-base sm:text-lg md:text-xl text-red-100/90 max-w-2xl mx-auto mb-8 leading-relaxed"
                    >
                        Empowering young minds from School to College with CBSE excellence,
                        strong values, and transformative learning — all under one roof at
                        Sanskar Group of Institution.
                    </motion.p>

                    <motion.div
                        custom={2}
                        initial="hidden"
                        animate="visible"
                        variants={fadeUp}
                        className="relative w-full max-w-xl mx-auto mb-10"
                    >
                        <div className="relative bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl p-px shadow-2xl shadow-yellow-500/30">
                            <div className="relative bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl px-6 py-5 overflow-hidden">
                                <div aria-hidden className="absolute top-0 right-0 w-40 h-full bg-yellow-300/20 blur-2xl" />
                                <div className="relative flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-center sm:text-left">
                                    <div className="w-12 h-12 rounded-xl bg-red-700/15 flex items-center justify-center shrink-0">
                                        <Sparkles className="w-6 h-6 text-red-700" strokeWidth={2} />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-red-800 text-[11px] font-bold tracking-widest uppercase mb-0.5">
                                            🏆 Scholarship Exam 2025
                                        </p>
                                        <p className="text-red-900 font-extrabold text-lg leading-tight">
                                            Win up to <span className="text-red-700">100% Fee Waiver</span>
                                        </p>
                                        <p className="text-red-800/80 text-xs mt-0.5 font-medium">
                                            Merit-based scholarships for School & College admissions
                                        </p>
                                    </div>
                                    <Link
                                        href="/scholarship-exam"
                                        className="shrink-0 inline-flex items-center gap-1.5 bg-red-700 hover:bg-red-800 text-white font-bold text-sm px-5 py-2.5 rounded-xl shadow-lg transition-colors duration-200 whitespace-nowrap"
                                    >
                                        Register <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        custom={3}
                        initial="hidden"
                        animate="visible"
                        variants={fadeUp}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
                    >
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                            <Link
                                href="/admission-open"
                                className="inline-flex items-center gap-2 bg-white text-red-700 font-bold px-8 py-4 rounded-xl shadow-xl hover:bg-gray-50 transition-colors duration-200 text-base"
                            >
                                Apply for Admission
                                <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
                            </Link>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 border-2 border-white/30 text-white font-bold px-8 py-4 rounded-xl hover:bg-white/10 transition-colors duration-200 text-base backdrop-blur-sm"
                            >
                                Contact Us
                            </Link>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        custom={4}
                        initial="hidden"
                        animate="visible"
                        variants={fadeUp}
                        className="w-full max-w-3xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4"
                    >
                        {stats.map(({ icon: Icon, value, suffix, label }, i) => (
                            <motion.div
                                key={label}
                                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                                className="bg-white/10 border border-white/15 backdrop-blur-sm rounded-2xl p-4 text-center group cursor-default"
                            >
                                <Icon className="w-5 h-5 text-yellow-300 mx-auto mb-2 group-hover:scale-110 transition-transform duration-200" strokeWidth={1.8} />
                                <p className="text-white font-extrabold text-xl sm:text-2xl leading-none">
                                    <AnimatedCounter target={value} suffix={suffix} />
                                </p>
                                <p className="text-white/60 text-[11px] font-medium mt-1.5 leading-tight">{label}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.4, duration: 0.6 }}
                    className="relative z-10 pb-8 mt-2"
                >
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    >
                        <ChevronDown className="w-6 h-6 text-white/40" strokeWidth={1.8} />
                    </motion.div>
                </motion.div>
            </section>

            <section className="bg-gradient-to-br from-yellow-400 to-yellow-500 py-10 sm:py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
                <div aria-hidden className="absolute inset-0 pointer-events-none">
                    <div className="absolute -top-10 right-0 w-80 h-40 bg-yellow-300/30 blur-3xl" />
                </div>
                <div className="relative max-w-5xl mx-auto">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
                        <div className="flex flex-col sm:flex-row items-center gap-4">
                            <div className="w-14 h-14 rounded-2xl bg-red-700/15 flex items-center justify-center shrink-0">
                                <Award className="w-7 h-7 text-red-800" strokeWidth={1.8} />
                            </div>
                            <div>
                                <p className="text-red-900 font-extrabold text-xl sm:text-2xl leading-tight">
                                    Scholarship Exam 2025–26
                                </p>
                                <p className="text-red-800/80 text-sm font-medium mt-0.5">
                                    Sanskar Group of Institution — School & College Merit Awards
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
                            <div className="text-center sm:text-right">
                                <p className="text-red-900 font-bold text-sm">Up to</p>
                                <p className="text-red-800 font-extrabold text-3xl leading-none">100%</p>
                                <p className="text-red-900 font-bold text-sm">Fee Waiver</p>
                            </div>
                            <div className="h-12 w-px bg-red-800/20 hidden sm:block" />
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                                <Link
                                    href="/scholarship-exam"
                                    className="inline-flex items-center gap-2 bg-red-700 hover:bg-red-800 text-white font-bold px-7 py-3.5 rounded-xl shadow-lg transition-colors duration-200 text-base"
                                >
                                    Register Now
                                    <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Hero;