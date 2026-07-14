const EvenementsPage = () => {
  const evenements = [
    { id: 1, title: "Tests d'entrée 2025", date: "11 juillet 2025", description: "Tests d'entrée pour les nouveaux élèves (6ème, 5ème, 4ème, 2nde, 1ère).", image: "https://via.placeholder.com/400x200/D4AF37/0F1A2C?text=Tests+d'entrée" },
    { id: 2, title: "Rentrée des classes d'examen", date: "15 septembre 2025", description: "Début des cours pour les classes de 3ème et Terminale.", image: "https://via.placeholder.com/400x200/1A3A6B/D4AF37?text=Rentrée+examens" },
    { id: 3, title: "Rentrée générale", date: "22 septembre 2025", description: "Début des cours pour toutes les autres classes (6ème, 5ème, 4ème, 2nde, 1ère).", image: "https://via.placeholder.com/400x200/1E7A5E/D4AF37?text=Rentrée+générale" },
    { id: 4, title: "Journée portes ouvertes", date: "À venir", description: "Découvrez le LCET et ses infrastructures lors de notre journée portes ouvertes.", image: "https://via.placeholder.com/400x200/0F1A2C/D4AF37?text=Portes+ouvertes" },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="font-heading text-3xl font-bold text-[#0F1A2C] mb-4">📅 Événements</h1>
      <p className="text-gray-600 mb-8">Restez informé des prochains événements du LCET.</p>

      <div className="grid md:grid-cols-2 gap-6">
        {evenements.map((event) => (
          <div key={event.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <img src={event.image} alt={event.title} className="w-full h-40 object-cover" />
            <div className="p-6">
              <div className="flex justify-between items-start">
                <h3 className="font-heading text-xl font-bold text-[#0F1A2C]">{event.title}</h3>
                <span className="bg-[#D4AF37] text-[#0F1A2C] text-xs font-bold px-3 py-1 rounded-full">
                  {event.date}
                </span>
              </div>
              <p className="text-gray-600 mt-2">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EvenementsPage;
