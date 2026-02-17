'use client'

import React, { useEffect, useState } from 'react'
import { motion, useMotionValue, useTransform, animate, Variants } from 'framer-motion'
import { Users, Award, BookOpen, Calendar, Target, Heart, Sparkles, TrendingUp } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

type Stat = {
    label: string
    value: number
    suffix: string
    icon: React.ComponentType<{ className?: string; strokeWidth?: number }>
}

const statsData: Stat[] = [
    { label: 'Students Enrolled', value: 2500, suffix: '+', icon: Users },
    { label: 'Qualified Faculty', value: 120, suffix: '+', icon: Award },
    { label: 'Board Results', value: 100, suffix: '%', icon: TrendingUp },
    { label: 'Years of Excellence', value: 25, suffix: '+', icon: Calendar },
]

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
    }
}

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.12, delayChildren: 0.2 }
    }
}

const scaleIn: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
    }
}

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
    const count = useMotionValue(0)
    const rounded = useTransform(count, (latest) => Math.round(latest))
    const [displayValue, setDisplayValue] = useState(0)

    useEffect(() => {
        const controls = animate(count, value, {
            duration: 2,
            ease: [0.4, 0, 0.2, 1],
        })

        const unsubscribe = rounded.on("change", (latest) => {
            setDisplayValue(latest)
        })

        return () => {
            controls.stop()
            unsubscribe()
        }
    }, [value, count, rounded])

    return (
        <span>
            {displayValue}{suffix}
        </span>
    )
}

