import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Phone, MessageCircle, Send } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.contact-content', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        },
        y: 80,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const message = encodeURIComponent(
      `Nome: ${formData.name}\nEmail: ${formData.email}\nTelefone: ${formData.phone}\n\nMensagem:\n${formData.message}`
    );

    setTimeout(() => {
      window.open(`https://wa.me/5511999999999?text=${message}`, '_blank');
      setIsSubmitting(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/5511999999999', '_blank');
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-dark-bg dark:via-purple-950/30 dark:to-dark-bg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 contact-content">
          <h2 className="section-title">Vamos Conversar?</h2>
          <p className="section-subtitle">
            Entre em contato e transforme sua ideia em realidade
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="contact-content">
            <div className="card h-full">
              <h3 className="text-3xl font-bold text-black dark:text-white mb-8">
                Envie sua Mensagem
              </h3>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-gray-900 dark:text-purple-200 mb-2">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 rounded-xl border-2 border-gray-300 dark:border-purple-500/70
                             bg-white dark:bg-purple-900/30 text-black dark:text-white
                             focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-purple-400 focus:border-black dark:focus:border-purple-400
                             transition-all duration-300 font-medium text-base"
                    placeholder="Seu nome"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-gray-900 dark:text-purple-200 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 rounded-xl border-2 border-gray-300 dark:border-purple-500/70
                             bg-white dark:bg-purple-900/30 text-black dark:text-white
                             focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-purple-400 focus:border-black dark:focus:border-purple-400
                             transition-all duration-300 font-medium text-base"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-gray-900 dark:text-purple-200 mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 rounded-xl border-2 border-gray-300 dark:border-purple-500/70
                             bg-white dark:bg-purple-900/30 text-black dark:text-white
                             focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-purple-400 focus:border-black dark:focus:border-purple-400
                             transition-all duration-300 font-medium text-base"
                    placeholder="(11) 99999-9999"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-gray-900 dark:text-purple-200 mb-2">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-5 py-4 rounded-xl border-2 border-gray-300 dark:border-purple-500/70
                             bg-white dark:bg-purple-900/30 text-black dark:text-white
                             focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-purple-400 focus:border-black dark:focus:border-purple-400
                             transition-all duration-300 resize-none font-medium text-base"
                    placeholder="Conte-nos sobre seu projeto..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary flex items-center justify-center gap-3"
                >
                  {isSubmitting ? (
                    <>Enviando...</>
                  ) : (
                    <>
                      <Send className="w-6 h-6" />
                      Enviar Mensagem
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          <div className="contact-content space-y-6">
            <div className="card hover:scale-105">
              <div className="flex items-start gap-5">
                <div className="p-4 rounded-2xl bg-purple-100 dark:bg-purple-900/50 border-2 border-purple-200 dark:border-purple-500/50">
                  <MessageCircle className="w-7 h-7 text-purple-600 dark:text-purple-300" strokeWidth={2.5} />
                </div>
                <div className="flex-1">
                  <h4 className="text-2xl font-bold text-black dark:text-white mb-3">
                    WhatsApp
                  </h4>
                  <p className="text-gray-700 dark:text-purple-200 mb-5 font-medium">
                    Resposta rápida e atendimento personalizado
                  </p>
                  <button onClick={openWhatsApp} className="btn-outline">
                    Chamar no WhatsApp
                  </button>
                </div>
              </div>
            </div>

            <div className="card hover:scale-105">
              <div className="flex items-start gap-5">
                <div className="p-4 rounded-2xl bg-fuchsia-100 dark:bg-fuchsia-900/50 border-2 border-fuchsia-200 dark:border-fuchsia-500/50">
                  <Mail className="w-7 h-7 text-fuchsia-600 dark:text-fuchsia-300" strokeWidth={2.5} />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-black dark:text-white mb-3">
                    Email
                  </h4>
                  <p className="text-gray-700 dark:text-purple-200 font-medium text-lg">
                    contato@imnots.com.br
                  </p>
                </div>
              </div>
            </div>

            <div className="card hover:scale-105">
              <div className="flex items-start gap-5">
                <div className="p-4 rounded-2xl bg-violet-100 dark:bg-violet-900/50 border-2 border-violet-200 dark:border-violet-500/50">
                  <Phone className="w-7 h-7 text-violet-600 dark:text-violet-300" strokeWidth={2.5} />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-black dark:text-white mb-3">
                    Telefone
                  </h4>
                  <p className="text-gray-700 dark:text-purple-200 font-medium text-lg">
                    (11) 99999-9999
                  </p>
                </div>
              </div>
            </div>

            <div className="card bg-gradient-to-br from-purple-600 via-fuchsia-600 to-violet-600 dark:from-purple-700 dark:via-fuchsia-700 dark:to-violet-700 text-white border-none shadow-2xl">
              <h4 className="text-2xl font-bold mb-4">
                Horário de Atendimento
              </h4>
              <p className="mb-2 text-lg font-medium">Segunda a Sexta: 9h às 18h</p>
              <p className="text-lg font-medium">Sábado: 9h às 13h</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
