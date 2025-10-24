import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Code, Sparkles, Zap } from 'lucide-react';

function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const iconsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from(titleRef.current, {
        y: 100,
        opacity: 0,
        duration: 1,
        delay: 0.3
      })
      .from(subtitleRef.current, {
        y: 50,
        opacity: 0,
        duration: 0.8
      }, '-=0.5')
      .from(buttonsRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8
      }, '-=0.4')
      .from('.hero-icon', {
        scale: 0,
        opacity: 0,
        duration: 0.5,
        stagger: 0.2
      }, '-=0.6');
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToPlans = () => {
    const element = document.getElementById('plans');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-50 to-white dark:from-dark-bg dark:via-purple-950/30 dark:to-dark-bg"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 dark:bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-fuchsia-500/20 dark:bg-fuchsia-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-500/10 dark:bg-violet-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">
          <h1
            ref={titleRef}
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-8 leading-tight"
          >
            <span className="text-black dark:text-white">Transforme Sua Visão em</span>
            <br />
            <span className="animate-gradient bg-gradient-to-r from-purple-600 via-fuchsia-600 to-violet-600 dark:from-purple-300 dark:via-fuchsia-300 dark:to-violet-300 bg-clip-text text-transparent">
              Realidade Digital
            </span>
          </h1>

          <p
            ref={subtitleRef}
            className="text-xl md:text-2xl text-gray-800 dark:text-purple-100 mb-14 max-w-3xl mx-auto leading-relaxed font-medium"
          >
            Criamos sites profissionais e modernos que elevam sua marca e conquistam clientes. Da ideia ao lançamento, cuidamos de tudo.
          </p>

          <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
            <button onClick={scrollToPlans} className="btn-primary">
              Ver Planos
            </button>
            <button onClick={scrollToContact} className="btn-outline">
              Falar com Especialista
            </button>
          </div>

          <div ref={iconsRef} className="flex flex-wrap justify-center gap-6 md:gap-12">
            <div className="hero-icon flex flex-col items-center gap-4 p-8 rounded-3xl bg-white/80 dark:bg-purple-900/40 backdrop-blur-md border-2 border-gray-200 dark:border-purple-500/50 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <Code className="w-14 h-14 text-black dark:text-purple-300" strokeWidth={2.5} />
              <span className="text-base font-bold text-gray-900 dark:text-purple-200">Código Limpo</span>
            </div>
            <div className="hero-icon flex flex-col items-center gap-4 p-8 rounded-3xl bg-white/80 dark:bg-fuchsia-900/40 backdrop-blur-md border-2 border-gray-200 dark:border-fuchsia-500/50 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <Sparkles className="w-14 h-14 text-black dark:text-fuchsia-300" strokeWidth={2.5} />
              <span className="text-base font-bold text-gray-900 dark:text-fuchsia-200">Design Único</span>
            </div>
            <div className="hero-icon flex flex-col items-center gap-4 p-8 rounded-3xl bg-white/80 dark:bg-violet-900/40 backdrop-blur-md border-2 border-gray-200 dark:border-violet-500/50 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <Zap className="w-14 h-14 text-black dark:text-violet-300" strokeWidth={2.5} />
              <span className="text-base font-bold text-gray-900 dark:text-violet-200">Performance</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
