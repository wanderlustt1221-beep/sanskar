"use client";

import { useState } from "react";
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

type FormData = {
    studentName: string;
    fatherName: string;
    motherName: string;
    gender: string;
    dob: string;
    school: string;
    class: string;
    village: string;
    district: string;
    pincode: string;
    aadhar: string;
    phone: string;
};

export default function ScholarshipExamPage() {
    const [formData, setFormData] = useState<FormData>({
        studentName: "",
        fatherName: "",
        motherName: "",
        gender: "",
        dob: "",
        school: "",
        class: "",
        village: "",
        district: "",
        pincode: "",
        aadhar: "",
        phone: "",
    });

    const [errors, setErrors] = useState<any>({});
    const [submitted, setSubmitted] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);

    const schools = [
        "Sanskar Group of Education",
        "Swami Nityanand International Academy",
        "Aryan International School",
        "Shyam Children Academy",
        "Swami Nityanand Academy - Hindi Medium",
        "Govt. Sen. Sec. School",
        "Mahatma Gandhi Govt. Sen. Sec. School",
        "Adarsh Vidya Mandir School",
    ];

    const classes = [
        "3rd", "4th", "5th", "6th", "7th", "8th", "9th", "10th",
    ];

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        if (errors[e.target.name]) {
            setErrors((prev: any) => ({ ...prev, [e.target.name]: undefined }));
        }
    };

    const validate = () => {
        let newErrors: any = {};

        Object.entries(formData).forEach(([key, value]) => {
            if (!value) newErrors[key] = "This field is required";
        });

        if (formData.aadhar && !/^\d{12}$/.test(formData.aadhar))
            newErrors.aadhar = "Aadhar must be exactly 12 digits";

        if (formData.phone && !/^\d{10}$/.test(formData.phone))
            newErrors.phone = "Phone must be exactly 10 digits";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;

        setLoading(true);

        const res = await fetch("/api/scholarship/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        if (!res.ok) {
            const data = await res.json();
            setLoading(false);
            alert(data.error);
            return;
        }

        const blob = await res.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "AdmitCard.pdf";
        a.click();

        setLoading(false);
        setSubmitted(true);
    };

    const benefitCards = [
        { icon: "🎓", title: "50% Fee Waiver", desc: "Merit-based financial assistance for top scorers" },
        { icon: "📜", title: "Merit Certificate", desc: "Official recognition of academic excellence" },
        { icon: "⭐", title: "Special Recognition", desc: "Felicitation at annual award ceremony" },
    ];

    const examDetails = [
        { label: "Exam Date", value: "8 March 2026" },
        { label: "Duration", value: "2 Hours" },
        { label: "Mode", value: "Offline" },
        { label: "Syllabus", value: "Previous Class Curriculum" },
    ];

    return (
        <div className="scholarship-page">
            <Navbar />

            {/* HERO SECTION */}
            <section className="hero-section">
                <div className="hero-bg-pattern" />
                <div className="hero-content">
                    <div className="hero-badge">
                        <span className="badge-dot" />
                        Free Registration &nbsp;•&nbsp; Exam Date: 8 March 2026
                    </div>
                    <h1 className="hero-title">
                        Scholarship<br />Examination<br />
                        <span className="hero-title-accent">2026</span>
                    </h1>
                    <p className="hero-sub">
                        Empowering bright minds from Class 3rd to 10th with academic recognition and financial support.
                    </p>
                    <a href="#registration" className="hero-cta">
                        Register Now — It's Free
                        <span className="cta-arrow">→</span>
                    </a>
                </div>
                <div className="hero-stats">
                    <div className="stat-item">
                        <span className="stat-num">8</span>
                        <span className="stat-label">Classes</span>
                    </div>
                    <div className="stat-divider" />
                    <div className="stat-item">
                        <span className="stat-num">₹0</span>
                        <span className="stat-label">Registration Fee</span>
                    </div>
                    <div className="stat-divider" />
                    <div className="stat-item">
                        <span className="stat-num">50%</span>
                        <span className="stat-label">Max Scholarship</span>
                    </div>
                </div>
            </section>

            {/* ABOUT SECTION */}
            <section className="about-section">
                <div className="section-inner">
                    <div className="section-label">About the Program</div>
                    <h2 className="section-title">Nurturing Excellence,<br />Building Futures</h2>
                    <p className="about-text">
                        The Sanskar Scholarship Examination 2026 is designed to identify and nurture
                        bright students by providing financial assistance and recognition. Rooted in
                        academic rigor, the exam is based on the previous class curriculum and
                        encourages excellence across all core subjects.
                    </p>
                </div>
            </section>

            {/* BENEFITS */}
            <section className="benefits-section">
                <div className="section-inner wide">
                    <div className="section-label">Why Register</div>
                    <h2 className="section-title">Scholarship Benefits</h2>
                    <div className="benefits-grid">
                        {benefitCards.map((card, i) => (
                            <div key={i} className="benefit-card">
                                <div className="benefit-icon">{card.icon}</div>
                                <h3 className="benefit-title">{card.title}</h3>
                                <p className="benefit-desc">{card.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ELIGIBILITY + EXAM DETAILS */}
            <section className="info-section">
                <div className="section-inner wide info-grid">
                    <div className="info-card">
                        <div className="info-card-label">Eligibility</div>
                        <h3 className="info-card-title">Who Can Apply?</h3>
                        <ul className="info-list">
                            <li>Students in Class 3rd to 10th</li>
                            <li>Enrolled in any recognized school</li>
                            <li>Free registration for all eligible students</li>
                        </ul>
                    </div>
                    <div className="info-card accent">
                        <div className="info-card-label">Exam Details</div>
                        <h3 className="info-card-title">Examination Info</h3>
                        <div className="exam-details-list">
                            {examDetails.map((d, i) => (
                                <div key={i} className="exam-detail-row">
                                    <span className="exam-detail-label">{d.label}</span>
                                    <span className="exam-detail-value">{d.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* REGISTRATION FORM */}
            <section id="registration" className="form-section">
                <div className="section-inner wide">
                    {!submitted ? (
                        <>
                            <div className="form-header">
                                <div className="section-label">Step 1 of 1</div>
                                <h2 className="section-title">Registration Form</h2>
                                <p className="form-sub">Fill in the details below. Your admit card will be downloaded automatically upon successful registration.</p>
                            </div>

                            <form onSubmit={handleSubmit} className="registration-form" noValidate>

                                {/* Personal Details */}
                                <div className="form-section-label">Personal Details</div>
                                <div className="form-grid">
                                    <div className="field-group">
                                        <label className="field-label">Student Name <span className="required">*</span></label>
                                        <input
                                            type="text"
                                            name="studentName"
                                            placeholder="Enter full name"
                                            onChange={handleChange}
                                            className={`field-input ${errors.studentName ? 'field-error' : ''}`}
                                        />
                                        {errors.studentName && <span className="error-msg">{errors.studentName}</span>}
                                    </div>

                                    <div className="field-group">
                                        <label className="field-label">Father's Name <span className="required">*</span></label>
                                        <input
                                            type="text"
                                            name="fatherName"
                                            placeholder="Enter father's name"
                                            onChange={handleChange}
                                            className={`field-input ${errors.fatherName ? 'field-error' : ''}`}
                                        />
                                        {errors.fatherName && <span className="error-msg">{errors.fatherName}</span>}
                                    </div>

                                    <div className="field-group">
                                        <label className="field-label">Mother's Name <span className="required">*</span></label>
                                        <input
                                            type="text"
                                            name="motherName"
                                            placeholder="Enter mother's name"
                                            onChange={handleChange}
                                            className={`field-input ${errors.motherName ? 'field-error' : ''}`}
                                        />
                                        {errors.motherName && <span className="error-msg">{errors.motherName}</span>}
                                    </div>

                                    <div className="field-group">
                                        <label className="field-label">Gender <span className="required">*</span></label>
                                        <select
                                            name="gender"
                                            onChange={handleChange}
                                            className={`field-input ${errors.gender ? 'field-error' : ''}`}
                                        >
                                            <option value="">Select Gender</option>
                                            <option>Male</option>
                                            <option>Female</option>
                                        </select>
                                        {errors.gender && <span className="error-msg">{errors.gender}</span>}
                                    </div>

                                    <div className="field-group">
                                        <label className="field-label">Date of Birth <span className="required">*</span></label>
                                        <input
                                            type="date"
                                            name="dob"
                                            onChange={handleChange}
                                            className={`field-input ${errors.dob ? 'field-error' : ''}`}
                                        />
                                        {errors.dob && <span className="error-msg">{errors.dob}</span>}
                                    </div>
                                </div>

                                {/* Academic Details */}
                                <div className="form-section-label" style={{ marginTop: "2rem" }}>Academic Details</div>
                                <div className="form-grid">
                                    <div className="field-group">
                                        <label className="field-label">Current School <span className="required">*</span></label>
                                        <input
                                            type="text"
                                            name="school"
                                            list="school-list"
                                            placeholder="Type or select school name"
                                            value={formData.school}
                                            onChange={handleChange}
                                            className={`field-input ${errors.school ? 'field-error' : ''}`}
                                            autoComplete="off"
                                        />
                                        <datalist id="school-list">
                                            {schools.map((s, i) => (
                                                <option key={i} value={s} />
                                            ))}
                                        </datalist>
                                        {errors.school && <span className="error-msg">{errors.school}</span>}
                                    </div>

                                    <div className="field-group">
                                        <label className="field-label">Class <span className="required">*</span></label>
                                        <select
                                            name="class"
                                            onChange={handleChange}
                                            className={`field-input ${errors.class ? 'field-error' : ''}`}
                                        >
                                            <option value="">Select Class</option>
                                            {classes.map((c, i) => (
                                                <option key={i}>{c}</option>
                                            ))}
                                        </select>
                                        {errors.class && <span className="error-msg">{errors.class}</span>}
                                    </div>
                                </div>

                                {/* Location Details */}
                                <div className="form-section-label" style={{ marginTop: "2rem" }}>Location Details</div>
                                <div className="form-grid">
                                    <div className="field-group">
                                        <label className="field-label">Village <span className="required">*</span></label>
                                        <input
                                            type="text"
                                            name="village"
                                            placeholder="Enter village name"
                                            onChange={handleChange}
                                            className={`field-input ${errors.village ? 'field-error' : ''}`}
                                        />
                                        {errors.village && <span className="error-msg">{errors.village}</span>}
                                    </div>

                                    <div className="field-group">
                                        <label className="field-label">District <span className="required">*</span></label>
                                        <input
                                            type="text"
                                            name="district"
                                            placeholder="Enter district"
                                            onChange={handleChange}
                                            className={`field-input ${errors.district ? 'field-error' : ''}`}
                                        />
                                        {errors.district && <span className="error-msg">{errors.district}</span>}
                                    </div>

                                    <div className="field-group">
                                        <label className="field-label">Pincode <span className="required">*</span></label>
                                        <input
                                            type="text"
                                            name="pincode"
                                            inputMode="numeric"
                                            placeholder="Enter 6-digit pincode"
                                            onChange={handleChange}
                                            className={`field-input ${errors.pincode ? 'field-error' : ''}`}
                                        />
                                        {errors.pincode && <span className="error-msg">{errors.pincode}</span>}
                                    </div>
                                </div>

                                {/* Identity Details */}
                                <div className="form-section-label" style={{ marginTop: "2rem" }}>Identity & Contact</div>
                                <div className="form-grid">
                                    <div className="field-group">
                                        <label className="field-label">Aadhar Number <span className="required">*</span></label>
                                        <input
                                            type="text"
                                            name="aadhar"
                                            inputMode="numeric"
                                            placeholder="Enter 12-digit Aadhar number"
                                            onChange={handleChange}
                                            className={`field-input ${errors.aadhar ? 'field-error' : ''}`}
                                        />
                                        {errors.aadhar && <span className="error-msg">{errors.aadhar}</span>}
                                    </div>

                                    <div className="field-group">
                                        <label className="field-label">Contact Number <span className="required">*</span></label>
                                        <input
                                            type="text"
                                            name="phone"
                                            inputMode="numeric"
                                            placeholder="Enter 10-digit mobile number"
                                            onChange={handleChange}
                                            className={`field-input ${errors.phone ? 'field-error' : ''}`}
                                        />
                                        {errors.phone && <span className="error-msg">{errors.phone}</span>}
                                    </div>
                                </div>

                                <div className="form-footer">
                                    <p className="form-note">
                                        📄 Your admit card (PDF) will be automatically downloaded after successful registration.
                                    </p>
                                    <button
                                        type="submit"
                                        className={`submit-btn ${loading ? 'loading' : ''}`}
                                        disabled={loading}
                                    >
                                        {loading ? (
                                            <span className="btn-inner">
                                                <span className="spinner" />
                                                Generating Admit Card...
                                            </span>
                                        ) : (
                                            <span className="btn-inner">
                                                Submit & Download Admit Card
                                                <span className="btn-arrow">↓</span>
                                            </span>
                                        )}
                                    </button>
                                </div>
                            </form>
                        </>
                    ) : (
                        <div className="success-card">
                            <div className="success-icon">✅</div>
                            <h2 className="success-title">Registration Successful!</h2>
                            <p className="success-msg">
                                Your admit card has been downloaded to your device.
                            </p>
                            <p className="success-hint">
                                Please check your <strong>Downloads</strong> folder. Carry the printed admit card on exam day.
                            </p>
                            <div className="success-detail">
                                <span>📅 Exam Date: 8 March 2026</span>
                                <span>📍 Sanskar School, Danta, Sikar</span>
                                <span>⏰ Reporting Time: 9:00 AM</span>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            <Footer />

            <style jsx>{`
                /* ======== BASE ======== */
                .scholarship-page {
                    font-family: 'Georgia', 'Times New Roman', serif;
                    background: #fef9f0;
                    color: #1a1a2e;
                    min-height: 100vh;
                }

                /* ======== HERO ======== */
                .hero-section {
                    background: linear-gradient(135deg, #b91c1c 0%, #991b1b 40%, #7f1d1d 100%);
                    color: white;
                    padding: 100px 24px 60px;
                    position: relative;
                    overflow: hidden;
                }
                .hero-bg-pattern {
                    position: absolute;
                    inset: 0;
                    background-image: radial-gradient(circle at 20% 80%, rgba(250,204,21,0.08) 0%, transparent 50%),
                                      radial-gradient(circle at 80% 20%, rgba(255,255,255,0.04) 0%, transparent 50%);
                    pointer-events: none;
                }
                .hero-content {
                    max-width: 720px;
                    margin: 0 auto;
                    text-align: center;
                    position: relative;
                    z-index: 1;
                }
                .hero-badge {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    background: rgba(250,204,21,0.15);
                    border: 1px solid rgba(250,204,21,0.4);
                    color: #fde68a;
                    padding: 8px 20px;
                    border-radius: 100px;
                    font-size: 0.85rem;
                    font-family: 'Arial', sans-serif;
                    font-weight: 600;
                    letter-spacing: 0.03em;
                    margin-bottom: 28px;
                }
                .badge-dot {
                    width: 7px;
                    height: 7px;
                    background: #facc15;
                    border-radius: 50%;
                    animation: pulse 1.8s ease-in-out infinite;
                }
                @keyframes pulse {
                    0%, 100% { opacity: 1; transform: scale(1); }
                    50% { opacity: 0.5; transform: scale(0.8); }
                }
                .hero-title {
                    font-size: clamp(2.8rem, 6vw, 5rem);
                    font-weight: 900;
                    line-height: 1.05;
                    letter-spacing: -0.02em;
                    margin-bottom: 20px;
                }
                .hero-title-accent {
                    color: #facc15;
                    display: inline-block;
                }
                .hero-sub {
                    font-size: 1.1rem;
                    color: rgba(255,255,255,0.75);
                    max-width: 500px;
                    margin: 0 auto 36px;
                    line-height: 1.7;
                    font-family: 'Arial', sans-serif;
                }
                .hero-cta {
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                    background: #facc15;
                    color: #7f1d1d;
                    padding: 16px 36px;
                    border-radius: 100px;
                    font-weight: 800;
                    font-size: 1rem;
                    font-family: 'Arial', sans-serif;
                    text-decoration: none;
                    transition: transform 0.2s ease, box-shadow 0.2s ease;
                    box-shadow: 0 4px 20px rgba(250,204,21,0.35);
                }
                .hero-cta:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 8px 32px rgba(250,204,21,0.5);
                }
                .cta-arrow {
                    font-size: 1.2rem;
                    transition: transform 0.2s ease;
                }
                .hero-cta:hover .cta-arrow {
                    transform: translateX(4px);
                }
                .hero-stats {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 0;
                    margin-top: 60px;
                    background: rgba(255,255,255,0.08);
                    border: 1px solid rgba(255,255,255,0.12);
                    border-radius: 16px;
                    padding: 20px 0;
                    max-width: 480px;
                    margin-left: auto;
                    margin-right: auto;
                    position: relative;
                    z-index: 1;
                }
                .stat-item {
                    flex: 1;
                    text-align: center;
                }
                .stat-num {
                    display: block;
                    font-size: 2rem;
                    font-weight: 900;
                    color: #facc15;
                    line-height: 1;
                }
                .stat-label {
                    display: block;
                    font-size: 0.72rem;
                    color: rgba(255,255,255,0.6);
                    font-family: 'Arial', sans-serif;
                    letter-spacing: 0.05em;
                    text-transform: uppercase;
                    margin-top: 4px;
                }
                .stat-divider {
                    width: 1px;
                    height: 40px;
                    background: rgba(255,255,255,0.2);
                }

                /* ======== SHARED SECTION STYLES ======== */
                .section-inner {
                    max-width: 720px;
                    margin: 0 auto;
                    padding: 0 24px;
                }
                .section-inner.wide {
                    max-width: 1100px;
                }
                .section-label {
                    font-size: 0.72rem;
                    letter-spacing: 0.12em;
                    text-transform: uppercase;
                    color: #b91c1c;
                    font-family: 'Arial', sans-serif;
                    font-weight: 700;
                    margin-bottom: 10px;
                }
                .section-title {
                    font-size: clamp(1.8rem, 3.5vw, 2.8rem);
                    font-weight: 900;
                    color: #1a1a2e;
                    line-height: 1.15;
                    margin-bottom: 20px;
                    letter-spacing: -0.01em;
                }

                /* ======== ABOUT ======== */
                .about-section {
                    padding: 80px 24px;
                    text-align: center;
                }
                .about-text {
                    font-size: 1.1rem;
                    color: #4b5563;
                    line-height: 1.8;
                    font-family: 'Arial', sans-serif;
                    max-width: 640px;
                    margin: 0 auto;
                }

                /* ======== BENEFITS ======== */
                .benefits-section {
                    padding: 0 24px 80px;
                }
                .benefits-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                    gap: 24px;
                    margin-top: 36px;
                }
                .benefit-card {
                    background: white;
                    border: 1px solid #f3e8d0;
                    border-radius: 20px;
                    padding: 36px 28px;
                    transition: transform 0.25s ease, box-shadow 0.25s ease;
                    position: relative;
                    overflow: hidden;
                }
                .benefit-card::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 4px;
                    background: linear-gradient(90deg, #b91c1c, #facc15);
                    border-radius: 20px 20px 0 0;
                }
                .benefit-card:hover {
                    transform: translateY(-4px);
                    box-shadow: 0 16px 48px rgba(0,0,0,0.1);
                }
                .benefit-icon {
                    font-size: 2.4rem;
                    margin-bottom: 16px;
                    display: block;
                }
                .benefit-title {
                    font-size: 1.2rem;
                    font-weight: 800;
                    color: #b91c1c;
                    margin-bottom: 10px;
                }
                .benefit-desc {
                    font-size: 0.9rem;
                    color: #6b7280;
                    font-family: 'Arial', sans-serif;
                    line-height: 1.6;
                }

                /* ======== INFO SECTION ======== */
                .info-section {
                    padding: 0 24px 80px;
                }
                .info-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
                    gap: 24px;
                }
                .info-card {
                    background: white;
                    border: 1px solid #e5e7eb;
                    border-radius: 20px;
                    padding: 40px 36px;
                }
                .info-card.accent {
                    background: linear-gradient(135deg, #b91c1c 0%, #991b1b 100%);
                    border-color: transparent;
                    color: white;
                }
                .info-card-label {
                    font-size: 0.7rem;
                    letter-spacing: 0.1em;
                    text-transform: uppercase;
                    font-family: 'Arial', sans-serif;
                    font-weight: 700;
                    margin-bottom: 8px;
                    color: #b91c1c;
                }
                .info-card.accent .info-card-label {
                    color: rgba(255,255,255,0.6);
                }
                .info-card-title {
                    font-size: 1.4rem;
                    font-weight: 800;
                    margin-bottom: 24px;
                    color: #1a1a2e;
                }
                .info-card.accent .info-card-title {
                    color: white;
                }
                .info-list {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    display: flex;
                    flex-direction: column;
                    gap: 14px;
                }
                .info-list li {
                    font-size: 0.95rem;
                    color: #374151;
                    font-family: 'Arial', sans-serif;
                    display: flex;
                    align-items: flex-start;
                    gap: 10px;
                    line-height: 1.5;
                }
                .info-list li::before {
                    content: '→';
                    color: #b91c1c;
                    font-weight: 700;
                    flex-shrink: 0;
                    margin-top: 1px;
                }
                .exam-details-list {
                    display: flex;
                    flex-direction: column;
                    gap: 14px;
                }
                .exam-detail-row {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding-bottom: 14px;
                    border-bottom: 1px solid rgba(255,255,255,0.15);
                    font-family: 'Arial', sans-serif;
                    font-size: 0.93rem;
                }
                .exam-detail-row:last-child {
                    border-bottom: none;
                    padding-bottom: 0;
                }
                .exam-detail-label {
                    color: rgba(255,255,255,0.65);
                }
                .exam-detail-value {
                    color: white;
                    font-weight: 700;
                }

                /* ======== FORM SECTION ======== */
                .form-section {
                    padding: 0 24px 100px;
                }
                .form-header {
                    text-align: center;
                    margin-bottom: 48px;
                }
                .form-sub {
                    font-size: 0.95rem;
                    color: #6b7280;
                    font-family: 'Arial', sans-serif;
                    max-width: 560px;
                    margin: 0 auto;
                    line-height: 1.7;
                }

                .registration-form {
                    background: white;
                    border-radius: 24px;
                    padding: 52px;
                    box-shadow: 0 4px 6px -1px rgba(0,0,0,0.04), 0 20px 60px -10px rgba(0,0,0,0.08);
                    border: 1px solid #f3f4f6;
                }

                .form-section-label {
                    font-size: 0.7rem;
                    letter-spacing: 0.12em;
                    text-transform: uppercase;
                    font-weight: 800;
                    color: #b91c1c;
                    font-family: 'Arial', sans-serif;
                    padding: 0 0 14px;
                    border-bottom: 2px solid #fef2f2;
                    margin-bottom: 24px;
                }

                .form-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
                    gap: 20px;
                }

                .field-group {
                    display: flex;
                    flex-direction: column;
                    gap: 7px;
                }

                .field-label {
                    font-size: 0.82rem;
                    font-weight: 700;
                    color: #374151;
                    font-family: 'Arial', sans-serif;
                    letter-spacing: 0.02em;
                }
                .required {
                    color: #b91c1c;
                }

                .field-input {
                    border: 1.5px solid #e5e7eb;
                    padding: 13px 16px;
                    border-radius: 12px;
                    font-size: 0.93rem;
                    font-family: 'Arial', sans-serif;
                    color: #1a1a2e;
                    background: #fafafa;
                    outline: none;
                    transition: border-color 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
                    width: 100%;
                    box-sizing: border-box;
                    appearance: auto;
                }
                .field-input:focus {
                    border-color: #b91c1c;
                    background: white;
                    box-shadow: 0 0 0 3px rgba(185,28,28,0.08);
                }
                .field-input.field-error {
                    border-color: #ef4444;
                    background: #fff5f5;
                }
                .field-input::placeholder {
                    color: #9ca3af;
                }
                .error-msg {
                    font-size: 0.76rem;
                    color: #ef4444;
                    font-family: 'Arial', sans-serif;
                    font-weight: 600;
                }

                .form-footer {
                    margin-top: 40px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 20px;
                }
                .form-note {
                    font-size: 0.83rem;
                    color: #6b7280;
                    font-family: 'Arial', sans-serif;
                    text-align: center;
                    background: #fef9f0;
                    border: 1px solid #fde68a;
                    padding: 12px 20px;
                    border-radius: 10px;
                    width: 100%;
                    box-sizing: border-box;
                }
                .submit-btn {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    background: linear-gradient(135deg, #b91c1c, #dc2626);
                    color: white;
                    padding: 18px 52px;
                    border-radius: 100px;
                    font-size: 1rem;
                    font-weight: 800;
                    font-family: 'Arial', sans-serif;
                    border: none;
                    cursor: pointer;
                    transition: transform 0.2s ease, box-shadow 0.2s ease, opacity 0.2s ease;
                    box-shadow: 0 4px 24px rgba(185,28,28,0.35);
                    width: auto;
                    min-width: 320px;
                }
                .submit-btn:hover:not(:disabled) {
                    transform: translateY(-2px);
                    box-shadow: 0 8px 32px rgba(185,28,28,0.45);
                }
                .submit-btn:active:not(:disabled) {
                    transform: translateY(0);
                }
                .submit-btn.loading {
                    opacity: 0.8;
                    cursor: not-allowed;
                    background: linear-gradient(135deg, #7f1d1d, #991b1b);
                }
                .btn-inner {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                }
                .btn-arrow {
                    font-size: 1.2rem;
                }
                .spinner {
                    width: 18px;
                    height: 18px;
                    border: 2px solid rgba(255,255,255,0.3);
                    border-top-color: white;
                    border-radius: 50%;
                    animation: spin 0.7s linear infinite;
                    display: inline-block;
                }
                @keyframes spin {
                    to { transform: rotate(360deg); }
                }

                /* ======== SUCCESS CARD ======== */
                .success-card {
                    background: white;
                    border-radius: 24px;
                    padding: 64px 52px;
                    text-align: center;
                    box-shadow: 0 4px 6px -1px rgba(0,0,0,0.04), 0 20px 60px -10px rgba(0,0,0,0.08);
                    max-width: 580px;
                    margin: 0 auto;
                    border: 1px solid #f0fdf4;
                }
                .success-icon {
                    font-size: 3.5rem;
                    margin-bottom: 20px;
                }
                .success-title {
                    font-size: 2rem;
                    font-weight: 900;
                    color: #15803d;
                    margin-bottom: 16px;
                }
                .success-msg {
                    font-size: 1.05rem;
                    color: #4b5563;
                    font-family: 'Arial', sans-serif;
                    line-height: 1.7;
                    margin-bottom: 8px;
                }
                .success-hint {
                    font-size: 0.88rem;
                    color: #6b7280;
                    font-family: 'Arial', sans-serif;
                    margin-bottom: 32px;
                }
                .success-detail {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                    background: #f9fafb;
                    border-radius: 14px;
                    padding: 20px 24px;
                    font-size: 0.9rem;
                    font-family: 'Arial', sans-serif;
                    color: #374151;
                    font-weight: 600;
                    text-align: left;
                }

                /* ======== RESPONSIVE ======== */
                @media (max-width: 640px) {
                    .hero-section { padding: 80px 20px 48px; }
                    .hero-stats { flex-wrap: wrap; gap: 16px; }
                    .registration-form { padding: 28px 20px; }
                    .submit-btn { min-width: 100%; width: 100%; }
                    .success-card { padding: 40px 24px; }
                    .form-grid { grid-template-columns: 1fr; }
                }
            `}</style>
        </div>
    );
}