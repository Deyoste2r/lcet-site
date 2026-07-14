const AmicalePage = () => {
  const activites = [
    { id: 1, title: "Dîner de gala 2024", description: "Soirée de retrouvailles des anciens élèves. Plus de 200 participants ont répondu présents.", image: "https://via.placeholder.com/400x300/D4AF37/0F1A2C?text=Dîner+de+gala" },
    { id: 2, title: "Journée sportive", description: "Tournoi de football entre anciennes promotions. Vainqueur : promotion 2000.", image: "https://via.placeholder.com/400x300/1A3A6B/D4AF37?text=Journée+sportive" },
    { id: 3, title: "Cérémonie de bourses", description: "Distribution de bourses aux élèves méritants par l'Amicale des anciens.", image: "https://via.placeholder.com/400x300/1E7A5E/D4AF37?text=Bourses" },
    { id: 4, title: "Visite de l'établissement", description: "Visite guidée du LCET pour les anciens élèves, 75 ans après la fondation.", image: "https://via.placeholder.com/400x300/0F1A2C/D4AF37?text=Visite" },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="font-heading text-3xl font-bold text-[#0F1A2C] mb-4">🤝 Amicale des anciens</h1>
      <p className="text-gray-600 mb-8">
        L'Amicale des anciens élèves du LCET rassemble les promotions depuis 1947. 
        Retrouvez ici nos activités et événements.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {activites.map((activite) => (
          <div key={activite.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <img src={activite.image} alt={activite.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="font-heading text-xl font-bold text-[#0F1A2C]">{activite.title}</h3>
              <p className="text-gray-600 mt-2">{activite.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AmicalePage;
