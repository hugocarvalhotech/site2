import { useState, useEffect } from 'react';

function Navbar({ darkMode, setDarkMode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navClasses = `fixed w-full z-50 transition-all duration-300 ${
    isScrolled 
      ? darkMode 
        ? 'bg-gray-900 shadow-lg shadow-blue-500/10' 
        : 'bg-white shadow-lg'
      : 'bg-transparent'
  }`;

  const logoTextClasses = `font-bold text-xl ${
    darkMode || !isScrolled ? 'text-white' : 'text-blue-600'
  }`;

  const linkClasses = `hover:text-green-400 transition-colors ${
    darkMode || !isScrolled ? 'text-white' : 'text-gray-700'
  }`;

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Serviços', href: '#services' },
    { name: 'Clientes', href: '#clients' },
    { name: 'Contato', href: '#contact' },
  ];

  return (
    <nav className={navClasses}>
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <a href="#" className="flex items-center space-x-2">
          <img src="/assets/images/Logo HC v2.png" alt="HC Tech Logo" className="h-10" />
          <span className={logoTextClasses}>HC Tech</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex space-x-6">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className={linkClasses}>
                {link.name}
              </a>
            ))}
          </div>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-full ${
              darkMode ? 'bg-gray-800 text-yellow-300' : 'bg-gray-100 text-gray-700'
            }`}
            aria-label="Toggle dark mode"
          >
            <i className={`fas ${darkMode ? 'fa-sun' : 'fa-moon'}`}></i>
          </button>

          <a
            href="#contact"
            className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-md transition-colors"
          >
            Contate-nos
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center space-x-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-full ${
              darkMode ? 'bg-gray-800 text-yellow-300' : 'bg-gray-100 text-gray-700'
            }`}
            aria-label="Toggle dark mode"
          >
            <i className={`fas ${darkMode ? 'fa-sun' : 'fa-moon'}`}></i>
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={linkClasses}
            aria-label="Toggle menu"
          >
            <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className={`md:hidden ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
          <div className="px-2 pt-2 pb-4 space-y-1 text-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`block px-3 py-2 rounded-md ${linkClasses}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="block w-full bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-md mt-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contate-nos
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;