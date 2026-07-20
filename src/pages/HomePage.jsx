import { Link } from 'react-router-dom';
import { FaCalendar, FaBook, FaUsers, FaArrowRight } from 'react-icons/fa';

const HomePage = () => {
  const infos = {
    presentation: "Depuis 1964, le Lycée-College Évangélique du Tchad forme l'élite tchadienne dans la rigueur et l'excellence.",
    date_rentree_examens: "15 septembre 2026",
    date_rentree_autres: "22 septembre 2026"
  };

  return (
    <div>
      {/* Bannière avec image de fond */}
      <div 
        className="relative text-white py-20 px-4 overflow-hidden min-h-[400px] flex items-center"
        style={{
          backgroundImage: 'url("/images/banner.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay sombre pour la lisibilité */}
        <div className="absolute inset-0 bg-[#0F1A2C] bg-opacity-70"></div>
        
        {/* Filigrane animé */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="text-[15rem] md:text-[25rem] font-heading font-bold text-white/5 animate-float select-none">
            LCET
          </span>
        </div>
        {/* Cercles décoratifs animés */}
        <div className="absolute top-10 right-10 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#1A3A6B]/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        
        <div className="container mx-auto text-center relative z-10">
          <h1 className="font-heading text-4xl md:text-6xl font-bold">
            Lycée-College Évangélique
          </h1>
          <p className="text-[#D4AF37] text-xl md:text-2xl mt-2">🇹🇩 N'Djaména</p>
          <p className="text-lg mt-4 max-w-2xl mx-auto text-gray-200">
            {infos.presentation}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/infos" className="bg-[#D4AF37] text-[#0F1A2C] px-6 py-3 rounded-lg font-bold hover:bg-[#C4A027] transition flex items-center gap-2">
              📋 Infos pratiques
              <FaArrowRight className="text-sm" />
            </Link>
            <Link to="/contact" className="border-2 border-[#D4AF37] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#D4AF37] hover:text-[#0F1A2C] transition">
              📞 Nous contacter
            </Link>
          </div>
        </div>
      </div>

      {/* Cartes d'infos */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center border-t-4 border-[#D4AF37] hover:shadow-2xl transition-shadow duration-300">
            <FaCalendar className="text-[#D4AF37] text-4xl mx-auto mb-3" />
            <h3 className="font-heading text-xl font-bold text-[#0F1A2C]">Rentrée 2026</h3>
            <p className="text-gray-600 mt-2">
              <strong>Classes d'examen :</strong> {infos.date_rentree_examens}
            </p>
            <p className="text-gray-600">
              <strong>Autres classes :</strong> {infos.date_rentree_autres}
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg text-center border-t-4 border-[#0F1A2C] hover:shadow-2xl transition-shadow duration-300">
            <FaBook className="text-[#0F1A2C] text-4xl mx-auto mb-3" />
            <h3 className="font-heading text-xl font-bold text-[#0F1A2C]">Tests d'entrée</h3>
            <p className="text-gray-600 mt-2">📅 11 juillet 2026</p>
            <p className="text-gray-600">📌 Résultats : 14 juillet 2026</p>
            <Link to="/infos" className="text-[#D4AF37] font-semibold hover:underline text-sm mt-2 inline-block">
              Voir les détails →
            </Link>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg text-center border-t-4 border-[#1E7A5E] hover:shadow-2xl transition-shadow duration-300">
            <FaUsers className="text-[#1E7A5E] text-4xl mx-auto mb-3" />
            <h3 className="font-heading text-xl font-bold text-[#0F1A2C]">Anciens élèves</h3>
            <p className="text-gray-600 mt-2">Rejoignez l'Amicale</p>
            <Link to="/amicale" className="text-[#D4AF37] font-semibold hover:underline text-sm mt-2 inline-block">
              En savoir plus →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;