"use client";

import React, { useState, useRef } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import {
    User,
    Phone,
    Mail,
    MessageSquare,
    Send,
    MapPin,
    Clock,
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


interface FloatingInputProps {
    type: string;
    name: string;
    label: string;
    value: string;
    icon: React.ElementType;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
    index: number;
}

const FloatingInput: React.FC<FloatingInputProps> = ({
    type, name, label, value, icon: Icon, onChange, required, index,
}) => {
    const [focused, setFocused] = useState(false);
    const active = focused || value.length > 0;

    return (
        <motion.div
            custom={index}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="relative"
        >
            <div className={`relative rounded-xl border-2 transition-all duration-250 bg-white ${focused
                ? "border-red-500 shadow-[0_0_0_4px_rgba(220,38,38,0.10)]"
                : "border-gray-200 hover:border-gray-300"
                }`}>
                <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <Icon className={`w-4 h-4 transition-colors duration-200 ${focused ? "text-red-500" : "text-gray-400"}`} strokeWidth={2} />
                </div>
                <input
                    type={type}
                    name={name}
                    required={required}
                    value={value}
                    onChange={onChange}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    className="w-full pl-11 pr-4 pt-6 pb-2.5 rounded-xl bg-transparent text-gray-900 text-sm font-medium focus:outline-none peer"
                    placeholder=" "
                />
                <label
                    className={`absolute left-11 pointer-events-none transition-all duration-200 font-medium ${active
                        ? "top-2.5 text-[10px] tracking-wider uppercase text-red-500"
                        : "top-1/2 -translate-y-1/2 text-sm text-gray-400"
                        }`}
                >
                    {label}
                </label>
            </div>
        </motion.div>
    );
};

const ContactSection: React.FC = () => {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        message: "",
    });
    const [focused, setFocused] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        const { name, phone, email, message } = formData;
        const whatsappMessage = `Hey! 👋 New Admission Inquiry\n\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nMessage: ${message}`;
        const encodedMessage = encodeURIComponent(whatsappMessage);
        const whatsappNumber = "917878583600";
        const url = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

        setTimeout(() => {
            setLoading(false);
            setSubmitted(true);
            window.open(url, "_blank");
        }, 900);
    };

    const fields = [
        { type: "text", name: "name", label: "Full Name", icon: User },
        { type: "tel", name: "phone", label: "Phone Number", icon: Phone },
        { type: "email", name: "email", label: "Email Address", icon: Mail },
    ];

    const infoCards = [
        {
            icon: MapPin,
            label: "Address",
            value: "Danta, Sikar, Rajasthan — 332701",
            color: "bg-red-50 text-red-600",
        },
        {
            icon: Phone,
            label: "Phone",
            value: "+91 78785 83600",
            color: "bg-yellow-50 text-yellow-600",
        },
        {
            icon: Clock,
            label: "Office Hours",
            value: "Mon – Sat, 9:00 AM – 4:00 PM",
            color: "bg-green-50 text-green-600",
        },
    ];

    return (
        <div className="font-[Poppins,sans-serif] overflow-hidden">
            <section className="relative bg-gradient-to-br from-red-600 via-red-700 to-red-800 py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div aria-hidden className="pointer-events-none absolute inset-0">
                    <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-yellow-400/8 blur-3xl" />
                    <div className="absolute bottom-0 -right-20 w-80 h-80 rounded-full bg-white/5 blur-3xl" />
                </div>
                <div className="relative z-10 max-w-3xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.85 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.48 }}
                        className="inline-flex items-center gap-2 bg-yellow-400/15 border border-yellow-400/30 text-yellow-300 text-xs sm:text-sm font-semibold px-4 py-2 rounded-full mb-6 tracking-wider uppercase"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
                        Admissions Open 2025–26
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15, duration: 0.65, ease: "easeOut" }}
                        className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight mb-5"
                    >
                        Get in <span className="text-yellow-400">Touch</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.28, duration: 0.6 }}
                        className="text-white/80 text-base sm:text-lg leading-relaxed max-w-xl mx-auto"
                    >
                        Have questions about admissions, fees, or scholarships? Reach out to
                        Sanskar Group of Institution — our team is happy to help you.
                    </motion.p>
                </div>
            </section>

            <section className="bg-gradient-to-b from-[#fdf8f0] to-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-5 gap-10 lg:gap-14 items-start">

                        <div className="lg:col-span-2 space-y-5">
                            <motion.div
                                initial={{ opacity: 0, x: -24 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.55 }}
                            >
                                <p className="text-red-500 text-sm font-bold tracking-widest uppercase mb-2">Contact Info</p>
                                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-2 leading-tight">
                                    Sanskar Group of Institution
                                </h2>
                                <p className="text-gray-500 text-sm leading-relaxed mb-7">
                                    We're located in the heart of Danta, Sikar. Come visit us or drop us a message — we're always open to answer your queries.
                                </p>
                            </motion.div>

                            {infoCards.map(({ icon: Icon, label, value, color }, i) => (
                                <motion.div
                                    key={label}
                                    custom={i}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={fadeUp}
                                    className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-250"
                                >
                                    <div className={`w-10 h-10 rounded-xl ${color} flex items-center justify-center shrink-0`}>
                                        <Icon className="w-5 h-5" strokeWidth={2} />
                                    </div>
                                    <div>
                                        <p className="text-[11px] font-bold tracking-widest uppercase text-gray-400 mb-0.5">{label}</p>
                                        <p className="text-gray-800 text-sm font-medium leading-snug">{value}</p>
                                    </div>
                                </motion.div>
                            ))}

                            <motion.div
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.35, duration: 0.5 }}
                                className="mt-2 p-5 rounded-2xl bg-gradient-to-br from-red-50 to-yellow-50 border border-red-100"
                            >
                                <p className="text-xs font-bold uppercase tracking-widest text-red-500 mb-2">Scholarship Exam</p>
                                <p className="text-gray-800 text-sm font-semibold leading-snug mb-3">
                                    Register for our merit-based scholarship & get up to 100% fee waiver
                                </p>
                                <a
                                    href="/scholarship-exam"
                                    className="inline-flex items-center gap-1.5 text-red-600 text-sm font-bold hover:text-red-700 transition-colors duration-200"
                                >
                                    Know More →
                                </a>
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, x: 24 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="lg:col-span-3"
                        >
                            <div className="relative bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden">
                                <div className="h-1.5 w-full bg-gradient-to-r from-red-600 via-yellow-400 to-red-600" />

                                <div className="p-8 sm:p-10">
                                    <h3 className="text-xl font-bold text-gray-900 mb-1">Admission Inquiry</h3>
                                    <p className="text-gray-500 text-sm mb-8">Fill the form below — we'll respond via WhatsApp within minutes.</p>

                                    <AnimatePresence mode="wait">
                                        {submitted ? (
                                            <motion.div
                                                key="success"
                                                initial={{ opacity: 0, scale: 0.88 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                exit={{ opacity: 0, scale: 0.88 }}
                                                transition={{ duration: 0.45, ease: "easeOut" }}
                                                className="flex flex-col items-center justify-center text-center py-14"
                                            >
                                                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-5">
                                                    <CheckCircle2 className="w-9 h-9 text-green-500" strokeWidth={1.8} />
                                                </div>
                                                <h4 className="text-xl font-bold text-gray-900 mb-2">Inquiry Sent!</h4>
                                                <p className="text-gray-500 text-sm max-w-xs leading-relaxed mb-6">
                                                    Your inquiry has been sent via WhatsApp. Our admission team will contact you shortly.
                                                </p>
                                                <button
                                                    onClick={() => {
                                                        setSubmitted(false);
                                                        setFormData({ name: "", phone: "", email: "", message: "" });
                                                    }}
                                                    className="text-red-600 text-sm font-semibold hover:text-red-700 transition-colors"
                                                >
                                                    Send another inquiry →
                                                </button>
                                            </motion.div>
                                        ) : (
                                            <motion.form
                                                key="form"
                                                onSubmit={handleSubmit}
                                                className="space-y-5"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                            >
                                                {fields.map((field, i) => (
                                                    <FloatingInput
                                                        key={field.name}
                                                        type={field.type}
                                                        name={field.name}
                                                        label={field.label}
                                                        value={formData[field.name as keyof typeof formData]}
                                                        icon={field.icon}
                                                        onChange={handleChange}
                                                        required
                                                        index={i}
                                                    />
                                                ))}

                                                <motion.div
                                                    custom={3}
                                                    initial="hidden"
                                                    animate="visible"
                                                    variants={fadeUp}
                                                    className={`relative rounded-xl border-2 transition-all duration-250 bg-white ${focused
                                                        ? "border-red-500 shadow-[0_0_0_4px_rgba(220,38,38,0.10)]"
                                                        : "border-gray-200 hover:border-gray-300"
                                                        }`}
                                                >
                                                    <div className="absolute left-4 top-4 pointer-events-none">
                                                        <MessageSquare className={`w-4 h-4 transition-colors duration-200 ${focused ? "text-red-500" : "text-gray-400"}`} strokeWidth={2} />
                                                    </div>
                                                    <div className="relative">
                                                        <textarea
                                                            name="message"
                                                            rows={4}
                                                            required
                                                            value={formData.message}
                                                            onChange={handleChange}
                                                            onFocus={() => setFocused(true)}
                                                            onBlur={() => setFocused(false)}
                                                            placeholder=" "
                                                            className="w-full pl-11 pr-4 pt-6 pb-3 rounded-xl bg-transparent text-gray-900 text-sm font-medium focus:outline-none resize-none peer"
                                                        />
                                                        <label
                                                            className={`absolute left-11 pointer-events-none transition-all duration-200 font-medium ${focused || formData.message.length > 0
                                                                ? "top-2.5 text-[10px] tracking-wider uppercase text-red-500"
                                                                : "top-4 text-sm text-gray-400"
                                                                }`}
                                                        >
                                                            Your Message
                                                        </label>
                                                    </div>
                                                </motion.div>

                                                <motion.div custom={4} initial="hidden" animate="visible" variants={fadeUp}>
                                                    <motion.button
                                                        type="submit"
                                                        disabled={loading}
                                                        whileHover={!loading ? { scale: 1.02, boxShadow: "0 0 22px rgba(220,38,38,0.30)" } : {}}
                                                        whileTap={!loading ? { scale: 0.98 } : {}}
                                                        className="w-full flex items-center justify-center gap-2.5 bg-red-600 hover:bg-red-700 disabled:opacity-70 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl shadow-md transition-colors duration-200 text-base"
                                                    >
                                                        {loading ? (
                                                            <>
                                                                <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24" fill="none">
                                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                                                                </svg>
                                                                Sending…
                                                            </>
                                                        ) : (
                                                            <>
                                                                <Send className="w-4 h-4" strokeWidth={2.2} />
                                                                Send via WhatsApp
                                                            </>
                                                        )}
                                                    </motion.button>
                                                </motion.div>

                                                <p className="text-center text-xs text-gray-400 mt-1">
                                                    Your details are safe and will only be used for admission purposes.
                                                </p>
                                            </motion.form>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactSection;
