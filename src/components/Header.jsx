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
      {/* Barre de contact supérieure */}
      <div className="bg-[#0F1A2C] text-white text-sm py-1 px-4 hidden md:flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <span className="flex items-center space-x-1">
            <FaPhone className="text-[#D4AF37]" />
            <span>+235 62 10 90 97</span>
          </span>
          <span className="flex items-center space-x-1">
            <FaEnvelope className="text-[#D4AF37]" />
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
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            {/* Logo image avec taille agrandie */}
            <img 
              src="/images/logo.png" 
              alt="Logo LCET" 
              className="w-14 h-14 object-contain rounded-full border-2 border-[#D4AF37]"
              onError={(e) => {
                // Si le logo ne charge pas, afficher le texte LCET en fallback
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            {/* Fallback si l'image ne charge pas */}
            <div className="w-14 h-14 bg-[#0F1A2C] rounded-full flex items-center justify-center text-[#D4AF37] font-bold text-lg hidden">
              LCET
            </div>
            <div>
              <h1 className="text-[#0F1A2C] font-heading text-lg font-bold leading-tight hidden sm:block">
                Lycée-College Évangélique
              </h1>
              <span className="text-xs text-[#D4AF37] font-semibold hidden sm:block">Depuis 1964</span>
            </div>
          </div>

          {/* Menu desktop */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-[#0F1A2C] hover:text-[#D4AF37] font-medium transition">Accueil</Link>
            <Link to="/infos" className="text-[#0F1A2C] hover:text-[#D4AF37] font-medium transition">Infos</Link>
            <Link to="/galerie" className="text-[#0F1A2C] hover:text-[#D4AF37] font-medium transition">Galerie</Link>
            <Link to="/amicale" className="text-[#0F1A2C] hover:text-[#D4AF37] font-medium transition">Amicale</Link>
            <Link to="/evenements" className="text-[#0F1A2C] hover:text-[#D4AF37] font-medium transition">Événements</Link>
            <Link to="/contact" className="text-[#0F1A2C] hover:text-[#D4AF37] font-medium transition">Contact</Link>
          </div>

          {/* Bouton hamburger mobile */}
          <button 
            onClick={toggleMenu}
            className="md:hidden text-[#0F1A2C] text-2xl p-2 hover:bg-gray-100 rounded-lg transition"
            aria-label="Menu"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Menu mobile déroulant */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 py-4 px-4 shadow-lg">
            <div className="flex flex-col space-y-3">
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