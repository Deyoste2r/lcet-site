const AmicalePage = () => {
  const activites = [
    { id: 1, title: "Dîner de gala 2024", description: "Soirée de retrouvailles des anciens élèves. Plus de 200 participants ont répondu présents.", image: "/images/amicale/gala-2024.jpg" },
    { id: 2, title: "Journée sportive", description: "Tournoi de football entre anciennes promotions. Vainqueur : promotion 2000.", image: "/images/amicale/sport-2024.jpg" },
    { id: 3, title: "Cérémonie de bourses", description: "Distribution de bourses aux élèves méritants par l'Amicale des anciens.", image: "/images/amicale/bourses-2024.jpg" },
    { id: 4, title: "Visite de l'établissement", description: "Visite guidée du LCET pour les anciens élèves, 75 ans après la fondation.", image: "/images/amicale/visite-2024.jpg" },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="font-heading text-3xl font-bold text-[#0F1A2C] mb-4">Amicale des anciens</h1>
      <p className="text-gray-600 mb-8">
        L'Amicale des anciens élèves du LCET rassemble les promotions depuis 1964. 
        Retrouvez ici nos activités et événements.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {activites.map((activite) => (
          <div key={activite.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <img 
              src={activite.image} 
              alt={activite.title} 
              className="w-full h-48 object-cover"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/400x300/1A3A6B/D4AF37?text=Amicale+LCET';
              }}
            />
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