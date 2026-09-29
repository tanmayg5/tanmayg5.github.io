import React from 'react';
import { 
  Cpu, ExternalLink, Code, Award, Activity, Music, Layers, ChevronRight, CheckCircle2 
} from 'lucide-react';

export default function App() {
  const ventures = [
    {
      title: "Dazzler",
      role: "Co-Founder & Lead Engineer",
      link: "https://www.dazzlerlighting.com",
      status: "Live Business",
      desc: "Autonomous, music-aware stage lighting system. Built a low-latency C++ engine with Essentia to extract live spectral audio features and map them to DMX protocols in real-time.",
      highlights: ["1st Place @ NUS nHacks Pitch Competition", "Featured @ GITEX Asia SG100 (Marina Bay Sands)", "Live Deployment @ Monti Singapore"],
      tech: ["C++", "Essentia", "DMX Protocols", "Machine Learning"]
    },
    {
      title: "Vendsor",
      role: "Creator & Developer",
      link: "https://www.vendsor.com",
      status: "Active Platform",
      desc: "Intelligent platform designed to map, track, and locate automated vending infrastructure across urban environments.",
      highlights: ["Automated geolocation tracking", "Real-time availability telemetry"],
      tech: ["Full-Stack", "Geolocation API", "React"]
    },
    {
      title: "Edge AI Music Emotion Recognition",
      role: "Academic FYP Research",
      status: "Hardware AI",
      desc: "8-bit quantized neural network engineered for real-time music emotion detection directly on edge silicon using Quantization-Aware Training & Knowledge Distillation.",
      highlights: ["Deployed on PYNQ-Z2 FPGA board", "Low-power hardware acceleration"],
      tech: ["PYNQ-Z2 FPGA", "Python", "Quantization", "Edge AI"]
    },
    {
      title: "AWS Data Engineering Pipeline",
      role: "Data Systems Architect",
      status: "Cloud Infrastructure",
      desc: "High-throughput parallel data pipeline built on AWS EC2 processing batch stream data using Apache Spark and Dockerized Elasticsearch/Kibana for real-time analytics.",
      highlights: ["Parallel EC2 compute architecture", "Distributed Spark processing"],
      tech: ["AWS EC2", "Apache Spark", "Docker", "Elasticsearch"]
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
        "Architected a centralized vessel management application using Microsoft Power Apps and Dataverse, replacing legacy Excel workflows across 200+ vessels.",
        "Integrated an AI chatbot via Microsoft Copilot to assist fleet crew in real-time troubleshooting of onboard equipment.",
        "Developed relational database architecture and automated email parsing flows for ship maintenance tracking."
      ]
    },
    {
      company: "Persistent Systems",
      role: "Software Development Intern",
      period: "May 2025 – Aug 2025",
      location: "Singapore",
      bullets: [
        "Engineered a full-stack e-commerce platform using Python, Flask, and MySQL with custom Werkzeug authentication decorators.",
        "Optimized backend queries and database latency for seamless administrative and customer workflows."
      ]
    }
  ];

  const skills = {
    "Languages": ["Python", "C++", "Java", "SQL", "Q (kdb+)", "R", "Verilog", "VBA"],
    "Web & Cloud": ["React", "Next.js", "Flask", "AWS (EC2, Lambda)", "Docker", "Elasticsearch"],
    "Hardware & Embedded": ["Basys 3", "PYNQ-Z2 FPGA", "ESP32", "Arduino", "Vivado", "Linux/WSL"],
    "Automation & Tools": ["Power Apps", "Power Automate", "Git", "Selenium", "Office Scripts"]
  };

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-300 font-mono selection:bg-[#ff2a75] selection:text-white">
      
      {/* Minimalist Centered Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#050505]/90 backdrop-blur-sm border-b border-[#1a1a1a] py-4">
        <div className="max-w-4xl mx-auto flex justify-center gap-8 text-xs uppercase tracking-widest text-zinc-500">
          <a href="#about" className="hover:text-[#ff2a75] transition-colors">About</a>
          <a href="#ventures" className="hover:text-[#ff2a75] transition-colors">Ventures</a>
          <a href="#experience" className="hover:text-[#ff2a75] transition-colors">Experience</a>
          <a href="#skills" className="hover:text-[#ff2a75] transition-colors">Skills</a>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-20 space-y-32">
        
        {/* Centered Hero Section */}
        <section id="about" className="flex flex-col items-center justify-center text-center pt-32 pb-10">
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter neon-text mb-6 font-sans">
            Tanmay Gupta
          </h1>
          <p className="text-lg md:text-xl text-zinc-300 mb-2 font-mono">
            Engineering autonomous hardware. Architecting scalable software.
          </p>
          <p className="text-xs md:text-sm text-zinc-500 mb-10 tracking-widest uppercase">
            EE & Data Science @ NUS | Bridging Embedded AI with Cloud Architecture
          </p>
          
          <div className="flex gap-4 font-sans text-sm">
            <a href="#ventures" className="bg-[#ff2a75] text-black px-8 py-3 font-bold hover:bg-[#ff4d8c] transition-colors">
              Explore My Work
            </a>
            <a href="mailto:tanmayg0510@gmail.com" className="border border-[#ff2a75] text-[#ff2a75] px-8 py-3 font-bold hover:bg-[#ff2a75]/10 transition-colors">
              Get In Touch
            </a>
          </div>
        </section>

        {/* Featured Startups & Key Projects */}
        <section id="ventures" className="space-y-10">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold text-white font-sans uppercase tracking-widest">Startups & Systems</h2>
            <div className="h-px w-20 bg-[#ff2a75] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {ventures.map((item, idx) => (
              <div key={idx} className="minimal-card p-6 space-y-4 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] uppercase tracking-widest text-[#ff2a75]">
                      {item.status}
                    </span>
                    {item.link && (
                      <a href={item.link} target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-[#ff2a75] transition-colors">
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white font-sans">{item.title}</h3>
                    <p className="text-xs text-zinc-500 mt-1 uppercase tracking-wider">{item.role}</p>
                  </div>
                  <p className="text-zinc-400 text-sm leading-relaxed font-sans">{item.desc}</p>
                  
                  <div className="space-y-2 pt-2">
                    {item.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-center gap-2 text-xs text-zinc-500 font-sans">
                        <CheckCircle2 size={12} className="text-[#ff2a75] shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-6 border-t border-[#1a1a1a]">
                  {item.tech.map((t, tIdx) => (
                    <span key={tIdx} className="text-[10px] text-zinc-500 uppercase tracking-widest">
                      [{t}]
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="space-y-10">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold text-white font-sans uppercase tracking-widest">Experience</h2>
            <div className="h-px w-20 bg-[#ff2a75] mx-auto"></div>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, idx) => (
              <div key={idx} className="minimal-card p-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-6">
                  <div>
                    <h3 className="text-lg font-bold text-white font-sans">{exp.role}</h3>
                    <p className="text-sm text-[#ff2a75] font-sans">{exp.company}</p>
                  </div>
                  <div className="text-right">
                    <span className="block text-xs text-zinc-500 uppercase tracking-widest">{exp.period}</span>
                    <span className="block text-xs text-zinc-600">{exp.location}</span>
                  </div>
                </div>
                <ul className="space-y-3">
                  {exp.bullets.map((b, bIdx) => (
                    <li key={bIdx} className="text-sm text-zinc-400 flex items-start gap-3 font-sans">
                      <ChevronRight size={16} className="text-[#ff2a75] shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Arsenal */}
        <section id="skills" className="space-y-10">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold text-white font-sans uppercase tracking-widest">Technical Stack</h2>
            <div className="h-px w-20 bg-[#ff2a75] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(skills).map(([cat, list], idx) => (
              <div key={idx} className="minimal-card p-6 text-center">
                <h3 className="text-xs font-bold text-[#ff2a75] uppercase tracking-widest mb-4">{cat}</h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {list.map((skill, sIdx) => (
                    <span key={sIdx} className="text-xs text-zinc-400 uppercase tracking-wider px-2 border-r border-[#1a1a1a] last:border-0">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Life & Engineering Craft */}
        <section className="border border-[#1a1a1a] p-10 text-center space-y-8">
          <h2 className="text-xl font-bold text-white font-sans uppercase tracking-widest">Beyond the Screen</h2>
          
          <div className="grid md:grid-cols-3 gap-8 text-sm font-sans">
            <div className="space-y-3">
              <Award size={20} className="text-[#ff2a75] mx-auto" />
              <h3 className="text-white font-bold uppercase tracking-widest text-xs">Squash Leadership</h3>
              <p className="text-zinc-500 leading-relaxed text-xs">
                Squash Interest Group Leader and team captain executing training and strategy across Daly College, King Edward VII Hall, and Valour House.
              </p>
            </div>
            <div className="space-y-3">
              <Music size={20} className="text-[#ff2a75] mx-auto" />
              <h3 className="text-white font-bold uppercase tracking-widest text-xs">Fingerstyle Guitar</h3>
              <p className="text-zinc-500 leading-relaxed text-xs">
                Trinity Grade 5 certified guitarist focusing on complex fingerstyle acoustic arrangements.
              </p>
            </div>
            <div className="space-y-3">
              <Activity size={20} className="text-[#ff2a75] mx-auto" />
              <h3 className="text-white font-bold uppercase tracking-widest text-xs">Athletic Discipline</h3>
              <p className="text-zinc-500 leading-relaxed text-xs">
                Structured track & distance running practitioner heavily focused on midfoot-striking biomechanics.
              </p>
            </div>
          </div>
        </section>

      </main>

      <footer className="border-t border-[#1a1a1a] py-8 text-center text-xs text-zinc-600 uppercase tracking-widest">
        <p>Tanmay Gupta // Engineered with React</p>
      </footer>
    </div>
  );
}
