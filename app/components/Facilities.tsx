"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    BookOpen,
    Monitor,
    Bus,
    Trophy,
    FlaskConical,
    Utensils,
    Wifi,
    Shield,
    Music,
    Microscope,
    ArrowRight,
    CheckCircle2,
} from "lucide-react";

const fadeUp = {
    hidden: { opacity: 0, y: 36 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
    }),
};

const facilities = [
    {
        title: "Central Library",
        description:
            "A well-stocked library housing thousands of academic, reference, and competitive exam books to fuel curiosity and deep learning.",
        icon: BookOpen,
        features: ["5000+ volumes", "Reading rooms", "Digital catalog"],
        accent: "from-amber-400 to-orange-500",
        bg: "hover:border-orange-200",
        iconBg: "bg-amber-50",
        iconColor: "text-amber-600",
    },
    {
        title: "Computer Lab",
        description:
            "State-of-the-art computer labs with high-speed broadband internet, latest systems, and licensed software for practical learning.",
        icon: Monitor,
        features: ["60+ systems", "High-speed internet", "Licensed software"],
        accent: "from-blue-500 to-blue-700",
        bg: "hover:border-blue-200",
        iconBg: "bg-blue-50",
        iconColor: "text-blue-600",
    },
    {
        title: "Transport Facility",
        description:
            "Safe, GPS-tracked transport covering all major routes of Danta and Sikar districts ensuring student convenience and safety.",
        icon: Bus,
        features: ["GPS tracking", "Trained drivers", "Major route coverage"],
        accent: "from-green-500 to-emerald-600",
        bg: "hover:border-green-200",
        iconBg: "bg-green-50",
        iconColor: "text-green-600",
    },
    {
        title: "Sports Complex",
        description:
            "A spacious multi-sport campus promoting physical fitness, discipline, and teamwork through indoor and outdoor sporting arenas.",
        icon: Trophy,
        features: ["Cricket ground", "Basketball court", "Indoor games"],
        accent: "from-yellow-400 to-yellow-600",
        bg: "hover:border-yellow-200",
        iconBg: "bg-yellow-50",
        iconColor: "text-yellow-600",
    },
    {
        title: "Science Laboratories",
        description:
            "Fully-equipped Physics, Chemistry, and Biology labs enabling hands-on experimentation and deeper conceptual understanding.",
        icon: FlaskConical,
        features: ["Physics lab", "Chemistry lab", "Bio lab"],
        accent: "from-purple-500 to-purple-700",
        bg: "hover:border-purple-200",
        iconBg: "bg-purple-50",
        iconColor: "text-purple-600",
    },
    {
        title: "Smart Classrooms",
        description:
            "Interactive smart boards and digital projectors in every classroom for engaging, tech-enabled, and modern learning experiences.",
        icon: Wifi,
        features: ["Smart boards", "Digital projectors", "Interactive learning"],
        accent: "from-cyan-500 to-cyan-700",
        bg: "hover:border-cyan-200",
        iconBg: "bg-cyan-50",
        iconColor: "text-cyan-600",
    },
    {
        title: "Cafeteria",
        description:
            "Hygienic and nutritious meals served in a clean, spacious cafeteria — fueling students for a productive day of learning.",
        icon: Utensils,
        features: ["Hygienic kitchen", "Nutritious menu", "Spacious hall"],
        accent: "from-red-500 to-rose-600",
        bg: "hover:border-red-200",
        iconBg: "bg-red-50",
        iconColor: "text-red-600",
    },
    {
        title: "Security System",
        description:
            "24×7 CCTV surveillance, trained security personnel, and controlled entry-exit for a completely safe campus environment.",
        icon: Shield,
        features: ["24×7 CCTV", "Security personnel", "Safe campus"],
        accent: "from-slate-600 to-slate-800",
        bg: "hover:border-slate-200",
        iconBg: "bg-slate-50",
        iconColor: "text-slate-600",
    },
    {
        title: "Arts & Music Room",
        description:
            "A dedicated creative space nurturing artistic expression, musical talent, and cultural pride through various performing arts.",
        icon: Music,
        features: ["Music instruments", "Art studio", "Stage performances"],
        accent: "from-pink-500 to-rose-500",
        bg: "hover:border-pink-200",
        iconBg: "bg-pink-50",
        iconColor: "text-pink-600",
    },
];

const highlights = [
    { label: "Campus Area", value: "10+ Acres" },
    { label: "Lab Equipped", value: "6 Labs" },
    { label: "Transport Routes", value: "20+ Routes" },
    { label: "Smart Classes", value: "All Rooms" },
];

