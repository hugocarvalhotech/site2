import React from 'react';

function Clients({ darkMode }) {
  // Determine theme-based styling
  const sectionBg = darkMode ? 'bg-gray-800' : 'bg-gray-100';
  const headingColor = darkMode ? 'text-white' : 'text-gray-800';
  const cardBg = darkMode ? 'bg-gray-700' : 'bg-white';
  const textColor = darkMode ? 'text-gray-300' : 'text-gray-600';
  const borderColor = darkMode ? 'border-gray-600' : 'border-gray-200';
  
  // Client data with specified companies
  const clients = [
    {
      name: 'Envases',
      logo: 'fa-box',
      description: 'Empresa líder em soluções de embalagens que confia nos serviços de infraestrutura da HC Tech.',
      sector: 'Embalagens'
    },
    {
      name: 'Natto',
      logo: 'fa-industry',
      description: 'Empresa do setor alimentício que implementou nossas soluções de tecnologia para otimizar seus processos.',
      sector: 'Alimentos'
    },
    {
      name: 'Vivix',
      logo: 'fa-building',
      description: 'Empresa que revolucionou seus processos com nossa implementação de infraestrutura em nuvem e serviços gerenciados.',
      sector: 'Vidros'
    },
    {
      name: 'White Martins',
      logo: 'fa-flask',
      description: 'Empresa de gases industriais que aumentou sua eficiência operacional com nossas soluções tecnológicas.',
      sector: 'Gases Industriais'
    },
    {
      name: 'HB7',
      logo: 'fa-building',
      description: 'Empresa que implementou nossa solução de gestão de dados, melhorando significativamente seus processos.',
      sector: 'Negócios'
    },
    {
      name: 'Hospital do Cancer',
      logo: 'fa-hospital',
      description: 'Instituição de saúde que se beneficiou da nossa solução de infraestrutura de TI e suporte técnico especializado.',
      sector: 'Saúde'
    }
  ];

  // Partners data
  const partners = [
    {
      name: 'Dell',
      logo: 'fa-server',
      description: 'Parceria estratégica para fornecer hardware e soluções de infraestrutura de TI de alta qualidade.',
      sector: 'Hardware & Infraestrutura'
    },
    {
      name: 'Zabbix',
      logo: 'fa-chart-line',
      description: 'Parceria para implementação de soluções de monitoramento de redes e sistemas de TI.',
      sector: 'Monitoramento'
    },
    {
      name: 'Grafana',
      logo: 'fa-chart-bar',
      description: 'Parceria para visualização de dados e criação de dashboards interativos para análise de métricas.',
      sector: 'Visualização de Dados'
    }
  ];

  return (
    <>
      {/* Clients Section */}
      <section id="clients" className={`py-20 ${sectionBg} transition-colors duration-300`}>
        <div className="container mx-auto px-4">
          {/* Section header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className={`text-3xl md:text-4xl font-bold ${headingColor} mb-4`}>
              Nossos <span className="text-blue-600">Clientes</span>
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-blue-600 to-green-500 mx-auto mb-6"></div>
            <p className={`${textColor} text-lg`}>
              Empresas que confiam nas soluções de tecnologia da HC Tech para impulsionar seus negócios 
              e superar desafios tecnológicos.
            </p>
          </div>
          
          {/* Clients grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clients.map((client, index) => (
              <div 
                key={index}
                className={`${cardBg} rounded-lg shadow-lg p-6 border ${borderColor} hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-2`}
              >
                <div className="flex items-center mb-4">
                  <div className="h-14 w-14 rounded-full bg-gradient-to-r from-blue-600 to-green-500 flex items-center justify-center text-white text-2xl">
                    <i className={`fas ${client.logo}`}></i>
                  </div>
                  <div className="ml-4">
                    <h3 className={`font-bold text-xl ${headingColor}`}>{client.name}</h3>
                    <p className="text-blue-600">{client.sector}</p>
                  </div>
                </div>
                
                <p className={`${textColor} leading-relaxed`}>
                  {client.description}
                </p>
                
                <div className="mt-4 pt-4 border-t border-dashed border-gray-300 flex items-center justify-between">
                  <span className={`inline-flex items-center ${textColor}`}>
                    <i className="fas fa-check-circle mr-2 text-green-500"></i>
                    Cliente HC Tech
                  </span>
                  <span className={`${darkMode ? 'text-blue-400' : 'text-blue-600'} hover:text-green-500 cursor-pointer transition-colors duration-300`}>
                    <i className="fas fa-arrow-right"></i>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-white'} transition-colors duration-300`}>
        <div className="container mx-auto px-4">
          {/* Section header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className={`text-3xl md:text-4xl font-bold ${headingColor} mb-4`}>
              Nossos <span className="text-blue-600">Parceiros</span>
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-blue-600 to-green-500 mx-auto mb-6"></div>
            <p className={`${textColor} text-lg`}>
              Empresas de tecnologia que trabalham em conjunto com a HC Tech para oferecer soluções completas e integradas.
            </p>
          </div>
          
          {/* Partners grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <div 
                key={index}
                className={`${cardBg} rounded-lg shadow-lg p-6 border ${borderColor} hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-2`}
              >
                <div className="flex items-center mb-4">
                  <div className="h-14 w-14 rounded-full bg-gradient-to-r from-blue-600 to-purple-500 flex items-center justify-center text-white text-2xl">
                    <i className={`fas ${partner.logo}`}></i>
                  </div>
                  <div className="ml-4">
                    <h3 className={`font-bold text-xl ${headingColor}`}>{partner.name}</h3>
                    <p className="text-purple-600">{partner.sector}</p>
                  </div>
                </div>
                
                <p className={`${textColor} leading-relaxed`}>
                  {partner.description}
                </p>
                
                <div className="mt-4 pt-4 border-t border-dashed border-gray-300 flex items-center justify-between">
                  <span className={`inline-flex items-center ${textColor}`}>
                    <i className="fas fa-handshake mr-2 text-purple-500"></i>
                    Parceiro Estratégico
                  </span>
                  <span className={`${darkMode ? 'text-blue-400' : 'text-blue-600'} hover:text-purple-500 cursor-pointer transition-colors duration-300`}>
                    <i className="fas fa-arrow-right"></i>
                  </span>
                </div>
              </div>
            ))}
          </div>
          
          {/* Call to action */}
          <div className="mt-16 text-center">
            <p className={`${textColor} mb-6 text-lg`}>
              Junte-se a estas empresas e descubra como podemos transformar sua tecnologia.
            </p>
            <a
              href="#contact"
              className="bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 text-white py-3 px-8 rounded-full font-medium transition-all duration-300 text-lg inline-flex items-center"
            >
              Fale Conosco
              <i className="fas fa-arrow-right ml-2"></i>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Clients;