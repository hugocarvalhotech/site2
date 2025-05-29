function Contact({ darkMode }) {
  const sectionBg = darkMode ? "bg-gray-800" : "bg-white";
  const textColor = darkMode ? "text-gray-200" : "text-gray-700";
  const labelColor = darkMode ? "text-gray-300" : "text-gray-600";
  const inputBg = darkMode ? "bg-gray-700" : "bg-gray-50";
  const inputBorder = darkMode ? "border-gray-600 focus:border-blue-500" : "border-gray-300 focus:border-blue-500";
  const headingColor = darkMode ? "text-white" : "text-gray-800";

  const contactInfo = [
    {
      icon: "fa-phone",
      title: "Telefone",
      content: "+55 81 9.8126-5903",
      link: "tel:+5581981265903"
    },
    {
      icon: "fa-envelope",
      title: "Email",
      content: "comercial@hugocarvalhotech.com.br",
      link: "mailto:comercial@hugocarvalhotech.com.br"
    },
    {
      icon: "fa-map-marker-alt",
      title: "Localização",
      content: "Recife, PE - Brasil",
      link: "https://maps.google.com/?q=Recife,PE,Brasil"
    }
  ];

  return (
    <section id="contact" className={`py-20 ${sectionBg}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-4 ${headingColor}`}>Entre em Contato</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto mb-6"></div>
          <p className={`max-w-3xl mx-auto text-xl ${textColor}`}>
            Estamos prontos para ajudar sua empresa a alcançar excelência em tecnologia
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className={`p-8 rounded-xl ${darkMode ? "bg-gray-700" : "bg-gray-100"} h-full`}>
              <h3 className={`text-2xl font-bold mb-6 ${headingColor}`}>Informações de Contato</h3>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <a 
                    href={item.link}
                    key={index} 
                    className="flex items-start space-x-4 group"
                    target={item.icon === "fa-map-marker-alt" ? "_blank" : ""}
                    rel={item.icon === "fa-map-marker-alt" ? "noopener noreferrer" : ""}
                  >
                    <div className={`mt-1 w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-green-500 flex items-center justify-center flex-shrink-0 transform group-hover:scale-110 transition-all duration-300`}>
                      <i className={`fas ${item.icon} text-white`}></i>
                    </div>
                    <div>
                      <h4 className={`font-medium ${headingColor}`}>{item.title}</h4>
                      <p className={`${textColor} group-hover:text-blue-500 transition-colors`}>{item.content}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-8">
                <h4 className={`font-medium mb-4 ${headingColor}`}>Redes Sociais</h4>
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    className={`w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 flex items-center justify-center text-white hover:opacity-90 transition-opacity`}
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a 
                    href="#" 
                    className={`w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center text-white hover:opacity-90 transition-opacity`}
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a 
                    href="#" 
                    className={`w-10 h-10 rounded-full bg-gradient-to-r from-green-500 to-green-700 flex items-center justify-center text-white hover:opacity-90 transition-opacity`}
                  >
                    <i className="fab fa-whatsapp"></i>
                  </a>
                  <a 
                    href="#" 
                    className={`w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-red-600 flex items-center justify-center text-white hover:opacity-90 transition-opacity`}
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <form className={`p-8 rounded-xl shadow-lg ${darkMode ? "bg-gray-700" : "bg-white"}`}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className={`block mb-2 font-medium ${labelColor}`}>Nome</label>
                  <input 
                    type="text" 
                    id="name"
                    className={`w-full px-4 py-3 rounded-lg border ${inputBorder} ${inputBg} ${textColor} focus:outline-none transition-colors`} 
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label htmlFor="email" className={`block mb-2 font-medium ${labelColor}`}>Email</label>
                  <input 
                    type="email" 
                    id="email"
                    className={`w-full px-4 py-3 rounded-lg border ${inputBorder} ${inputBg} ${textColor} focus:outline-none transition-colors`} 
                    placeholder="seu@email.com"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="subject" className={`block mb-2 font-medium ${labelColor}`}>Assunto</label>
                <input 
                  type="text" 
                  id="subject"
                  className={`w-full px-4 py-3 rounded-lg border ${inputBorder} ${inputBg} ${textColor} focus:outline-none transition-colors`} 
                  placeholder="Assunto da mensagem"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className={`block mb-2 font-medium ${labelColor}`}>Mensagem</label>
                <textarea 
                  id="message" 
                  rows="5"
                  className={`w-full px-4 py-3 rounded-lg border ${inputBorder} ${inputBg} ${textColor} focus:outline-none transition-colors resize-none`}
                  placeholder="Digite sua mensagem aqui..."
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 transform hover:-translate-y-1"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;