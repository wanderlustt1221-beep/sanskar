"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import {
    BookOpen,
    GraduationCap,
    FlaskConical,
    TrendingUp,
    Palette,
    Layers,
    ArrowRight,
    CheckCircle2,
} from "lucide-react";

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number = 0) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.1,
            duration: 0.6,
            ease: [0.25, 0.1, 0.25, 1], // cubic-bezier instead of string
        },
    }),
};


const academicsData = [
    {
        title: "Primary Section",
        subtitle: "Classes I – V",
        description:
            "Building strong foundational skills with interactive learning, activity-based curriculum, and holistic development for young learners at Sanskar.",
        icon: BookOpen,
        highlights: ["Activity-based learning", "Language & Numeracy focus", "Creative arts & crafts"],
        color: "bg-blue-50 border-blue-100",
        iconBg: "bg-blue-100",
        iconColor: "text-blue-600",
        badge: "Foundation",
        badgeColor: "bg-blue-100 text-blue-700",
    },
    {
        title: "Secondary Section",
        subtitle: "Classes VI – X",
        description:
            "Focused academic growth with CBSE-structured curriculum, skill-based learning approaches, and regular assessments to ensure steady progress.",
        icon: Layers,
        highlights: ["CBSE structured curriculum", "Lab-based practicals", "Olympiad preparation"],
        color: "bg-green-50 border-green-100",
        iconBg: "bg-green-100",
        iconColor: "text-green-600",
        badge: "Core CBSE",
        badgeColor: "bg-green-100 text-green-700",
    },
    {
        title: "Senior Secondary",
        subtitle: "Classes XI – XII",
        description:
            "Advanced subject expertise combined with exam-oriented preparation, board exam coaching, and personalised career guidance for every student.",
        icon: GraduationCap,
        highlights: ["Board exam prep", "Career counselling", "Mock test series"],
        color: "bg-purple-50 border-purple-100",
        iconBg: "bg-purple-100",
        iconColor: "text-purple-600",
        badge: "Advanced",
        badgeColor: "bg-purple-100 text-purple-700",
    },
    {
        title: "College Programs",
        subtitle: "UG & PG Courses",
        description:
            "Higher education programs under Sanskar College with industry-aligned curriculum, qualified faculty, and strong placement support.",
        icon: TrendingUp,
        highlights: ["Industry-aligned syllabus", "Experienced faculty", "Placement assistance"],
        color: "bg-orange-50 border-orange-100",
        iconBg: "bg-orange-100",
        iconColor: "text-orange-600",
        badge: "Higher Education",
        badgeColor: "bg-orange-100 text-orange-700",
    },
];

const streams = [
    {
        name: "Science Stream",
        icon: FlaskConical,
        subjects: ["Physics", "Chemistry", "Biology / Maths", "Computer Science"],
        color: "from-blue-600 to-blue-800",
        glow: "rgba(37,99,235,0.3)",
    },
    {
        name: "Commerce Stream",
        icon: TrendingUp,
        subjects: ["Accountancy", "Business Studies", "Economics", "Maths / Informatics"],
        color: "from-green-600 to-green-800",
        glow: "rgba(22,163,74,0.3)",
    },
    {
        name: "Arts & Humanities",
        icon: Palette,
        subjects: ["History", "Political Science", "Geography", "Sociology / Psychology"],
        color: "from-red-600 to-red-800",
        glow: "rgba(220,38,38,0.3)",
    },
];

