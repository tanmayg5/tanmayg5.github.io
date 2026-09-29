import React, { useState } from 'react';
import { 
  Terminal, Cpu, Zap, Globe, Mail, 
  ExternalLink, Code, Award, Activity, Music, Layers, ChevronRight, CheckCircle2 
} from 'lucide-react';

const LinkedinIcon = ({ size = 18, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

export default function App() {
  const [activeTab, setActiveTab] = useState('all');

  const ventures = [
    {
      title: "Dazzler",
      role: "Co-Founder & Lead Engineer",
      link: "https://www.dazzlerlighting.com",
      status: "Live Business",
      desc: "Autonomous, music-aware stage lighting system. Built a low-latency C++ engine with Essentia to extract live spectral audio features and map them to DMX protocols in real-time[cite: 1].",
      highlights: ["1st Place @ NUS nHacks Pitch Competition[cite: 1]", "Featured @ GITEX Asia SG100 (Marina Bay Sands)", "Live Deployment @ Monti Singapore"],
      tech: ["C++", "Essentia", "DMX Protocols", "Machine Learning"],
      featured: true
    },
    {
      title: "Vendsor",
      role: "Creator & Developer",
      link: "https://www.vendsor.com",
      status: "Active Platform",
      desc: "Intelligent platform designed to map, track, and locate automated vending infrastructure across urban environments.",
      highlights: ["Automated geolocation tracking", "Real-time availability telemetry"],
      tech: ["Full-Stack", "Geolocation API", "React"],
      featured: true
    },
    {
      title: "Edge AI Music Emotion Recognition",
      role: "Academic FYP Research",
      status: "Hardware AI",
      desc: "8-bit quantized neural network engineered for real-time music emotion detection directly on edge silicon using Quantization-Aware Training & Knowledge Distillation.",
      highlights: ["Deployed on PYNQ-Z2 FPGA board", "Low-power hardware acceleration"],
      tech: ["PYNQ-Z2 FPGA", "Python", "Quantization", "Edge AI"],
      featured: false
    },
    {
      title: "AWS Data Engineering Pipeline",
      role: "Data Systems Architect",
      status: "Cloud Infrastructure",
      desc: "High-throughput parallel data pipeline built on AWS EC2 processing batch stream data using Apache Spark and Dockerized Elasticsearch/Kibana for real-time analytics[cite: 1].",
      highlights: ["Parallel EC2 compute architecture[cite: 1]", "Distributed Spark processing[cite: 1]"],
      tech: ["AWS EC2", "Apache Spark", "Docker", "Elasticsearch", "Kibana"],
      featured: false
    },
    {
      title: "Autonomous Maze-Navigating Robot",
      role: "Robotics Engineer",
      status: "Autonomous Systems",
      desc: "TurtleBot system programmed with the A* pathfinding algorithm for complete autonomous maze navigation, obstacle detection, and continuous communication relay[cite: 1].",
      highlights: ["Full autonomous navigation[cite: 1]", "Real-time obstacle avoidance[cite: 1]"],
      tech: ["Robotics", "A* Algorithm", "Sensor Fusion"],
      featured: false
    }
  ];

  const experiences = [
    {
      company: "ABI Research",
      role: "Data Science & Research Intern",
      period: "May 2026 – Present",
      location: "Singapore",
      bullets: [
        "Spearheading quantitative market intelligence and deep-tech forecasting across emerging technology sectors.",
        "Engineering automated Python data pipelines to extract, clean, and visualize complex global datasets.",
        "Synthesizing technical research into actionable strategic insights for comprehensive industry reports."
      ]
    },
    {
      company: "National University of Singapore",
      role: "Undergraduate Teaching Assistant (EE3801)",
      period: "Aug 2026 – Present",
      location: "Singapore",
      bullets: [
        "Facilitating academic instruction and technical mentorship for the EE3801 engineering module.",
        "Guiding students through complex technical problem-solving, evaluating coursework, and supporting primary faculty in curriculum delivery."
      ]
    },
    {
      company: "Eastern Pacific Shipping",
      role: "Fleet Electronics & Database Intern",
      period: "Jan 2026 – May 2026",
      location: "Singapore",
      bullets: [
        "Architected a centralized vessel management application using Microsoft Power Apps and Dataverse, replacing legacy Excel workflows across 200+ vessels[cite: 1].",
        "Integrated an AI chatbot via Microsoft Copilot to assist fleet crew in real-time troubleshooting of onboard equipment[cite: 1].",
        "Developed relational database architecture and automated email parsing flows for ship maintenance tracking[cite: 1]."
      ]
    },
    {
      company: "Persistent Systems",
      role: "Software Development Intern",
      period: "May 2025 – Aug 2025",
      location: "Singapore",
      bullets: [
        "Engineered a full-stack e-commerce platform using Python, Flask, and MySQL with custom Werkzeug authentication decorators[cite: 1].",
        "Optimized backend queries and database latency for seamless administrative and customer workflows[cite: 1]."
      ]
    },
    {
      company: "InfoBeans",
      role: "Data Science Intern",
      period: "Jul 2024 – Aug 2024",
      location: "Indore, India",
      bullets: [
        "Executed end-to-end exploratory data analysis (EDA) using Pandas, NumPy, and Matplotlib to extract operational business metrics[cite: 1]."
      ]
    }
  ];

  const skills = {
    "Languages": ["Python (5+ yrs)", "C++", "Java", "SQL", "Q (kdb+)", "R", "Verilog", "VBA"],
    "Web & Cloud": ["React", "Next.js", "Flask", "AWS (EC2, Lambda)", "Docker", "Vercel", "Elasticsearch", "Kibana"],
    "Hardware & Embedded": ["Basys 3", "PYNQ-Z2 FPGA", "ESP32", "Arduino", "Vivado", "Linux/WSL"],
    "Automation & Tools": ["Power Apps", "Power Automate", "Git", "Selenium", "Office Scripts"],
    "Creative Engine": ["Adobe Illustrator", "Figma", "CapCut", "Inkscape"]
  };

  return (
    <div className="min-h-screen bg-[#110408] text-stone-200">
      {/* Navigation Header */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-[#110408]/80 border-b border-rose-900/40 px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <a href="#" className="text-xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-pink-300">
            TG<span className="text-rose-400">.</span>
          </a>
          <div className="flex gap-6 text-sm font-medium text-stone-400">
            <a href="#about" className="hover:text-rose-400 transition-colors">About</a>
            <a href="#ventures" className="hover:text-rose-400 transition-colors">Ventures</a>
            <a href="#experience" className="hover:text-rose-400 transition-colors">Experience</a>
            <a href="#skills" className="hover:text-rose-400 transition-colors">Stack</a>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-12 space-y-24">
        
        {/* Hero Section */}
        <section id="about" className="space-y-6 pt-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-950/60 border border-rose-900/50 text-rose-300 text-xs font-mono">
            <Zap size={14} className="animate-pulse" /> Electrical Engineering & Data Science @ NUS[cite: 1]
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-pink-300 to-rose-200">Autonomous Systems</span> & Scalable Software.
          </h1>
          <p className="text-stone-400 text-lg md:text-xl max-w-3xl leading-relaxed">
            I'm <strong className="text-stone-200">Tanmay Gupta</strong>—a double major at the National University of Singapore minoring in Innovation & Design (GPA: 4.21/5)[cite: 1]. I operate at the intersection of embedded AI hardware, real-time C++ audio extraction, cloud data pipelines, and startup venture development.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a href="https://www.linkedin.com/in/tanmay-gupta-ab5483252/" target="_blank" rel="noreferrer" 
               className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-rose-600 hover:bg-rose-500 text-white font-semibold text-sm transition-all shadow-lg shadow-rose-900/30">
              <LinkedinIcon size={18} /> LinkedIn
            </a>
            <a href="mailto:tanmayg0510@gmail.com" 
               className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg glass-card hover:bg-[#2a0815] text-stone-200 font-semibold text-sm transition-all">
              <Mail size={18} /> Contact
            </a>
          </div>
        </section>

        {/* Featured Startups & Key Projects */}
        <section id="ventures" className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <Cpu className="text-rose-400" /> Startups & Engineered Systems
            </h2>
            <p className="text-stone-400 text-sm">Commercial ventures and deep-tech hardware/software builds.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {ventures.map((item, idx) => (
              <div key={idx} className="glass-card rounded-2xl p-6 space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <span className="text-xs font-mono px-2.5 py-1 rounded bg-[#3a0d1e] text-rose-300 border border-rose-900/40">
                      {item.status}
                    </span>
                    {item.link && (
                      <a href={item.link} target="_blank" rel="noreferrer" className="text-stone-400 hover:text-rose-400 transition-colors">
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-rose-400 font-mono mt-0.5">{item.role}</p>
                  </div>
                  <p className="text-stone-300 text-sm leading-relaxed">{item.desc}</p>
                  
                  <div className="space-y-1.5 pt-2">
                    {item.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-center gap-2 text-xs text-stone-400">
                        <CheckCircle2 size={13} className="text-rose-300 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#3a0d1e]">
                  {item.tech.map((t, tIdx) => (
                    <span key={tIdx} className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#1f0710] text-stone-400 border border-[#3a0d1e]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <Layers className="text-rose-300" /> Industry Experience
            </h2>
            <p className="text-stone-400 text-sm">Engineering internships across software, data science, and maritime automation.</p>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, idx) => (
              <div key={idx} className="glass-card rounded-xl p-6 space-y-3">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-1">
                  <div>
                    <h3 className="text-lg font-bold text-white">{exp.role} <span className="text-rose-400">@ {exp.company}</span></h3>
                    <p className="text-xs text-stone-400 font-mono">{exp.location}</p>
                  </div>
                  <span className="text-xs font-mono text-stone-400 bg-[#1f0710] px-3 py-1 rounded-full w-fit border border-[#3a0d1e]">
                    {exp.period}
                  </span>
                </div>
                <ul className="space-y-2 pt-2">
                  {exp.bullets.map((b, bIdx) => (
                    <li key={bIdx} className="text-sm text-stone-300 flex items-start gap-2">
                      <ChevronRight size={16} className="text-rose-400 shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Arsenal */}
        <section id="skills" className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <Code className="text-rose-400" /> Technical Arsenal
            </h2>
            <p className="text-stone-400 text-sm">Core technologies, frameworks, and hardware architectures.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([cat, list], idx) => (
              <div key={idx} className="glass-card rounded-xl p-5 space-y-3">
                <h3 className="text-sm font-mono font-bold text-rose-400 uppercase tracking-wider">{cat}</h3>
                <div className="flex flex-wrap gap-2">
                  {list.map((skill, sIdx) => (
                    <span key={sIdx} className="text-xs font-mono px-2.5 py-1 rounded-md bg-[#1f0710] text-stone-300 border border-[#3a0d1e]">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Life & Engineering Craft */}
        <section className="glass-card rounded-2xl p-8 space-y-6">
          <h2 className="text-2xl font-bold text-white flex items-center gap-3">
            <Activity className="text-rose-300" /> Beyond the Screen
          </h2>
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div className="space-y-2">
              <h3 className="text-white font-bold flex items-center gap-2">
                <Award size={16} className="text-rose-400" /> Leadership & Sport
              </h3>
              <p className="text-stone-400 leading-relaxed">
                Former Squash Interest Group Leader and team captain across Daly College, King Edward VII Hall, and Valour House.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-white font-bold flex items-center gap-2">
                <Music size={16} className="text-rose-400" /> Fingerstyle Guitar
              </h3>
              <p className="text-stone-400 leading-relaxed">
                Trinity Grade 5 certified guitarist focusing on complex fingerstyle acoustic compositions and arrangements.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-white font-bold flex items-center gap-2">
                <Activity size={16} className="text-rose-400" /> Athletic Discipline
              </h3>
              <p className="text-stone-400 leading-relaxed">
                Structured track & distance running practitioner focusing on midfoot-striking endurance biomechanics.
              </p>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-[#3a0d1e] mt-20 py-8 text-center text-xs text-stone-500 font-mono">
        <p>Built by Tanmay Gupta • Designed with Vite, React & Tailwind CSS</p>
      </footer>
    </div>
  );
}
