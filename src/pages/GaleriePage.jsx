const GaleriePage = () => {
  const photos = [
    { id: 1, title: "Cour de l'école", description: "Vue de la cour principale du LCET", image: "/images/galerie/ecole-1.jpg" },
    { id: 2, title: "Salle de classe", description: "Salle de classe moderne et équipée", image: "/images/galerie/salle-classe.jpg" },
    { id: 3, title: "Bibliothèque", description: "Espace de lecture et de recherche", image: "/images/galerie/bibliotheque.jpg" },
    { id: 4, title: "Internat", description: "Bâtiment de l'internat", image: "/images/galerie/internat.jpg" },
    { id: 5, title: "Cérémonie de remise de prix", description: "Remise des prix aux meilleurs élèves", image: "/images/galerie/remise-prix.jpg" },
    { id: 6, title: "Vie scolaire", description: "Élèves dans la cour", image: "/images/galerie/vie-scolaire.jpg" },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="font-heading text-3xl font-bold text-[#0F1A2C] mb-4">📸 Galerie</h1>
      <p className="text-gray-600 mb-8">Découvrez la vie du Lycée-College Évangélique du Tchad en images.</p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {photos.map((photo) => (
          <div key={photo.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <img 
              src={photo.image} 
              alt={photo.title} 
              className="w-full h-48 object-cover"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/400x300/0F1A2C/D4AF37?text=Photo+LCET';
              }}
            />
            <div className="p-4">
              <h3 className="font-heading text-lg font-bold text-[#0F1A2C]">{photo.title}</h3>
              <p className="text-gray-600 text-sm mt-1">{photo.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GaleriePage;