
import { Home, Building, ChartLine, Zap, Cog, FileSignature } from 'lucide-react';

const SolutionsSection = () => {
  const solutions = [
    {
      icon: Home,
      title: "Energia Solar Residencial",
      description: "Independência energética e valorização para o seu lar com painéis solares de alta eficiência.",
      buttonText: "Orçamento para Minha Casa"
    },
    {
      icon: Building,
      title: "Energia Solar Comercial", 
      description: "Reduza custos e aumente a produtividade do seu negócio com um sistema de energia solar robusto.",
      buttonText: "Orçamento para Meu Negócio"
    },
    {
      icon: ChartLine,
      title: "Usinas Solares de Investimento",
      description: "Rentabilidade superior e segura, investindo em um futuro energético sustentável com usinas fotovoltaicas.",
      buttonText: "Quero Investir em Energia Solar"
    },
    {
      icon: Zap,
      title: "Carregamento Veicular Elétrico",
      description: "Tecnologia de ponta para carregar seu veículo elétrico com rapidez e conveniência em casa ou na empresa.",
      buttonText: "Soluções para Carro Elétrico"
    },
    {
      icon: Cog,
      title: "O&M Premium para Sistemas Solares",
      description: "Operação e Manutenção especializada para garantir a performance máxima e longevidade do seu sistema solar.",
      buttonText: "Conhecer O&M Solar"
    },
    {
      icon: FileSignature,
      title: "Energia Solar por Assinatura",
      description: "Acesso facilitado à energia limpa e mais barata, sem a necessidade de instalar painéis solares.",
      buttonText: "Quero Assinar Energia Solar"
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="solucoes" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-solo-black">
          Soluções de Energia Solar e Tecnologia <span className="text-solo-orange">para Cada Necessidade</span>
        </h2>
        <p className="text-center text-solo-dark-gray mb-12 md:mb-16 max-w-2xl mx-auto text-lg">
          Descubra como a Solo Energia pode transformar sua relação com a energia, oferecendo desde painéis solares até carregadores veiculares.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {solutions.map((solution, index) => {
            const IconComponent = solution.icon;
            return (
              <div key={index} className="solution-card bg-solo-light-gray p-8 rounded-xl shadow-lg flex flex-col">
                <div className="flex-shrink-0 mb-6 text-center">
                  <IconComponent size={48} className="text-solo-orange mx-auto" />
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-solo-black text-center">{solution.title}</h3>
                <p className="text-solo-dark-gray text-center flex-grow mb-6">{solution.description}</p>
                <button 
                  onClick={scrollToContact}
                  className="mt-auto bg-solo-orange text-white font-semibold py-3 px-6 rounded-lg hover:bg-opacity-80 transition duration-300 text-center"
                >
                  {solution.buttonText}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
