"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
    GraduationCap,
    MapPin,
    Phone,
    Mail,
    Facebook,
    Instagram,
    Youtube,
    Twitter,
    ArrowUpRight,
    ChevronRight,
} from "lucide-react";

const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1, duration: 0.55, ease: "easeOut" },
    }),
};

const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Academics", href: "/academics" },
    { name: "Facilities", href: "/facilities" },
    { name: "Contact", href: "/contact" },
];

const admissionLinks = [
    { name: "Admission Open", href: "/admission-open" },
    { name: "Scholarship Exam", href: "/scholarship-exam" },
    { name: "Fee Structure", href: "/academics" },
    { name: "Apply Online", href: "/admission-open" },
];

const socialLinks = [
    { icon: Facebook, label: "Facebook", href: "#", color: "hover:text-blue-400" },
    { icon: Instagram, label: "Instagram", href: "#", color: "hover:text-pink-400" },
    { icon: Youtube, label: "YouTube", href: "#", color: "hover:text-red-400" },
    { icon: Twitter, label: "Twitter / X", href: "#", color: "hover:text-sky-400" },
];

export default function Footer() {
    return (
        <footer className="relative bg-[#0d1b2a] text-gray-300 overflow-hidden font-[Poppins,sans-serif]">
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 z-0"
                style={{
                    background:
                        "radial-gradient(ellipse 80% 60% at 10% 0%, rgba(220,38,38,0.10) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 90% 100%, rgba(250,204,21,0.06) 0%, transparent 55%)",
                }}
            />

            <div className="relative z-10">
                <div className="h-[3px] w-full bg-gradient-to-r from-red-600 via-yellow-400 to-red-600" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

                        <motion.div
                            custom={0}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-60px" }}
                            variants={fadeUp}
                            className="sm:col-span-2 lg:col-span-1"
                        >
                            <div className="flex items-center gap-3 mb-5">
                                <div className="w-11 h-11 rounded-xl bg-yellow-400 flex items-center justify-center shadow-lg shadow-yellow-500/20 shrink-0">
                                    <GraduationCap className="text-red-700 w-6 h-6" strokeWidth={2.2} />
                                </div>
                                <div className="leading-tight">
                                    <p className="text-white text-sm font-semibold tracking-wide">Sanskar Group of</p>
                                    <p className="text-yellow-400 text-lg font-extrabold tracking-wider -mt-0.5">Institution</p>
                                </div>
                            </div>

                            <p className="text-gray-400 text-sm leading-relaxed mb-5">
                                Nurturing excellence since foundation — Sanskar Group of Institution stands as a beacon
                                of quality CBSE education and higher learning in Danta, Sikar, Rajasthan.
                            </p>

                            <div className="space-y-3">
                                <div className="flex items-start gap-2.5 text-sm">
                                    <MapPin className="w-4 h-4 text-yellow-400 mt-0.5 shrink-0" strokeWidth={2} />
                                    <span className="text-gray-400 leading-snug">Danta, Sikar, Rajasthan — 332701</span>
                                </div>
                                <div className="flex items-center gap-2.5 text-sm">
                                    <Phone className="w-4 h-4 text-yellow-400 shrink-0" strokeWidth={2} />
                                    <a href="tel:+91XXXXXXXXXX" className="text-gray-400 hover:text-yellow-400 transition-colors duration-200">
                                        +91 XXXXX XXXXX
                                    </a>
                                </div>
                                <div className="flex items-center gap-2.5 text-sm">
                                    <Mail className="w-4 h-4 text-yellow-400 shrink-0" strokeWidth={2} />
                                    <a
                                        href="mailto:info@sanskargroup.edu.in"
                                        className="text-gray-400 hover:text-yellow-400 transition-colors duration-200 truncate"
                                    >
                                        info@sanskargroup.edu.in
                                    </a>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            custom={1}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-60px" }}
                            variants={fadeUp}
                        >
                            <h4 className="text-white font-bold text-base mb-5 flex items-center gap-2">
                                <span className="w-1 h-5 rounded-full bg-yellow-400 inline-block" />
                                Quick Links
                            </h4>
                            <ul className="space-y-2.5">
                                {quickLinks.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="group flex items-center gap-2 text-gray-400 hover:text-yellow-400 text-sm transition-colors duration-200"
                                        >
                                            <ChevronRight
                                                className="w-3.5 h-3.5 text-red-500 group-hover:text-yellow-400 group-hover:translate-x-0.5 transition-all duration-200"
                                                strokeWidth={2.5}
                                            />
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div
                            custom={2}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-60px" }}
                            variants={fadeUp}
                        >
                            <h4 className="text-white font-bold text-base mb-5 flex items-center gap-2">
                                <span className="w-1 h-5 rounded-full bg-yellow-400 inline-block" />
                                Admissions
                            </h4>
                            <ul className="space-y-2.5">
                                {admissionLinks.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="group flex items-center gap-2 text-gray-400 hover:text-yellow-400 text-sm transition-colors duration-200"
                                        >
                                            <ChevronRight
                                                className="w-3.5 h-3.5 text-red-500 group-hover:text-yellow-400 group-hover:translate-x-0.5 transition-all duration-200"
                                                strokeWidth={2.5}
                                            />
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-6 p-4 rounded-xl bg-red-600/15 border border-red-600/20">
                                <p className="text-xs text-gray-400 mb-1 font-medium uppercase tracking-widest">Scholarship Exam</p>
                                <p className="text-white text-sm font-semibold leading-snug mb-3">
                                    Register now for merit-based scholarships
                                </p>
                                <Link
                                    href="/scholarship-exam"
                                    className="inline-flex items-center gap-1.5 text-yellow-400 text-sm font-semibold hover:text-yellow-300 transition-colors duration-200"
                                >
                                    Learn More <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={2.5} />
                                </Link>
                            </div>
                        </motion.div>

                        <motion.div
                            custom={3}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-60px" }}
                            variants={fadeUp}
                        >
                            <h4 className="text-white font-bold text-base mb-5 flex items-center gap-2">
                                <span className="w-1 h-5 rounded-full bg-yellow-400 inline-block" />
                                Connect With Us
                            </h4>

                            <p className="text-gray-400 text-sm leading-relaxed mb-5">
                                Follow our journey of academic excellence and campus life across social platforms.
                            </p>

                            <div className="grid grid-cols-2 gap-2.5 mb-6">
                                {socialLinks.map(({ icon: Icon, label, href, color }) => (
                                    <motion.a
                                        key={label}
                                        href={href}
                                        whileHover={{ scale: 1.04, y: -2 }}
                                        whileTap={{ scale: 0.97 }}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`flex items-center gap-2 px-3 py-2.5 rounded-xl bg-white/5 border border-white/8 text-gray-400 ${color} text-xs font-medium transition-all duration-200 hover:border-white/20 hover:bg-white/10`}
                                    >
                                        <Icon className="w-4 h-4 shrink-0" strokeWidth={1.8} />
                                        {label}
                                    </motion.a>
                                ))}
                            </div>

                            <motion.div
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                            >
                                <Link
                                    href="/admission-open"
                                    className="block w-full text-center bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold text-sm py-3 rounded-xl shadow-lg shadow-red-900/30 transition-all duration-250"
                                >
                                    Admission Open 2025–26 →
                                </Link>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
                        <p>
                            © {new Date().getFullYear()}{" "}
                            <span className="text-gray-400 font-medium">Sanskar Group of Institution</span>
                            , Danta, Sikar, Rajasthan. All rights reserved.
                        </p>
                        <div className="flex items-center gap-4">
                            <Link href="/about" className="hover:text-yellow-400 transition-colors duration-200">
                                Privacy Policy
                            </Link>
                            <span className="text-white/10">|</span>
                            <Link href="/about" className="hover:text-yellow-400 transition-colors duration-200">
                                Terms of Use
                            </Link>
                            <span className="text-white/10">|</span>
                            <Link href="/contact" className="hover:text-yellow-400 transition-colors duration-200">
                                Sitemap
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}