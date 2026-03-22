import React from 'react';
import { FaEnvelope, FaMobileAlt, FaLinkedin, FaGithub, FaDownload, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="relative w-full overflow-hidden border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 px-4 py-24 transition-colors duration-300 md:px-8 lg:px-12">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">Let&apos;s Build Something Great</h2>
          <p className="mx-auto max-w-2xl text-slate-600 dark:text-slate-400">
            Currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </div>

        <div className="mx-auto w-full max-w-2xl">
          <div className="space-y-6">
            <div className="flex h-full flex-col rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm">
              {/* <h3 className="mb-5 text-xl font-bold text-slate-900 dark:text-white">Get In Touch</h3> */}

              <div className="space-y-3">
                <a href="mailto:sharmarun004@gmail.com" className="flex items-center gap-3 rounded-xl border border-slate-200 dark:border-slate-800 px-4 py-3 transition-colors hover:border-rose-300 dark:hover:border-rose-800 hover:bg-rose-50/60 dark:hover:bg-rose-900/10">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-rose-50 dark:bg-rose-900/20 text-rose-500">
                    <FaEnvelope className="text-base" />
                  </span>
                  <span className="min-w-0 text-left">
                    <span className="block text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">Email</span>
                    <span className="block truncate text-sm font-semibold text-slate-700 dark:text-slate-200">sharmarun004@gmail.com</span>
                  </span>
                </a>

                <a href="tel:+918899220041" className="flex items-center gap-3 rounded-xl border border-slate-200 dark:border-slate-800 px-4 py-3 transition-colors hover:border-emerald-300 dark:hover:border-emerald-800 hover:bg-emerald-50/60 dark:hover:bg-emerald-900/10">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50 dark:bg-emerald-900/20 text-emerald-500">
                    <FaMobileAlt className="text-base" />
                  </span>
                  <span className="text-left">
                    <span className="block text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">Phone</span>
                    <span className="block text-sm font-semibold text-slate-700 dark:text-slate-200">+91 8899220041</span>
                  </span>
                </a>
              </div>

              <div className="mt-6 border-t border-slate-200 dark:border-slate-800 pt-5">
                <p className="mb-3 text-sm font-semibold text-slate-700 dark:text-slate-200">Social</p>
                <div className="flex flex-wrap gap-3">
                  <a href="https://linkedin.com/in/arun004" target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-white dark:bg-slate-800 text-[#0077B5] shadow-sm ring-1 ring-slate-200 dark:ring-slate-700 transition-all hover:ring-[#0077B5] hover:shadow-md hover:scale-105" aria-label="LinkedIn">
                    <FaLinkedin className="text-lg" />
                  </a>
                  <a href="https://instagram.com/" target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-white dark:bg-slate-800 text-[#E4405F] shadow-sm ring-1 ring-slate-200 dark:ring-slate-700 transition-all hover:ring-[#E4405F] hover:shadow-md hover:scale-105" aria-label="Instagram">
                    <FaInstagram className="text-lg" />
                  </a>
                  <a href="https://github.com/Arun0041" target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-white dark:bg-slate-800 text-[#181717] dark:text-white shadow-sm ring-1 ring-slate-200 dark:ring-slate-700 transition-all hover:ring-[#181717] dark:hover:ring-slate-500 hover:shadow-md hover:scale-105" aria-label="GitHub">
                    <FaGithub className="text-lg" />
                  </a>
                </div>
              </div>

              <a
                href="/Arun_CV.pdf"
                download="Arun_Sharma_Resume.pdf"
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-600 px-6 py-3 font-bold text-white transition-all hover:bg-cyan-500 hover:shadow-lg hover:shadow-cyan-200 dark:hover:shadow-cyan-900/40"
              >
                <FaDownload className="text-sm" />
                Download CV
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-200 dark:border-slate-800 pt-6 text-center">
          <p className="font-mono text-sm text-slate-500 dark:text-slate-500">
            &copy; {new Date().getFullYear()} Built by Arun Sharma
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;