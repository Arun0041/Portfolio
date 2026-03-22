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
        { name: 'C', icon: <SiC />, color: '#00599C' },
        { name: 'C++', icon: <SiCplusplus />, color: '#00599C' },
        { name: 'Java', icon: <FaJava />, color: '#007396' },
        { name: 'JavaScript', icon: <SiJavascript />, color: '#F7DF1E' },
        { name: 'SQL', icon: <FaDatabase />, color: '#4479A1' },
        { name: 'PHP', icon: <SiPhp />, color: '#777BB4' }
      ]
    },
    {
      title: 'Frameworks & Libraries',
      skills: [
        { name: 'Node.js', icon: <FaNodeJs />, color: '#339933' },
        { name: 'React.js', icon: <FaReact />, color: '#61DAFB' },
        { name: 'Express.js', icon: <SiExpress />, color: '#000000' },
        { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#06B6D4' }
      ]
    },
    {
      title: 'Tools & Platforms',
      skills: [
        { name: 'MySQL', icon: <SiMysql />, color: '#4479A1' },
        { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
        { name: 'GitHub', icon: <FaGithub />, color: '#181717' },
        { name: 'Linux', icon: <FaLinux />, color: '#FCC624' },
        { name: 'Postman', icon: <SiPostman />, color: '#FF6C37' },
        { name: 'Azure VM', icon: <VscAzure />, color: '#0078D4' }
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
    <section id="skills" className="w-full border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/50 py-20 px-4 md:px-8 lg:px-12 transition-colors duration-300">
      <div className="mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="mb-16 text-left">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">Technical Skills</h2>
        </div>

        {/* Categories Container */}
        <div className="space-y-16">
          {skillCategories.map((category, index) => (
            <div key={index}>
              <h3 className="mb-6 text-xl font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-800 pb-2">
                {category.title}
              </h3>
              
              {/* Skill Boxes Grid */}
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                {category.skills.map((skill, i) => (
                  <div 
                    key={i} 
                    className="group flex flex-col items-center justify-center gap-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 dark:hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-100 dark:hover:shadow-cyan-900/20"
                  >
                    <div 
                      className="text-4xl transition-colors duration-300 drop-shadow-sm"
                      style={{ color: skill.color }}
                    >
                      {skill.icon}
                    </div>
                    <span className="text-sm font-medium text-slate-600 dark:text-slate-400 transition-colors duration-300 group-hover:text-slate-900 dark:group-hover:text-slate-100 text-center">
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