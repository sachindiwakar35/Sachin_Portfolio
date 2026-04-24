import { ChevronRight, Mail, ArrowDown, Code, Sparkles } from "lucide-react";
import "./styles/Hero.css";
import { useEffect } from "react";
// import { playClickSound } from "../utils/sound";
import gsap from "gsap";
import githubIcon from "../assets/github.png";
import linkedinIcon from "../assets/linkedin.png";

type HeroProps = {
  name: string;
  role: string;
  imageUrl?: string;
  avatar?: string;
};

export default function Hero({ name, role, imageUrl, avatar }: HeroProps) {

  useEffect(() => {
    gsap.to(".sachin3-bg-blob-1", {
      y: 100,
      scrollTrigger: {
        trigger: ".sachin3-hero",
        scrub: true,
      },
    });
    gsap.to(".sachin3-bg-blob-2", {
      y: -100,
      scrollTrigger: {
        trigger: ".sachin3-hero",
        scrub: true,
      },
    });
  }, []);

  const scrollToContact = () => {
    // playClickSound();
    const contactSection = document.getElementById("sachin2-contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToProjects = () => {
    // playClickSound();
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="sachin3-hero" className="sachin3-hero">
      {/* Animated Background Blobs */}
      <div className="sachin3-bg-blob sachin3-bg-blob-1"></div>
      <div className="sachin3-bg-blob sachin3-bg-blob-2"></div>
      
      <div className="sachin3-hero-container">
        <div className="sachin3-hero-content">
          <div className="sachin3-hero-badge">
            <Sparkles size={16} />
            <span>Welcome to my portfolio</span>
          </div>
          <h1 className="sachin3-hero-title">
            Hi, I'm{" "}
            <span className="sachin3-gradient-text">{name}</span>
          </h1>
          <p className="sachin3-hero-role">{role}</p>
          <p className="sachin3-hero-description">
            I'm a B.Tech Computer Science student passionate about building modern, scalable web applications. I enjoy converting ideas into polished products with clean interfaces and seamless user experiences. Currently focused on full-stack development, real-world projects, and continuous growth as a developer.
          </p>
          <div className="sachin3-hero-buttons">
            <button className="sachin3-btn-primary" onClick={scrollToProjects}>
              View My Work
              <ChevronRight size={18} />
            </button>
            <button className="sachin3-btn-secondary" onClick={scrollToContact}>
              Let's Connect
              <Mail size={18} />
            </button>
          </div>
          <div className="sachin3-hero-social">
            <a 
              href="https://github.com/sachindiwakar35" 
              target="_blank" 
              rel="noopener noreferrer"
              className="sachin3-social-link"
              aria-label="GitHub"
              // onClick={playClickSound}
            >
              <img src={githubIcon} alt="github" className="sachin3-heroicon" />
            </a>
            <a 
              href="https://www.linkedin.com/in/sachin-diwakar-604aa5338" 
              target="_blank" 
              rel="noopener noreferrer"
              className="sachin3-social-link"
              aria-label="LinkedIn"
              // onClick={playClickSound}
            >
              <img src={linkedinIcon} alt="linkedin" className="sachin3-heroicon"/>
            </a>
          </div>
        </div>
        <div className="sachin3-hero-visual">
          <div className="sachin3-hero-photo-container">
            
            <div className="sachin3-flip-coin">

              {/* Front Side */}
              <div className="sachin3-coin-face sachin3-front-face">
                <img
                  src={imageUrl}
                  alt={name}
                  className="sachin3-hero-photo"
                />
              </div>

              {/* Back Side */}
              <div className="sachin3-coin-face sachin3-back-face">
                <img
                  src={avatar}
                  alt="Avatar"
                  className="sachin3-hero-photo"
                />
              </div>

            </div>

          </div>
          <div className="sachin3-hero-code-card">
            <div className="sachin3-code-header">
              <div className="sachin3-code-dots">
                <span className="sachin3-code-dot sachin3-red"></span>
                <span className="sachin3-code-dot sachin3-yellow"></span>
                <span className="sachin3-code-dot sachin3-green"></span>
              </div>
              <span className="sachin3-code-title">developer.ts</span>
            </div>
            <div className="sachin3-code-content">
              <p className="sachin3-code-line">
                <span className="sachin3-code-keyword">const</span>{" "}
                <span className="sachin3-code-variable">developer</span>{" "}
                <span className="sachin3-code-operator">=</span> {"{"}
              </p>
              <p className="sachin3-code-line sachin3-code-indent-1">
                <span className="sachin3-code-property">title</span>:{" "}
                <span className="sachin3-code-string">"{name}"</span>,
              </p>
              <p className="sachin3-code-line sachin3-code-indent-1">
                <span className="sachin3-code-property">Degree</span>:{" "}
                <span className="sachin3-code-string">"B.Tech CSE"</span>,
              </p>
              <p className="sachin3-code-line sachin3-code-indent-1">
                <span className="sachin3-code-property">experience</span>:{" "}
                <span className="sachin3-code-string">["Real-world Projects", "Pulse by OptiMaxin"]</span>,
              </p>
              <p className="sachin3-code-line sachin3-code-indent-1">
                <span className="sachin3-code-property">projects</span>:{" "}
                <span className="sachin3-code-string">8+</span>,
              </p>
              <p className="sachin3-code-line sachin3-code-indent-1">
                <span className="sachin3-code-property">gate2026</span>:{" "}
                <span className="sachin3-code-string">Qualified</span>,
              </p>
              <p className="sachin3-code-line sachin3-code-indent-1">
                <span className="sachin3-code-property">Skills</span>:{" "}
                <span className="sachin3-code-string">["React", "Node.js""Express.js", "MongoDB", "MySQL", "Git","GitHub"]</span>,
              </p>
              <p className="sachin3-code-line sachin3-code-indent-1">
                <span className="sachin3-code-property">role</span>:{" "}
                <span className="sachin3-code-string">"{role}"</span>,
              </p>
              <p className="sachin3-code-line sachin3-code-indent-1">
                <span className="sachin3-code-property">passion</span>:{" "}
                <span className="sachin3-code-string">"Building scalable Full stack Projects"</span>,
              </p>
              {/* <p className="sachin3-code-line sachin3-code-indent-1">
                <span className="sachin3-code-property">available</span>:{" "}
                <span className="sachin3-code-boolean">true</span>,
              </p> */}
              <p className="sachin3-code-line">
                {"}"}
                <span className="sachin3-code-semicolon">;</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="sachin3-hero-scroll-indicator">
        <div className="sachin3-scroll-mouse">
          <div className="sachin3-scroll-wheel"></div>
        </div>
        <ArrowDown size={16} className="sachin3-scroll-arrow" />
      </div>
    </section>
  );
}