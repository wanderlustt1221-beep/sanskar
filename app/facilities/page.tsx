'use client'

import React from 'react'
import { motion, Variants } from 'framer-motion'
import { Library, Monitor, FlaskRound, Presentation, Trophy, Bus, Building2, Shield, Camera, AlertCircle, CalendarCheck } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

type Facility = {
    title: string
    description: string
    icon: any
}

const facilities: Facility[] = [
    {
        title: 'Library',
        description:
            'A well-stocked library with an extensive collection of academic books, reference materials, journals, and digital resources to cultivate a strong reading culture.',
        icon: Library,
    },
    {
        title: 'Computer Lab',
        description:
            'Modern computer labs equipped with high-speed internet and updated systems to enhance digital literacy and technical skills.',
        icon: Monitor,
    },
    {
        title: 'Science Lab',
        description:
            'Advanced Physics, Chemistry, and Biology laboratories designed for hands-on experimentation and practical learning.',
        icon: FlaskRound,
    },
    {
        title: 'Smart Classrooms',
        description:
            'Technology-enabled classrooms with digital boards and multimedia tools to create engaging and interactive lessons.',
        icon: Presentation,
    },
    {
        title: 'Sports Complex',
        description:
            'Spacious playgrounds and courts for cricket, football, basketball, and indoor games promoting physical fitness and teamwork.',
        icon: Trophy,
    },
    {
        title: 'Transport',
        description:
            'Safe and reliable GPS-enabled transport facilities covering major routes for the convenience of students.',
        icon: Bus,
    },
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


export default function FacilitiesPage() {
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
                        <Building2 className="w-5 h-5" />
                        Infrastructure
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
                    >
                        World-Class <span className="text-yellow-400">Facilities</span>
                    </motion.h1>

                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="w-32 h-1.5 bg-yellow-400 mx-auto rounded-full mb-6"
                    />

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.5 }}
                        className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto"
                    >
                        Sanskar Group of Institution, Danta, Sikar, Rajasthan
                    </motion.p>
                </div>
            </section>

            <section className="py-24 px-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(220,38,38,0.03),transparent_70%)]" />

                <div className="max-w-7xl mx-auto relative z-10">
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
                            className="inline-flex items-center px-4 py-1.5 rounded-full bg-red-50 border border-red-100 text-red-700 text-sm font-semibold mb-4"
                        >
                            Our Infrastructure
                        </motion.span>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Premium <span className="text-red-600">Facilities</span>
                        </h2>
                        <div className="w-24 h-1.5 bg-gradient-to-r from-red-600 via-yellow-400 to-red-600 mx-auto rounded-full" />
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {facilities.map((facility, index) => {
                            const Icon = facility.icon
                            return (
                                <motion.div
                                    key={index}
                                    variants={scaleIn}
                                    whileHover={{ y: -8 }}
                                    className="group bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 relative overflow-hidden"
                                >
                                    <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-red-600 to-yellow-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                                    <div className="absolute -top-24 -right-24 w-48 h-48 bg-yellow-400/5 rounded-full blur-3xl group-hover:bg-red-600/10 transition-all duration-500" />

                                    <motion.div
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                        className="relative inline-flex mb-6"
                                    >
                                        <div className="bg-gradient-to-br from-red-500 to-red-600 p-5 rounded-2xl shadow-lg">
                                            <Icon className="w-10 h-10 text-white" strokeWidth={2} />
                                        </div>
                                    </motion.div>

                                    <h3 className="text-2xl font-bold text-red-600 mb-4 group-hover:text-red-700 transition-colors duration-300">
                                        {facility.title}
                                    </h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        {facility.description}
                                    </p>
                                </motion.div>
                            )
                        })}
                    </motion.div>
                </div>
            </section>

            <section className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_40%,rgba(250,204,21,0.04),transparent_60%)]" />

                <div className="max-w-7xl mx-auto relative z-10">
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
                                className="inline-flex items-center px-4 py-1.5 rounded-full bg-yellow-50 border border-yellow-200 text-red-700 text-sm font-semibold mb-6"
                            >
                                <Building2 className="w-4 h-4 mr-2" />
                                Campus Excellence
                            </motion.span>

                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                                Infrastructure That Inspires <span className="text-red-600">Excellence</span>
                            </h2>

                            <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
                                <p>
                                    At Sanskar Group of Institution, we believe that a well-designed campus enhances both academic performance and personal growth. Our infrastructure is thoughtfully planned to create a safe, inspiring, and stimulating learning environment.
                                </p>
                                <p>
                                    From modern laboratories and digital classrooms to expansive sports facilities, every corner of our campus is designed to support holistic development.
                                </p>
                                <p>
                                    We continuously upgrade our facilities to align with evolving educational standards and technological advancements.
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
                                <Building2 className="w-24 h-24 text-red-600 mx-auto mb-4" strokeWidth={1.5} />
                                <p className="text-gray-600 text-lg font-medium">Campus Infrastructure</p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            <section className="py-24 px-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_60%,rgba(220,38,38,0.03),transparent_60%)]" />

                <div className="max-w-6xl mx-auto relative z-10">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={scaleIn}
                        className="bg-white p-12 md:p-16 rounded-3xl shadow-2xl relative overflow-hidden"
                    >
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-600 via-yellow-400 to-red-600" />
                        <div className="absolute -top-32 -right-32 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl" />
                        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-red-600/10 rounded-full blur-3xl" />

                        <div className="relative">
                            <div className="flex items-center justify-center mb-8">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ type: "spring", stiffness: 200 }}
                                    className="bg-gradient-to-br from-red-600 to-red-700 p-5 rounded-2xl shadow-xl"
                                >
                                    <Shield className="w-12 h-12 text-yellow-400" strokeWidth={2} />
                                </motion.div>
                            </div>

                            <h2 className="text-4xl md:text-5xl font-bold text-red-600 mb-10 text-center">
                                Safety & Security
                            </h2>

                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={staggerContainer}
                                className="space-y-6"
                            >
                                {[
                                    { icon: Camera, text: 'The safety of our students is our highest priority. Our campus is monitored through CCTV surveillance systems ensuring round-the-clock security.' },
                                    { icon: Shield, text: 'Trained security personnel are stationed at all entry and exit points, and visitor access is strictly regulated.' },
                                    { icon: AlertCircle, text: 'Regular safety drills and awareness programs are conducted to ensure preparedness in emergency situations.' },
                                    { icon: Bus, text: 'Our transport system is GPS-enabled and supervised to guarantee safe travel for every child.' }
                                ].map((item, index) => (
                                    <motion.div
                                        key={index}
                                        variants={fadeInUp}
                                        className="flex items-start gap-6 text-gray-700 text-lg group"
                                    >
                                        <div className="flex-shrink-0">
                                            <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 p-3 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                                                <item.icon className="w-6 h-6 text-red-700" strokeWidth={2} />
                                            </div>
                                        </div>
                                        <p className="leading-relaxed pt-2">{item.text}</p>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
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
                            Experience Our Campus First-Hand
                        </h2>
                        <p className="mb-10 text-xl opacity-95 leading-relaxed">
                            Discover our world-class infrastructure and vibrant learning environment by scheduling a campus visit today.
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: "0 20px 60px rgba(250,204,21,0.4)" }}
                            whileTap={{ scale: 0.98 }}
                            className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-red-700 font-bold px-10 py-4 rounded-full shadow-2xl hover:shadow-yellow-400/50 transition-all duration-300 inline-flex items-center gap-2"
                        >
                            <CalendarCheck className="w-5 h-5" />
                            Book a Campus Visit
                        </motion.button>
                    </motion.div>
                </div>
            </section>

            <div className="h-20"></div>
            <Footer />
        </div>
    )
}
