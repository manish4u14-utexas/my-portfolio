import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import Typewriter from 'typewriter-effect';

// Particle Network Canvas
const ParticleCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      opacity: number;
    }> = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    const createParticles = () => {
      const count = Math.min(60, Math.floor((canvas.offsetWidth * canvas.offsetHeight) / 15000));
      particles = [];
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.offsetWidth,
          y: Math.random() * canvas.offsetHeight,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          radius: Math.random() * 2 + 1,
          opacity: Math.random() * 0.5 + 0.2,
        });
      }
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(56, 189, 248, ${0.15 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw and update particles
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(56, 189, 248, ${p.opacity})`;
        ctx.fill();

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.offsetWidth) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.offsetHeight) p.vy *= -1;
      }

      animationId = requestAnimationFrame(drawParticles);
    };

    resize();
    createParticles();
    drawParticles();

    window.addEventListener('resize', () => {
      resize();
      createParticles();
    });

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ pointerEvents: 'none' }}
    />
  );
};

const Hero: React.FC = () => {
  const { ref: heroRef, inView: heroInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const roles = [
    "Technical Product Manager [AI]",
    "AI Solution Architect",
    "Builder PM & Vibe Coder",
  ];

  return (
    <section
      id="home"
      ref={heroRef}
      className="min-h-screen flex flex-col items-center justify-center bg-[#0F172A] text-white text-center p-4 relative overflow-hidden"
    >
      {/* Animated Particle Network Background */}
      <ParticleCanvas />

      {/* Subtle radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-sky-900/20 via-transparent to-transparent" />

      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-4xl mx-auto">
        {/* Profile Photo with glow ring */}
        <div className={`mb-8 transition-all duration-700 ease-out ${heroInView ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-sky-400/30 blur-xl animate-pulse" />
            <img
              src="/my-portfolio/profile-photo.jpg"
              alt="Manish Chaudhari"
              className="relative w-32 h-32 md:w-40 md:h-40 rounded-full border-3 border-sky-400/80 shadow-2xl object-cover transition-all duration-500 hover:scale-105"
            />
          </div>
        </div>

        {/* Name */}
        <h1
          className={`text-3xl sm:text-5xl md:text-6xl font-bold mb-3 transition-all duration-1000 ease-out ${heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          Manish <span className="text-sky-400">Chaudhari</span>
        </h1>

        {/* Animated Roles - Primary focus */}
        <div
          className={`h-10 sm:h-12 text-lg sm:text-xl md:text-2xl mb-6 transition-all duration-1000 ease-out delay-300 ${heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <Typewriter
            options={{
              strings: roles,
              autoStart: true,
              loop: true,
              delay: 50,
              deleteSpeed: 30,
              wrapperClassName: "text-sky-300 font-semibold",
              cursorClassName: "text-sky-400"
            }}
            onInit={(typewriter) => {
              typewriter.pauseFor(1000).start();
            }}
          />
        </div>

        {/* One-liner value prop */}
        <p className={`text-sm sm:text-base text-gray-400 max-w-xl mb-4 transition-all duration-1000 ease-out delay-500 ${heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          13 years bridging business vision & engineering execution. Now building AI-powered enterprise products.
        </p>

        {/* Education Badge */}
        <div className={`inline-flex items-center bg-sky-500/10 border border-sky-500/30 rounded-full px-4 py-1.5 mb-8 transition-all duration-1000 ease-out delay-500 ${heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="text-sky-300 mr-2 text-sm">🎓</span>
          <span className="text-xs sm:text-sm text-sky-200/80 font-medium">
            M.S. in AI @ UT Austin
          </span>
        </div>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-sm transition-opacity duration-1000 ease-out delay-700 ${heroInView ? 'opacity-100' : 'opacity-0'}`}
        >
          <a
            href="#projects"
            className="bg-sky-500 hover:bg-sky-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-sky-500/30 active:scale-95 w-full sm:w-auto text-center text-sm touch-manipulation"
          >
            View My Work
          </a>
          <a
            href="/my-portfolio/Manish_Chaudhari_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-transparent hover:bg-sky-500/10 text-sky-400 font-semibold py-3 px-8 border border-sky-400/50 hover:border-sky-400 rounded-lg transition-all duration-300 hover:scale-105 active:scale-95 w-full sm:w-auto text-center text-sm touch-manipulation"
          >
            Download Resume
          </a>
        </div>

        {/* Scroll indicator */}
        <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-1000 ${heroInView ? 'opacity-100' : 'opacity-0'}`}>
          <div className="animate-bounce">
            <svg className="w-5 h-5 text-sky-400/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
