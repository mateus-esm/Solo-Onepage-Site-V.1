
const WhatsAppFloat = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "+558581813110";
    const message = "Olá! Gostaria de saber mais sobre as soluções de energia solar da Solo Energia.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div 
      className="fixed bottom-6 right-6 z-50 cursor-pointer group"
      onClick={handleWhatsAppClick}
    >
      <div className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110">
        <i className="fab fa-whatsapp text-2xl"></i>
      </div>
      <div className="absolute bottom-16 right-0 bg-gray-800 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Fale conosco no WhatsApp
      </div>
    </div>
  );
};

export default WhatsAppFloat;
