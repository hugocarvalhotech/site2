function Services({ darkMode }) {
  const services = [
    {
      id: 1,
      title: "Infraestrutura e Serviços",
      icon: "fa-network-wired",
      description: "Suportamos e implementamos equipamentos e ferramentas dos principais fabricantes do mercado. Oferecemos diagnóstico completo, serviços gerenciados, projetos, consultoria e monitoramento de eventos com envio de alertas.",
      color: "from-blue-400 to-blue-600",
      textColor: darkMode ? "text-blue-400" : "text-blue-600"
    },
    {
      id: 2,
      title: "Redes e Segurança",
      icon: "fa-shield-alt",
      description: "Serviços especializados em redes e segurança para auxiliar empresas a proteger suas infraestruturas de TI e garantir a confidencialidade, integridade e disponibilidade de seus dados e sistemas.",
      color: "from-green-400 to-green-600", 
      textColor: darkMode ? "text-green-400" : "text-green-600"
    },
    {
      id: 3,
      title: "Licenciamento e Compliance",
      icon: "fa-file-contract",
      description: "Grande parte das empresas não possui um processo refinado de controle ou até não conhece as regras de licenciamento de softwares dos principais fabricantes como Microsoft, isso pode acarretar em multa, analisamos para você.",
      color: "from-blue-400 to-blue-600",
      textColor: darkMode ? "text-blue-400" : "text-blue-600"
    },
    {
      id: 4,
      title: "Serviço Cloud e Datacenter",
      icon: "fa-cloud",
      description: "O correto gerenciamento dos ambientes de datacenter e cloud computing é de suma importância para manter os negócios da sua empresa sempre em funcionamento.",
      color: "from-green-400 to-green-600",
      textColor: darkMode ? "text-green-400" : "text-green-600"
    },
    {
      id: 5,
      title: "Service Desk",
      icon: "fa-headset",
      description: "Nossa oferta de Service Desk é um serviço abrangente que fornece suporte técnico especializado e atendimento ao cliente para resolver de forma eficiente e rápida os problemas, remotamente ou presencial.",
      color: "from-blue-400 to-blue-600",
      textColor: darkMode ? "text-blue-400" : "text-blue-600"
    }
  ];

  const sectionBg = darkMode ? "bg-gray-900" : "bg-gray-50";
  const cardBg = darkMode ? "bg-gray-800" : "bg-white";
  const textColor = darkMode ? "text-gray-200" : "text-gray-700";

  return (
    <section id="services" className={`py-20 ${sectionBg}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-4 ${darkMode ? "text-white" : "text-gray-800"}`}>
            Nossos Serviços
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto mb-6"></div>
          <p className={`max-w-3xl mx-auto text-xl ${textColor}`}>
            Soluções especializadas para atender todas as necessidades de TI da sua empresa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className={`${cardBg} rounded-xl shadow-xl overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl`}
            >
              <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
              <div className="p-8">
                <div 
                  className={`w-16 h-16 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center mb-6`}
                >
                  <i className={`fas ${service.icon} text-white text-2xl`}></i>
                </div>
                <h3 className={`text-2xl font-bold mb-4 ${service.textColor}`}>
                  {service.title}
                </h3>
                <p className={`${textColor} mb-6`}>{service.description}</p>
                <a 
                  href="#contact" 
                  className={`inline-block ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'} font-medium`}
                >
                  Saiba mais <i className="fas fa-arrow-right ml-1"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;