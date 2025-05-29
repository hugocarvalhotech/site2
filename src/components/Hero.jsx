function Hero({ darkMode }) {
  const bgStyles = {
    backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("/assets/images/backgrounds/tech-background.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
  };

  return (
    <section 
      id="home"
      className="relative h-screen flex items-center justify-center"
      style={bgStyles}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/60 to-green-900/60"></div>
      
      <div className="container mx-auto px-4 z-10 text-center">
        <img 
          src="/assets/images/Logo HC v2.png" 
          alt="HC Tech Logo" 
          className="h-24 sm:h-32 md:h-40 mx-auto mb-6 animate-pulse" 
        />
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
          Business and Consult IT
        </h1>
        
        <p className="text-xl sm:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
          Soluções de tecnologia para impulsionar seu negócio com infraestrutura robusta,
          segurança confiável e suporte técnico especializado.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#services" 
            className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-full font-medium transition-colors duration-300 text-lg"
          >
            Nossos Serviços
          </a>
          <a 
            href="#contact" 
            className="bg-green-500 hover:bg-green-600 text-white py-3 px-8 rounded-full font-medium transition-colors duration-300 text-lg"
          >
            Fale Conosco
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#services" className="text-white text-4xl">
          <i className="fas fa-chevron-down"></i>
        </a>
      </div>
    </section>
  );
}

export default Hero;