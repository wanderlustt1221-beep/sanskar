"use client";

import React from "react";
import { motion } from "framer-motion";

interface NewsItem {
    title: string;
    badge: string;
    description: string;
}

const newsData: NewsItem[] = [
    {
        title: "Admission Open 2026-27",
        badge: "New",
        description:
            "Admissions are now open for the academic session 2026-27. Apply early to secure your seat.",
    },
    {
        title: "Annual Function Announcement",
        badge: "Event",
        description:
            "Join us for our Annual Function celebration with cultural performances and awards.",
    },
    {
        title: "Examination Schedule",
        badge: "Notice",
        description:
            "The final examination schedule has been released. Please check the timetable carefully.",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut",
        },
    },
};

const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut",
        },
    },
};

const NewsSection: React.FC = () => {
    return (
        <section className="relative bg-gradient-to-br from-white via-yellow-50/30 to-red-50/20 py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(220,38,38,0.03),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(250,204,21,0.04),transparent_50%)]" />

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    className="text-center mb-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={headingVariants}
                >
                    <motion.div
                        className="inline-block mb-4"
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-red-50 border border-red-100 text-red-700 text-sm font-semibold">
                            Latest Updates
                        </span>
                    </motion.div>

                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-4">
                        News & <span className="text-red-600">Notices</span>
                    </h2>

                    <motion.div
                        className="w-24 h-1.5 bg-gradient-to-r from-red-600 via-yellow-400 to-red-600 mx-auto rounded-full"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    />
                </motion.div>

                <motion.div
                    className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                >
                    {newsData.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -8, transition: { duration: 0.3 } }}
                            className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
                        >
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 to-yellow-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                            <div className="absolute -top-20 -right-20 w-40 h-40 bg-yellow-400/10 rounded-full blur-3xl group-hover:bg-red-600/10 transition-colors duration-500" />

                            <motion.span
                                className="absolute top-6 right-6 bg-gradient-to-r from-yellow-400 to-yellow-500 text-red-700 text-xs font-bold px-4 py-1.5 rounded-full shadow-md"
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 400 }}
                            >
                                {item.badge}
                            </motion.span>

                            <div className="relative z-10">
                                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 pr-16 group-hover:text-red-600 transition-colors duration-300">
                                    {item.title}
                                </h3>

                                <p className="text-gray-600 text-base leading-relaxed">
                                    {item.description}
                                </p>

                                <motion.div
                                    className="mt-6 h-1 bg-gradient-to-r from-yellow-400 to-red-600 rounded-full"
                                    initial={{ width: 40 }}
                                    whileHover={{ width: 80 }}
                                    transition={{ duration: 0.3 }}
                                />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default NewsSection;