const Academics: React.FC = () => {
    return (
        <div className="font-[Poppins,sans-serif] overflow-hidden">

            <section className="relative bg-gradient-to-br from-red-600 via-red-700 to-red-800 py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div aria-hidden className="pointer-events-none absolute inset-0">
                    <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-yellow-400/8 blur-3xl" />
                    <div className="absolute bottom-0 -left-20 w-80 h-80 rounded-full bg-white/5 blur-3xl" />
                    <div
                        aria-hidden
                        className="absolute inset-0 opacity-5"
                        style={{
                            backgroundImage:
                                "repeating-linear-gradient(90deg, white 0px, white 1px, transparent 1px, transparent 60px), repeating-linear-gradient(0deg, white 0px, white 1px, transparent 1px, transparent 60px)",
                        }}
                    />
                </div>

                <div className="relative z-10 max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.85 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.48 }}
                        className="inline-flex items-center gap-2 bg-yellow-400/15 border border-yellow-400/30 text-yellow-300 text-xs sm:text-sm font-semibold px-4 py-2 rounded-full mb-6 tracking-wider uppercase"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
                        Sanskar Group of Institution
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.14, duration: 0.65, ease: "easeOut" }}
                        className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight mb-6"
                    >
                        Academic <span className="text-yellow-400">Programs</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.28, duration: 0.6 }}
                        className="text-white/80 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto"
                    >
                        From Primary to Post-Graduate — Sanskar Group of Institution offers a comprehensive
                        academic journey crafted to unlock every student's true potential under one roof in
                        Danta, Sikar, Rajasthan.
                    </motion.p>
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
                        <p className="text-red-500 text-sm font-bold tracking-widest uppercase mb-3">What We Offer</p>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
                            Sections &{" "}
                            <span className="text-red-600">Programs</span>
                        </h2>
                        <div className="w-16 h-1 bg-yellow-400 mx-auto mt-5 rounded-full" />
                    </motion.div>

                    <div className="grid gap-6 sm:gap-7 sm:grid-cols-2 lg:grid-cols-4">
                        {academicsData.map((item, i) => {
                            const Icon = item.icon;
                            return (
                                <motion.div
                                    key={item.title}
                                    custom={i}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, margin: "-40px" }}
                                    variants={fadeUp}
                                    whileHover={{ y: -7, transition: { duration: 0.25 } }}
                                    className={`relative bg-white rounded-3xl p-7 shadow-sm hover:shadow-xl border ${item.color} transition-shadow duration-300 group overflow-hidden flex flex-col`}
                                >
                                    <div aria-hidden className="absolute -top-8 -right-8 w-28 h-28 rounded-full bg-gray-50 opacity-60 blur-xl group-hover:opacity-80 transition-opacity duration-300" />

                                    <div className="flex items-start justify-between mb-5">
                                        <div className={`w-12 h-12 rounded-2xl ${item.iconBg} flex items-center justify-center shadow-sm`}>
                                            <Icon className={`w-6 h-6 ${item.iconColor}`} strokeWidth={1.9} />
                                        </div>
                                        <span className={`text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full ${item.badgeColor}`}>
                                            {item.badge}
                                        </span>
                                    </div>

                                    <h3 className="text-[1.05rem] font-bold text-gray-900 mb-1 group-hover:text-red-600 transition-colors duration-250">
                                        {item.title}
                                    </h3>
                                    <p className="text-xs font-semibold text-gray-400 mb-4 tracking-wide">{item.subtitle}</p>

                                    <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">
                                        {item.description}
                                    </p>

                                    <ul className="space-y-2">
                                        {item.highlights.map((h) => (
                                            <li key={h} className="flex items-center gap-2 text-xs text-gray-500">
                                                <CheckCircle2 className="w-3.5 h-3.5 text-green-500 shrink-0" strokeWidth={2.2} />
                                                {h}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="bg-white py-20 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-14"
                    >
                        <p className="text-red-500 text-sm font-bold tracking-widest uppercase mb-3">Senior Secondary</p>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
                            Choose Your{" "}
                            <span className="text-red-600">Stream</span>
                        </h2>
                        <div className="w-16 h-1 bg-yellow-400 mx-auto mt-5 rounded-full" />
                        <p className="text-gray-500 text-sm sm:text-base mt-5 max-w-xl mx-auto">
                            Specialized CBSE streams tailored to every student's interests, strengths, and future career aspirations.
                        </p>
                    </motion.div>

                    <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
                        {streams.map((stream, i) => {
                            const Icon = stream.icon;
                            return (
                                <motion.div
                                    key={stream.name}
                                    custom={i}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, margin: "-40px" }}
                                    variants={fadeUp}
                                    whileHover={{ y: -8, transition: { duration: 0.25 } }}
                                    className={`relative rounded-3xl bg-gradient-to-br ${stream.color} p-8 text-white shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden group`}
                                    style={{ "--glow": stream.glow } as React.CSSProperties}
                                >
                                    <div aria-hidden className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/5 blur-2xl" />
                                    <div aria-hidden className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/20 to-transparent" />

                                    <div className="relative z-10">
                                        <div className="w-14 h-14 rounded-2xl bg-white/15 flex items-center justify-center mb-6 group-hover:bg-white/25 transition-colors duration-250">
                                            <Icon className="w-7 h-7 text-white" strokeWidth={1.8} />
                                        </div>

                                        <h3 className="text-xl font-extrabold mb-5">{stream.name}</h3>

                                        <ul className="space-y-3">
                                            {stream.subjects.map((subject) => (
                                                <li key={subject} className="flex items-center gap-2.5 text-sm text-white/90">
                                                    <ArrowRight className="w-3.5 h-3.5 text-yellow-300 shrink-0" strokeWidth={2.5} />
                                                    {subject}
                                                </li>
                                            ))}
                                        </ul>

                                        <div className="mt-7 pt-5 border-t border-white/15">
                                            <a
                                                href="/admission-open"
                                                className="inline-flex items-center gap-1.5 text-yellow-300 text-sm font-bold hover:text-white transition-colors duration-200"
                                            >
                                                Apply for this stream <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
                                            </a>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="relative bg-gradient-to-br from-[#0d1b2a] to-[#1a2d44] py-18 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div aria-hidden className="pointer-events-none absolute inset-0">
                    <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-red-600/10 blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-yellow-400/5 blur-3xl" />
                </div>

                <div className="relative z-10 max-w-3xl mx-auto text-center py-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.55 }}
                    >
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-5">
                            Ready to Begin Your{" "}
                            <span className="text-yellow-400">Academic Journey?</span>
                        </h2>
                        <p className="text-gray-400 text-base mb-9 leading-relaxed">
                            Admissions are open at Sanskar Group of Institution for 2025–26 session. Secure your seat today.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <motion.a
                                href="/admission-open"
                                whileHover={{ scale: 1.05, boxShadow: "0 0 28px rgba(250,204,21,0.4)" }}
                                whileTap={{ scale: 0.97 }}
                                className="inline-flex items-center gap-2 bg-yellow-400 text-red-700 font-bold px-8 py-3.5 rounded-xl shadow-lg hover:bg-yellow-300 transition-colors duration-200 text-sm sm:text-base"
                            >
                                Apply Now <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
                            </motion.a>
                            <motion.a
                                href="/scholarship-exam"
                                whileHover={{ scale: 1.04 }}
                                whileTap={{ scale: 0.97 }}
                                className="inline-flex items-center gap-2 border border-white/20 text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-white/10 transition-colors duration-200 text-sm sm:text-base"
                            >
                                Scholarship Exam Info
                            </motion.a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Academics;
