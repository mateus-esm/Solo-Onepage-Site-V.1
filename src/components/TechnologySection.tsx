
import { CheckCircle } from 'lucide-react';

const TechnologySection = () => {
  const features = [
    "Monitoramento em tempo real 24/7 do seu sistema solar.",
    "Relatórios detalhados de geração de energia e economia.",
    "Painéis solares e componentes de alta durabilidade e performance.",
    "Equipe de engenharia Solo Energia altamente qualificada."
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 md:py-24 bg-solo-dark-gray text-white">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="text-center mb-12">
          <img 
            src="https://i.imgur.com/Zu5CF8a.png" 
            alt="Tecnologia Solo Energia - Painéis Solares e Monitoramento" 
            className="h-12 mx-auto mb-4 opacity-70"
            onError={(e) => {
              e.currentTarget.src = 'https://placehold.co/48x48/FFD700/FFFFFF?text=S&font=inter';
            }}
          />
          <h2 className="text-3xl md:text-4xl font-bold">
            Engenharia de Excelência em Energia Solar, <span className="text-solo-yellow">Dados na Palma da Mão.</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg mb-6 text-gray-300">
              Na Solo Energia, combinamos expertise em engenharia com tecnologia de monitoramento avançada para seu sistema fotovoltaico. Tenha acesso transparente ao desempenho do seu sistema solar, otimize seu consumo e veja sua economia crescer, tudo de forma simples e intuitiva através do nosso aplicativo.
            </p>
            <ul className="space-y-3 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center text-gray-300">
                  <CheckCircle className="text-solo-yellow mr-3 flex-shrink-0" size={20} />
                  {feature}
                </li>
              ))}
            </ul>
            <button 
              onClick={scrollToContact}
              className="btn-primary-gradient py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105"
            >
              Nossa Tecnologia de Energia Solar
            </button>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1690&q=80" 
              alt="Dashboard de Monitoramento de Energia Solar Solo Energia" 
              className="rounded-xl shadow-2xl w-full h-auto object-cover"
              onError={(e) => {
                e.currentTarget.src = 'https://placehold.co/600x400/374151/FFFFFF?text=Dashboard+Solo+Energia&font=inter';
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
