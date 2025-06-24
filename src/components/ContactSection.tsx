
import { useState } from 'react';
import { Calendar, MessageCircle } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: '',
    privacy: false
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    setShowSuccess(false);
    setShowError(false);
    setErrorMessage('');

    if (!formData.name || !formData.email || !formData.phone || !formData.interest || !formData.privacy) {
      setErrorMessage('Por favor, preencha todos os campos obrigatórios (*) e aceite a política de privacidade.');
      setShowError(true);
      return;
    }

    console.log('Dados do Formulário:', formData);
    
    setShowSuccess(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      interest: '',
      message: '',
      privacy: false
    });

    setTimeout(() => {
      setShowSuccess(false);
    }, 6000);
  };

  return (
    <section id="contato" className="py-16 md:py-24 bg-solo-dark-gray text-white">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Pronto para Assumir o <span className="text-solo-yellow">Controle da Sua Energia com a Solo Energia?</span>
        </h2>
        <p className="text-center text-gray-300 mb-12 md:mb-16 max-w-2xl mx-auto text-lg">
          Preencha o formulário ou entre em contato. Nossa equipe de especialistas em energia solar está pronta para criar sua solução energética ideal.
        </p>
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div className="bg-white text-solo-black p-8 sm:p-10 rounded-xl shadow-2xl">
            <h3 className="text-2xl font-semibold mb-6 text-center">Solicite uma Consultoria Gratuita em Energia Solar</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-5">
                <label htmlFor="name" className="block text-solo-dark-gray font-semibold mb-2">Nome Completo*</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-solo-yellow focus:border-transparent outline-none transition-shadow"
                  placeholder="Seu nome"
                  required
                />
              </div>
              
              <div className="mb-5">
                <label htmlFor="email" className="block text-solo-dark-gray font-semibold mb-2">E-mail*</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-solo-yellow focus:border-transparent outline-none transition-shadow"
                  placeholder="seuemail@exemplo.com"
                  required
                />
              </div>
              
              <div className="mb-5">
                <label htmlFor="phone" className="block text-solo-dark-gray font-semibold mb-2">Telefone/WhatsApp*</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-solo-yellow focus:border-transparent outline-none transition-shadow"
                  placeholder="(XX) XXXXX-XXXX"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="interest" className="block text-solo-dark-gray font-semibold mb-2">Principal Interesse em Nossas Soluções*</label>
                <select
                  id="interest"
                  name="interest"
                  value={formData.interest}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-solo-yellow focus:border-transparent outline-none transition-shadow bg-white"
                  required
                >
                  <option value="" disabled>Selecione uma opção...</option>
                  <option value="Residencial">Energia Solar Residencial</option>
                  <option value="Comercial">Energia Solar para meu Negócio</option>
                  <option value="Veicular">Carregamento para Veículo Elétrico</option>
                  <option value="Investimento">Investir em Usina Solar</option>
                  <option value="Assinatura">Energia por Assinatura</option>
                  <option value="OM">O&M - Operação e Manutenção</option>
                  <option value="Outro">Outro</option>
                </select>
              </div>
              
              <div className="mb-5">
                <label htmlFor="message" className="block text-solo-dark-gray font-semibold mb-2">Mensagem (Opcional)</label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-solo-yellow focus:border-transparent outline-none transition-shadow"
                  placeholder="Conte-nos mais sobre seu projeto de energia..."
                />
              </div>
              
              <div className="mb-4">
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    id="privacy"
                    name="privacy"
                    checked={formData.privacy}
                    onChange={handleInputChange}
                    className="rounded border-gray-300 text-solo-orange shadow-sm focus:border-solo-orange focus:ring focus:ring-solo-orange focus:ring-opacity-50"
                    required
                  />
                  <span className="ml-2 text-sm text-solo-dark-gray">
                    Li e concordo com a <a href="/politica-de-privacidade" target="_blank" className="text-solo-orange hover:underline">Política de Privacidade</a>.*
                  </span>
                </label>
              </div>
              
              <div className="text-center">
                <button
                  type="submit"
                  className="btn-primary-gradient font-bold py-3 px-10 rounded-lg text-lg shadow-lg transition duration-300 transform hover:scale-105 w-full"
                >
                  Enviar Solicitação de Orçamento
                </button>
              </div>
            </form>
            
            {showError && (
              <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg text-center animate-fade-in">
                {errorMessage}
              </div>
            )}
            
            {showSuccess && (
              <div className="mt-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg text-center animate-fade-in">
                Obrigado! Sua solicitação foi enviada. Entraremos em contato em breve para falar sobre seu projeto de energia solar.
              </div>
            )}
          </div>
          
          <div className="space-y-8 mt-12 md:mt-0">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-solo-yellow">Fale com um Especialista Solo Energia Agora</h3>
              <p className="text-gray-300 mb-4">Tire suas dúvidas ou inicie seu projeto de energia solar conversando diretamente com nossa equipe.</p>
              <a
                href="https://wa.me/558581813110"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp font-semibold py-4 px-8 rounded-lg text-lg shadow-lg hover:opacity-90 transition duration-300 transform hover:scale-105 inline-flex items-center w-full sm:w-auto justify-center"
              >
                <MessageCircle className="mr-3" size={24} />
                Conversar sobre Energia Solar no WhatsApp
              </a>
              <p className="text-xs text-gray-400 mt-2">Clique para abrir o WhatsApp.</p>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-solo-yellow">Agende uma Consultoria Online de Energia Solar</h3>
              <p className="text-gray-300 mb-4">Prefere agendar? Escolha o melhor dia e horário para uma conversa detalhada sobre suas necessidades de energia.</p>
              <a
                href="https://calendly.com/mateus-soloenergia/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-solo-orange text-white font-semibold py-4 px-8 rounded-lg text-lg shadow-lg hover:bg-opacity-80 transition duration-300 transform hover:scale-105 inline-flex items-center w-full sm:w-auto justify-center"
              >
                <Calendar className="mr-3" size={20} />
                Agendar Reunião Online
              </a>
              <p className="text-xs text-gray-400 mt-2">Você será redirecionado para nossa agenda.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
