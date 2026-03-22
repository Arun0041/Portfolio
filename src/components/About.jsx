import React from 'react';

const About = () => {
  return (
    <section id="about" className="relative w-full overflow-hidden border-t border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 transition-colors duration-300">
      <div className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-cyan-400/10 dark:bg-cyan-600/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 -bottom-20 h-80 w-80 rounded-full bg-emerald-400/10 dark:bg-emerald-600/10 blur-[120px]" />

      <div className="relative z-10 w-full px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:px-12 lg:py-32">
        <div className="mx-auto w-full max-w-7xl">
          <div className="mb-10 text-left sm:mb-12 md:mb-14 lg:mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl md:text-5xl lg:text-6xl transition-colors">
              About Me
            </h2>
          </div>

          <div className="flex gap-6 sm:gap-8 md:gap-10 ">
            <div className="space-y-5 sm:space-y-6">
              <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed sm:text-lg sm:leading-relaxed transition-colors">
                I&apos;m a Computer Science student at <span className="font-semibold text-cyan-600 dark:text-cyan-400">Lovely Professional University</span> with a strong passion for building full-stack web applications that solve real-world problems. My primary tech stack is <span className="font-semibold text-cyan-600 dark:text-cyan-400">MERN</span> (MongoDB, Express, React, Node.js), where I enjoy crafting both robust backend logic and polished frontend experiences.
              </p>
              <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed sm:text-lg sm:leading-relaxed transition-colors">
                I&apos;m deeply invested in <span className="font-semibold text-cyan-600 dark:text-cyan-400">Data Structures and Algorithms</span>, having solved over <span className="font-semibold text-cyan-600 dark:text-cyan-400">300+ problems</span> across LeetCode, Codeforces, and GeeksforGeeks. I achieved a <span className="font-semibold text-cyan-600 dark:text-cyan-400">Global Rank of 2,261 (Top 8%)</span> in LeetCode Weekly Contest 483 with 28,401 participants.
              </p>
              <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed sm:text-lg sm:leading-relaxed transition-colors">
                Beyond traditional coding, I maintain a personal <span className="font-semibold text-slate-900 dark:text-slate-100">VPN and Azure VM</span> infrastructure—because the best engineers never stop exploring what&apos;s possible. I believe in continuous learning and pushing boundaries to understand systems at deeper levels.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;