import { useState } from 'react';
import './styles/Projects.css';
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { playClickSound } from '../utils/sound';
import rbs1 from "../assets/rbs1.png";
import rbs2 from "../assets/rbs2.png";
import rbs3 from "../assets/rbs3.png";
import rbs4 from "../assets/rbs4.png";
import rbs5 from "../assets/rbs5.png";
import sir1 from "../assets/sir1.png";
import sir2 from "../assets/sir2.png";
import sir3 from "../assets/sir3.png";
import sir4 from "../assets/sir4.png";
import sir5 from "../assets/sir5.png";
import sir6 from "../assets/sir6.png";
import type1 from "../assets/type1.png";
import type2 from "../assets/type2.png";
import type3 from "../assets/type3.png";
import type4 from "../assets/type4.png";
import qrcall0 from "../assets/qrcall0.png";
import qrcall1 from "../assets/qrcall1.png";
import qrcall2 from "../assets/qrcall2.png";
import qrcall3 from "../assets/qrcall3.png";
import qrcall4 from "../assets/qrcall4.png";
import cynthia1 from "../assets/cynthia1.png";
import cynthia2 from "../assets/cynthia2.png";
import cynthia3 from "../assets/cynthia3.png";
gsap.registerPlugin(ScrollTrigger);

interface Project {
  id: number;
  title: string;
  description: string;
  image: string[];
  techStack: string[];
  githubUrl: string;
  liveUrl: string;
  category: string;
  featured?: boolean;
}

