import { Link } from 'react-router-dom';

const SimulatorSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="solon" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-solo-black">
          Simule seu Projeto de Energia Solar em Minutos com <span className="text-solo-orange">Solon</span>
        </h2>
        <p className="text-center text-solo-dark-gray mb-12 md:mb-16 max-w-2xl mx-auto text-lg">
          Tenha uma estimativa rápida do potencial de economia e do sistema solar ideal para você com nossa calculadora inteligente.
        </p>
        
        <div className="max-w-4xl mx-auto bg-solo-light-gray p-6 sm:p-8 rounded-xl shadow-xl">
          <div className="rounded-lg overflow-hidden">
            <iframe 
              src="https://app.gptmaker.ai/widget/3DF17E106137928553BF2ADCDA7DA210/iframe"
              width="100%"
              height="600"
              className="border-0"
              title="Calculadora de Orçamento de Energia Solar Solon - Solo Energia"
              loading="lazy"
            />
          </div>
          <p className="text-center text-solo-dark-gray mt-8 text-sm">
            Após a simulação, {' '}
            <button 
              onClick={scrollToContact}
              className="text-solo-orange hover:underline font-semibold"
            >
              fale com nossos especialistas em energia solar
            </button>
            {' '} para um projeto detalhado e personalizado.
          </p>
          
          <div className="text-center mt-6 pt-6 border-t border-gray-300">
            <p className="text-solo-dark-gray mb-3">
              Precisa de <span className="font-semibold">financiamento</span> para seu projeto solar?
            </p>
            <Link 
              to="/financiamento"
              className="text-solo-orange hover:underline font-semibold text-lg"
            >
              Veja as melhores opções de financiamento aqui →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimulatorSection;
