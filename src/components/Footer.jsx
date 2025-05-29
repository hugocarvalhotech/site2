function Footer({ darkMode }) {
  const footerBg = darkMode ? "bg-gray-900" : "bg-gray-800";
  const borderColor = darkMode ? "border-gray-700" : "border-gray-700";
  
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`${footerBg} text-white`}>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center space-x-3 mb-6">
              <img src="/assets/images/Logo HC v2.png" alt="HC Tech Logo" className="h-10" />
              <h3 className="text-xl font-bold">HC Tech</h3>
            </div>
            <p className="text-gray-400 mb-6">
              Soluções tecnológicas para impulsionar o crescimento e a eficiência do seu negócio.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="fab fa-linkedin text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="fab fa-facebook text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="fab fa-whatsapp text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="fab fa-instagram text-xl"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Início</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Serviços</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <i className="fas fa-phone text-green-500"></i>
                <span className="text-gray-400">+55 81 9.8126-5903</span>
              </li>
              <li className="flex items-start space-x-2">
                <i className="fas fa-envelope text-blue-500 mt-1"></i>
                <span className="text-gray-400 break-all">comercial@hugocarvalhotech.com.br</span>
              </li>
              <li className="flex items-center space-x-2">
                <i className="fas fa-map-marker-alt text-red-500"></i>
                <span className="text-gray-400">Recife, PE - Brasil</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className={`border-t ${borderColor} py-6`}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} HC Tech. Todos os direitos reservados.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6 text-sm">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Termos de Uso</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Política de Privacidade</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;