const Projects: React.FC = () => {

  const [imageIndexes, setImageIndexes] = useState<{ [key: number]: number }>({});
  useEffect(() => {
    const timeouts: ReturnType<typeof setTimeout>[] = [];
    const intervals: ReturnType<typeof setInterval>[] = [];
    projects.forEach((project, index) => {
      const baseDelay = index * 300;
      const randomOffset = 2000 + Math.random() * 1200;
      const startDelay = baseDelay + randomOffset;
      const timeout = setTimeout(() => {
        const intervalTime = 2000 + Math.random() * 2000;
        const interval = setInterval(() => {
          setImageIndexes((prev) => {
            const newIndexes = { ...prev };
            const currentIndex = newIndexes[project.id] || 0;
            newIndexes[project.id] =
              (currentIndex + 1) % project.image.length;
            return newIndexes;
          });
        }, intervalTime);
        intervals.push(interval);
      }, startDelay);
      timeouts.push(timeout);
    });
    return () => {
      timeouts.forEach(clearTimeout);
      intervals.forEach(clearInterval);
    };
  }, []);
  
  const sectionRef = useRef(null);
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
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const projects: Project[] = [
    {
      id: 1,
      title: "🎓 Acadify — School Management System",
      description: "A full-stack SaaS platform built to modernize school administration through automation, analytics, and secure data management.",
      image: [rbs1, rbs2, rbs3, rbs4, rbs5],
      techStack: ["React", "JavaScript", "MySQL", "Express", "JWT", "Bcrypt"],
      githubUrl: "https://github.com/sachindiwakar35/Acadify",
      liveUrl: "#",
      category: "Full Stack",
      featured: true
    },
    {
      id: 2,
      title: "🗳️ ElectRevise — Voter Record Management System",
      description: "An efficient management platform designed to organize, update, and maintain voter records with accuracy, transparency, and streamlined administrative workflows.",
      image: [sir1, sir2, sir3, sir4, sir5, sir6],
      techStack: ["React", "JavaScript", "MySQL", "Express", "JWT"],
      githubUrl: "https://github.com/sachindiwakar35/ElectRevise",
      liveUrl: "#",
      category: "Full Stack"
    },
    {
      id: 3,
      title: "📱 QRCalling — QR-Based Instant Communication",
      description: "A smart communication platform that enables instant connections through QR technology, making interactions faster, seamless, and more efficient",
      image: [qrcall0, qrcall1, qrcall2, qrcall3, qrcall4],
      techStack: ["React", "CSS", "MongoDB", "Express", "JWT", "Bcrypt"],
      githubUrl: "#",
      liveUrl: "https://call.naradapps.com/",
      category: "Full Stack"
    },
    {
      id: 4,
      title: "📄 ParseX — OCR Data Entry Automation",
      description: "An intelligent automation system that extracts, processes, and converts scanned documents into accurate digital data, reducing manual effort and improving efficiency.",
      image: [type1, type2, type3, type4],
      techStack: ["React", "CSS", "JavaScript", "MySQL", "Express"],
      githubUrl: "#",
      liveUrl: "https://type.naradapps.com/",
      category: "Full Stack"
    },
    {
      id: 6,
      title: "Cynthia Ugwu Inspired Website",
      description: "A premium frontend project focused on recreating modern web interactions with fluid animations, elegant motion effects, and a polished user experience.",
      image: [cynthia1, cynthia2, cynthia3],
      techStack: ["HTML", "CSS", "JavaScript", "GSAP"],
      githubUrl: "#",
      liveUrl: "#",
      category: "JavaScript"
    },
    // {
    //   id: 7,
    //   title: "Weather App",
    //   description: "Simple weather app using API integration.",
    //   image: [weather],
    //   techStack: ["HTML", "JavaScript", "API", "CSS"],
    //   githubUrl: "https://github.com/sachindiwakar35/WeatherApp",
    //   liveUrl: "#",
    //   category: "JavaScript"
    // },
    // {
    //   id: 8,
    //   title: "Snake Game (Python)",
    //   description: "Classic snake game built using Python with custom features.",
    //   image: [snakegame],
    //   techStack: ["Python", "Pygame"],
    //   githubUrl: "https://github.com/sachindiwakar35/snake-game",
    //   liveUrl: "#",
    //   category: "Python"
    // }
  ];

  const categories = ['All', ...new Set(projects.map(p => p.category))];
  
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);
  
  const featuredProject = projects.find(p => p.featured);
  const regularProjects = filteredProjects.filter(p => !p.featured);

  return (
    <section ref={sectionRef} id="projects" className="sachin5-projects-section page-section">
      {/* Animated Background Blobs */}
      <div className="sachin5-projects-bg-blob sachin5-projects-bg-blob-1"></div>
      <div className="sachin5-projects-bg-blob sachin5-projects-bg-blob-2"></div>
      
      <div className="sachin5-projects-container">
        {/* Section Header */}
        <div className="sachin5-section-header">
          <h2 className="sachin5-section-title">Projects</h2>
          <p className="sachin5-section-subtitle">Some things I've built</p>
        </div>

        {/* Filter Tabs */}
        <div className="sachin5-filter-tabs">
          {categories.map(category => (
            <button
              key={category}
              className={`sachin5-filter-btn ${activeFilter === category ? 'active' : ''}`}
              onClick={() => { 
                // playClickSound();
                 setActiveFilter(category) }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Project (if in filtered view) */}
        {featuredProject && activeFilter === 'All' && (
          <div className="sachin5-featured-project">
            <div className="sachin5-featured-card">
              <div className="sachin5-featured-image-wrapper">
                <div className="sachin5-image-slider">
                <div
                  className="sachin5-image-track"
                  style={{
                    transform: `translateX(-${(imageIndexes[featuredProject.id] || 0) * 100}%)`
                  }}
                >
                  {featuredProject.image.map((img, i) => (
                    <img key={i} src={img} className="sachin5-slide-image" />
                  ))}
                </div>
              </div>
              </div>
              <div className="sachin5-featured-content">
                <div className="sachin5-featured-badge">Featured Project</div>
                <h3 className="sachin5-featured-title">{featuredProject.title}</h3>
                <p className="sachin5-featured-description">{featuredProject.description}</p>
                <div className="sachin5-featured-tech">
                  {featuredProject.techStack.map((tech, idx) => (
                    <span key={idx} className="sachin5-tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="sachin5-featured-actions">
                  {/* <a
                    href={featuredProject.githubUrl !== "https://github.com/sachindiwakar35/Acadify" ? featuredProject.githubUrl : undefined}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`sachin5-action-link ${featuredProject.githubUrl === "https://github.com/sachindiwakar35/Acadify" ? "disabled tooltip" : ""}`}
                    data-tooltip={featuredProject.githubUrl === "https://github.com/sachindiwakar35/Acadify" ? "Private Repository • Contact for access" : "View on GitHub"}
                    onClick={(e) => {
                      if (featuredProject.githubUrl === "https://github.com/sachindiwakar35/Acadify") {
                        e.preventDefault();
                      } else {
                        playClickSound();
                      }
                    }}
                  > */}

                  <a
                    href={featuredProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sachin5-action-link"
                    data-tooltip="View on GitHub"
                    // onClick={playClickSound}
                  >
                    <svg className="sachin5-action-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                    </svg>
                    GitHub
                  </a>
                  <a
                    href={featuredProject.liveUrl !== "#" ? featuredProject.liveUrl : undefined}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`sachin5-action-link ${featuredProject.liveUrl === "#" ? "disabled tooltip" : ""}`}
                    data-tooltip={featuredProject.liveUrl === "#" ? "In Use • Contact for preview" : "View Live"}
                    onClick={(e) => {
                      if (featuredProject.liveUrl === "#") {
                        e.preventDefault();
                      } else {
                        // playClickSound();
                      }
                    }}
                  >
                    <svg className="sachin5-action-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" stroke="currentColor" strokeLinecap="round"/>
                      <polyline points="15 3 21 3 21 9" stroke="currentColor" strokeLinecap="round"/>
                      <line x1="10" y1="14" x2="21" y2="3" stroke="currentColor" strokeLinecap="round"/>
                    </svg>
                    Live
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Projects Grid */}
        <div className="sachin5-projects-grid">
          {regularProjects.map(project => (
            <div key={project.id} className="sachin5-project-card">
              <div className="sachin5-card-image-wrapper">
                <div className="sachin5-image-slider">
                  <div
                    className="sachin5-image-track"
                    style={{
                      transform: `translateX(-${(imageIndexes[project.id] || 0) * 100}%)`
                    }}
                  >
                    {project.image.map((img, i) => (
                      <img key={i} src={img} className="sachin5-slide-image" />
                    ))}
                  </div>
                </div>
              </div>
              <div className="sachin5-card-content">
                <h3 className="sachin5-card-title">{project.title}</h3>
                <p className="sachin5-card-description">{project.description}</p>
                <div className="sachin5-card-tech">
                  {project.techStack.map((tech, idx) => (
                    <span key={idx} className="sachin5-tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="sachin5-card-actions">
                  <a
                    href={project.githubUrl !== "#" ? project.githubUrl : undefined}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`sachin5-action-link ${project.githubUrl === "#" ? "disabled tooltip" : ""}`}
                    data-tooltip={project.githubUrl === "#" ? "Private Repository • Contact for access" : "View on GitHub"}
                    onClick={(e) => {
                      if (project.githubUrl === "#") {
                        e.preventDefault();
                      } else {
                        // playClickSound();
                      }
                    }}
                  >
                    <svg className="sachin5-action-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                    </svg>
                    GitHub
                  </a>
                  <a
                    href={project.liveUrl !== "#" ? project.liveUrl : undefined}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`sachin5-action-link ${project.liveUrl === "#" ? "disabled tooltip" : ""}`}
                    data-tooltip={project.liveUrl === "#" ? "Contact for preview" : "View Live"}
                    onClick={(e) => {
                      if (project.liveUrl === "#") {
                        e.preventDefault();
                      } else {
                        // playClickSound();
                      }
                    }}
                  >
                    <svg className="sachin5-action-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" stroke="currentColor" strokeLinecap="round"/>
                      <polyline points="15 3 21 3 21 9" stroke="currentColor" strokeLinecap="round"/>
                      <line x1="10" y1="14" x2="21" y2="3" stroke="currentColor" strokeLinecap="round"/>
                    </svg>
                    Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;