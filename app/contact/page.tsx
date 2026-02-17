'use client'

import React, { useState, FormEvent } from 'react'
import { motion, Variants } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, User, MessageSquare, Send } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

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


export default function ContactPage() {
    const [name, setName] = useState<string>('')
    const [phone, setPhone] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [message, setMessage] = useState<string>('')
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [focusedField, setFocusedField] = useState<string | null>(null)

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsSubmitting(true)

        const formattedMessage = `
Hello Sanskar Group of Institution,

Name: ${name}
Phone: ${phone}
Email: ${email}

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

                <div className="max-w-6xl mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 bg-yellow-400 text-red-700 font-bold px-6 py-2.5 rounded-full mb-8 shadow-2xl"
                    >
                        <MessageSquare className="w-5 h-5" />
                        Contact Us
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
                    >
                        Get In <span className="text-yellow-400">Touch</span>
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
                            Contact Information
                        </motion.span>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Reach <span className="text-red-600">Us</span>
                        </h2>
                        <div className="w-24 h-1.5 bg-gradient-to-r from-red-600 via-yellow-400 to-red-600 mx-auto rounded-full" />
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
                    >
                        {[
                            { icon: MapPin, title: 'Address', info: ['Sanskar Group of Institution', 'Danta, Sikar', 'Rajasthan, India'], color: 'from-red-500 to-red-600' },
                            { icon: Phone, title: 'Phone', info: ['+91 78785 83600'], color: 'from-yellow-400 to-yellow-500' },
                            { icon: Mail, title: 'Email', info: ['info@sanskar.com'], color: 'from-red-500 to-red-600' },
                            { icon: Clock, title: 'Office Hours', info: ['Monday - Saturday', '8:00 AM - 3:00 PM'], color: 'from-yellow-400 to-yellow-500' },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                variants={scaleIn}
                                whileHover={{ y: -8 }}
                                className="group bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 text-center border border-gray-100 relative overflow-hidden"
                            >
                                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-red-600 to-yellow-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                                <div className="absolute -top-24 -right-24 w-48 h-48 bg-yellow-400/5 rounded-full blur-3xl group-hover:bg-red-600/10 transition-all duration-500" />

                                <motion.div
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                    className="relative inline-flex mb-6"
                                >
                                    <div className={`bg-gradient-to-br ${item.color} p-5 rounded-2xl shadow-lg`}>
                                        <item.icon className="w-8 h-8 text-white" strokeWidth={2} />
                                    </div>
                                </motion.div>

                                <h3 className="text-xl font-bold text-red-600 mb-4 group-hover:text-red-700 transition-colors duration-300">
                                    {item.title}
                                </h3>
                                {item.info.map((line, i) => (
                                    <p key={i} className="text-gray-700 leading-relaxed">
                                        {line}
                                    </p>
                                ))}
                            </motion.div>
                        ))}
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
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl font-bold text-red-600 mb-4">
                            Find Us On Map
                        </h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-yellow-400 mx-auto rounded-full" />
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={scaleIn}
                        whileHover={{ scale: 1.01 }}
                        className="relative w-full h-96 bg-gradient-to-br from-red-100 to-yellow-100 rounded-3xl shadow-2xl flex items-center justify-center overflow-hidden border border-gray-200"
                    >
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(220,38,38,0.1),transparent_70%)]" />
                        <div className="relative text-center p-8">
                            <MapPin className="w-24 h-24 text-red-600 mx-auto mb-4" strokeWidth={1.5} />
                            <p className="text-gray-600 text-lg font-medium">Google Map</p>
                        </div>
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
                        variants={scaleIn}
                        className="bg-white p-12 md:p-16 rounded-3xl shadow-2xl border border-gray-100 relative overflow-hidden"
                    >
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-600 via-yellow-400 to-red-600" />
                        <div className="absolute -top-32 -right-32 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl" />

                        <div className="relative">
                            <div className="text-center mb-10">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ type: "spring", stiffness: 200 }}
                                    className="inline-flex items-center justify-center bg-gradient-to-br from-red-600 to-red-700 p-5 rounded-2xl shadow-xl mb-6"
                                >
                                    <Send className="w-10 h-10 text-yellow-400" strokeWidth={2} />
                                </motion.div>
                                <h2 className="text-4xl font-bold text-red-600">
                                    Send Us a Message
                                </h2>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="relative">
                                    <motion.div
                                        animate={{
                                            scale: focusedField === 'name' ? 1 : 0,
                                            opacity: focusedField === 'name' ? 1 : 0
                                        }}
                                        className="absolute -inset-1 bg-gradient-to-r from-red-600 to-yellow-400 rounded-2xl blur opacity-25"
                                    />
                                    <div className="relative">
                                        <label className="block mb-2 font-bold text-red-600 text-sm">
                                            Full Name
                                        </label>
                                        <div className="relative">
                                            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                            <input
                                                type="text"
                                                required
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                onFocus={() => setFocusedField('name')}
                                                onBlur={() => setFocusedField(null)}
                                                className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-200 focus:border-red-600 focus:outline-none transition-all duration-300 bg-white"
                                                placeholder="Enter your full name"
                                            />
                                        </div>
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
                                        <label className="block mb-2 font-bold text-red-600 text-sm">
                                            Phone Number
                                        </label>
                                        <div className="relative">
                                            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                            <input
                                                type="tel"
                                                required
                                                value={phone}
                                                onChange={(e) => setPhone(e.target.value)}
                                                onFocus={() => setFocusedField('phone')}
                                                onBlur={() => setFocusedField(null)}
                                                className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-200 focus:border-red-600 focus:outline-none transition-all duration-300 bg-white"
                                                placeholder="Enter your phone number"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="relative">
                                    <motion.div
                                        animate={{
                                            scale: focusedField === 'email' ? 1 : 0,
                                            opacity: focusedField === 'email' ? 1 : 0
                                        }}
                                        className="absolute -inset-1 bg-gradient-to-r from-red-600 to-yellow-400 rounded-2xl blur opacity-25"
                                    />
                                    <div className="relative">
                                        <label className="block mb-2 font-bold text-red-600 text-sm">
                                            Email Address
                                        </label>
                                        <div className="relative">
                                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                            <input
                                                type="email"
                                                required
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                onFocus={() => setFocusedField('email')}
                                                onBlur={() => setFocusedField(null)}
                                                className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-200 focus:border-red-600 focus:outline-none transition-all duration-300 bg-white"
                                                placeholder="Enter your email address"
                                            />
                                        </div>
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
                                        <label className="block mb-2 font-bold text-red-600 text-sm">
                                            Your Message
                                        </label>
                                        <div className="relative">
                                            <MessageSquare className="absolute left-4 top-6 w-5 h-5 text-gray-400" />
                                            <textarea
                                                required
                                                rows={5}
                                                value={message}
                                                onChange={(e) => setMessage(e.target.value)}
                                                onFocus={() => setFocusedField('message')}
                                                onBlur={() => setFocusedField(null)}
                                                className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-200 focus:border-red-600 focus:outline-none transition-all duration-300 bg-white resize-none"
                                                placeholder="Write your message here..."
                                            ></textarea>
                                        </div>
                                    </div>
                                </div>

                                <div className="text-center pt-6">
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
                                                    Sending...
                                                </>
                                            ) : (
                                                <>
                                                    Send via WhatsApp
                                                    <Send className="w-5 h-5" />
                                                </>
                                            )}
                                        </span>
                                    </motion.button>
                                </div>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </section>

            <div className="h-20"></div>
            <Footer />
        </div>
    )
}
