
import { Heart, Zap } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-solo-black text-gray-400 py-12">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8 text-center md:text-left">
          <div>
            <img 
              src="https://i.imgur.com/1l1YSvW.png" 
              alt="Solo Energia - Soluções Completas em Energia" 
              className="h-12 md:h-16 mb-4 mx-auto md:mx-0"
              onError={(e) => {
                e.currentTarget.src = 'https://placehold.co/180x45/FFFFFF/111827?text=SOLO+ENERGIA&font=inter';
              }}
            />
            <p className="text-sm mb-2">Solo Energia - Você no controle da sua energia.</p>
            <p className="text-xs">CNPJ: 46.669.937/0001-55</p>
            <p className="text-xs">Rua Dr. Ratisbona, 96 - Fátima, Fortaleza - CE, 60411-220</p>
          </div>
          
          <div>
            <h5 className="text-white font-semibold mb-3 text-lg">Links Rápidos</h5>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={() => scrollToSection('jornada')}
                  className="hover:text-solo-yellow transition"
                >
                  Como Funciona a Energia Solar
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('solucoes')}
                  className="hover:text-solo-yellow transition"
                >
                  Nossas Soluções de Energia
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('missao')}
                  className="hover:text-solo-yellow transition"
                >
                  Nossa Missão na Solo Energia
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('solon')}
                  className="hover:text-solo-yellow transition"
                >
                  Simulador de Energia Solar
                </button>
              </li>
              <li>
                <a href="/politica-de-privacidade" target="_blank" className="hover:text-solo-yellow transition">
                  Política de Privacidade
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h5 className="text-white font-semibold mb-3 text-lg">Siga a Solo Energia</h5>
            <div className="flex space-x-4 mb-4 justify-center md:justify-start">
              <a href="#" target="_blank" aria-label="Facebook da Solo Energia" className="text-xl hover:text-solo-yellow transition">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" target="_blank" aria-label="Instagram da Solo Energia" className="text-xl hover:text-solo-yellow transition">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" target="_blank" aria-label="LinkedIn da Solo Energia" className="text-xl hover:text-solo-yellow transition">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" target="_blank" aria-label="YouTube da Solo Energia" className="text-xl hover:text-solo-yellow transition">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
            <h5 className="text-white font-semibold mb-2 text-lg">Contato Solo Energia</h5>
            <p className="text-sm">
              Email: <a href="mailto:contato@soloenergia.com.br" className="hover:text-solo-yellow transition">contato@soloenergia.com.br</a>
            </p>
            <p className="text-sm">
              Telefone: <a href="tel:+558581813110" className="hover:text-solo-yellow transition">(85) 98181-3110</a>
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 text-center text-sm">
          <p>&copy; {currentYear} Solo Energia. Todos os direitos reservados. Soluções em energia solar e renovável.</p>
          <p className="text-xs mt-1 flex items-center justify-center gap-1">
            Desenvolvido com <Heart className="text-solo-orange" size={14} /> e <Zap className="text-solo-yellow" size={14} />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
