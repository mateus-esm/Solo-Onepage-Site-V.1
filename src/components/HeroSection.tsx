
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
    <section className="bg-cover bg-center min-h-screen flex flex-col text-white" style={{backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("/lovable-uploads/25735a24-fb38-4aef-a9ca-1f557f4922a3.png")'}}>
      <Header />
      
      <div className="flex-grow flex items-center justify-center pt-8 pb-16">
        <div className="container mx-auto px-4 sm:px-6 text-center max-w-7xl">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-10 leading-tight text-white drop-shadow-[3px_3px_12px_rgba(0,0,0,0.8)] lg:text-6xl">
            Você no Controle da Sua Energia
          </h1>
          <button onClick={scrollToContact} className="btn-primary-gradient py-4 px-10 rounded-lg text-lg shadow-xl transition duration-300 transform hover:scale-105 inline-block font-bold">
            Orçamento Gratuito de Energia Solar
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
