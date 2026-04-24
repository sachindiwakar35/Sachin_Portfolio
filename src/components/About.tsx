import { useEffect, useRef, useState } from 'react';
import './styles/About.css';
import { Code, Award, Briefcase, GraduationCap, Sparkles, Zap, TrendingUp, User, Mail, MapPin, Calendar } from 'lucide-react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { playClickSound } from '../utils/sound';
gsap.registerPlugin(ScrollTrigger);

type AboutProps = {
  imageUrl?: string;
};

interface StatItem {
  value: string;
  label: string;
  icon: React.ReactNode;
}

interface HighlightItem {
  text: string;
  category?: string;
}

const About: React.FC<AboutProps> = ({ imageUrl }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const sectionRef = useRef<HTMLElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  
  useEffect(() => {
    const el = sectionRef.current;
    gsap.fromTo(
      el,
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
  
  const skillTags: string[] = [
    "React", "JavaScript", "TypeScript", 
    "Node.js", "Express.js", 
    "MongoDB", "MySQL",
    "JWT Auth", "REST APIs",
    "HTML", "CSS", "Tailwind",
    "Git & GitHub", "PostMan"
  ];

  const statsData: StatItem[] = [
    { value: "8+", label: "Projects Completed", icon: <Code size={20} /> },
    { value: "25584", label: "GATE Rank", icon: <TrendingUp size={20} /> },
    { value: "8.33", label: "Current CGPA", icon: <Award size={20} /> },
    { value: "2+", label: "Hackathons", icon: <Zap size={20} /> }
  ];

  const highlightData: HighlightItem[] = [
    {
      text: "Qualified GATE 2026 (CSE) with Score: 363, Marks: 31.08, and AIR: 25,584 among 100K+ candidates, demonstrating strong Computer Science fundamentals across algorithms, operating systems, and core systems.",
      category: "achievement"
    },
    {
      text: "Ranked #45 nationally in Unstop Weekly Coding Contest #12 among thousands of competitive programmers, reflecting strong coding speed and problem-solving ability.",
      category: "competition"
    },
    {
      text: "Participated in Smart India Hackathon (SIH) 2025, delivering a telemedicine application designed for rural ASHA workers under national-level competition conditions.",
      category: "hackathon"
    },
    {
      text: "Participated in IBM Hackathon 2025, building an AI-assisted solution under strict time constraints in a competitive enterprise environment.",
      category: "hackathon"
    },
    {
      text: "Successfully completed the Backend Challenge involving recursion-based problem solving, secure GitHub Gist submission, and authenticated API validation.",
      category: "certification"
    }
  ];

  const educationData = [
    {
      degree: "B.Tech Computer Science",
      institution: "Current University : AKTU",
      year: "2023 - 2027",
      details: "6th Semester | 8.33 CGPA (Till 5th Sem)",
      icon: <GraduationCap size={18} />
    },
    {
      degree: "Class 12th",
      institution: "UP Board (UPMSP)",
      year: "2022 - 2023",
      details: "Scored 70%",
      icon: <GraduationCap size={18} />
    },
    {
      degree: "Class 10th",
      institution: "UP Board (UPMSP)",
      year: "2020 - 2021",
      details: "Scored 72.5%",
      icon: <GraduationCap size={18} />
    }
  ];

  const journeyData = [
    {
      title: "Started Coding Journey",
      year: "2023",
      description: "Started with curiosity, stayed for the challenge—learning web development and core programming skills.",
      icon: <Sparkles size={18} />
    },
    {
      title: "Competitive Growth",
      year: "2024-2025",
      description: "Participated in IBM Hackathon and multiple competitions, sharpening teamwork, creativity, and fast problem-solving skills.",
      icon: <Award size={18} />
    },
    {
      title: "First Full-Stack Build",
      year: "2025-2026",
      description: "Built my first MERN stack application, transforming ideas into a fully functional product end to end.",
      icon: <Code size={18} />
    },
    {
      title: "Current Mission",
      year: "2025",
      description: "Focused on full-stack mastery, competitive programming, and building secure, scalable systems that turn ambitious ideas into polished products.",
      icon: <TrendingUp size={18} />
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const handleDownloadResume = () => {
    // playClickSound();
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Resume_SachinDiwakar.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleContactClick = () => {
    // playClickSound();

    const message = encodeURIComponent(
      "Hi Sachin, I visited your portfolio and was impressed by your work. I’d like to connect with you regarding an opportunity/project. Looking forward to hearing from you."
    );

    window.open(
      `https://wa.me/917895838237?text=${message}`,
      "_blank"
    );
  };

  const getCategoryColor = (category?: string) => {
    switch(category) {
      case 'competition': return 'var(--gradient-start)';
      case 'hackathon': return 'var(--gradient-end)';
      case 'certification': return '#10b981';
      default: return 'var(--gradient-start)';
    }
  };

  return (
    <section ref={sectionRef} id="about" className="sachin1-about-section page-section">
      <div className="sachin1-about-bg-blob sachin1-about-bg-blob-1"></div>
      <div className="sachin1-about-bg-blob sachin1-about-bg-blob-2"></div>
      
      <div className="sachin1-about-container">
        {/* Left Column - Profile Card - Hidden on mobile */}
        <div className="sachin1-about-image-col sachin1-about-hide-mobile">
          <div className="sachin1-image-sticky-wrapper">
            <div className="sachin1-about-profile-card">
              <div className="sachin1-about-image-wrapper">
                <div className="sachin1-about-image-border"></div>
                {imageUrl ? (
                  <img src={imageUrl} alt="Sachin" className="sachin1-about-profile-image-main" />
                ) : (
                  <div className="sachin1-about-hero-photo-placeholder">
                    <Code size={48} />
                    <span>Your Photo Here</span>
                  </div>
                )}
              </div>
              
              <div className="sachin1-about-profile-info-card">
                <h3 className="sachin1-about-profile-name">Sachin Diwakar</h3>
                <p className="sachin1-about-profile-title">Full-Stack Developer</p>
                
                <div className="sachin1-about-profile-details">
                  <div className="sachin1-about-profile-detail-item">
                    <User size={14} />
                    <span>B.Tech in Computer Science Engineering</span>
                  </div>
                  <div className="sachin1-about-profile-detail-item">
                    <MapPin size={14} />
                    <span>India</span>
                  </div>
                  <div className="sachin1-about-profile-detail-item">
                    <Mail size={14} />
                    <span>sachindiwakar711@gmail.com</span>
                  </div>
                  <div className="sachin1-about-profile-detail-item">
                    <Calendar size={14} />
                    <span>Available for opportunities</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`sachin1-about-content-col ${isVisible ? 'fade-in' : ''}`} ref={contentRef}>
          <div className="sachin1-about-stats-grid">
            {statsData.map((stat, idx) => (
              <div key={idx} className="sachin1-about-stat-card">
                <div className="sachin1-about-stat-icon">{stat.icon}</div>
                <div className="sachin1-about-stat-content">
                  <h4 className="sachin1-about-stat-value">{stat.value}</h4>
                  <p className="sachin1-about-stat-label">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Bio Section */}
          <div className="sachin1-about-bio-section">
            <h2 className="sachin1-about-section-title">
              <span className="sachin1-about-title-gradient">About Me</span>
            </h2>
            <p className="sachin1-about-bio-text">
              Code is where creativity meets logic—and that’s where I thrive.
              I’m a B.Tech Computer Science student who loves building scalable web applications, solving real-world problems, and transforming ideas into polished digital products.
            </p>
            <p className="sachin1-about-bio-text">
              Ideas are everywhere. Execution is what sets people apart. I’m a Computer Science student focused on bringing ideas to life through modern web development, polished user experiences, and practical problem-solving. I believe great products are built where creativity, logic, and consistency come together.
            </p>
          </div>

          {/* Key Highlights Section */}
          <div className="sachin1-about-highlights-section">
            <h3 className="sachin1-about-section-subtitle">
              <Award size={20} />
              Key Highlights
            </h3>
            <div className="sachin1-about-highlights-grid">
              {highlightData.map((highlight, idx) => (
                <div key={idx} className="sachin1-about-highlight-card">
                  <div 
                    className="sachin1-about-highlight-dot" 
                    style={{ background: getCategoryColor(highlight.category) }}
                  ></div>
                  <div className="sachin1-about-highlight-content">
                    <p className="sachin1-about-highlight-text">{highlight.text}</p>
                    {highlight.category && (
                      <span className="sachin1-about-highlight-category">{highlight.category}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Section */}
          <div className="sachin1-about-skills-section">
            <h3 className="sachin1-about-section-subtitle">
              <Code size={20} />
              Tech Stack & Tools
            </h3>
            <div className="sachin1-about-skills-tags">
              {skillTags.map((skill, idx) => (
                <span key={idx} className="sachin1-about-skill-tag">{skill}</span>
              ))}
            </div>
          </div>

          {/* Dual Timeline Section */}
          <div className="sachin1-about-dual-timeline-section">
            <div className="sachin1-about-timeline-columns">
              {/* Education Column */}
              <div className="sachin1-about-timeline-column">
                <h3 className="sachin1-about-timeline-column-title">
                  <GraduationCap size={18} />
                  Education
                </h3>
                <div className="sachin1-about-vertical-timeline">
                  {educationData.map((item, idx) => (
                    <div key={idx} className="sachin1-about-timeline-node">
                      <div className="sachin1-about-timeline-marker">{item.icon}</div>
                      <div className="sachin1-about-timeline-content-card">
                        <div className="sachin1-about-timeline-year">{item.year}</div>
                        <h4 className="sachin1-about-timeline-degree">{item.degree}</h4>
                        <p className="sachin1-about-timeline-institution">{item.institution}</p>
                        <p className="sachin1-about-timeline-details">{item.details}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Journey Column */}
              <div className="sachin1-about-timeline-column">
                <h3 className="sachin1-about-timeline-column-title">
                  <Briefcase size={18} />
                  Journey
                </h3>
                <div className="sachin1-about-vertical-timeline">
                  {journeyData.map((item, idx) => (
                    <div key={idx} className="sachin1-about-timeline-node">
                      <div className="sachin1-about-timeline-marker">{item.icon}</div>
                      <div className="sachin1-about-timeline-content-card">
                        <div className="sachin1-about-timeline-year">{item.year}</div>
                        <h4 className="sachin1-about-timeline-degree">{item.title}</h4>
                        <p className="sachin1-about-timeline-details">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons - Contact button hidden on mobile */}
          <div className="sachin1-about-action-buttons">
            <button className="sachin1-about-btn sachin1-about-btn-primary" onClick={handleDownloadResume}>
              <svg className="sachin1-about-btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 3v12m0 0-3-3m3 3 3-3M5 21h14" stroke="currentColor" strokeLinecap="round"/>
              </svg>
              Download Resume
            </button>
            <button className="sachin1-about-btn sachin1-about-btn-secondary sachin1-about-hide-mobile" onClick={handleContactClick}>
              <svg className="sachin1-about-btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;