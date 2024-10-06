// Importation du composant Card depuis le dossier components
import { Card } from "../components/index";
// Importation du hook personnalisé useFetch pour effectuer des requêtes API
import useFetch from "../hooks/useFetch";

// Déclaration du composant fonctionnel MovieList
const MovieList = ({apiPath}) => {
  
  // Utilisation du hook useFetch pour récupérer les films actuellement à l'affiche depuis l'API TMDB
  const { data: movies } = useFetch(apiPath);

  return (
    // Élément principal de la page
    <main>
      {/* Section contenant la liste des films avec des classes Tailwind pour le style */}
      <section className="max-w-7xl mx-auto py-7">
        {/* Conteneur flex pour centrer les cartes des films et les disposer en colonnes */}
        <div className="flex justify-center flex-wrap">
          {/* Boucle sur le tableau de films pour rendre un composant Card pour chaque film */}
          {movies.map((movie) => (
            // Utilisation de la clé unique 'id' pour chaque carte de film
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
};

// Exportation du composant MovieList pour être utilisé dans d'autres parties de l'application
export default MovieList;
