import React from 'react';
import { FaCertificate } from 'react-icons/fa';

const Certificates = () => {
  const certs = [
    { title: "Cloud Computing", issuer: "NPTEL", date: "May 2025" },
    { title: "Introduction to MongoDB for Students", issuer: "MongoDB", date: "Sep 2025" },
    { title: "Server-side JavaScript with Node.js", issuer: "Coursera", date: "Oct 2025" },
    { title: "Data Structures and Algorithms", issuer: "iamneo", date: "Dec 2024" }
  ];

  return (
    <section id="certificates" className="w-full border-t border-slate-800 bg-slate-900 py-14 px-4 md:px-8 lg:px-12 relative overflow-hidden">
      <div className="mx-auto max-w-7xl relative z-10">
        
        <div className="mb-16 text-center">
          {/* <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-900/30 text-3xl text-emerald-400 border border-emerald-500/30">
            <FaCertificate />
          </div>
          <p className="mb-2 font-mono text-xs font-semibold uppercase tracking-widest text-emerald-400">
            Continuous Learning
          </p> */}
          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">Certificates</h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {certs.map((cert, index) => (
            <div key={index} className="flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-950/50 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-emerald-500/50 hover:bg-slate-800 hover:shadow-[0_15px_30px_rgba(16,185,129,0.15)]">
              <h3 className="mb-6 text-lg font-bold text-white leading-snug">{cert.title}</h3>
              <div className="flex flex-col gap-3 border-t border-slate-800/80 pt-5 mt-auto">
                <span className="text-sm font-medium text-slate-400">{cert.issuer}</span>
                <span className="inline-block w-max rounded-full bg-emerald-950/50 px-3 py-1 font-mono text-xs text-emerald-400 border border-emerald-900/50">
                  {cert.date}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certificates;