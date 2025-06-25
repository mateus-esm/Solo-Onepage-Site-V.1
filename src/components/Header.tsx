import { useState } from 'react';
import { Menu, X } from 'lucide-react';
const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };
  return <header className="w-full z-40 absolute top-0 left-0 right-0">
      <div className="container mx-auto px-6 sm:px-10 py-3 flex justify-between items-center max-w-7xl bg-slate-950">
        <div>
          <img src="https://i.imgur.com/1l1YSvW.png" alt="Solo Energia Logo - Energia Solar e Soluções Renováveis" className="h-12 md:h-16" onError={e => {
          e.currentTarget.src = 'https://placehold.co/240x60/FFFFFF/111827?text=SOLO+ENERGIA&font=inter';
        }} />
        </div>
        
        <nav className="hidden md:flex space-x-5 lg:space-x-6 items-center">
          <button onClick={() => scrollToSection('jornada')} className="nav-link py-2 font-semibold text-sm lg:text-base text-white">
            Como Funciona
          </button>
          <button onClick={() => scrollToSection('solucoes')} className="nav-link py-2 font-semibold text-sm lg:text-base text-white">
            Soluções de Energia
          </button>
          <button onClick={() => scrollToSection('missao')} className="nav-link py-2 font-semibold text-sm lg:text-base text-white">
            Nossa Missão
          </button>
          <button onClick={() => scrollToSection('solon')} className="nav-link py-2 font-semibold text-sm lg:text-base text-white">
            Simulador Solar
          </button>
          <button onClick={() => scrollToSection('contato')} className="btn-primary-gradient py-2 px-5 lg:px-6 rounded-lg transition duration-300 transform hover:scale-105 text-sm lg:text-base">
            Fale Conosco
          </button>
        </nav>

        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white focus:outline-none" aria-label="Toggle mobile menu">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && <div className="md:hidden bg-solo-black bg-opacity-95 py-3 absolute top-full left-0 right-0 shadow-lg">
          <button onClick={() => scrollToSection('jornada')} className="block w-full text-center py-2 text-white hover:bg-solo-dark-gray transition duration-300">
            Como Funciona a Energia Solar
          </button>
          <button onClick={() => scrollToSection('solucoes')} className="block w-full text-center py-2 text-white hover:bg-solo-dark-gray transition duration-300">
            Nossas Soluções
          </button>
          <button onClick={() => scrollToSection('missao')} className="block w-full text-center py-2 text-white hover:bg-solo-dark-gray transition duration-300">
            Nossa Missão
          </button>
          <button onClick={() => scrollToSection('solon')} className="block w-full text-center py-2 text-white hover:bg-solo-dark-gray transition duration-300">
            Simulador de Energia Solar
          </button>
          <button onClick={() => scrollToSection('contato')} className="block w-full text-center py-3 text-solo-yellow font-semibold hover:opacity-90 transition duration-300">
            Fale Conosco
          </button>
        </div>}
    </header>;
};
export default Header;