"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { Eye, X, ChevronLeft, ChevronRight, ImageIcon } from "lucide-react";

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


const images = [
    {
        src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b",
        label: "School Campus",
        category: "Campus",
    },
    {
        src: "https://images.unsplash.com/photo-1577896851231-70ef18881754",
        label: "Classroom Learning",
        category: "Academics",
    },
    {
        src: "https://images.unsplash.com/photo-1596495577886-d920f1fb7238",
        label: "Science Lab",
        category: "Facilities",
    },
    {
        src: "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a",
        label: "Student Activities",
        category: "Events",
    },
    {
        src: "https://images.unsplash.com/photo-1509062522246-3755977927d7",
        label: "Library & Resources",
        category: "Facilities",
    },
    {
        src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
        label: "Sports & Athletics",
        category: "Sports",
    },
];

const GalleryPreview: React.FC = () => {
    const [lightbox, setLightbox] = useState<number | null>(null);

    const prev = () =>
        setLightbox((i) => (i === null ? null : (i - 1 + images.length) % images.length));
    const next = () =>
        setLightbox((i) => (i === null ? null : (i + 1) % images.length));

    return (
        <section className="font-[Poppins,sans-serif] bg-gradient-to-b from-white to-[#fdf8f0] py-20 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="max-w-7xl mx-auto">

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-14"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.85 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.45 }}
                        className="inline-flex items-center gap-2 bg-red-50 border border-red-100 text-red-500 text-xs font-bold px-4 py-2 rounded-full mb-4 tracking-widest uppercase"
                    >
                        <ImageIcon className="w-3.5 h-3.5" strokeWidth={2.5} />
                        Campus Life
                    </motion.div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
                        Our{" "}
                        <span className="text-red-600">Campus Gallery</span>
                    </h2>
                    <div className="w-16 h-1 bg-yellow-400 mx-auto mt-5 rounded-full" />
                    <p className="text-gray-500 text-sm sm:text-base mt-5 max-w-xl mx-auto leading-relaxed">
                        A glimpse into life at Sanskar Group of Institution — where learning, creativity,
                        and community come alive every day.
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                    {images.map((img, i) => (
                        <motion.div
                            key={i}
                            custom={i}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-30px" }}
                            variants={fadeUp}
                            whileHover={{ y: -5, transition: { duration: 0.22 } }}
                            onClick={() => setLightbox(i)}
                            className="group relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-sm hover:shadow-xl cursor-pointer transition-shadow duration-300 bg-gray-100"
                        >
                            <div className="relative aspect-[4/3] w-full overflow-hidden">
                                <Image
                                    src={`${img.src}?auto=format&fit=crop&w=900&q=80`}
                                    alt={img.label}
                                    fill
                                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                                    unoptimized
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <motion.div
                                        initial={{ scale: 0.7 }}
                                        whileHover={{ scale: 1 }}
                                        className="w-12 h-12 rounded-xl bg-white/20 border border-white/30 backdrop-blur-sm flex items-center justify-center"
                                    >
                                        <Eye className="w-5 h-5 text-white" strokeWidth={2} />
                                    </motion.div>
                                </div>

                                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-350">
                                    <span className="inline-block text-[10px] font-bold tracking-widest uppercase text-yellow-300 bg-red-700/80 backdrop-blur-sm px-2.5 py-1 rounded-full mb-1">
                                        {img.category}
                                    </span>
                                    <p className="text-white font-semibold text-sm leading-tight">{img.label}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="text-center mt-10"
                >
                    <p className="text-gray-400 text-sm">
                        📍 Sanskar Group of Institution, Danta, Sikar, Rajasthan
                    </p>
                </motion.div>
            </div>

            <AnimatePresence>
                {lightbox !== null && (
                    <motion.div
                        key="lightbox"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
                        onClick={() => setLightbox(null)}
                    >
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setLightbox(null)}
                            className="absolute top-5 right-5 w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
                        >
                            <X className="w-5 h-5" strokeWidth={2} />
                        </motion.button>

                        <button
                            onClick={(e) => { e.stopPropagation(); prev(); }}
                            className="absolute left-4 sm:left-8 w-11 h-11 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
                        >
                            <ChevronLeft className="w-5 h-5" strokeWidth={2.2} />
                        </button>

                        <motion.div
                            key={lightbox}
                            initial={{ opacity: 0, scale: 0.92 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.92 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative max-w-4xl w-full max-h-[82vh] rounded-2xl overflow-hidden shadow-2xl"
                        >
                            <div className="relative w-full" style={{ paddingBottom: "60%" }}>
                                <Image
                                    src={`${images[lightbox].src}?auto=format&fit=crop&w=1400&q=90`}
                                    alt={images[lightbox].label}
                                    fill
                                    className="object-cover"
                                    unoptimized
                                />
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                                <span className="text-[10px] font-bold tracking-widest uppercase text-yellow-300 bg-red-700/80 px-2.5 py-1 rounded-full">
                                    {images[lightbox].category}
                                </span>
                                <p className="text-white font-semibold text-base mt-2">{images[lightbox].label}</p>
                            </div>
                        </motion.div>

                        <button
                            onClick={(e) => { e.stopPropagation(); next(); }}
                            className="absolute right-4 sm:right-8 w-11 h-11 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
                        >
                            <ChevronRight className="w-5 h-5" strokeWidth={2.2} />
                        </button>

                        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
                            {images.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={(e) => { e.stopPropagation(); setLightbox(i); }}
                                    className={`h-1.5 rounded-full transition-all duration-300 ${i === lightbox ? "w-6 bg-yellow-400" : "w-1.5 bg-white/30"
                                        }`}
                                />
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default GalleryPreview;
