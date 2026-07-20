import { Link } from 'react-router-dom';
import { FaFacebook, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#0F1A2C] text-white mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Colonne 1 : Infos */}
          <div>
            <h3 className="text-xl font-heading font-bold text-[#D4AF37] mb-4">
              Lycée-College Évangélique
            </h3>
            <p className="text-gray-300 text-sm mb-4">
              Depuis 1964, former l'élite tchadienne dans la rigueur et l'excellence.
            </p>
            <div className="space-y-2 text-sm text-gray-300">
              <p className="flex items-center space-x-2">
                <FaMapMarkerAlt className="text-[#D4AF37]" />
                <span>Quartier Moursal, N'Djaména, Tchad</span>
              </p>
              <p className="flex items-center space-x-2">
                <FaPhone className="text-[#D4AF37]" />
                <span>+235 62 10 90 97</span>
              </p>
              <p className="flex items-center space-x-2">
                <FaEnvelope className="text-[#D4AF37]" />
                <span>lcetndjamena@gmail.com</span>
              </p>
            </div>
          </div>

          {/* Colonne 2 : Liens rapides */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Liens rapides</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-gray-300 hover:text-[#D4AF37] transition">Accueil</Link></li>
              <li><Link to="/infos" className="text-gray-300 hover:text-[#D4AF37] transition">Infos pratiques</Link></li>
              <li><Link to="/galerie" className="text-gray-300 hover:text-[#D4AF37] transition">Galerie</Link></li>
              <li><Link to="/amicale" className="text-gray-300 hover:text-[#D4AF37] transition">Amicale</Link></li>
              <li><Link to="/evenements" className="text-gray-300 hover:text-[#D4AF37] transition">Événements</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-[#D4AF37] transition">Contact</Link></li>
            </ul>
          </div>

          {/* Colonne 3 : Réseaux sociaux */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Suivez-nous</h4>
            <p className="text-gray-300 text-sm mb-4">
              Restez informé des actualités du LCET.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="bg-[#D4AF37] text-[#0F1A2C] p-3 rounded-full hover:bg-[#C4A027] transition"
                aria-label="Facebook"
              >
                <FaFacebook size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Barre de copyright */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Lycée-College Évangélique du Tchad. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
