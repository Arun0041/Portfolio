import React from 'react';
// Importing official tech logos from react-icons
import { 
  FaJava, FaNodeJs, FaReact, FaGithub, FaLinux, FaDatabase, 
  FaUsers, FaBrain, FaRegClock, FaSync 
} from 'react-icons/fa';
import { 
  SiC, SiCplusplus, SiJavascript, SiPhp, SiExpress, SiTailwindcss, 
  SiMysql, SiMongodb, SiPostman 
} from 'react-icons/si';
// Add this new import for the Azure icon
import { VscAzure } from 'react-icons/vsc';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: [
        { name: 'C', icon: <SiC /> },
        { name: 'C++', icon: <SiCplusplus /> },
        { name: 'Java', icon: <FaJava /> },
        { name: 'JavaScript', icon: <SiJavascript /> },
        { name: 'SQL', icon: <FaDatabase /> },
        { name: 'PHP', icon: <SiPhp /> }
      ]
    },
    {
      title: 'Frameworks & Libraries',
      skills: [
        { name: 'Node.js', icon: <FaNodeJs /> },
        { name: 'React.js', icon: <FaReact /> },
        { name: 'Express.js', icon: <SiExpress /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss /> }
      ]
    },
    {
      title: 'Tools & Platforms',
      skills: [
        { name: 'MySQL', icon: <SiMysql /> },
        { name: 'MongoDB', icon: <SiMongodb /> },
        { name: 'GitHub', icon: <FaGithub /> },
        { name: 'Linux', icon: <FaLinux /> },
        { name: 'Postman', icon: <SiPostman /> },
        { name: 'Azure VM', icon: <VscAzure /> }
      ]
    },
    // {
    //   title: 'Soft Skills',
    //   skills: [
    //     { name: 'Problem-Solving', icon: <FaBrain /> },
    //     { name: 'Team Player', icon: <FaUsers /> },
    //     { name: 'Time Management', icon: <FaRegClock /> },
    //     { name: 'Adaptability', icon: <FaSync /> }
    //   ]
    // }
  ];

  return (
    <section id="skills" className="w-full border-t border-slate-800 bg-slate-900 py-20 px-4 md:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="mb-16 text-center md:text-left">
          <p className="mb-3 inline-block rounded-full bg-cyan-900/40 px-3 py-1.5 font-mono text-xs font-semibold uppercase tracking-widest text-cyan-300 border border-cyan-800/50">
            My Arsenal
          </p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">Technical Skills</h2>
        </div>

        {/* Categories Container */}
        <div className="space-y-16">
          {skillCategories.map((category, index) => (
            <div key={index}>
              <h3 className="mb-6 text-xl font-semibold text-white border-b border-slate-800 pb-2">
                {category.title}
              </h3>
              
              {/* Skill Boxes Grid */}
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                {category.skills.map((skill, i) => (
                  <div 
                    key={i} 
                    className="group flex flex-col items-center justify-center gap-3 rounded-xl border border-slate-700/50 bg-slate-800/30 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/50 hover:bg-slate-800 hover:shadow-[0_10px_20px_rgba(34,211,238,0.1)]"
                  >
                    <div className="text-4xl text-slate-400 transition-colors duration-300 group-hover:text-cyan-400 group-hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]">
                      {skill.icon}
                    </div>
                    <span className="text-sm font-medium text-slate-300 transition-colors duration-300 group-hover:text-white text-center">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;