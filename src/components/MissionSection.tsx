
const MissionSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="missao" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left order-2 md:order-1">
            <img 
              src="https://i.imgur.com/Zu5CF8a.png" 
              alt="Símbolo Solo Energia - Inovação em Energia Renovável" 
              className="h-16 md:h-20 mx-auto md:mx-0 mb-6 opacity-90"
              onError={(e) => {
                e.currentTarget.src = 'https://placehold.co/80x80/FF8C00/FFFFFF?text=S&font=inter';
              }}
            />
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-solo-black">
              Nossa Missão: <span className="text-solo-orange">Simplificar</span> o Acesso à Energia Renovável
            </h2>
            <p className="text-lg md:text-xl leading-relaxed mb-6 text-solo-dark-gray">
              O objetivo da Solo Energia é acelerar a transição para um futuro sustentável. Oferecemos tecnologias robustas, inovadoras e acessíveis em energia solar e carregamento veicular, que conectam força, eficiência e liberdade para transformar vidas e construir sonhos.
            </p>
            <p className="text-lg md:text-xl leading-relaxed mb-8 text-solo-dark-gray">
              Acreditamos no poder da energia limpa para impulsionar o progresso e na importância de colocar você no controle da sua própria energia.
            </p>
            <button 
              onClick={scrollToContact}
              className="btn-primary-gradient py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105 inline-block"
            >
              Conheça Nossa Proposta
            </button>
          </div>
          <div className="mt-8 md:mt-0 order-1 md:order-2">
            <img 
              src="https://i.imgur.com/eVYbtR8.jpeg" 
              alt="Equipe Solo Energia trabalhando em projeto de energia solar" 
              className="rounded-xl shadow-2xl w-full h-auto object-cover max-h-[500px] md:max-h-[550px]"
              onError={(e) => {
                e.currentTarget.src = 'https://placehold.co/600x550/CCCCCC/FFFFFF?text=Equipe+Solo+Energia&font=inter';
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