export default function AboutPage() {
    return (
        <div className="bg-gradient-to-b from-white via-yellow-50/30 to-white text-gray-800 font-[Poppins]">
            <Navbar />

            <section className="relative bg-gradient-to-br from-red-600 via-red-500 to-red-700 text-white py-32 px-6 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(250,204,21,0.15),transparent_50%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.1),transparent_50%)]" />
                <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-400/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

                <div className="max-w-6xl mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 bg-yellow-400 text-red-700 font-bold px-6 py-2.5 rounded-full mb-8 shadow-2xl"
                    >
                        <Sparkles className="w-5 h-5" />
                        Our Story
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight"
                    >
                        About Sanskar Group of Institution
                    </motion.h1>

                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="w-32 h-1.5 bg-yellow-400 mx-auto rounded-full mb-8"
                    />

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.5 }}
                        className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed opacity-95"
                    >
                        Sanskar Group of Institution stands as a beacon of excellence, nurturing young minds with a perfect blend of traditional values and modern education. We are committed to academic brilliance, character building, leadership development, and holistic growth.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.6 }}
                        className="text-lg text-white/80 mt-4"
                    >
                        Danta, Sikar, Rajasthan
                    </motion.p>
                </div>
            </section>

            <section className="py-24 px-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(220,38,38,0.03),transparent_60%)]" />

                <div className="max-w-6xl mx-auto relative z-10">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                        className="grid md:grid-cols-2 gap-14 items-center"
                    >
                        <motion.div variants={fadeInUp}>
                            <motion.span
                                initial={{ scale: 0.8, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="inline-flex items-center px-4 py-1.5 rounded-full bg-red-50 border border-red-100 text-red-700 text-sm font-semibold mb-6"
                            >
                                Our Journey
                            </motion.span>

                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                                Our <span className="text-red-600">Story</span>
                            </h2>

                            <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
                                <p>
                                    Established in <span className="font-bold text-red-600">1999</span>, Sanskar Group of Institution was founded with the vision of delivering world-class education while preserving Indian cultural values. Our journey began with a modest campus and a handful of passionate educators dedicated to shaping young minds.
                                </p>

                                <p>
                                    Over the years, we have evolved into a premier <span className="font-semibold text-red-600">CBSE-affiliated institution</span> known for academic excellence, innovation, and discipline. Our campus now boasts smart classrooms, advanced science laboratories, computer labs, and expansive sports facilities.
                                </p>

                                <p>
                                    Today, Sanskar Group of Institution proudly educates thousands of students, empowering them to excel academically and grow into responsible, confident individuals ready to lead the future.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            variants={scaleIn}
                            whileHover={{ scale: 1.02 }}
                            className="relative w-full h-96 bg-gradient-to-br from-red-100 to-yellow-100 rounded-3xl shadow-2xl flex items-center justify-center overflow-hidden border border-gray-200"
                        >
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(220,38,38,0.1),transparent_70%)]" />
                            <div className="relative text-center p-8">
                                <BookOpen className="w-24 h-24 text-red-600 mx-auto mb-4" strokeWidth={1.5} />
                                <p className="text-gray-600 text-lg font-medium">School Campus Image</p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            <section className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_40%,rgba(250,204,21,0.04),transparent_60%)]" />

                <div className="max-w-6xl mx-auto relative z-10">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeInUp}
                        className="text-center mb-16"
                    >
                        <motion.span
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center px-4 py-1.5 rounded-full bg-yellow-50 border border-yellow-200 text-red-700 text-sm font-semibold mb-4"
                        >
                            <Target className="w-4 h-4 mr-2" />
                            Our Purpose
                        </motion.span>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Mission & <span className="text-red-600">Vision</span>
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                            Our guiding principles that define who we are and what we aspire to become.
                        </p>
                        <div className="w-24 h-1.5 bg-gradient-to-r from-red-600 via-yellow-400 to-red-600 mx-auto rounded-full mt-6" />
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                        className="grid md:grid-cols-2 gap-8"
                    >
                        <motion.div
                            variants={scaleIn}
                            whileHover={{ y: -6 }}
                            className="group bg-gradient-to-br from-yellow-50 to-red-50/30 p-12 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-yellow-200/50 relative overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-yellow-400 to-red-600" />
                            <div className="absolute -top-24 -right-24 w-48 h-48 bg-red-600/5 rounded-full blur-3xl group-hover:bg-yellow-400/10 transition-all duration-500" />

                            <motion.div
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                transition={{ type: "spring", stiffness: 300 }}
                                className="relative inline-flex mb-6"
                            >
                                <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 p-5 rounded-2xl shadow-lg">
                                    <Target className="w-10 h-10 text-red-700" strokeWidth={2} />
                                </div>
                            </motion.div>

                            <h3 className="text-3xl font-bold text-red-600 mb-6 group-hover:text-red-700 transition-colors duration-300">
                                Our Mission
                            </h3>
                            <p className="leading-relaxed text-gray-700 text-lg">
                                To nurture responsible global citizens by fostering academic excellence, moral values, and life skills. We aim to create an inclusive learning environment where every child discovers their potential and thrives with confidence.
                            </p>
                        </motion.div>

                        <motion.div
                            variants={scaleIn}
                            whileHover={{ y: -6 }}
                            className="group bg-gradient-to-br from-red-50 to-yellow-50/30 p-12 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-red-200/50 relative overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-600 to-yellow-400" />
                            <div className="absolute -top-24 -right-24 w-48 h-48 bg-yellow-400/5 rounded-full blur-3xl group-hover:bg-red-600/10 transition-all duration-500" />

                            <motion.div
                                whileHover={{ scale: 1.1, rotate: -5 }}
                                transition={{ type: "spring", stiffness: 300 }}
                                className="relative inline-flex mb-6"
                            >
                                <div className="bg-gradient-to-br from-red-500 to-red-600 p-5 rounded-2xl shadow-lg">
                                    <Sparkles className="w-10 h-10 text-yellow-400" strokeWidth={2} />
                                </div>
                            </motion.div>

                            <h3 className="text-3xl font-bold text-red-600 mb-6 group-hover:text-red-700 transition-colors duration-300">
                                Our Vision
                            </h3>
                            <p className="leading-relaxed text-gray-700 text-lg">
                                To be a leading institution recognized for innovation, character building, and holistic education. We envision shaping future leaders equipped with knowledge, compassion, and strong ethical foundations.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            <section className="py-24 px-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_60%,rgba(220,38,38,0.03),transparent_60%)]" />

                <div className="max-w-5xl mx-auto relative z-10">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={scaleIn}
                        className="bg-white rounded-3xl shadow-2xl p-12 md:p-20 text-center border border-gray-100 relative overflow-hidden"
                    >
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-600 via-yellow-400 to-red-600" />
                        <div className="absolute -top-32 -right-32 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl" />
                        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-red-600/10 rounded-full blur-3xl" />

                        <div className="relative">
                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                                className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-red-100 to-yellow-100 mb-8 flex items-center justify-center shadow-xl border-4 border-white"
                            >
                                <Heart className="w-16 h-16 text-red-600" strokeWidth={2} />
                            </motion.div>

                            <motion.span
                                initial={{ scale: 0.8, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="inline-flex items-center px-4 py-1.5 rounded-full bg-red-50 border border-red-100 text-red-700 text-sm font-semibold mb-4"
                            >
                                Message from Leadership
                            </motion.span>

                            <h3 className="text-3xl md:text-4xl font-bold text-red-600 mb-8">
                                Principal's Message
                            </h3>

                            <p className="leading-relaxed text-xl text-gray-700 italic">
                                "At Sanskar Group of Institution, education is not confined to textbooks and examinations. We believe in inspiring curiosity, creativity, and compassion in every student. Our aim is to empower learners with knowledge and values that guide them toward lifelong success. Together with our dedicated faculty and supportive parents, we strive to build a generation that leads with integrity, confidence, and responsibility."
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="py-24 px-6 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(250,204,21,0.04),transparent_70%)]" />

                <div className="max-w-6xl mx-auto relative z-10">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeInUp}
                        className="text-center mb-16"
                    >
                        <motion.span
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center px-4 py-1.5 rounded-full bg-yellow-50 border border-yellow-200 text-red-700 text-sm font-semibold mb-4"
                        >
                            <Award className="w-4 h-4 mr-2" />
                            Milestones
                        </motion.span>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Our <span className="text-red-600">Achievements</span>
                        </h2>
                        <p className="text-gray-600 text-lg">
                            Milestones that reflect our dedication to excellence and growth.
                        </p>
                        <div className="w-24 h-1.5 bg-gradient-to-r from-red-600 via-yellow-400 to-red-600 mx-auto rounded-full mt-6" />
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                        className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
                    >
                        {statsData.map((stat, index) => {
                            const Icon = stat.icon
                            return (
                                <motion.div
                                    key={index}
                                    variants={scaleIn}
                                    whileHover={{ y: -8, scale: 1.02 }}
                                    className="group bg-white p-8 md:p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 text-center border border-gray-100 relative overflow-hidden"
                                >
                                    <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-red-600 to-yellow-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                                    <div className="absolute -top-24 -right-24 w-48 h-48 bg-yellow-400/5 rounded-full blur-3xl group-hover:bg-red-600/10 transition-all duration-500" />

                                    <motion.div
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                        className="relative inline-flex mb-6"
                                    >
                                        <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 p-4 rounded-2xl shadow-lg">
                                            <Icon className="w-8 h-8 text-red-700" strokeWidth={2} />
                                        </div>
                                    </motion.div>

                                    <h3 className="text-4xl md:text-5xl font-bold text-red-600 mb-3">
                                        <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                                    </h3>
                                    <p className="text-gray-600 font-medium text-sm md:text-base">{stat.label}</p>
                                </motion.div>
                            )
                        })}
                    </motion.div>
                </div>
            </section>

            <section className="relative py-24 px-6 bg-gradient-to-br from-red-600 via-red-500 to-red-700 text-white overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(250,204,21,0.2),transparent_50%)]" />
                <div className="absolute top-20 left-20 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-20 w-72 h-72 bg-white/5 rounded-full blur-3xl" />

                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Join Our Prestigious Institution
                        </h2>
                        <p className="mb-10 text-xl opacity-95 leading-relaxed">
                            Begin your child's journey towards academic excellence, character building, and holistic development at Sanskar Group of Institution.
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: "0 20px 60px rgba(250,204,21,0.4)" }}
                            whileTap={{ scale: 0.98 }}
                            className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-red-700 font-bold px-10 py-4 rounded-full shadow-2xl hover:shadow-yellow-400/50 transition-all duration-300"
                        >
                            Apply for Admission →
                        </motion.button>
                    </motion.div>
                </div>
            </section>

            <div className="h-16"></div>
            <Footer />
        </div>
    )
}
