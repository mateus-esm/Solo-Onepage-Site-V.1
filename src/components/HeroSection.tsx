
import Header from './Header';

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="bg-hero-bg bg-cover bg-center min-h-screen flex flex-col text-white">
      <Header />
      
      <div className="flex-grow flex items-center justify-center pt-8 pb-16">
        <div className="container mx-auto px-4 sm:px-6 text-center max-w-7xl">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-10 leading-tight lg:text-6xl text-gray-900 drop-shadow-[3px_3px_12px_rgba(0,0,0,0.8)]">
            Solo Energia: <span className="text-solo-yellow drop-shadow-[2px_2px_8px_rgba(0,0,0,0.9)]">Você no Controle</span> da Sua Energia.
          </h1>
          <button 
            onClick={scrollToContact} 
            className="btn-primary-gradient py-4 px-10 rounded-lg text-lg shadow-xl transition duration-300 transform hover:scale-105 inline-block font-bold"
          >
            Orçamento Gratuito de Energia Solar
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