const Facilities: React.FC = () => {
    return (
        <div className="font-[Poppins,sans-serif] overflow-hidden">

            <section className="relative bg-gradient-to-br from-red-600 via-red-700 to-red-800 py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div aria-hidden className="pointer-events-none absolute inset-0">
                    <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-yellow-400/8 blur-3xl" />
                    <div className="absolute bottom-0 -left-16 w-80 h-80 rounded-full bg-white/5 blur-3xl" />
                    <div
                        className="absolute inset-0 opacity-[0.04]"
                        style={{
                            backgroundImage:
                                "radial-gradient(circle, white 1px, transparent 1px)",
                            backgroundSize: "32px 32px",
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
                        World-Class Infrastructure
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15, duration: 0.65, ease: "easeOut" }}
                        className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight mb-6"
                    >
                        Our Campus{" "}
                        <span className="text-yellow-400">Facilities</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.28, duration: 0.6 }}
                        className="text-white/80 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto"
                    >
                        Sanskar Group of Institution provides a world-class learning environment spanning
                        10+ acres in Danta, Sikar — equipped with modern infrastructure designed to inspire
                        academic excellence and all-round development.
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.45, duration: 0.6 }}
                    className="relative z-10 max-w-3xl mx-auto mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4"
                >
                    {highlights.map(({ label, value }) => (
                        <div
                            key={label}
                            className="bg-white/10 border border-white/15 backdrop-blur-sm rounded-2xl p-4 text-center"
                        >
                            <p className="text-yellow-400 text-2xl font-extrabold">{value}</p>
                            <p className="text-white/70 text-xs mt-1 font-medium">{label}</p>
                        </div>
                    ))}
                </motion.div>
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
                        <p className="text-red-500 text-sm font-bold tracking-widest uppercase mb-3">Campus Infrastructure</p>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
                            Everything a Student{" "}
                            <span className="text-red-600">Needs to Excel</span>
                        </h2>
                        <div className="w-16 h-1 bg-yellow-400 mx-auto mt-5 rounded-full" />
                    </motion.div>

                    <div className="grid gap-6 sm:gap-7 sm:grid-cols-2 lg:grid-cols-3">
                        {facilities.map((facility, i) => {
                            const Icon = facility.icon;
                            return (
                                <motion.div
                                    key={facility.title}
                                    custom={i}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, margin: "-40px" }}
                                    variants={fadeUp}
                                    whileHover={{ y: -7, transition: { duration: 0.25 } }}
                                    className={`relative bg-white rounded-3xl p-7 sm:p-8 shadow-sm hover:shadow-xl border border-gray-100 ${facility.bg} transition-all duration-300 overflow-hidden group flex flex-col`}
                                >
                                    <div aria-hidden className="absolute -bottom-10 -right-10 w-36 h-36 rounded-full opacity-20 blur-2xl bg-gradient-to-br from-gray-200 to-gray-100 group-hover:opacity-40 transition-opacity duration-300" />

                                    <div className="flex items-center gap-4 mb-5">
                                        <div className={`w-13 h-13 w-[52px] h-[52px] rounded-2xl ${facility.iconBg} flex items-center justify-center shadow-sm shrink-0`}>
                                            <Icon className={`w-6 h-6 ${facility.iconColor}`} strokeWidth={1.9} />
                                        </div>
                                        <h3 className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-red-600 transition-colors duration-250 leading-snug">
                                            {facility.title}
                                        </h3>
                                    </div>

                                    <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1">
                                        {facility.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        {facility.features.map((f) => (
                                            <span
                                                key={f}
                                                className="inline-flex items-center gap-1 text-[11px] font-semibold text-gray-600 bg-gray-50 border border-gray-100 px-2.5 py-1 rounded-full"
                                            >
                                                <CheckCircle2 className="w-3 h-3 text-green-500" strokeWidth={2.5} />
                                                {f}
                                            </span>
                                        ))}
                                    </div>

                                    <div className={`mt-6 h-0.5 rounded-full bg-gradient-to-r ${facility.accent} w-8 group-hover:w-16 transition-all duration-500`} />
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="relative bg-gradient-to-br from-[#0d1b2a] to-[#1a2d44] py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div aria-hidden className="pointer-events-none absolute inset-0">
                    <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-red-600/10 blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-yellow-400/5 blur-3xl" />
                </div>

                <div className="relative z-10 max-w-3xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.55 }}
                    >
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-5">
                            Experience the{" "}
                            <span className="text-yellow-400">Sanskar Campus</span>
                        </h2>
                        <p className="text-gray-400 text-base mb-9 leading-relaxed">
                            Visit us at Danta, Sikar, Rajasthan — or schedule a campus tour to see our
                            world-class facilities firsthand before your admission decision.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <motion.a
                                href="/contact"
                                whileHover={{ scale: 1.05, boxShadow: "0 0 28px rgba(250,204,21,0.4)" }}
                                whileTap={{ scale: 0.97 }}
                                className="inline-flex items-center gap-2 bg-yellow-400 text-red-700 font-bold px-8 py-3.5 rounded-xl shadow-lg hover:bg-yellow-300 transition-colors duration-200 text-sm sm:text-base"
                            >
                                Schedule a Visit <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
                            </motion.a>
                            <motion.a
                                href="/admission-open"
                                whileHover={{ scale: 1.04 }}
                                whileTap={{ scale: 0.97 }}
                                className="inline-flex items-center gap-2 border border-white/20 text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-white/10 transition-colors duration-200 text-sm sm:text-base"
                            >
                                Apply for Admission
                            </motion.a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Facilities;