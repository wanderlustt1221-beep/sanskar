'use client'

import React, { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, Building2, Users, Trophy, FileText, UserCheck, MessageSquare, CheckCircle, Phone, User, School, Mail } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
}

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.12, delayChildren: 0.2 }
    }
}

const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, ease: "easeOut" }
    }
}

export default function AdmissionOpenPage() {
    const [studentName, setStudentName] = useState('')
    const [studentClass, setStudentClass] = useState('')
    const [parentName, setParentName] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [focusedField, setFocusedField] = useState<string | null>(null)

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsSubmitting(true)

        const formattedMessage = `
Admissions Open 2026-27 Enquiry - Sanskar Group of Institution

Student Name: ${studentName}
Class Applying For: ${studentClass}
Parent Name: ${parentName}
Phone: ${phone}

Message:
${message}
    `

        const encodedMessage = encodeURIComponent(formattedMessage.trim())
        const whatsappURL = `https://wa.me/917878583600?text=${encodedMessage}`

        await new Promise(resolve => setTimeout(resolve, 800))
        window.open(whatsappURL, '_blank')
        setIsSubmitting(false)
    }

    return (
        <div className="bg-gradient-to-b from-white via-yellow-50/30 to-white text-gray-800 font-[Poppins]">
            <Navbar />

            <section className="relative bg-gradient-to-br from-red-600 via-red-500 to-red-700 text-white py-32 px-6 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(250,204,21,0.15),transparent_50%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.1),transparent_50%)]" />
                <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-400/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

                <div className="max-w-6xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center"
                    >
                        <motion.span
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="inline-flex items-center gap-2 bg-yellow-400 text-red-700 font-bold px-6 py-2.5 rounded-full mb-8 shadow-2xl"
                        >
                            <CheckCircle className="w-4 h-4" />
                            Admissions Now Open
                        </motion.span>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.3 }}
                            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
                        >
                            Admissions Open <br />
                            <span className="text-yellow-400">2026-27</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.7, delay: 0.5 }}
                            className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto"
                        >
                            Sanskar Group of Institution, Danta, Sikar, Rajasthan
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            <section className="py-24 px-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(220,38,38,0.03),transparent_60%)]" />

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
                            Our Strengths
                        </motion.span>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Why Choose <span className="text-red-600">Sanskar</span>
                        </h2>
                        <div className="w-24 h-1.5 bg-gradient-to-r from-red-600 via-yellow-400 to-red-600 mx-auto rounded-full" />
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                        className="grid md:grid-cols-4 gap-8"
                    >
                        {[
                            { icon: GraduationCap, title: 'Academic Excellence', color: 'from-red-500 to-red-600' },
                            { icon: Building2, title: 'Modern Infrastructure', color: 'from-yellow-400 to-yellow-500' },
                            { icon: Users, title: 'Experienced Faculty', color: 'from-red-500 to-red-600' },
                            { icon: Trophy, title: 'Holistic Development', color: 'from-yellow-400 to-yellow-500' },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                variants={scaleIn}
                                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                                className="group relative bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 text-center overflow-hidden border border-gray-100"
                            >
                                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-red-600 to-yellow-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                                <div className="absolute -top-24 -right-24 w-48 h-48 bg-yellow-400/5 rounded-full blur-3xl group-hover:bg-red-600/10 transition-all duration-500" />

                                <motion.div
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                    className="relative inline-flex mb-6"
                                >
                                    <div className={`bg-gradient-to-br ${item.color} p-5 rounded-2xl shadow-lg`}>
                                        <item.icon className="w-10 h-10 text-white" strokeWidth={2} />
                                    </div>
                                </motion.div>

                                <h3 className="text-xl font-bold text-gray-800 group-hover:text-red-600 transition-colors duration-300">
                                    {item.title}
                                </h3>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            <section className="py-24 px-6 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(250,204,21,0.04),transparent_60%)]" />

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
                            Easy Process
                        </motion.span>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Admission <span className="text-red-600">Process</span>
                        </h2>
                        <div className="w-24 h-1.5 bg-gradient-to-r from-red-600 via-yellow-400 to-red-600 mx-auto rounded-full" />
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                        className="grid md:grid-cols-4 gap-8"
                    >
                        {[
                            { step: '01', icon: FileText, title: 'Fill Form', desc: 'Complete application online' },
                            { step: '02', icon: UserCheck, title: 'Document Verification', desc: 'Submit required documents' },
                            { step: '03', icon: MessageSquare, title: 'Interaction', desc: 'Personal interaction session' },
                            { step: '04', icon: CheckCircle, title: 'Confirmation', desc: 'Final admission confirmation' },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                variants={scaleIn}
                                whileHover={{ y: -8 }}
                                className="group relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 text-center overflow-hidden border border-gray-100"
                            >
                                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-yellow-400 to-red-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                                <div className="absolute top-4 right-4 text-6xl font-bold text-yellow-400/10 group-hover:text-red-600/10 transition-colors duration-500">
                                    {item.step}
                                </div>

                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    className="relative inline-flex mb-4"
                                >
                                    <div className="bg-gradient-to-br from-red-500 to-red-600 p-4 rounded-2xl shadow-lg">
                                        <item.icon className="w-8 h-8 text-white" strokeWidth={2} />
                                    </div>
                                </motion.div>

                                <p className="text-sm font-bold text-red-600 mb-2">Step {item.step}</p>
                                <h3 className="font-bold text-xl text-gray-800 mb-2">{item.title}</h3>
                                <p className="text-sm text-gray-600">{item.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            <section className="py-24 px-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_60%,rgba(220,38,38,0.03),transparent_60%)]" />

                <div className="max-w-4xl mx-auto relative z-10">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeInUp}
                        className="bg-white p-12 rounded-3xl shadow-xl border border-gray-100"
                    >
                        <h2 className="text-4xl font-bold text-red-600 mb-8 text-center">
                            Required Documents
                        </h2>
                        <motion.ul
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={staggerContainer}
                            className="space-y-4"
                        >
                            {[
                                'Birth Certificate',
                                'Previous Class Report Card',
                                'Aadhar Card (Student & Parent)',
                                'Passport Size Photographs'
                            ].map((doc, index) => (
                                <motion.li
                                    key={index}
                                    variants={fadeInUp}
                                    className="flex items-center gap-4 text-gray-700 text-lg"
                                >
                                    <div className="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-red-600 to-yellow-400 rounded-full" />
                                    {doc}
                                </motion.li>
                            ))}
                        </motion.ul>
                    </motion.div>
                </div>
            </section>

            <section className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={scaleIn}
                        whileHover={{ y: -4 }}
                        className="bg-gradient-to-br from-yellow-50 to-red-50/30 p-12 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-yellow-200/50"
                    >
                        <h2 className="text-4xl font-bold text-red-600 mb-6 text-center">
                            Fee Structure Preview
                        </h2>
                        <p className="text-gray-700 text-center text-lg leading-relaxed max-w-3xl mx-auto">
                            Our fee structure is transparent and affordable, designed to provide premium education with value. Detailed fee information can be obtained during the admission interaction process.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="py-24 px-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(220,38,38,0.03),transparent_70%)]" />

                <div className="max-w-3xl mx-auto relative z-10">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeInUp}
                        className="bg-white p-12 rounded-3xl shadow-2xl border border-gray-100"
                    >
                        <h2 className="text-4xl font-bold text-red-600 mb-10 text-center">
                            Apply Now
                        </h2>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="relative">
                                <motion.div
                                    animate={{
                                        scale: focusedField === 'studentName' ? 1 : 0,
                                        opacity: focusedField === 'studentName' ? 1 : 0
                                    }}
                                    className="absolute -inset-1 bg-gradient-to-r from-red-600 to-yellow-400 rounded-2xl blur opacity-25"
                                />
                                <div className="relative">
                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <input
                                        type="text"
                                        required
                                        placeholder="Student Name"
                                        value={studentName}
                                        onChange={(e) => setStudentName(e.target.value)}
                                        onFocus={() => setFocusedField('studentName')}
                                        onBlur={() => setFocusedField(null)}
                                        className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-200 focus:border-red-600 focus:outline-none transition-all duration-300 bg-white"
                                    />
                                </div>
                            </div>

                            <div className="relative">
                                <motion.div
                                    animate={{
                                        scale: focusedField === 'studentClass' ? 1 : 0,
                                        opacity: focusedField === 'studentClass' ? 1 : 0
                                    }}
                                    className="absolute -inset-1 bg-gradient-to-r from-red-600 to-yellow-400 rounded-2xl blur opacity-25"
                                />
                                <div className="relative">
                                    <School className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <input
                                        type="text"
                                        required
                                        placeholder="Class Applying For"
                                        value={studentClass}
                                        onChange={(e) => setStudentClass(e.target.value)}
                                        onFocus={() => setFocusedField('studentClass')}
                                        onBlur={() => setFocusedField(null)}
                                        className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-200 focus:border-red-600 focus:outline-none transition-all duration-300 bg-white"
                                    />
                                </div>
                            </div>

                            <div className="relative">
                                <motion.div
                                    animate={{
                                        scale: focusedField === 'parentName' ? 1 : 0,
                                        opacity: focusedField === 'parentName' ? 1 : 0
                                    }}
                                    className="absolute -inset-1 bg-gradient-to-r from-red-600 to-yellow-400 rounded-2xl blur opacity-25"
                                />
                                <div className="relative">
                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <input
                                        type="text"
                                        required
                                        placeholder="Parent Name"
                                        value={parentName}
                                        onChange={(e) => setParentName(e.target.value)}
                                        onFocus={() => setFocusedField('parentName')}
                                        onBlur={() => setFocusedField(null)}
                                        className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-200 focus:border-red-600 focus:outline-none transition-all duration-300 bg-white"
                                    />
                                </div>
                            </div>

                            <div className="relative">
                                <motion.div
                                    animate={{
                                        scale: focusedField === 'phone' ? 1 : 0,
                                        opacity: focusedField === 'phone' ? 1 : 0
                                    }}
                                    className="absolute -inset-1 bg-gradient-to-r from-red-600 to-yellow-400 rounded-2xl blur opacity-25"
                                />
                                <div className="relative">
                                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <input
                                        type="tel"
                                        required
                                        placeholder="Phone Number"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        onFocus={() => setFocusedField('phone')}
                                        onBlur={() => setFocusedField(null)}
                                        className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-200 focus:border-red-600 focus:outline-none transition-all duration-300 bg-white"
                                    />
                                </div>
                            </div>

                            <div className="relative">
                                <motion.div
                                    animate={{
                                        scale: focusedField === 'message' ? 1 : 0,
                                        opacity: focusedField === 'message' ? 1 : 0
                                    }}
                                    className="absolute -inset-1 bg-gradient-to-r from-red-600 to-yellow-400 rounded-2xl blur opacity-25"
                                />
                                <div className="relative">
                                    <Mail className="absolute left-4 top-6 w-5 h-5 text-gray-400" />
                                    <textarea
                                        required
                                        rows={4}
                                        placeholder="Message / Additional Information"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        onFocus={() => setFocusedField('message')}
                                        onBlur={() => setFocusedField(null)}
                                        className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-200 focus:border-red-600 focus:outline-none transition-all duration-300 bg-white resize-none"
                                    ></textarea>
                                </div>
                            </div>

                            <div className="text-center pt-4">
                                <motion.button
                                    type="submit"
                                    disabled={isSubmitting}
                                    whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                                    className="relative group bg-gradient-to-r from-red-600 to-red-700 text-white font-bold px-12 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <span className="relative flex items-center justify-center gap-2">
                                        {isSubmitting ? (
                                            <>
                                                <motion.div
                                                    animate={{ rotate: 360 }}
                                                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                                                />
                                                Submitting...
                                            </>
                                        ) : (
                                            <>
                                                Submit Application
                                                <CheckCircle className="w-5 h-5" />
                                            </>
                                        )}
                                    </span>
                                </motion.button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </section>

            <div className="h-20"></div>
            <Footer />
        </div>
    )
}