import { useEffect, useState } from 'react';

const PROFILE_IMAGE = 'https://media.licdn.com/dms/image/v2/D5603AQG6Dxxt3pRa-g/profile-displayphoto-scale_400_400/B56ZlR8AJkHAAg-/0/1758016312894?e=1775692800&v=beta&t=weLqNyWmBU005hSIoOL3zJmesOQGGllOlOgpzsEDadQ'; // Paste your final image URL here when ready.

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
    <section id="home" className="relative flex min-h-[90vh] items-center overflow-hidden bg-slate-950 px-4 pt-[68px]">
      <div className="pointer-events-none absolute -right-36 -top-24 h-[460px] w-[460px] rounded-full bg-cyan-500/10 blur-[100px]" />
      <div className="pointer-events-none absolute -left-20 bottom-6 h-[320px] w-[320px] rounded-full bg-emerald-500/10 blur-[100px]" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center gap-12 py-10 md:flex-row-reverse md:justify-between">
        
        {/* Right side - Image */}
        <div className="shrink-0">
          <div className="h-64 w-64 md:h-80 md:w-80 overflow-hidden rounded-full border-2 border-cyan-400/50 bg-slate-900 shadow-[0_0_40px_rgba(34,211,238,0.2)]">
            {PROFILE_IMAGE ? (
              <img src={PROFILE_IMAGE} alt="Arun Sharma" className="h-full w-full object-cover" />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900 text-6xl font-bold text-cyan-200">
                A
              </div>
            )}
          </div>
        </div>

        {/* Left side - Content */}
        <div className="w-full md:max-w-2xl text-center md:text-left">
          <div className="mb-6 inline-flex rounded-full bg-cyan-950/50 px-4 py-2 font-mono text-sm uppercase tracking-widest text-cyan-300 border border-cyan-800/50">
            Hello, I&apos;m
          </div>

          <h1 className="mb-4 text-5xl md:text-7xl font-extrabold tracking-tight text-white">
            Arun <span className="text-cyan-400">Sharma.</span>
          </h1>

          <div className="mb-6 flex h-[40px] items-center justify-center md:justify-start gap-2">
            <span className="text-2xl md:text-3xl font-semibold text-slate-300">
              {typedRole}
              <span className="ml-1 inline-block animate-pulse text-cyan-400">|</span>
            </span>
          </div>

          <p className="mb-10 text-lg leading-relaxed text-slate-400">
            Building scalable web applications with the <strong className="font-semibold text-slate-200">MERN stack</strong>,
            solving complex algorithmic challenges, and shipping production-ready products with measurable impact.
          </p>

          <div className="mb-12 flex flex-wrap justify-center md:justify-start gap-4">
            <a href="#projects" className="rounded-lg bg-cyan-500 px-8 py-3 font-bold text-slate-950 transition-colors hover:bg-cyan-400">
              View My Work
            </a>
            <a href="/Arun_CV.pdf" download className="rounded-lg border border-slate-600 px-8 py-3 font-bold text-white transition-all hover:border-cyan-400 hover:text-cyan-400 hover:bg-slate-900">
              Download CV
            </a>
          </div>

          <div className="flex w-full overflow-hidden rounded-xl border border-slate-800 bg-slate-900/50 backdrop-blur-sm">
            {STATS.map(({ value, label }, i) => (
              <div key={label} className={`flex-1 p-4 text-center ${i < STATS.length - 1 ? 'border-r border-slate-800' : ''}`}>
                <div className="text-xl md:text-2xl font-bold text-cyan-400 mb-1">{value}</div>
                <div className="font-mono text-xs uppercase tracking-wider text-slate-500">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;