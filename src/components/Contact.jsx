import React from 'react';
import { FaEnvelope, FaMobileAlt, FaLinkedin, FaGithub, FaDownload } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="w-full border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 py-16 px-4 md:px-8 lg:px-12 relative overflow-hidden transition-colors duration-300">
      {/* Background glow for the footer */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-[600px] rounded-full bg-cyan-400/10 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        
        {/* Header Section */}
        <div className="mb-8">
          <h2 className="mb-4 text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">Let's Build Something Great</h2>
          <p className="mx-auto max-w-xl text-slate-600 dark:text-slate-400">
            Currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </div>

        {/* Action Buttons & Socials */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
          
          <a 
            href="/Arun_CV.pdf" 
            download="Arun_Sharma_Resume.pdf"
            className="group flex items-center gap-2 rounded-full bg-cyan-600 px-6 py-3 font-bold text-white transition-all hover:bg-cyan-500 hover:shadow-lg hover:shadow-cyan-200 dark:hover:shadow-cyan-900/40"
          >
            <FaDownload className="text-sm transition-transform group-hover:-translate-y-0.5" />
            Download Resume
          </a>

          <div className="h-px w-16 bg-slate-300 dark:bg-slate-700 sm:h-8 sm:w-px" />

          <div className="flex gap-4">
            <a href="mailto:sharmarun004@gmail.com" className="flex h-10 w-10 items-center justify-center rounded-full bg-white dark:bg-slate-800 text-rose-500 shadow-sm ring-1 ring-rose-100 dark:ring-rose-900/30 transition-all hover:ring-rose-400 hover:shadow-md hover:scale-105" aria-label="Email">
              <FaEnvelope className="text-lg" />
            </a>
            <a href="tel:+918899220041" className="flex h-10 w-10 items-center justify-center rounded-full bg-white dark:bg-slate-800 text-emerald-500 shadow-sm ring-1 ring-emerald-100 dark:ring-emerald-900/30 transition-all hover:ring-emerald-400 hover:shadow-md hover:scale-105" aria-label="Mobile">
              <FaMobileAlt className="text-lg" />
            </a>
            <a href="https://linkedin.com/in/arun004" target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-white dark:bg-slate-800 text-[#0077B5] shadow-sm ring-1 ring-slate-200 dark:ring-slate-700 transition-all hover:ring-[#0077B5] hover:shadow-md hover:scale-105" aria-label="LinkedIn">
              <FaLinkedin className="text-lg" />
            </a>
            <a href="https://github.com/Arun0041" target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-white dark:bg-slate-800 text-[#181717] dark:text-white shadow-sm ring-1 ring-slate-200 dark:ring-slate-700 transition-all hover:ring-[#181717] dark:hover:ring-slate-500 hover:shadow-md hover:scale-105" aria-label="GitHub">
              <FaGithub className="text-lg" />
            </a>
          </div>
        </div>

        {/* Footer Text */}
        <div className="border-t border-slate-200 dark:border-slate-800 pt-6">
          <p className="text-sm text-slate-500 dark:text-slate-500 font-mono">
            &copy; {new Date().getFullYear()} Built by Arun Sharma.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;