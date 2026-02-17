"use client";

import React from "react";
import { motion } from "framer-motion";
import { Target, Eye, UserCircle2, Award, Users, BookOpenCheck, Star } from "lucide-react";

const fadeUp = {
    hidden: { opacity: 0, y: 36 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.13, duration: 0.6, ease: "easeOut" },
    }),
};

const cards = [
    {
        title: "Our Mission",
        icon: Target,
        text: "To empower students with quality CBSE education, critical thinking skills, and strong moral values that prepare them for a successful future in an ever-changing world.",
        accent: "from-red-500 to-red-700",
        bg: "from-red-50 to-white",
    },
    {
        title: "Our Vision",
        icon: Eye,
        text: "To become a premier center of academic and holistic excellence in Rajasthan — where innovation, leadership, character, and lifelong learning thrive together.",
        accent: "from-yellow-400 to-yellow-500",
        bg: "from-yellow-50 to-white",
    },
    {
        title: "Principal's Message",
        icon: UserCircle2,
        text: "Every child at Sanskar carries unique potential. Our dedicated faculty works tirelessly to ensure each student feels inspired, confident, and fully equipped to achieve their greatest dreams.",
        accent: "from-red-500 to-yellow-500",
        bg: "from-orange-50 to-white",
    },
];

const stats = [
    { value: "25+", label: "Years of Excellence", icon: Award },
    { value: "5000+", label: "Alumni Across India", icon: Users },
    { value: "100%", label: "Board Results", icon: BookOpenCheck },
    { value: "50+", label: "Awards & Recognitions", icon: Star },
];

const About: React.FC = () => {
    return (
        <div className="font-[Poppins,sans-serif] overflow-hidden">

            <section className="relative bg-gradient-to-br from-red-600 via-red-700 to-red-800 py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div aria-hidden className="pointer-events-none absolute inset-0">
                    <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-yellow-400/10 blur-3xl" />
                    <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-white/5 blur-3xl" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-red-900/30 blur-3xl" />
                    <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 80" fill="none">
                        <path d="M0 80 L1440 80 L1440 30 Q720 80 0 30 Z" fill="white" fillOpacity="0.05" />
                    </svg>
                </div>

                <div className="relative z-10 max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.85, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="inline-flex items-center gap-2 bg-yellow-400/15 border border-yellow-400/30 text-yellow-300 text-xs sm:text-sm font-semibold px-4 py-2 rounded-full mb-6 tracking-wider uppercase"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
                        Sanskar Group of Institution
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15, duration: 0.65, ease: "easeOut" }}
                        className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight mb-6"
                    >
                        About <span className="text-yellow-400">Our Institution</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.28, duration: 0.6 }}
                        className="text-white/80 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto"
                    >
                        Rooted in the heritage of Danta, Sikar — Sanskar Group of Institution has been
                        nurturing young minds with knowledge, creativity, and unwavering values for over
                        two decades. A home for both School and College aspirants.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        className="mt-4 text-yellow-400/70 text-sm font-medium tracking-wide"
                    >
                        📍 Danta, Sikar, Rajasthan
                    </motion.div>
                </div>
            </section>

            <section className="relative bg-white py-14 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                        {stats.map(({ value, label, icon: Icon }, i) => (
                            <motion.div
                                key={label}
                                custom={i}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-40px" }}
                                variants={fadeUp}
                                className="flex flex-col items-center text-center group"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-red-50 flex items-center justify-center mb-4 group-hover:bg-red-600 transition-colors duration-300 shadow-sm">
                                    <Icon className="w-7 h-7 text-red-600 group-hover:text-white transition-colors duration-300" strokeWidth={1.8} />
                                </div>
                                <p className="text-3xl sm:text-4xl font-extrabold text-red-600 leading-none">{value}</p>
                                <p className="mt-2 text-gray-500 text-xs sm:text-sm font-medium leading-snug">{label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-gradient-to-b from-[#fdf8f0] to-white py-20 sm:py-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">

                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-14"
                    >
                        <p className="text-red-500 text-sm font-bold tracking-widest uppercase mb-3">Who We Are</p>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
                            Guided by Purpose,{" "}
                            <span className="text-red-600">Driven by Values</span>
                        </h2>
                        <div className="w-16 h-1 bg-yellow-400 mx-auto mt-5 rounded-full" />
                    </motion.div>

                    <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {cards.map((card, i) => {
                            const Icon = card.icon;
                            return (
                                <motion.div
                                    key={card.title}
                                    custom={i}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, margin: "-50px" }}
                                    variants={fadeUp}
                                    whileHover={{ y: -6, transition: { duration: 0.25 } }}
                                    className={`relative bg-gradient-to-br ${card.bg} rounded-3xl p-8 sm:p-10 shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 overflow-hidden group`}
                                >
                                    <div aria-hidden className="absolute -top-10 -right-10 w-36 h-36 rounded-full bg-gradient-to-br opacity-10 from-red-400 to-yellow-400 blur-2xl group-hover:opacity-20 transition-opacity duration-300" />

                                    <div className={`inline-flex w-12 h-12 rounded-2xl bg-gradient-to-br ${card.accent} items-center justify-center mb-6 shadow-md`}>
                                        <Icon className="w-6 h-6 text-white" strokeWidth={2} />
                                    </div>

                                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-red-600 transition-colors duration-250">
                                        {card.title}
                                    </h3>

                                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                                        {card.text}
                                    </p>

                                    <div className={`mt-8 h-0.5 rounded-full bg-gradient-to-r ${card.accent} w-10 group-hover:w-20 transition-all duration-500`} />
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="relative bg-gradient-to-br from-gray-900 via-red-950 to-gray-900 py-20 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div aria-hidden className="pointer-events-none absolute inset-0">
                    <div className="absolute top-0 left-0 w-72 h-72 rounded-full bg-red-600/10 blur-3xl" />
                    <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full bg-yellow-400/5 blur-3xl" />
                </div>

                <div className="relative z-10 max-w-3xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="text-yellow-400 text-sm font-bold tracking-widest uppercase mb-4">Our Promise</p>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6 leading-tight">
                            Building Tomorrow's Leaders,{" "}
                            <span className="text-yellow-400">Today</span>
                        </h2>
                        <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-10">
                            At Sanskar Group of Institution, every student receives individual attention,
                            world-class facilities, and the moral foundation to excel in academics and life.
                            Join the Sanskar family — where futures are shaped.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <motion.a
                                href="/admission-open"
                                whileHover={{ scale: 1.05, boxShadow: "0 0 28px rgba(250,204,21,0.4)" }}
                                whileTap={{ scale: 0.97 }}
                                className="inline-flex items-center gap-2 bg-yellow-400 text-red-700 font-bold px-8 py-3.5 rounded-xl shadow-lg hover:bg-yellow-300 transition-colors duration-200 text-sm sm:text-base"
                            >
                                Apply for Admission
                            </motion.a>
                            <motion.a
                                href="/contact"
                                whileHover={{ scale: 1.04 }}
                                whileTap={{ scale: 0.97 }}
                                className="inline-flex items-center gap-2 border border-white/20 text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-white/10 transition-colors duration-200 text-sm sm:text-base"
                            >
                                Contact Us
                            </motion.a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default About;