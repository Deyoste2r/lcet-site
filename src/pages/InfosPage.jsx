const InfosPage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="font-heading text-3xl font-bold text-[#0F1A2C] mb-8">Infos pratiques</h1>

      {/* Tests d'entrée */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8 border-l-4 border-[#D4AF37]">
        <h2 className="text-2xl font-heading font-bold text-[#0F1A2C] mb-4">Tests d'entrée 2026</h2>
        <p className="text-gray-600 mb-2"><strong>📅 Date :</strong> 23 juillet 2026</p>
        <p className="text-gray-600 mb-4"><strong>Résultats :</strong> 27 juillet 2026</p>
        
        <h3 className="font-bold text-[#0F1A2C] mt-4 mb-2">Niveaux concernés :</h3>
        <div className="flex flex-wrap gap-2 mb-4">
          {['6ème', '5ème', '4ème', '2nde L', '2nde S', '1ère L', '1ère S'].map((niveau) => (
            <span key={niveau} className="bg-[#F5F7FA] px-3 py-1 rounded-full text-sm font-medium text-[#0F1A2C]">
              {niveau}
            </span>
          ))}
        </div>

        <h3 className="font-bold text-[#0F1A2C] mt-4 mb-2">Dossier à fournir :</h3>
        <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
          <li>1 copie légalisée de l'acte de naissance</li>
          <li>Carnet ou bulletins de notes</li>
          <li>2 photos d'identité récentes en couleur</li>
          <li>Frais de dossier : <strong className="text-[#D4AF37]">5000 FCFA</strong> (non remboursables)</li>
        </ul>
        <p className="text-red-600 text-sm mt-2 font-semibold">⚠️ Note de conduite inférieure à 14/20 = rejet du dossier.</p>

        <h3 className="font-bold text-[#0F1A2C] mt-4 mb-2">📅 Dépôt des dossiers :</h3>
        <p className="text-gray-600">Du <strong>19 mai</strong> au <strong>23 juillet 2026</strong></p>
      </div>

      {/* Épreuves par niveau */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8 border-l-4 border-[#1A3A6B]">
        <h2 className="text-2xl font-heading font-bold text-[#0F1A2C] mb-4">Épreuves par niveau</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-[#F5F7FA] p-4 rounded-lg">
            <h4 className="font-bold text-[#0F1A2C]">6ème</h4>
            <p className="text-gray-600 text-sm">Dictée, Rédaction, Étude de texte, Calcul écrit</p>
          </div>
          <div className="bg-[#F5F7FA] p-4 rounded-lg">
            <h4 className="font-bold text-[#0F1A2C]">5ème &amp; 4ème</h4>
            <p className="text-gray-600 text-sm">Maths, Anglais, Français</p>
          </div>
          <div className="bg-[#F5F7FA] p-4 rounded-lg">
            <h4 className="font-bold text-[#0F1A2C]">2nde L</h4>
            <p className="text-gray-600 text-sm">Maths, Anglais, Français</p>
          </div>
          <div className="bg-[#F5F7FA] p-4 rounded-lg">
            <h4 className="font-bold text-[#0F1A2C]">2nde S</h4>
            <p className="text-gray-600 text-sm">Maths, Français, Physique-Chimie</p>
          </div>
          <div className="bg-[#F5F7FA] p-4 rounded-lg">
            <h4 className="font-bold text-[#0F1A2C]">1ère L</h4>
            <p className="text-gray-600 text-sm">Maths, Anglais, Français</p>
          </div>
          <div className="bg-[#F5F7FA] p-4 rounded-lg">
            <h4 className="font-bold text-[#0F1A2C]">1ère S</h4>
            <p className="text-gray-600 text-sm">Maths, Français, Physique-Chimie</p>
          </div>
        </div>
      </div>

      {/* Réinscription et rentrée */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-[#1E7A5E]">
          <h3 className="text-xl font-heading font-bold text-[#0F1A2C] mb-2">🔄 Réinscription</h3>
          <p className="text-gray-600"><strong>Anciens élèves :</strong> à partir du 1er Aout 2026</p>
          <p className="text-red-600 text-sm mt-2 font-semibold">⚠️ Redoublants : confirmation avant le 10 juillet 2025</p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-[#D4AF37]">
          <h3 className="text-xl font-heading font-bold text-[#0F1A2C] mb-2">📆 Rentrée 2026-2027</h3>
          <p className="text-gray-600"><strong>Classes d'examen (3ème &amp; Terminale) :</strong> 15 septembre 2025</p>
          <p className="text-gray-600"><strong>Autres classes :</strong> 22 septembre 2026</p>
        </div>
      </div>
    </div>
  );
};

export default InfosPage;
