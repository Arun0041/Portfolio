import { useEffect, useState } from 'react';

const PROFILE_IMAGE = 'https://res.cloudinary.com/drz68l0zo/image/upload/v1777043247/yourtherapist_profiles/srqvtllwyjvjm6kha0tg.png';

const ROLES = [
  { label: 'Software Engineer' },
  { label: 'Full-Stack Developer' },
  { label: 'Competitive Programmer' }
];

const STATS = [
  { value: '300+', label: 'DSA Solved' },
  { value: '1596', label: 'LeetCode Contest Rating' },
  { value: '8.58', label: 'CGPA' },
  { value: '5+', label: 'Projects' }
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [typedRole, setTypedRole] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = ROLES[roleIndex].label;
    let delay = isDeleting ? 45 : 80;

    if (!isDeleting && typedRole === currentRole) {
      delay = 1100;
    }
    if (isDeleting && typedRole === '') {
      delay = 220;
    }

    const id = setTimeout(() => {
      if (!isDeleting) {
        if (typedRole === currentRole) {
          setIsDeleting(true);
          return;
        }
        setTypedRole(currentRole.slice(0, typedRole.length + 1));
        return;
      }

      if (typedRole === '') {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % ROLES.length);
        return;
      }

      setTypedRole(currentRole.slice(0, typedRole.length - 1));
    }, delay);

    return () => clearTimeout(id);
  }, [isDeleting, roleIndex, typedRole]);

  return (
    <section id="home" className="relative flex min-h-[90vh] items-center overflow-hidden bg-white dark:bg-slate-950 px-4 pt-[68px] transition-colors duration-300">
      <div className="pointer-events-none absolute -right-36 -top-24 h-[460px] w-[460px] rounded-full bg-cyan-400/20 dark:bg-cyan-600/10 blur-[100px]" />
      <div className="pointer-events-none absolute -left-20 bottom-6 h-[320px] w-[320px] rounded-full bg-emerald-400/20 dark:bg-emerald-600/10 blur-[100px]" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center gap-12 py-10 md:flex-row-reverse md:justify-between">
        
        {/* Right side - Image */}
        <div className="shrink-0">
          <div className="h-64 w-64 md:h-80 md:w-80 overflow-hidden rounded-full border-2 border-cyan-500 dark:border-cyan-600 bg-white dark:bg-slate-900 shadow-2xl shadow-cyan-500/20 dark:shadow-cyan-900/40">
            {PROFILE_IMAGE ? (
              <img src={PROFILE_IMAGE} alt="Arun Sharma" className="h-full w-full object-cover" />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 text-6xl font-bold text-cyan-500">
                A
              </div>
            )}
          </div>
        </div>

        {/* Left side - Content */}
        <div className="w-full text-left md:max-w-2xl">
          <div className="mb-6 inline-flex rounded-full bg-cyan-50 dark:bg-cyan-950/30 px-4 py-2 font-mono text-sm uppercase tracking-widest text-cyan-600 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-900/50">
            Hello, I&apos;m
          </div>

          <h1 className="mb-4 text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white transition-colors">
            Arun <span className="text-cyan-600 dark:text-cyan-400">Sharma</span>
          </h1>

          <div className="mb-6 flex h-[40px] items-center justify-start gap-2">
            <span className="text-2xl md:text-3xl font-semibold text-slate-600 dark:text-slate-400 transition-colors">
              {typedRole}
              <span className="ml-1 inline-block animate-pulse text-cyan-600 dark:text-cyan-400">|</span>
            </span>
          </div>

          <p className="mb-10 text-lg leading-relaxed text-slate-500 dark:text-slate-400">
            Building scalable web applications with the <strong className="font-semibold text-slate-800 dark:text-slate-200">MERN stack</strong>,
            solving complex algorithmic challenges, and shipping production-ready products with measurable impact.
          </p>

          <div className="mb-12 flex flex-wrap justify-center gap-4 md:justify-start">
            <a href="#projects" className="rounded-lg bg-cyan-600 dark:bg-cyan-500 px-8 py-3 font-bold text-white transition-colors hover:bg-cyan-700 dark:hover:bg-cyan-400 shadow-lg shadow-cyan-600/20 dark:shadow-cyan-500/20">
              View My Work
            </a>

            <a href="/Arun_CV.pdf" download className="rounded-lg border border-slate-300 dark:border-slate-700 px-8 py-3 font-bold text-slate-600 dark:text-slate-300 transition-all hover:border-cyan-600 dark:hover:border-cyan-400 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-slate-50 dark:hover:bg-slate-900">
              Download CV
            </a>
          </div>

          <div className="grid w-full grid-cols-2 overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm shadow-sm transition-colors md:grid-cols-4">
            {STATS.map(({ value, label }, i) => (
              <div
                key={label}
                className={`p-4 text-center ${
                  i % 2 === 0 ? 'border-r border-slate-200 dark:border-slate-800 md:border-r' : 'md:border-r md:border-slate-200 md:dark:border-slate-800'
                } ${
                  i < 2 ? 'border-b border-slate-200 dark:border-slate-800 md:border-b-0' : ''
                } ${
                  i === STATS.length - 1 ? 'md:border-r-0' : ''
                }`}
              >
                <div className="mb-1 text-xl font-bold text-cyan-600 dark:text-cyan-400 md:text-2xl">{value}</div>
                <div className="font-mono text-[10px] leading-4 uppercase tracking-wider text-slate-500 dark:text-slate-400 md:text-xs">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
