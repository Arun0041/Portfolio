import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import viznestImg from '../assets/viznest.png';
import sudokuImg from '../assets/sudoku.png';
import ayushImg from '../assets/ayush.png';
import yourTherapistImg from '../assets/yourtherapist.png'; // Added import
import graspImg from '../assets/grasp.png';                // Added import
import akDebtImg from '../assets/ak debt planner.png';    // Added import

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projectList = [
    {
      title: "VizNest - Home Decor Store",
      challenge: "Developing a scalable home decor platform requiring a live customization engine and dynamic product control.",
      action: "Built an Admin Dashboard, integrated Razorpay and JWT-based authentication, and deployed on Vercel and Render while optimizing MongoDB pipelines.",
      result: "Decreased fake account creation by 40% and cut data retrieval latency by 30%.",
      tech: ["MongoDB", "Express.js", "React", "Node.js", "Tailwind CSS","JWT"],
      github: "https://github.com/Arun0041/VizNest",
      live: "https://viznest.vercel.app/", // <-- Update this link!
      image: viznestImg
    },
    {
      title: "YourTherapist",
      challenge: "Developing a secure and accessible platform to connect users with mental health resources and professionals seamlessly.",
      action: "Architected a full-stack MERN application featuring secure user authentication, robust database schemas for user profiles, and an intuitive scheduling interface.",
      result: "Created a safe, highly responsive digital environment that streamlines the process of seeking and managing therapeutic care.",
      tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS"],
      github: "https://github.com/ArunGautam004/YourTherapist", // <-- Update link
      live: "https://yourtherapist.vercel.app/",       // <-- Update link
      image: yourTherapistImg                                // Updated image reference
    },
    {
      title: "Ayush Herb Information Portal",
      challenge: "Launching a centralized information platform requiring an efficient Content Management System.",
      action: "Engineered a custom Admin Panel for SQL CRUD operations and introduced real-time user discussion forums.",
      result: "Saved data management time by 20%, increased user engagement by 25%, and maintained 99% uptime on InfinityFree.",
      tech: ["HTML", "Tailwind CSS", "PHP", "SQL"],
      github: "https://github.com/Arun0041/AYUSH-HERB",
      live: "https://ayushherb.infinityfreeapp.com/", // <-- Update this link!
      image: ayushImg
    },
    {
      title: "Sudoku Solver Visualizer",
      challenge: "Creating a visualization tool to clearly demonstrate how backtracking algorithms solve Sudoku puzzles.",
      action: "Designed a dynamic grid interface for custom puzzle input and implemented robust input validation.",
      result: "Lowered solution computation time by 35% by optimizing recursive logic with constraint propagation.",
      tech: ["React.js", "Data Structures", "Algorithms"],
      github: "https://github.com/Arun0041/Sudoku-Solver",
      live: "https://sudoku-solver-theta-nine.vercel.app/", // <-- Update this link!
      image: sudokuImg
    },
    {
      title: "Grasp AI",
      challenge: "Building an intelligent educational tool capable of understanding, processing, and responding to complex user queries in real-time.",
      action: "Integrated the Google Gemini API to power the core natural language processing engine.",
      result: "Delivered a seamless AI-driven application that provides highly accurate, context-aware responses with minimal latency.",
      tech: ["Javascript", "Google Gemini API", "Tailwind CSS"],
      github: "https://github.com/Arun0041/grasp-ai", // <-- Update link
      live: "https://arun.is-great.net/",   // <-- Update link
      image: graspImg                                   // Updated image reference
    },
    {
      title: "AK Debt Planner",
      challenge: "Creating a comprehensive personal finance tool to help users strategize and visualize their debt repayment paths.",
      action: "Engineered a dynamic dashboard using React, leveraging the Google Gemini API to generate personalized financial insights based on user input data.",
      result: "Empowered users with actionable, AI-driven debt management plans within an intuitive and secure full-stack environment.",
      tech: ["Javascript", "Google Gemini API", "Tailwind CSS"],
      github: "https://github.com/Arun0041/AI-DEBT-PLANNER", // <-- Update link
      live: "https://arun.42web.io/?i=1",            // <-- Update link
      image: akDebtImg                                       // Updated image reference
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === projectList.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? projectList.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section id="projects" className="w-full border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 py-20 px-4 md:px-8 lg:px-12 relative overflow-hidden transition-colors duration-300">
      {/* Background Glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-cyan-400/10 blur-[120px]" />

      <div className="mx-auto max-w-7xl relative z-10">
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="mb-3 inline-block rounded-full bg-cyan-50 dark:bg-cyan-900/30 px-3 py-1.5 font-mono text-xs font-semibold uppercase tracking-widest text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800">
              Portfolio
            </p>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">Featured Projects</h2>
          </div>
          
          {/* Slider Navigation Buttons */}
          <div className="flex gap-4">
            <button 
              onClick={prevSlide}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 transition-all hover:border-cyan-400 dark:hover:border-cyan-500 hover:text-cyan-600 dark:hover:text-cyan-400 hover:shadow-lg hover:shadow-cyan-100 dark:hover:shadow-cyan-900/20"
              aria-label="Previous Project"
            >
              <FaChevronLeft className="text-xl pr-1" />
            </button>
            <button 
              onClick={nextSlide}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 transition-all hover:border-cyan-400 dark:hover:border-cyan-500 hover:text-cyan-600 dark:hover:text-cyan-400 hover:shadow-lg hover:shadow-cyan-100 dark:hover:shadow-cyan-900/20"
              aria-label="Next Project"
            >
              <FaChevronRight className="text-xl pl-1" />
            </button>
          </div>
        </div>

        {/* Sliding Window Container */}
        <div className="relative overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl backdrop-blur-sm">
          
          {/* Sliding Track */}
          <div 
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {projectList.map((proj, index) => (
              <div key={index} className="w-full flex-shrink-0 flex flex-col lg:flex-row">
                
                {/* Image Section */}
                <div className="lg:w-1/2 relative overflow-hidden border-b lg:border-b-0 lg:border-r border-slate-100 dark:border-slate-800 group bg-slate-50 dark:bg-slate-950 flex items-center justify-center">
                  <div className="absolute inset-0 bg-white/20 dark:bg-slate-900/40 mix-blend-overlay z-10 group-hover:bg-transparent transition-all duration-500" />
                  <img 
                    src={proj.image} 
                    alt={proj.title} 
                    className="w-full h-64 lg:h-full object-contain transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/800x600/f1f5f9/0ea5e9?text=Project+Preview'
                    }}
                  />
                </div>

                {/* Content Section */}
                <div className="lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                  <h3 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white leading-tight">{proj.title}</h3>

                  <div className="mb-8 space-y-5 text-[15px] leading-relaxed text-slate-600 dark:text-slate-300">
                    <div>
                      <strong className="block mb-1 text-cyan-600 dark:text-cyan-400 font-mono text-sm uppercase tracking-wider">The Challenge</strong>
                      <p>{proj.challenge}</p>
                    </div>
                    <div>
                      <strong className="block mb-1 text-cyan-600 dark:text-cyan-400 font-mono text-sm uppercase tracking-wider">The Action</strong>
                      <p>{proj.action}</p>
                    </div>
                    <div>
                      <strong className="block mb-1 text-cyan-600 dark:text-cyan-400 font-mono text-sm uppercase tracking-wider">The Result</strong>
                      <p className="text-slate-800 dark:text-slate-200 font-medium">{proj.result}</p>
                    </div>
                  </div>

                  {/* Tech Stack Chips */}
                  <div className="mb-8 flex flex-wrap gap-2">
                    {proj.tech.map((t, i) => (
                      <span key={i} className="rounded-full bg-slate-100 dark:bg-slate-800 px-4 py-1.5 text-xs font-medium text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Action Links */}
                  <div className="mt-auto pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-6">
                    {/* Live Demo Button - Primary */}
                    <a 
                      href={proj.live} 
                      target="_blank" 
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-bold text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors"
                    >
                      <FaExternalLinkAlt className="text-lg" />
                      Live Demo
                    </a>
                    
                    {/* Source Code Button - Secondary */}
                    <a 
                      href={proj.github} 
                      target="_blank" 
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 transition-colors"
                    >
                      <FaGithub className="text-xl" />
                      Source Code
                    </a>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="mt-8 flex justify-center gap-3">
          {projectList.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                currentIndex === index 
                  ? 'w-10 bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)]' 
                  : 'w-2.5 bg-slate-700 hover:bg-slate-500'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;