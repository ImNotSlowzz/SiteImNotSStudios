import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Check, MessageCircle, Star, Zap, Crown } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface Plan {
  name: string;
  description: string;
  price: string;
  features: string[];
  popular?: boolean;
  icon: 'star' | 'zap' | 'crown';
  color: string;
}

const plans: Plan[] = [
  {
    name: 'Básico',
    description: 'Ideal para quem está começando',
    price: 'R$ 1.500',
    icon: 'star',
    color: 'emerald',
    features: [
      'Landing Page responsiva',
      'Até 3 seções personalizadas',
      'Formulário de contato',
      'Design moderno e profissional',
      'Integração com redes sociais',
      'Otimização para SEO básico',
      'Entrega em 7 dias'
    ]
  },
  {
    name: 'Profissional',
    description: 'Perfeito para negócios em crescimento',
    price: 'R$ 3.500',
    icon: 'zap',
    color: 'purple',
    features: [
      'Site institucional completo',
      'Até 7 páginas',
      'Design personalizado',
      'Formulários avançados',
      'Blog integrado',
      'Painel administrativo',
      'Otimização SEO avançada',
      'Integração com Google Analytics',
      'Suporte 30 dias',
      'Entrega em 15 dias'
    ],
    popular: true
  },
  {
    name: 'Premium',
    description: 'Solução completa para sua empresa',
    price: 'R$ 6.500',
    icon: 'crown',
    color: 'fuchsia',
    features: [
      'Site completo e robusto',
      'Páginas ilimitadas',
      'E-commerce integrado',
      'Sistema de pagamentos',
      'Área de membros',
      'Chat ao vivo',
      'Automações personalizadas',
      'Integração com APIs',
      'Treinamento da equipe',
      'Suporte 90 dias',
      'Entrega em 30 dias'
    ]
  }
];

function Plans() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.plan-card', {
        scrollTrigger: {
          trigger: cardsRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        },
        y: 100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const openWhatsApp = (planName: string) => {
    const message = encodeURIComponent(`Olá! Gostaria de saber mais sobre o plano ${planName}.`);
    window.open(`https://wa.me/5511999999999?text=${message}`, '_blank');
  };

  const getIcon = (icon: string, color: string) => {
    const iconClass = `w-10 h-10 text-${color}-500 dark:text-${color}-400`;
    switch (icon) {
      case 'star':
        return <Star className={iconClass} fill="currentColor" />;
      case 'zap':
        return <Zap className={iconClass} fill="currentColor" />;
      case 'crown':
        return <Crown className={iconClass} fill="currentColor" />;
      default:
        return <Star className={iconClass} />;
    }
  };

  return (
    <section
      id="plans"
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-dark-bg dark:via-purple-950/30 dark:to-dark-bg relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-purple-500/10 dark:bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-[500px] h-[500px] bg-fuchsia-500/10 dark:bg-fuchsia-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="section-title">Planos Sob Medida</h2>
          <p className="section-subtitle">
            Escolha o plano ideal para transformar sua presença digital
          </p>
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`plan-card relative group ${
                plan.popular
                  ? 'md:scale-110 md:-translate-y-4'
                  : ''
              }`}
            >
              <div className={`card relative overflow-hidden ${
                plan.popular
                  ? 'border-4 dark:border-purple-400 dark:border-4'
                  : ''
              }`}>
                {plan.popular && (
                  <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="bg-gradient-to-r from-purple-600 via-fuchsia-600 to-purple-600 text-white px-8 py-2 rounded-full text-sm font-bold shadow-xl animate-gradient">
                      MAIS POPULAR
                    </div>
                  </div>
                )}

                <div className="relative z-10">
                  <div className="flex justify-center mb-6 mt-4">
                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${
                      plan.color === 'emerald'
                        ? 'from-emerald-100 to-emerald-200 dark:from-emerald-900/40 dark:to-emerald-800/40'
                        : plan.color === 'purple'
                        ? 'from-purple-100 to-purple-200 dark:from-purple-900/60 dark:to-purple-800/60'
                        : 'from-fuchsia-100 to-fuchsia-200 dark:from-fuchsia-900/60 dark:to-fuchsia-800/60'
                    } shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                      {getIcon(plan.icon, plan.color)}
                    </div>
                  </div>

                  <div className="text-center mb-8">
                    <h3 className="text-3xl font-bold mb-3 text-gray-900 dark:text-white">
                      {plan.name}
                    </h3>
                    <p className="text-base text-gray-700 dark:text-purple-200 mb-6">
                      {plan.description}
                    </p>
                    <div className="mb-3">
                      <span className="text-5xl font-extrabold gradient-text">
                        {plan.price}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-purple-300 font-semibold">
                      Pagamento único
                    </p>
                  </div>

                  <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-purple-500 to-transparent mb-8"></div>

                  <ul className="space-y-4 mb-10">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="flex-shrink-0 mt-1">
                          <div className={`p-1 rounded-full ${
                            plan.color === 'emerald'
                              ? 'bg-emerald-100 dark:bg-emerald-900/40'
                              : plan.color === 'purple'
                              ? 'bg-purple-100 dark:bg-purple-900/60'
                              : 'bg-fuchsia-100 dark:bg-fuchsia-900/60'
                          }`}>
                            <Check className={`w-4 h-4 ${
                              plan.color === 'emerald'
                                ? 'text-emerald-600 dark:text-emerald-400'
                                : plan.color === 'purple'
                                ? 'text-purple-600 dark:text-purple-300'
                                : 'text-fuchsia-600 dark:text-fuchsia-300'
                            }`} strokeWidth={3} />
                          </div>
                        </div>
                        <span className="text-gray-800 dark:text-purple-100 text-base font-medium leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => openWhatsApp(plan.name)}
                    className={`w-full flex items-center justify-center gap-3 ${
                      plan.popular ? 'btn-primary' : 'btn-outline'
                    } group-hover:scale-105`}
                  >
                    <MessageCircle className="w-6 h-6" />
                    Contratar Agora
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-lg text-gray-800 dark:text-purple-200 font-medium">
            Precisa de algo personalizado?{' '}
            <button
              onClick={() => openWhatsApp('Personalizado')}
              className="text-black dark:text-purple-300 font-bold hover:underline underline-offset-4 decoration-2 decoration-purple-500 hover:text-purple-600 dark:hover:text-white transition-colors"
            >
              Fale conosco
            </button>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Plans;
