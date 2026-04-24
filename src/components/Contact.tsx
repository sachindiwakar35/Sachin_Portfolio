import { Check, Mail, User, MessageSquare, Plane } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import "./styles/Contact.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { playClickSound } from "../utils/sound";
gsap.registerPlugin(ScrollTrigger);


type FormData = {
    name: string;
    email: string;
    message: string;
};

type TouchedFields = {
    name: boolean;
    email: boolean;
    message: boolean;
};

export default function Contact() {

const sectionRef = useRef(null);
    useEffect(() => {
        const el = sectionRef.current;
        gsap.fromTo(el,
            {
                opacity: 0,
                y: 100,
            },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: el,
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                },
            }
        );
    }, []);
    const formRef = useRef<HTMLFormElement>(null);
    const [form, setForm] = useState<FormData>({
        name: "",
        email: "",
        message: "",
    });
    const [touched, setTouched] = useState<TouchedFields>({
        name: false,
        email: false,
        message: false,
    });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    // Validation helpers
    const validateName = (name: string) => name.trim().length >= 2;
    const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const validateMessage = (message: string) => message.trim().length >= 10;

    const isNameValid = validateName(form.name);
    const isEmailValid = validateEmail(form.email);
    const isMessageValid = validateMessage(form.message);
    const isFormValid = isNameValid && isEmailValid && isMessageValid;

    const getEmailError = () => {
        if (!touched.email) return "";
        if (!form.email) return "Email is required";
        if (!isEmailValid) return "Invalid email format";
        return "";
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setTouched({ ...touched, [e.target.name]: true });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // Mark all fields as touched on submit attempt
        setTouched({ name: true, email: true, message: true });
        if (!isFormValid) return;
        // playClickSound();
        setLoading(true);
        try {
            await emailjs.send(
                "sachin_711",
                "template_efyy2jj",
                {
                    name: form.name,
                    email: form.email,
                    message: form.message,
                },
                "Q_fAyaasozlzoHXby",
            );
            setForm({ name: "", email: "", message: "" });
            setTouched({ name: false, email: false, message: false });
            setSuccess(true);
            setTimeout(() => setSuccess(false), 5000);
        } catch (error) {
            console.error(error);
            // Optional: add a user-facing error state here
        } finally {
            setLoading(false);
        }
    };

    const characterCount = form.message.length;
    const isMessageNearLimit = characterCount > 450;
    const isMessageAtLimit = characterCount >= 500;

    return (
        <section ref={sectionRef} id="sachin2-contact" className="sachin2-contact page-section">
            <div className="sachin2-contact-bg-blob sachin2-contact-bg-blob-1" />
            <div className="sachin2-contact-bg-blob sachin2-contact-bg-blob-2" />
            
            <div className="sachin2-contact-container">
                {/* Left Side - Form */}
                <div className="sachin2-contact-form-card sachin2-glass-card">
                    {success ? (
                        <div className="sachin2-success-box">
                            <div className="sachin2-success-icon">
                                <Check size={40} strokeWidth={1.5} />
                            </div>
                            <h3>Message Sent!</h3>
                            <p>Thanks for reaching out. I'll get back to you within 24 hours 🚀</p>
                            <button 
                                className="sachin2-success-btn"
                                onClick={() => setSuccess(false)}
                            >
                                Send Another Message
                            </button>
                        </div>
                    ) : (
                        <form ref={formRef} onSubmit={handleSubmit} className="sachin2-contact-form" noValidate>
                            <div className="sachin2-form-header">
                                <Mail size={30}/>
                                <h2>Send a Mail</h2>
                                <p>Fill out the form below and I'll respond promptly.</p>
                            </div>

                            <div className="sachin2-input-group">
                                <div className="sachin2-input-icon">
                                    <User size={18} />
                                </div>
                                <input
                                    type="text"
                                    name="name"
                                    id="sachin2-name"
                                    placeholder=" "
                                    value={form.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={touched.name && !isNameValid ? "sachin2-error" : ""}
                                />
                                <label htmlFor="sachin2-name">Full Name</label>
                                {touched.name && !isNameValid && (
                                    <span className="sachin2-error-message">Name must be at least 2 characters</span>
                                )}
                            </div>

                            <div className="sachin2-input-group">
                                <div className="sachin2-input-icon">
                                    <Mail size={18} />
                                </div>
                                <input
                                    type="email"
                                    name="email"
                                    id="sachin2-email"
                                    placeholder=" "
                                    value={form.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={touched.email && !isEmailValid ? "sachin2-error" : ""}
                                />
                                <label htmlFor="sachin2-email">Email Address</label>
                                {touched.email && getEmailError() && (
                                    <span className="sachin2-error-message">{getEmailError()}</span>
                                )}
                            </div>

                            <div className="sachin2-input-group sachin2-textarea-group">
                                <div className="sachin2-input-icon">
                                    <MessageSquare size={18} />
                                </div>
                                <textarea
                                    name="message"
                                    id="sachin2-message"
                                    placeholder=" "
                                    rows={4}
                                    value={form.message}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    maxLength={500}
                                    className={touched.message && !isMessageValid ? "sachin2-error" : ""}
                                />
                                <label htmlFor="sachin2-message">Your Message</label>
                                <div className="sachin2-char-counter">
                                    <span className={isMessageAtLimit ? "sachin2-limit-error" : isMessageNearLimit ? "sachin2-limit-warning" : ""}>
                                        {characterCount}/500
                                    </span>
                                    {touched.message && !isMessageValid && (
                                        <span className="sachin2-error-message">Message must be at least 10 characters</span>
                                    )}
                                </div>
                            </div>

                            <button 
                                type="submit" 
                                className={`sachin2-submit-btn ${loading ? "sachin2-loading" : ""} ${!isFormValid && (touched.name || touched.email || touched.message) ? "sachin2-disabled" : ""}`}
                                disabled={loading}
                            >
                                {loading ? (
                                    <>
                                        <span className="sachin2-loader"></span>
                                        <span>Sending...</span>
                                    </>
                                ) : (
                                    <>
                                        Send Message
                                        <Mail size={16} className="sachin2-btn-icon" />
                                    </>
                                )}
                            </button>
                        </form>
                    )}
                </div>

                {/* Right Side - Info Panel */}
                <div className="sachin2-contact-info sachin2-glass-card">
                    <div className="sachin2-availability-badge">
                        <span className="sachin2-status-dot"></span>
                        Open for Internships & Freelance
                    </div>
                    <h2>Let's Work Together</h2>
                    <p>
                        Actively learning and improving every day.<br/>
                        Currently open to internships, freelance work, and collaboration opportunities.
                        Let's build something great together <Plane size={20}/>
                    </p>
                    
                    <div className="sachin2-info-stats">
                        <div className="sachin2-stat">
                            <span className="sachin2-stat-number">6+</span>
                            <span className="sachin2-stat-label">Projects Completed</span>
                        </div>
                    </div>

                    <div className="sachin2-contact-links">
                        <a 
                            href="https://github.com/sachindiwakar35" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="sachin2-social-link sachin2-github"
                            // onClick={playClickSound}
                        >
                            <span>GitHub</span>
                            <span className="sachin2-link-arrow">→</span>
                        </a>
                        <a 
                            href="https://www.linkedin.com/in/sachin-diwakar-604aa5338" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="sachin2-social-link sachin2-linkedin"
                            // onClick={playClickSound}
                        >
                            <span>LinkedIn</span>
                            <span className="sachin2-link-arrow">→</span>
                        </a>
                    </div>

                    <div className="sachin2-contact-footer">
                        <p>📍 India · Global Mindset, Local Roots</p>
                    </div>
                </div>
            </div>
        </section>
    );
}