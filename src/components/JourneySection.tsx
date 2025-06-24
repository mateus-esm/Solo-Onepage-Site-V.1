
import { MessageCircle, Compass, Wrench, Zap, Shield } from 'lucide-react';

const JourneySection = () => {
  const journeySteps = [
    {
      icon: MessageCircle,
      title: "1. Diagnóstico e Orçamento",
      description: "Analisamos seu consumo para um projeto solar sob medida e transparente.",
      fullDescription: "Analisamos seu consumo e necessidades para um projeto de energia solar sob medida."
    },
    {
      icon: Compass,
      title: "2. Engenharia de Precisão",
      description: "Tecnologia e design otimizado para máxima eficiência e durabilidade.",
      fullDescription: "Tecnologia de ponta e design otimizado para máxima eficiência e durabilidade do seu sistema solar."
    },
    {
      icon: Wrench,
      title: "3. Instalação Profissional",
      description: "Equipe qualificada para instalação ágil, segura e limpa do seu sistema.",
      fullDescription: "Equipe qualificada para instalação ágil e segura do seu sistema fotovoltaico."
    },
    {
      icon: Zap,
      title: "4. Conexão e Controle",
      description: "Sistema ativo, gerando economia e monitorado por você em tempo real.",
      fullDescription: "Seu sistema de energia solar ativo, gerando economia. Monitore tudo em tempo real."
    },
    {
      icon: Shield,
      title: "5. Suporte Premium",
      description: "O&M, manutenções proativas e suporte dedicado para sua tranquilidade.",
      fullDescription: "Tranquilidade com nosso O&M, manutenções proativas e suporte dedicado ao seu sistema solar."
    }
  ];

  return (
    <section id="jornada" className="py-16 md:py-24 bg-solo-light-gray">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-solo-black">
          Sua Jornada para Independência Energética com a <span className="text-solo-orange">Solo Energia</span>
        </h2>
        <p className="text-center text-solo-dark-gray mb-12 md:mb-20 max-w-2xl mx-auto text-lg">
          Cuidamos de cada detalhe do seu projeto de energia solar, da consultoria à instalação, com transparência e excelência.
        </p>
        
        {/* Desktop Layout */}
        <div className="hidden md:flex flex-wrap justify-center items-stretch gap-6 lg:gap-8">
          {journeySteps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="journey-item text-center flex flex-col items-center p-4 bg-white rounded-xl shadow-md w-full sm:w-[45%] lg:w-[18%] min-h-[280px]">
                <div className="icon-wrapper bg-solo-orange text-white w-20 h-20 rounded-full flex items-center justify-center text-3xl font-bold shadow-lg mb-5 flex-shrink-0">
                  <IconComponent size={32} />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-solo-black">{step.title}</h3>
                <p className="text-solo-dark-gray text-sm flex-grow">{step.description}</p>
              </div>
            );
          })}
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden space-y-10">
          {journeySteps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="journey-item text-center flex flex-col items-center">
                <div className="icon-wrapper bg-solo-orange text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold shadow-lg mb-3">
                  <IconComponent size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-1 text-solo-black">{step.title.replace(/^\d+\.\s/, `${index + 1}. `)}</h3>
                <p className="text-solo-dark-gray px-4">{step.fullDescription}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
