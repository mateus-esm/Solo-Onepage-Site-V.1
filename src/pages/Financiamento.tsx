import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { CheckCircle, Clock, TrendingDown, Users, Calculator } from 'lucide-react';

const Financiamento = () => {
  useEffect(() => {
    document.title = "Financiamento Solar | Solo Energia";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Simule as melhores condições de financiamento para seu sistema de energia solar. Parcelas que cabem no bolso com a Solo Energia.'
      );
    }
    window.scrollTo(0, 0);
  }, []);

  const scrollToContact = () => {
    window.location.href = '/#contato';
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-solo-dark-gray via-solo-black to-solo-dark-gray text-white pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
            Realize Seu Projeto Solar Agora,{' '}
            <span className="text-solo-yellow">Pague com Facilidade</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Simule as melhores condições de financiamento para seu sistema de energia solar
          </p>
        </div>
      </section>

      {/* Seção Introdutória */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-solo-black">
                Financiamento Solar:{' '}
                <span className="text-solo-orange">Invista no Futuro Sem Comprometer o Presente</span>
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-solo-yellow mt-1 flex-shrink-0" size={24} />
                  <p className="text-solo-dark-gray text-lg">
                    Parcelas que cabem no bolso, começando com economia imediata
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-solo-yellow mt-1 flex-shrink-0" size={24} />
                  <p className="text-solo-dark-gray text-lg">
                    Taxas competitivas e condições flexíveis
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-solo-yellow mt-1 flex-shrink-0" size={24} />
                  <p className="text-solo-dark-gray text-lg">
                    Aprovação rápida e processo simplificado
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-solo-yellow mt-1 flex-shrink-0" size={24} />
                  <p className="text-solo-dark-gray text-lg">
                    Valorização do seu imóvel desde o primeiro dia
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="bg-solo-light-gray p-8 rounded-xl shadow-2xl">
                <Calculator className="text-solo-orange mx-auto mb-4" size={120} />
                <p className="text-center text-solo-dark-gray font-semibold text-lg">
                  Financie seu projeto solar com as melhores condições do mercado
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

     {/* Seção da Calculadora */}
<section className="py-16 md:py-24 bg-solo-light-gray">
  <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-solo-black">
      <span className="text-solo-orange">Calcule Seu Financiamento</span> em Minutos
    </h2>
    <p className="text-center text-solo-dark-gray mb-12 max-w-2xl mx-auto text-lg">
      Nossa ferramenta mostra as melhores opções de financiamento para seu projeto solar
    </p>

    <div className="max-w-[1140px] mx-auto bg-white p-6 sm:p-8 rounded-xl shadow-xl">
      <div
        className="rounded-lg overflow-hidden"
        dangerouslySetInnerHTML={{
          __html: `
            <iframe
              src="https://meufinanciamentosolar.com.br/iframe?token=6bbbc5f8-e71d-4406-80a5-513bfde1bc03&origin=iframe"
              style="width:1140px;height:800px;border-style:none;"
              frameborder="0"
              allowfullscreen
            ></iframe>
            <div style='width:100%'>
              <p style='text-align:center;color:#666666'>
                Powered by PV Operation e 
                <a 
                  href='https://meufinanciamentosolar.com.br'
                  target='_blank'
                  rel='noopener'
                  style='text-decoration:none;color:#666666'>
                  Meu Financiamento Solar
                </a>
              </p>
            </div>
          `,
        }}
      />
    </div>
  </div>
</section>

     

      {/* Seção de Benefícios */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-solo-light-gray p-8 rounded-xl shadow-lg text-center transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl">
              <Clock className="text-solo-yellow mx-auto mb-4" size={64} />
              <h3 className="text-xl font-bold text-solo-black mb-3">Aprovação Rápida</h3>
              <p className="text-solo-dark-gray">
                Processo ágil e descomplicado para você começar a economizar o quanto antes
              </p>
            </div>
            
            <div className="bg-solo-light-gray p-8 rounded-xl shadow-lg text-center transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl">
              <TrendingDown className="text-solo-yellow mx-auto mb-4" size={64} />
              <h3 className="text-xl font-bold text-solo-black mb-3">Taxas Competitivas</h3>
              <p className="text-solo-dark-gray">
                As melhores condições do mercado para seu investimento valer a pena
              </p>
            </div>
            
            <div className="bg-solo-light-gray p-8 rounded-xl shadow-lg text-center transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl">
              <Users className="text-solo-yellow mx-auto mb-4" size={64} />
              <h3 className="text-xl font-bold text-solo-black mb-3">Suporte Completo</h3>
              <p className="text-solo-dark-gray">
                Nossa equipe acompanha você em todas as etapas do financiamento
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 md:py-24 bg-solo-dark-gray text-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ainda tem dúvidas sobre <span className="text-solo-yellow">financiamento solar?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Nossa equipe está pronta para ajudar você a escolher a melhor opção
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/#solon"
              className="btn-primary-gradient py-4 px-8 rounded-lg text-lg shadow-xl transition duration-300 transform hover:scale-105 inline-block font-bold"
            >
              Simular Projeto Solar
            </Link>
            <button 
              onClick={scrollToContact}
              className="btn-secondary py-4 px-8 rounded-lg text-lg shadow-xl transition duration-300 transform hover:scale-105 font-bold"
            >
              Falar com Especialista
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Financiamento;
