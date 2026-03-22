import React from 'react';
import { FaEnvelope, FaMobileAlt, FaLinkedin, FaGithub, FaDownload } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="w-full border-t border-slate-800 bg-slate-900 py-24 px-4 md:px-8 lg:px-12 relative overflow-hidden">
      {/* Background glow for the footer */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-[800px] rounded-full bg-cyan-600/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="mb-6 text-4xl font-bold text-white sm:text-5xl">Let's Build Something Great</h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-400">
            Currently looking for new opportunities. Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
          </p>
        </div>

        {/* Download CV Button */}
        <div className="mb-16 flex justify-center">
          <a 
            href="/Arun_CV.pdf" 
            download="Arun_Sharma_Resume.pdf"
            className="group flex items-center gap-3 rounded-full bg-cyan-500 px-8 py-4 font-bold text-slate-950 transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]"
          >
            <FaDownload className="text-lg transition-transform group-hover:-translate-y-1" />
            Download Resume
          </a>
        </div>

        {/* Contact Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          
          {/* Email */}
          <a href="mailto:sharmarun004@gmail.com" className="group flex flex-col items-center justify-center rounded-2xl border border-slate-800 bg-slate-950/50 p-8 transition-all hover:-translate-y-2 hover:border-cyan-500/50 hover:bg-slate-900 hover:shadow-[0_10px_30px_rgba(34,211,238,0.1)]">
            <FaEnvelope className="mb-4 text-4xl text-slate-500 transition-colors group-hover:text-cyan-400" />
            <h3 className="mb-2 text-xl font-bold text-white transition-colors group-hover:text-cyan-400">Email</h3>
          </a>

          {/* Mobile */}
          <a href="tel:+918899220041" className="group flex flex-col items-center justify-center rounded-2xl border border-slate-800 bg-slate-950/50 p-8 transition-all hover:-translate-y-2 hover:border-cyan-500/50 hover:bg-slate-900 hover:shadow-[0_10px_30px_rgba(34,211,238,0.1)]">
            <FaMobileAlt className="mb-4 text-4xl text-slate-500 transition-colors group-hover:text-cyan-400" />
            <h3 className="mb-2 text-xl font-bold text-white transition-colors group-hover:text-cyan-400">Mobile</h3>
          </a>

          {/* LinkedIn */}
          <a href="https://linkedin.com/in/arun004" target="_blank" rel="noreferrer" className="group flex flex-col items-center justify-center rounded-2xl border border-slate-800 bg-slate-950/50 p-8 transition-all hover:-translate-y-2 hover:border-cyan-500/50 hover:bg-slate-900 hover:shadow-[0_10px_30px_rgba(34,211,238,0.1)]">
            <FaLinkedin className="mb-4 text-4xl text-slate-500 transition-colors group-hover:text-cyan-400" />
            <h3 className="mb-2 text-xl font-bold text-white transition-colors group-hover:text-cyan-400">LinkedIn</h3>
          </a>

          {/* GitHub */}
          <a href="https://github.com/Arun0041" target="_blank" rel="noreferrer" className="group flex flex-col items-center justify-center rounded-2xl border border-slate-800 bg-slate-950/50 p-8 transition-all hover:-translate-y-2 hover:border-cyan-500/50 hover:bg-slate-900 hover:shadow-[0_10px_30px_rgba(34,211,238,0.1)]">
            <FaGithub className="mb-4 text-4xl text-slate-500 transition-colors group-hover:text-cyan-400" />
            <h3 className="mb-2 text-xl font-bold text-white transition-colors group-hover:text-cyan-400">GitHub</h3>
          </a>

        </div>

        {/* Footer Text */}
        <div className="border-t border-slate-800 pt-4">
          <p className="text-sm text-slate-500 font-mono">
            &copy; {new Date().getFullYear()} Built by Arun Sharma.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;