import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const ContactPage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="font-heading text-3xl font-bold text-[#0F1A2C] mb-4">📞 Contact</h1>
      <p className="text-gray-600 mb-8">N'hésitez pas à nous contacter pour toute information.</p>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Coordonnées */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-heading font-bold text-[#0F1A2C] mb-6">Coordonnées</h2>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <FaMapMarkerAlt className="text-[#D4AF37] text-xl mt-1" />
              <div>
                <h3 className="font-semibold text-[#0F1A2C]">Adresse</h3>
                <p className="text-gray-600">Quartier Moursal, N'Djaména, Tchad</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <FaPhone className="text-[#D4AF37] text-xl mt-1" />
              <div>
                <h3 className="font-semibold text-[#0F1A2C]">Téléphone</h3>
                <p className="text-gray-600">+235 62 10 90 97</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <FaEnvelope className="text-[#D4AF37] text-xl mt-1" />
              <div>
                <h3 className="font-semibold text-[#0F1A2C]">Email</h3>
                <p className="text-gray-600">lcetndjamena@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <FaClock className="text-[#D4AF37] text-xl mt-1" />
              <div>
                <h3 className="font-semibold text-[#0F1A2C]">Horaires</h3>
                <p className="text-gray-600">Lundi - Vendredi : 7h30 - 17h00</p>
                <p className="text-gray-600">Samedi : 8h00 - 12h00</p>
              </div>
            </div>
          </div>
        </div>

        {/* Formulaire de contact */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-heading font-bold text-[#0F1A2C] mb-6">✉️ Envoyez-nous un message</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-[#0F1A2C] mb-1">Nom complet</label>
              <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent" placeholder="Votre nom" />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#0F1A2C] mb-1">Email</label>
              <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent" placeholder="votre@email.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#0F1A2C] mb-1">Message</label>
              <textarea rows="4" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent" placeholder="Votre message..."></textarea>
            </div>
            <button type="submit" className="bg-[#D4AF37] text-[#0F1A2C] px-6 py-3 rounded-lg font-bold hover:bg-[#C4A027] transition w-full">
              Envoyer le message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;