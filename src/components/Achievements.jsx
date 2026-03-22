import React from 'react';
import { FaTrophy, FaLightbulb, FaCloud, FaRobot } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const Achievements = () => {
  const achievements = [
    { 
      title: "Competitive Programming", 
      desc: "Consistently ranking in the Top 8% globally on LeetCode. Secured Global Rank 3,206 (out of 41,485) in Weekly Contest 493 and Rank 2,261 (out of 28,401) in Contest 483.",
      icon: <SiLeetcode className="text-cyan-400" />
    },
    { 
      title: "Research & Innovation", 
      desc: "Filed a formal technology patent through the Lovely Professional University R&D department.",
      icon: <FaLightbulb className="text-cyan-400" />
    },
    { 
      title: "AI Integrations", 
      desc: "Developed and launched specialized AI-powered tools, including Grasp AI and AK Debt Planner, leveraging the Google Gemini API.",
      icon: <FaRobot className="text-cyan-400" />
    },
    { 
      title: "Deployed Cloud Infrastructure", 
      desc: "Deployed and actively maintain a personal VPN and remote management server hosted on an Azure Virtual Machine.",
      icon: <FaCloud className="text-cyan-400" />
    }
  ];

  return (
    <section id="achievements" className="w-full border-t border-slate-800 bg-slate-950 py-24 px-4 md:px-8 lg:px-12 relative overflow-hidden">
      <div className="mx-auto max-w-7xl relative z-10">
        
        <div className="mb-16 text-center">
          <p className="mb-3 inline-block rounded-full bg-cyan-900/40 px-3 py-1.5 font-mono text-xs font-semibold uppercase tracking-widest text-cyan-300 border border-cyan-800/50">
            Milestones
          </p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">Key Achievements</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {achievements.map((item, index) => (
            <div key={index} className="group flex flex-col sm:flex-row items-start gap-5 rounded-2xl border-l-4 border-l-cyan-500 border-y border-r border-slate-800 bg-slate-900/50 p-6 md:p-8 transition-all hover:-translate-y-1 hover:bg-slate-800 hover:shadow-[0_10px_30px_rgba(34,211,238,0.1)]">
              <div className="mt-1 flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-slate-950 text-3xl opacity-80 border border-slate-800 group-hover:opacity-100 transition-opacity">
                {item.icon}
              </div>
              <div>
                <h3 className="mb-3 text-xl font-bold text-white leading-tight">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Achievements;