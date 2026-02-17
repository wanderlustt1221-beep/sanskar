"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Download, FileSpreadsheet, Lock, Users, FileText, ChevronLeft, ChevronRight, X, Filter, RotateCw } from "lucide-react";

type Registration = {
    id: string;
    rollNumber: string;
    studentName: string;
    fatherName: string;
    class: string;
    school: string;
    phone: string;
    village: string;
    district: string;
    createdAt: string;
};

type ApiResponse = {
    registrations: Registration[];
    total: number;
    page: number;
    limit: number;
    totalPages: number;
};

const ADMIN_KEY = process.env.NEXT_PUBLIC_ADMIN_KEY || "";

const CLASSES = ["3rd", "4th", "5th", "6th", "7th", "8th", "9th", "10th"];

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function AdminDashboard() {
    const [data, setData] = useState<ApiResponse | null>(null);
    const [search, setSearch] = useState("");
    const [filterClass, setFilterClass] = useState("");
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [downloadingId, setDownloadingId] = useState<string | null>(null);
    const [exporting, setExporting] = useState(false);
    const [adminKey, setAdminKey] = useState(ADMIN_KEY);
    const [authed, setAuthed] = useState(!!ADMIN_KEY);
    const [keyInput, setKeyInput] = useState("");
    const [authError, setAuthError] = useState("");
    const searchTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

    const fetchData = useCallback(
        async (q: string, cls: string, pg: number, key: string) => {
            setLoading(true);
            try {
                const params = new URLSearchParams({
                    search: q,
                    class: cls,
                    page: String(pg),
                    limit: "10",
                });
                const res = await fetch(`/api/admin/registrations?${params}`, {
                    headers: { "x-admin-key": key },
                });
                if (res.status === 401) {
                    setAuthed(false);
                    setAuthError("Invalid admin key.");
                    setLoading(false);
                    return;
                }
                const json = await res.json();
                setData(json);
            } catch {
                // silently fail
            } finally {
                setLoading(false);
            }
        },
        []
    );

    useEffect(() => {
        if (!authed) return;
        if (searchTimer.current) clearTimeout(searchTimer.current);
        searchTimer.current = setTimeout(() => {
            fetchData(search, filterClass, page, adminKey);
        }, 300);
        return () => {
            if (searchTimer.current) clearTimeout(searchTimer.current);
        };
    }, [search, filterClass, page, authed, adminKey, fetchData]);

    function handleLogin() {
        if (!keyInput.trim()) { setAuthError("Enter admin key."); return; }
        setAdminKey(keyInput.trim());
        setAuthed(true);
        setAuthError("");
    }

    async function downloadAdmitCard(id: string, rollNumber: string) {
        setDownloadingId(id);
        try {
            const res = await fetch(`/api/admin/admit-card/${id}`, {
                headers: { "x-admin-key": adminKey },
            });
            if (!res.ok) { alert("Failed to generate admit card."); return; }
            const blob = await res.blob();
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = `${rollNumber}.pdf`;
            a.click();
            URL.revokeObjectURL(url);
        } finally {
            setDownloadingId(null);
        }
    }

    async function exportExcel() {
        setExporting(true);
        try {
            const params = new URLSearchParams();
            if (filterClass) params.set("class", filterClass);
            const res = await fetch(`/api/admin/export?${params}`, {
                headers: { "x-admin-key": adminKey },
            });
            if (!res.ok) { alert("Export failed."); return; }
            const blob = await res.blob();
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = filterClass ? `registrations_class_${filterClass}.xlsx` : "registrations_all.xlsx";
            a.click();
            URL.revokeObjectURL(url);
        } finally {
            setExporting(false);
        }
    }

    function handleSearch(v: string) { setSearch(v); setPage(1); }
    function handleClass(v: string) { setFilterClass(v); setPage(1); }

    if (!authed) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-red-950 to-slate-900 p-4 font-[Poppins] relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(220,38,38,0.15),transparent_70%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(250,204,21,0.1),transparent_70%)]" />

                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="relative bg-white rounded-3xl p-12 w-full max-w-md shadow-2xl"
                >
                    <div className="absolute -top-16 left-1/2 -translate-x-1/2">
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                            className="bg-gradient-to-br from-red-600 to-red-700 p-6 rounded-2xl shadow-2xl"
                        >
                            <Lock className="w-10 h-10 text-yellow-400" strokeWidth={2.5} />
                        </motion.div>
                    </div>

                    <div className="text-center mt-8 mb-8">
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Access</h1>
                        <p className="text-gray-600">Sanskar Group of Institution</p>
                        <p className="text-sm text-gray-500 mt-1">Danta, Sikar, Rajasthan</p>
                    </div>

                    <div className="space-y-4">
                        <div className="relative">
                            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                                type="password"
                                placeholder="Enter admin key"
                                value={keyInput}
                                onChange={(e) => setKeyInput(e.target.value)}
                                onKeyDown={(e) => e.key === "Enter" && handleLogin()}
                                className="w-full pl-12 pr-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-red-600 focus:outline-none transition-all duration-300 text-sm"
                            />
                        </div>

                        <AnimatePresence>
                            {authError && (
                                <motion.p
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="text-red-600 text-sm font-medium text-center"
                                >
                                    {authError}
                                </motion.p>
                            )}
                        </AnimatePresence>

                        <motion.button
                            onClick={handleLogin}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white font-bold py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            Authenticate →
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        );
    }

    const total = data?.total ?? 0;
    const totalPages = data?.totalPages ?? 1;
    const regs = data?.registrations ?? [];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-yellow-50/30 font-[Poppins]">
            <header className="sticky top-0 z-50 bg-gradient-to-r from-slate-900 via-red-950 to-slate-900 border-b border-red-900/20 shadow-xl backdrop-blur-sm">
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex items-center gap-3"
                        >
                            <div className="relative">
                                <div className="w-3 h-3 bg-red-600 rounded-full animate-pulse" />
                                <div className="absolute inset-0 w-3 h-3 bg-red-600 rounded-full animate-ping opacity-75" />
                            </div>
                            <div>
                                <h1 className="text-xl font-bold text-white">Sanskar Admin Panel</h1>
                                <p className="text-xs text-gray-400">Danta, Sikar, Rajasthan</p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex items-center gap-3"
                        >
                            <div className="bg-red-950/50 border border-red-800/30 rounded-full px-4 py-2 flex items-center gap-2">
                                <Users className="w-4 h-4 text-yellow-400" />
                                <span className="text-sm font-bold text-white">{total}</span>
                                <span className="text-xs text-gray-400">Registrations</span>
                            </div>

                            <motion.button
                                onClick={exportExcel}
                                disabled={exporting}
                                whileHover={{ scale: exporting ? 1 : 1.05 }}
                                whileTap={{ scale: exporting ? 1 : 0.95 }}
                                className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-red-900 font-bold px-5 py-2.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                            >
                                {exporting ? (
                                    <>
                                        <motion.div
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                        >
                                            <RotateCw className="w-4 h-4" />
                                        </motion.div>
                                        <span className="text-sm">Exporting...</span>
                                    </>
                                ) : (
                                    <>
                                        <FileSpreadsheet className="w-4 h-4" />
                                        <span className="text-sm">Export Excel</span>
                                    </>
                                )}
                            </motion.button>
                        </motion.div>
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-6 py-8">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
                >
                    {[
                        { label: "Total Registrations", value: total, icon: Users, color: "from-red-500 to-red-600" },
                        { label: "Current Page", value: `${page} / ${totalPages}`, icon: FileText, color: "from-yellow-400 to-yellow-500" },
                        { label: "Class Filter", value: filterClass || "All Classes", icon: Filter, color: "from-slate-600 to-slate-700" },
                    ].map((stat, i) => (
                        <motion.div
                            key={i}
                            variants={fadeIn}
                            whileHover={{ y: -4 }}
                            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-600/5 to-yellow-400/5 rounded-full blur-2xl" />
                            <div className="relative flex items-center justify-between">
                                <div>
                                    <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                                    <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
                                </div>
                                <div className={`bg-gradient-to-br ${stat.color} p-3 rounded-xl shadow-lg`}>
                                    <stat.icon className="w-6 h-6 text-white" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 mb-6"
                >
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex-1 relative">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search by name or roll number..."
                                value={search}
                                onChange={(e) => handleSearch(e.target.value)}
                                className="w-full pl-12 pr-12 py-3 rounded-xl border-2 border-gray-200 focus:border-red-600 focus:outline-none transition-all duration-300"
                            />
                            {search && (
                                <motion.button
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    onClick={() => handleSearch("")}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-red-600 transition-colors"
                                >
                                    <X className="w-5 h-5" />
                                </motion.button>
                            )}
                        </div>

                        <select
                            value={filterClass}
                            onChange={(e) => handleClass(e.target.value)}
                            className="px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-red-600 focus:outline-none transition-all duration-300 bg-white"
                        >
                            <option value="">All Classes</option>
                            {CLASSES.map((c) => (
                                <option key={c} value={c}>{c}</option>
                            ))}
                        </select>

                        {(search || filterClass) && (
                            <motion.button
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => { handleSearch(""); handleClass(""); }}
                                className="px-6 py-3 bg-red-50 text-red-600 font-semibold rounded-xl hover:bg-red-100 transition-all duration-300 border border-red-200"
                            >
                                Reset Filters
                            </motion.button>
                        )}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
                >
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="bg-gradient-to-r from-slate-900 via-red-950 to-slate-900">
                                    {["#", "Roll Number", "Student Name", "Class", "School", "Phone", "Registered", "Action"].map((h) => (
                                        <th key={h} className="px-6 py-4 text-left text-xs font-bold text-yellow-400 uppercase tracking-wider whitespace-nowrap">
                                            {h}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                <AnimatePresence mode="wait">
                                    {loading ? (
                                        <motion.tr
                                            key="loading"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                        >
                                            <td colSpan={8} className="px-6 py-20 text-center">
                                                <motion.div
                                                    animate={{ rotate: 360 }}
                                                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                                    className="inline-block w-12 h-12 border-4 border-gray-200 border-t-red-600 rounded-full"
                                                />
                                                <p className="text-gray-500 mt-4">Loading registrations...</p>
                                            </td>
                                        </motion.tr>
                                    ) : regs.length === 0 ? (
                                        <motion.tr
                                            key="empty"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                        >
                                            <td colSpan={8} className="px-6 py-20 text-center">
                                                <div className="text-6xl mb-4">📭</div>
                                                <p className="text-gray-500 font-medium">No registrations found</p>
                                            </td>
                                        </motion.tr>
                                    ) : (
                                        regs.map((reg, idx) => (
                                            <motion.tr
                                                key={reg.id}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: idx * 0.05 }}
                                                className="border-b border-gray-100 hover:bg-yellow-50/50 transition-colors duration-200"
                                            >
                                                <td className="px-6 py-4 text-sm text-gray-500 font-semibold">
                                                    {(page - 1) * 10 + idx + 1}
                                                </td>
                                                <td className="px-6 py-4">
                                                    <span className="font-mono text-sm font-bold text-red-600 bg-red-50 px-3 py-1 rounded-lg">
                                                        {reg.rollNumber}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <div>
                                                        <div className="font-bold text-gray-900">{reg.studentName}</div>
                                                        {reg.fatherName && (
                                                            <div className="text-xs text-gray-500">S/D of {reg.fatherName}</div>
                                                        )}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-yellow-100 text-red-700 border border-yellow-200">
                                                        {reg.class}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 max-w-xs">
                                                    <div>
                                                        <div className="text-sm text-gray-900 font-medium">{reg.school}</div>
                                                        {(reg.village || reg.district) && (
                                                            <div className="text-xs text-gray-500">
                                                                {[reg.village, reg.district].filter(Boolean).join(", ")}
                                                            </div>
                                                        )}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 text-sm text-gray-600">{reg.phone}</td>
                                                <td className="px-6 py-4 text-xs text-gray-500 whitespace-nowrap">
                                                    {reg.createdAt
                                                        ? new Date(reg.createdAt).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" })
                                                        : "—"}
                                                </td>
                                                <td className="px-6 py-4">
                                                    <motion.button
                                                        onClick={() => downloadAdmitCard(reg.id, reg.rollNumber)}
                                                        disabled={downloadingId === reg.id}
                                                        whileHover={{ scale: downloadingId === reg.id ? 1 : 1.05 }}
                                                        whileTap={{ scale: downloadingId === reg.id ? 1 : 0.95 }}
                                                        className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-xs whitespace-nowrap"
                                                    >
                                                        {downloadingId === reg.id ? (
                                                            <>
                                                                <motion.div
                                                                    animate={{ rotate: 360 }}
                                                                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                                                    className="w-3 h-3 border-2 border-white border-t-transparent rounded-full"
                                                                />
                                                                <span>Generating...</span>
                                                            </>
                                                        ) : (
                                                            <>
                                                                <Download className="w-4 h-4" />
                                                                <span>Admit Card</span>
                                                            </>
                                                        )}
                                                    </motion.button>
                                                </td>
                                            </motion.tr>
                                        ))
                                    )}
                                </AnimatePresence>
                            </tbody>
                        </table>
                    </div>
                </motion.div>

                {!loading && totalPages > 1 && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="flex items-center justify-center gap-3 mt-8"
                    >
                        <motion.button
                            onClick={() => setPage((p) => Math.max(1, p - 1))}
                            disabled={page === 1}
                            whileHover={{ scale: page === 1 ? 1 : 1.05 }}
                            whileTap={{ scale: page === 1 ? 1 : 0.95 }}
                            className="px-4 py-2 bg-white border-2 border-gray-200 rounded-xl font-semibold text-gray-700 hover:border-red-600 hover:text-red-600 transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-2"
                        >
                            <ChevronLeft className="w-4 h-4" />
                            Previous
                        </motion.button>

                        <div className="flex items-center gap-2">
                            {Array.from({ length: totalPages }, (_, i) => i + 1)
                                .filter((p) => p === 1 || p === totalPages || Math.abs(p - page) <= 2)
                                .reduce((acc: (number | "…")[], p, i, arr) => {
                                    if (i > 0 && p - (arr[i - 1] as number) > 1) acc.push("…");
                                    acc.push(p);
                                    return acc;
                                }, [])
                                .map((p, i) =>
                                    p === "…" ? (
                                        <span key={`ellipsis-${i}`} className="text-gray-400 px-2">…</span>
                                    ) : (
                                        <motion.button
                                            key={p}
                                            onClick={() => setPage(p as number)}
                                            whileHover={{ scale: page === p ? 1 : 1.1 }}
                                            whileTap={{ scale: page === p ? 1 : 0.9 }}
                                            className={`w-10 h-10 rounded-xl font-bold transition-all duration-300 ${page === p
                                                    ? "bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg"
                                                    : "bg-white text-gray-700 border-2 border-gray-200 hover:border-red-600 hover:text-red-600"
                                                }`}
                                        >
                                            {p}
                                        </motion.button>
                                    )
                                )}
                        </div>

                        <motion.button
                            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                            disabled={page === totalPages}
                            whileHover={{ scale: page === totalPages ? 1 : 1.05 }}
                            whileTap={{ scale: page === totalPages ? 1 : 0.95 }}
                            className="px-4 py-2 bg-white border-2 border-gray-200 rounded-xl font-semibold text-gray-700 hover:border-red-600 hover:text-red-600 transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-2"
                        >
                            Next
                            <ChevronRight className="w-4 h-4" />
                        </motion.button>
                    </motion.div>
                )}

                {!loading && data && (
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="text-center text-sm text-gray-500 mt-6"
                    >
                        Showing {regs.length === 0 ? 0 : (page - 1) * 10 + 1}–{Math.min(page * 10, total)} of {total} registrations
                    </motion.p>
                )}
            </main>
        </div>
    );
}