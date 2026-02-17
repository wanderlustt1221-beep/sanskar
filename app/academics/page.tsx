'use client'

import React from 'react'
import { motion, Variants } from 'framer-motion'

import { BookOpen, Microscope, Users, GraduationCap, Trophy, FileCheck, Lightbulb, Target, Award } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

type Stream = {
    title: string
    description: string
    icon: React.ComponentType<{ className?: string; strokeWidth?: number }>
}


const streams: Stream[] = [
    {
        title: 'Science',
        description:
            'Our Science stream empowers students with deep conceptual understanding in Physics, Chemistry, Biology, and Mathematics, preparing them for competitive examinations and professional careers.',
        icon: Microscope,
    },
    {
        title: 'Commerce',
        description:
            'The Commerce stream builds strong foundations in Accountancy, Business Studies, and Economics, nurturing future entrepreneurs, financial experts, and business leaders.',
        icon: Trophy,
    },
    {
        title: 'Arts',
        description:
            'Our Arts stream encourages critical thinking and creativity through subjects like Political Science, History, Sociology, and Humanities, shaping socially responsible citizens.',
        icon: BookOpen,
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
        transition: { staggerChildren: 0.15, delayChildren: 0.2 }
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


export default function AcademicsPage() {
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
                        <GraduationCap className="w-5 h-5" />
                        Academic Excellence
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
                    >
                        Academics
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
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(220,38,38,0.03),transparent_60%)]" />

                <div className="max-w-5xl mx-auto relative z-10">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={scaleIn}
                        whileHover={{ y: -6 }}
                        className="bg-white p-12 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 relative overflow-hidden"
                    >
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-600 to-yellow-400" />
                        <div className="absolute -top-20 -right-20 w-40 h-40 bg-yellow-400/10 rounded-full blur-3xl" />

                        <div className="relative">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="bg-gradient-to-br from-red-500 to-red-600 p-4 rounded-2xl shadow-lg">
                                    <BookOpen className="w-8 h-8 text-white" strokeWidth={2} />
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold text-red-600">
                                    Primary Education
                                </h2>
                            </div>
                            <p className="text-sm font-semibold text-gray-500 mb-4">Classes I – V</p>
                            <p className="leading-relaxed text-gray-700 text-lg">
                                Our Primary section focuses on building strong foundational
                                skills in literacy, numeracy, and life skills. We provide a
                                nurturing and engaging environment where curiosity is
                                encouraged, and learning is joyful through activity-based
                                teaching methods.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_40%,rgba(250,204,21,0.04),transparent_60%)]" />

                <div className="max-w-5xl mx-auto relative z-10">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={scaleIn}
                        whileHover={{ y: -6 }}
                        className="bg-gradient-to-br from-yellow-50 to-red-50/30 p-12 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-yellow-200/50 relative overflow-hidden"
                    >
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-yellow-400 to-red-600" />
                        <div className="absolute -top-20 -right-20 w-40 h-40 bg-red-600/10 rounded-full blur-3xl" />

                        <div className="relative">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 p-4 rounded-2xl shadow-lg">
                                    <Users className="w-8 h-8 text-red-700" strokeWidth={2} />
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold text-red-600">
                                    Secondary Education
                                </h2>
                            </div>
                            <p className="text-sm font-semibold text-gray-500 mb-4">Classes VI – X</p>
                            <p className="leading-relaxed text-gray-700 text-lg">
                                The Secondary section emphasizes conceptual clarity and critical
                                thinking. Students are guided through structured academic
                                programs aligned with CBSE standards, preparing them for board
                                examinations and competitive challenges ahead.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="py-24 px-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(220,38,38,0.03),transparent_70%)]" />

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
                            className="inline-flex items-center px-4 py-1.5 rounded-full bg-red-50 border border-red-100 text-red-700 text-sm font-semibold mb-4"
                        >
                            Choose Your Path
                        </motion.span>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Senior Secondary <span className="text-red-600">(Classes XI – XII)</span>
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                            We offer diverse academic streams to help students pursue their passion and career aspirations.
                        </p>
                        <div className="w-24 h-1.5 bg-gradient-to-r from-red-600 via-yellow-400 to-red-600 mx-auto rounded-full mt-6" />
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                        className="grid md:grid-cols-3 gap-8"
                    >
                        {streams.map((stream, index) => {
                            const Icon = stream.icon
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
                                        {stream.title}
                                    </h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        {stream.description}
                                    </p>
                                </motion.div>
                            )
                        })}
                    </motion.div>
                </div>
            </section>

            <section className="py-24 px-6 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_60%,rgba(250,204,21,0.04),transparent_60%)]" />

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
                            Our Approach
                        </motion.span>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Teaching <span className="text-red-600">Methodology</span>
                        </h2>
                        <div className="w-24 h-1.5 bg-gradient-to-r from-red-600 via-yellow-400 to-red-600 mx-auto rounded-full" />
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                        className="grid md:grid-cols-3 gap-8"
                    >
                        {[
                            { icon: Lightbulb, title: 'Smart Classes', desc: 'Technology-integrated classrooms with digital boards and multimedia tools enhance engagement and understanding.' },
                            { icon: Target, title: 'Practical Learning', desc: 'Hands-on experiments, lab sessions, and project-based learning ensure deeper conceptual clarity and real-world application.' },
                            { icon: Award, title: 'Co-Curricular Balance', desc: 'Equal emphasis on sports, arts, and extracurricular activities promotes holistic growth and personality development.' }
                        ].map((method, index) => (
                            <motion.div
                                key={index}
                                variants={scaleIn}
                                whileHover={{ y: -8 }}
                                className="group bg-gradient-to-br from-yellow-50 to-red-50/30 p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-yellow-200/50 relative overflow-hidden"
                            >
                                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-yellow-400 to-red-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                                <div className="absolute -top-24 -right-24 w-48 h-48 bg-red-600/5 rounded-full blur-3xl group-hover:bg-yellow-400/10 transition-all duration-500" />

                                <motion.div
                                    whileHover={{ scale: 1.1, rotate: -5 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                    className="relative inline-flex mb-6"
                                >
                                    <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 p-5 rounded-2xl shadow-lg">
                                        <method.icon className="w-10 h-10 text-red-700" strokeWidth={2} />
                                    </div>
                                </motion.div>

                                <h3 className="text-2xl font-bold text-red-600 mb-4 group-hover:text-red-700 transition-colors duration-300">
                                    {method.title}
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    {method.desc}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            <section className="py-24 px-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,rgba(220,38,38,0.03),transparent_60%)]" />

                <div className="max-w-5xl mx-auto relative z-10">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={scaleIn}
                        className="bg-white p-12 md:p-16 rounded-3xl shadow-2xl border border-gray-100 relative overflow-hidden"
                    >
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-600 via-yellow-400 to-red-600" />
                        <div className="absolute -top-32 -right-32 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl" />

                        <div className="relative">
                            <div className="flex items-center justify-center mb-8">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ type: "spring", stiffness: 200 }}
                                    className="bg-gradient-to-br from-red-600 to-red-700 p-5 rounded-2xl shadow-xl"
                                >
                                    <FileCheck className="w-12 h-12 text-yellow-400" strokeWidth={2} />
                                </motion.div>
                            </div>

                            <h2 className="text-4xl font-bold text-red-600 mb-10 text-center">
                                Examination System
                            </h2>

                            <motion.ul
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={staggerContainer}
                                className="space-y-6"
                            >
                                {[
                                    { label: 'Continuous Assessment:', desc: 'Regular class tests, assignments, and project evaluations.' },
                                    { label: 'Term Examinations:', desc: 'Structured mid-term and final examinations as per CBSE norms.' },
                                    { label: 'Practical Evaluation:', desc: 'Laboratory assessments and internal grading for practical subjects.' },
                                    { label: 'Performance Review:', desc: 'Detailed progress reports shared with parents for transparency.' }
                                ].map((item, index) => (
                                    <motion.li
                                        key={index}
                                        variants={fadeInUp}
                                        className="flex items-start gap-4 text-gray-700 text-lg"
                                    >
                                        <div className="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-red-600 to-yellow-400 rounded-full mt-2.5" />
                                        <div>
                                            <span className="font-bold text-red-600">{item.label}</span> {item.desc}
                                        </div>
                                    </motion.li>
                                ))}
                            </motion.ul>
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
                            Ready to Shape Your Future?
                        </h2>
                        <p className="mb-10 text-xl opacity-95 leading-relaxed">
                            Discover how our academic excellence and holistic approach can empower your child's journey toward success.
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: "0 20px 60px rgba(250,204,21,0.4)" }}
                            whileTap={{ scale: 0.98 }}
                            className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-red-700 font-bold px-10 py-4 rounded-full shadow-2xl hover:shadow-yellow-400/50 transition-all duration-300"
                        >
                            Explore Admission Process →
                        </motion.button>
                    </motion.div>
                </div>
            </section>

            <div className="h-16"></div>
            <Footer />
        </div>
    )
}
