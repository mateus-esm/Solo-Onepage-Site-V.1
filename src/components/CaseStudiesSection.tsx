const CaseStudiesSection = () => {
  const cases = [{
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    title: "Residência - Roberto",
    location: "Eusébio - CE",
    description: "Redução de 92% na conta de luz e valorização do imóvel. Atendimento impecável da Solo Energia!",
    result: "Economia e Sustentabilidade",
    fallback: "https://placehold.co/400x250/CCCCCC/FFFFFF?text=Projeto+Residencial&font=inter"
  }, {
    image: "https://images.unsplash.com/photo-1560439514-494f3036a092?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    title: "Usina - Alfram",
    location: "Horizonte - CE",
    description: "Sistema solar robusto que supriu nossa demanda e reduziu significativamente os custos operacionais.",
    result: "Maior Competitividade",
    fallback: "https://placehold.co/400x250/CCCCCC/FFFFFF?text=Projeto+Comercial&font=inter"
  }, {
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80",
    title: "Condomínio Aquiraz",
    location: "Aquiraz - CE",
    description: "Solução de carregamento veicular moderna e eficiente para nossos moradores. Solo Energia foi a escolha certa.",
    result: "Mobilidade Sustentável",
    fallback: "https://placehold.co/400x250/CCCCCC/FFFFFF?text=Carregamento+EV&font=inter"
  }];
  
  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section className="py-16 md:py-24 bg-solo-light-gray">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-solo-black">
          Transformando a Realidade Energética: <span className="text-solo-orange">Clientes Satisfeitos Solo Energia</span>
        </h2>
        <p className="text-center text-solo-dark-gray mb-12 md:mb-16 max-w-2xl mx-auto text-lg">
          Veja como a Solo Energia está ajudando residências e empresas a alcançar a independência energética com projetos de energia solar personalizados.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((caseStudy, index) => <div key={index} className="case-card bg-white p-8 rounded-xl shadow-lg flex flex-col hover:shadow-2xl transition-shadow duration-300">
              
              <h3 className="text-xl font-semibold mb-2 text-solo-black">{caseStudy.title}</h3>
              <p className="text-sm text-solo-orange mb-1 font-medium">{caseStudy.location}</p>
              <p className="text-solo-dark-gray text-sm mb-4 flex-grow">"{caseStudy.description}"</p>
              <p className="text-solo-black font-semibold mt-auto">
                Resultado: <span className="text-green-600">{caseStudy.result}</span>
              </p>
            </div>)}
        </div>
        
        <div className="text-center mt-12">
          <button onClick={scrollToContact} className="btn-primary-gradient py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105">
            Conheça Mais Cases de Sucesso
          </button>
        </div>
      </div>
    </section>;
};
export default CaseStudiesSection;
