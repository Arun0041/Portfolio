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
    <section id="education" className="w-full border-t border-slate-800 bg-slate-900 py-20 px-4 md:px-8 lg:px-12 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="pointer-events-none absolute right-0 top-1/4 h-[400px] w-[400px] rounded-full bg-cyan-600/5 blur-[120px]" />

      <div className="mx-auto max-w-3xl relative z-10">
        <div className="mb-16 text-center">
          <p className="mb-3 inline-block rounded-full bg-cyan-900/40 px-3 py-1.5 font-mono text-xs font-semibold uppercase tracking-widest text-cyan-300 border border-cyan-800/50">
            Academic Background
          </p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">Education</h2>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-slate-700/50 pl-8 space-y-12 ml-4 md:ml-8">
          {eduHistory.map((edu, index) => (
            <div key={index} className="relative group">
              
              {/* Timeline Dot with Icon */}
              <div className="absolute -left-[51px] top-1.5 flex h-10 w-10 items-center justify-center rounded-full border-4 border-slate-900 bg-slate-800 text-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.2)] transition-colors duration-300 group-hover:bg-cyan-500 group-hover:text-slate-900">
                {edu.icon}
              </div>
              
              {/* Content Card */}
              <div className="rounded-xl border border-slate-800 bg-slate-950/50 p-6 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/30 hover:shadow-[0_10px_30px_rgba(0,0,0,0.2)]">
                <h3 className="mb-2 text-xl md:text-2xl font-bold text-white leading-tight">{edu.degree}</h3>
                <p className="mb-5 text-slate-400">{edu.institution}</p>
                <span className="inline-block rounded-full bg-cyan-950/30 px-4 py-1.5 text-sm font-semibold text-cyan-300 border border-cyan-900/50">
                  {edu.details}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;