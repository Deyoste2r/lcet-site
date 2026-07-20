import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaPhone, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Barre de contact supérieure - cachée sur mobile */}
      <div className="bg-[#0F1A2C] text-white text-xs py-1 px-3 hidden sm:flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <span className="flex items-center space-x-1">
            <FaPhone className="text-[#D4AF37] text-xs" />
            <span>+235 62 10 90 97</span>
          </span>
          <span className="flex items-center space-x-1">
            <FaEnvelope className="text-[#D4AF37] text-xs" />
            <span>lcetndjamena@gmail.com</span>
          </span>
        </div>
        <div>
          <a href="#" className="text-[#D4AF37] hover:text-white">
            <FaFacebook className="inline" />
          </a>
        </div>
      </div>

      {/* Navigation principale */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-3 py-2 flex justify-between items-center">
          {/* Logo et titre - visible sur tous les écrans */}
          <Link to="/" className="flex items-center space-x-2 flex-shrink-0">
            <img 
              src="/images/logo.png" 
              alt="Logo LCET" 
              className="w-10 h-10 sm:w-12 sm:h-12 object-contain rounded-full border-2 border-[#D4AF37]"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            {/* Fallback si l'image ne charge pas */}
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#0F1A2C] rounded-full flex items-center justify-center text-[#D4AF37] font-bold text-sm sm:text-base hidden">
              LCET
            </div>
            <div className="flex flex-col leading-tight">
              <h1 className="text-[#0F1A2C] font-heading text-sm sm:text-base md:text-lg font-bold">
                Lycée-College Évangélique
              </h1>
              <span className="text-[10px] sm:text-xs text-[#D4AF37] font-semibold">
                Depuis 1964
              </span>
            </div>
          </Link>

          {/* Menu desktop */}
          <div className="hidden md:flex space-x-4 lg:space-x-6">
            <Link to="/" className="text-[#0F1A2C] hover:text-[#D4AF37] font-medium transition text-sm">Accueil</Link>
            <Link to="/infos" className="text-[#0F1A2C] hover:text-[#D4AF37] font-medium transition text-sm">Infos</Link>
            <Link to="/galerie" className="text-[#0F1A2C] hover:text-[#D4AF37] font-medium transition text-sm">Galerie</Link>
            <Link to="/amicale" className="text-[#0F1A2C] hover:text-[#D4AF37] font-medium transition text-sm">Amicale</Link>
            <Link to="/evenements" className="text-[#0F1A2C] hover:text-[#D4AF37] font-medium transition text-sm">Événements</Link>
            <Link to="/contact" className="text-[#0F1A2C] hover:text-[#D4AF37] font-medium transition text-sm">Contact</Link>
          </div>

          {/* Bouton hamburger mobile */}
          <button 
            onClick={toggleMenu}
            className="md:hidden text-[#0F1A2C] text-xl p-2 hover:bg-gray-100 rounded-lg transition"
            aria-label="Menu"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Menu mobile déroulant */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 py-3 px-4 shadow-lg">
            <div className="flex flex-col space-y-2">
              <Link to="/" onClick={closeMenu} className="text-[#0F1A2C] hover:text-[#D4AF37] font-medium transition py-2 border-b border-gray-50">Accueil</Link>
              <Link to="/infos" onClick={closeMenu} className="text-[#0F1A2C] hover:text-[#D4AF37] font-medium transition py-2 border-b border-gray-50">Infos pratiques</Link>
              <Link to="/galerie" onClick={closeMenu} className="text-[#0F1A2C] hover:text-[#D4AF37] font-medium transition py-2 border-b border-gray-50">Galerie</Link>
              <Link to="/amicale" onClick={closeMenu} className="text-[#0F1A2C] hover:text-[#D4AF37] font-medium transition py-2 border-b border-gray-50">Amicale</Link>
              <Link to="/evenements" onClick={closeMenu} className="text-[#0F1A2C] hover:text-[#D4AF37] font-medium transition py-2 border-b border-gray-50">Événements</Link>
              <Link to="/contact" onClick={closeMenu} className="text-[#0F1A2C] hover:text-[#D4AF37] font-medium transition py-2">Contact</Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Header;