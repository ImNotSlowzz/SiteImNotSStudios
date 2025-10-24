import { useEffect, useState } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import Hero from './components/Hero';
import Plans from './components/Plans';
import Team from './components/Team';
import Contact from './components/Contact';
import './styles/theme.css';

function App() {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved === 'dark' || saved === null;
  });

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-light-bg dark:bg-dark-bg transition-colors duration-500">
      <nav className="fixed top-0 w-full z-50 bg-white/95 dark:bg-dark-bg/95 backdrop-blur-md border-b-2 border-gray-200 dark:border-purple-500/40 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-18">
            <div className="flex items-center">
              <h1 className="text-3xl font-extrabold text-black dark:text-transparent dark:bg-gradient-to-r dark:from-purple-300 dark:via-fuchsia-300 dark:to-violet-300 dark:bg-clip-text">
                ImNot's
              </h1>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('home')} className="nav-link">Home</button>
              <button onClick={() => scrollToSection('plans')} className="nav-link">Planos</button>
              <button onClick={() => scrollToSection('team')} className="nav-link">Equipe</button>
              <button onClick={() => scrollToSection('contact')} className="nav-link">Contato</button>

              <button
                onClick={toggleTheme}
                className="p-3 rounded-xl hover:bg-gray-200 dark:hover:bg-purple-800/50 transition-all duration-300 border-2 border-transparent dark:border-purple-500/50"
                aria-label="Toggle theme"
              >
                {isDark ? <Sun className="w-6 h-6 text-purple-300" /> : <Moon className="w-6 h-6 text-black" />}
              </button>
            </div>

            <div className="md:hidden flex items-center space-x-4">
              <button
                onClick={toggleTheme}
                className="p-3 rounded-xl hover:bg-gray-200 dark:hover:bg-purple-800/50 transition-all duration-300"
                aria-label="Toggle theme"
              >
                {isDark ? <Sun className="w-6 h-6 text-purple-300" /> : <Moon className="w-6 h-6 text-black" />}
              </button>

              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="p-2"
                aria-label="Toggle menu"
              >
                {menuOpen ? (
                  <X className="w-7 h-7 text-black dark:text-purple-300" />
                ) : (
                  <Menu className="w-7 h-7 text-black dark:text-purple-300" />
                )}
              </button>
            </div>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-light-bg dark:bg-dark-bg border-t border-gray-300 dark:border-purple-900/30">
            <div className="px-4 py-4 space-y-3">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left nav-link py-2">Home</button>
              <button onClick={() => scrollToSection('plans')} className="block w-full text-left nav-link py-2">Planos</button>
              <button onClick={() => scrollToSection('team')} className="block w-full text-left nav-link py-2">Equipe</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left nav-link py-2">Contato</button>
            </div>
          </div>
        )}
      </nav>

      <main className="pt-16">
        <Hero />
        <Plans />
        <Team />
        <Contact />
      </main>

      <footer className="bg-gray-900 dark:bg-black/50 text-white py-8 border-t border-gray-700 dark:border-purple-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">© 2025 ImNot's. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
