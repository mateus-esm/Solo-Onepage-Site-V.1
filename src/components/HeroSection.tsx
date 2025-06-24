
import Header from './Header';

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-hero-bg bg-cover bg-center min-h-screen flex flex-col text-white">
      <Header />
      
      <div className="flex-grow flex items-center justify-center">
        <div className="container mx-auto px-4 sm:px-6 text-center py-10 md:py-16 max-w-7xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-10 leading-tight drop-shadow-2xl">
            Solo Energia: <span className="text-solo-yellow">Você no Controle</span> da Sua Energia.
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
