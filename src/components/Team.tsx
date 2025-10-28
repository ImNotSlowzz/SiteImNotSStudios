import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronLeft, ChevronRight, Instagram, Linkedin, Github } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface TeamMember {
  name: string;
  role: string;
  image: string;
  social: {
    instagram?: string;
    linkedin?: string;
    github?: string;
  };
}

const team: TeamMember[] = [
  {
    name: 'Victor Thomé',
    role: 'CTO (Chief Technology Officer)',
    image: 'src/photos/victorGabriel.jpg',
    social: {
      instagram: 'https://www.instagram.com/thome_victorr',
      linkedin: 'https://www.linkedin.com/in/victor-thomé-bb5470387',
      github: 'https://github.com/ImNotSlowzz'
    }
  },
  {
    name: 'Matheus Luis',
    role: 'Brand & Social Strategist',
    image: 'src/photos/MatheusLuis.jpg',
    social: {
      instagram: 'https://www.instagram.com/mklyw._',
      linkedin: 'https://www.linkedin.com/in/matheus-luis-9a6b76372'
    }
  },
  {
    name: 'João Lopes',
    role: 'CFO (Chief Financial Officer)',
    image: 'src/photos/JoaoLopes.jpg',
    social: {
      instagram: 'https://www.instagram.com/_lopes.joao_',
      linkedin: 'https://linkedin.com',
    }
  },
  {
    name: 'Gustavo Pereira',
    role: 'Head de Cibersegurança',
    image: 'src/photos/GustavoPereira.jpg',
    social: {
      instagram: 'https://www.instagram.com/silvagustv',
      linkedin: 'https://www.linkedin.com/in/gustavolaguerre'
    }
  },
  {
    name: 'Artur Augusto',
    role: 'CISO (Chief Information Security Officer)',
    image: 'src/photos/ArturAugusto.jpg',
    social: {
      linkedin: 'https://www.linkedin.com/in/artur-augusto-gomes-210439327',
       instagram: 'https://www.instagram.com/txt_artur'
    }
  },
];

function Team() {
  const sectionRef = useRef<HTMLElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.team-title', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        },
        y: 50,
        opacity: 0,
        duration: 0.8
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % team.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + team.length) % team.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToSlide = (index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const getVisibleMembers = () => {
    const members = [];
    for (let i = -1; i <= 1; i++) {
      const index = (currentIndex + i + team.length) % team.length;
      members.push({ ...team[index], offset: i });
    }
    return members;
  };

  return (
    <section
      id="team"
      ref={sectionRef}
      className="py-24 bg-gray-50 dark:bg-gradient-to-b dark:from-dark-bg dark:via-purple-950/30 dark:to-dark-bg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 team-title">
          <h2 className="section-title">Nossa Equipe</h2>
          <p className="section-subtitle">
            Conheça os talentos por trás dos seus projetos
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:flex items-center justify-center gap-8 mb-12">
            {getVisibleMembers().map((member, idx) => {
              const isCenter = member.offset === 0;
              return (
                <div
                  key={`${member.name}-${idx}`}
                  className={`transition-all duration-500 ${
                    isCenter
                      ? 'scale-100 opacity-100 z-20'
                      : 'scale-75 opacity-40 z-10'
                  }`}
                  style={{
                    transform: `translateX(${member.offset * 20}px)`
                  }}
                >
                  <div className="card text-center max-w-sm">
                    <div className="relative mb-6 mx-auto w-48 h-48">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover rounded-full border-4 border-gray-300 dark:border-purple-500"
                      />
                    </div>
                    <h3 className="text-3xl font-bold text-black dark:text-white mb-2">
                      {member.name}
                    </h3>
                    <p className="text-fuchsia-800 dark:text-fuchsia-600 font-bold text-lg mb-6
">
                      {member.role}
                    </p>
                    <div className="flex justify-center gap-4">
                      {member.social.instagram && (
                        <a
                          href={member.social.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 rounded-xl bg-gray-100 dark:bg-purple-900/50 hover:bg-gray-900 dark:hover:bg-purple-600 hover:text-white transition-all duration-300 transform hover:scale-110 border-2 border-gray-200 dark:border-purple-500/50"
                        >
                          <Instagram className="w-6 h-6 text-gray-700 dark:text-purple-300" strokeWidth={2.5} />
                        </a>
                      )}
                      {member.social.linkedin && (
                        <a
                          href={member.social.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 rounded-xl bg-gray-100 dark:bg-purple-900/50 hover:bg-gray-900 dark:hover:bg-purple-600 hover:text-white transition-all duration-300 transform hover:scale-110 border-2 border-gray-200 dark:border-purple-500/50"
                        >
                          <Linkedin className="w-6 h-6 text-gray-700 dark:text-purple-300" strokeWidth={2.5} />
                        </a>
                      )}
                      {member.social.github && (
                        <a
                          href={member.social.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 rounded-xl bg-gray-100 dark:bg-purple-900/50 hover:bg-gray-900 dark:hover:bg-purple-600 hover:text-white transition-all duration-300 transform hover:scale-110 border-2 border-gray-200 dark:border-purple-500/50"
                        >
                          <Github className="w-6 h-6 text-gray-700 dark:text-purple-300" strokeWidth={2.5} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="md:hidden">
            <div className="card text-center max-w-sm mx-auto">
              <div className="relative mb-6 mx-auto w-48 h-48">
                <img
                  src={team[currentIndex].image}
                  alt={team[currentIndex].name}
                  className="w-full h-full object-cover rounded-full border-4 border-gray-300 dark:border-purple-500"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-purple-300 mb-2">
                {team[currentIndex].name}
              </h3>
              <p className="text-fuchsia-800 dark:text-fuchsia-600 font-bold text-lg mb-6
">
                {team[currentIndex].role}
              </p>
              <div className="flex justify-center gap-4">
                {team[currentIndex].social.instagram && (
                  <a
                    href={team[currentIndex].social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-gray-100 dark:bg-purple-900/30 hover:bg-gray-200 dark:hover:bg-purple-800 transition-all duration-300 transform hover:scale-110"
                  >
                    <Instagram className="w-5 h-5 text-gray-700 dark:text-purple-400" />
                  </a>
                )}
                {team[currentIndex].social.linkedin && (
                  <a
                    href={team[currentIndex].social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-gray-100 dark:bg-purple-900/30 hover:bg-gray-200 dark:hover:bg-purple-800 transition-all duration-300 transform hover:scale-110"
                  >
                    <Linkedin className="w-5 h-5 text-gray-700 dark:text-purple-400" />
                  </a>
                )}
                {team[currentIndex].social.github && (
                  <a
                    href={team[currentIndex].social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-gray-100 dark:bg-purple-900/30 hover:bg-gray-200 dark:hover:bg-purple-800 transition-all duration-300 transform hover:scale-110"
                  >
                    <Github className="w-5 h-5 text-gray-700 dark:text-purple-400" />
                  </a>
                )}
              </div>
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white dark:bg-purple-900/50 shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 z-30"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6 text-gray-900 dark:text-purple-300" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white dark:bg-purple-900/50 shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 z-30"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6 text-gray-900 dark:text-purple-300" />
          </button>

          <div className="flex justify-center gap-2 mt-8">
            {team.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? 'bg-purple-600 dark:bg-purple-400 w-8'
                    : 'bg-gray-300 dark:bg-purple-900/50'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
