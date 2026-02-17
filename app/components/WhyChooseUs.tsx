"use client";

import { GraduationCap, MonitorSmartphone, Trophy, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const features = [
    {
        title: "Experienced Faculty",
        icon: GraduationCap,
    },
    {
        title: "Smart Classrooms",
        icon: MonitorSmartphone,
    },
    {
        title: "Excellent Results",
        icon: Trophy,
    },
    {
        title: "Sports & Discipline",
        icon: ShieldCheck,
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.3,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut",
        },
    },
};

const headingVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut",
        },
    },
};

export default function WhyChooseUs() {
    return (
        <section className="relative bg-gradient-to-br from-gray-50 via-white to-yellow-50/40 py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(220,38,38,0.04),transparent_60%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(250,204,21,0.05),transparent_60%)]" />

            <div className="max-w-7xl mx-auto text-center relative z-10">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={headingVariants}
                    className="mb-16"
                >
                    <motion.div
                        className="inline-block mb-4"
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-yellow-50 border border-yellow-200 text-red-700 text-sm font-semibold">
                            Our Strengths
                        </span>
                    </motion.div>

                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 tracking-tight">
                        Why Choose <span className="text-red-600">Sanskar</span>
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
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                >
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover={{
                                    y: -12,
                                    transition: { duration: 0.3, ease: "easeOut" }
                                }}
                                className="group relative bg-white rounded-3xl p-10 border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden"
                            >
                                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-red-600 to-yellow-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                                <div className="absolute -top-24 -right-24 w-48 h-48 bg-yellow-400/5 rounded-full blur-3xl group-hover:bg-red-600/10 transition-all duration-500" />

                                <motion.div
                                    className="flex justify-center mb-6"
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <div className="relative">
                                        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-red-500 rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
                                        <div className="relative bg-gradient-to-br from-yellow-100 to-yellow-200 p-5 rounded-2xl transition-all duration-500 group-hover:from-yellow-400 group-hover:to-yellow-500 group-hover:shadow-xl">
                                            <Icon className="w-10 h-10 text-red-600 transition-transform duration-300" strokeWidth={2} />
                                        </div>
                                    </div>
                                </motion.div>

                                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 group-hover:text-red-600 transition-colors duration-300">
                                    {feature.title}
                                </h3>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}