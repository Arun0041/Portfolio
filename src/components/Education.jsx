import React from 'react';
import { FaGraduationCap, FaSchool } from 'react-icons/fa';

const Education = () => {
  const eduHistory = [
    {
      degree: "Bachelor of Technology, Computer Science & Engineering",
      institution: "Lovely Professional University | Phagwara, Punjab",
      details: "Aug 2023 - Present",
      icon: <FaGraduationCap className="text-xl" />
    },
    {
      degree: "Intermediate",
      institution: "Hari Bhoomi Senior Secondary School | Jind, Haryana",
      details: "Apr 2022 - May 2023",
      icon: <FaSchool className="text-lg" />
    },
    {
      degree: "Matriculation",
      institution: "Guru Dronacharya Public School | Jind, Haryana",
      details: "May 2020 - Jun 2021",
      icon: <FaSchool className="text-lg" />
    }
  ];

  return (
    <section id="education" className="w-full border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/50 py-20 px-4 md:px-8 lg:px-12 relative overflow-hidden transition-colors duration-300">
      {/* Subtle Background Glow */}
      <div className="pointer-events-none absolute right-0 top-1/4 h-[400px] w-[400px] rounded-full bg-cyan-400/10 blur-[120px]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="mb-16 text-left">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">Education</h2>
        </div>

        {/* Timeline Container */}
        <div className="relative w-full space-y-12 border-l-2 border-slate-300 pl-8 dark:border-slate-700 md:pl-10 lg:pl-12">
          {eduHistory.map((edu, index) => (
            <div key={index} className="relative group">
              
              {/* Timeline Dot with Icon */}
              <div className="absolute -left-[51px] top-1.5 flex h-10 w-10 items-center justify-center rounded-full border-4 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-cyan-600 dark:text-cyan-400 shadow-sm transition-colors duration-300 group-hover:bg-cyan-500 dark:group-hover:bg-cyan-600 group-hover:text-white group-hover:border-cyan-200 dark:group-hover:border-cyan-800 pop-in">
                {edu.icon}
              </div>
              
              {/* Content Card */}
              <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-8 py-6 md:px-12 md:py-8 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300 dark:hover:border-cyan-700 hover:shadow-lg hover:shadow-cyan-100 dark:hover:shadow-cyan-900/20">
                <h3 className="mb-2 text-xl md:text-2xl font-bold text-slate-900 dark:text-white leading-tight">{edu.degree}</h3>
                <div className="mt-5 flex flex-col gap-3 md:flex-row md:items-center md:justify-between md:gap-12">
                  <p className="text-slate-600 dark:text-slate-400">{edu.institution}</p>
                  <span className="inline-block w-max rounded-full bg-cyan-50 dark:bg-cyan-900/30 px-4 py-1.5 text-sm font-semibold text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800">
                    {edu.details}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;