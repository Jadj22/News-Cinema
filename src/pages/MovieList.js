// MovieList.js
import { Card, Button } from "../components";
import useFetch from "../hooks/useFetch";
import useTitle from "../hooks/useTitle";
import Loading from '../assets/images/loading.gif'


// Déclaration du composant fonctionnel MovieList
const MovieList = ({ apiPath, title }) => {
  // Utilisation du hook useFetch avec initialData comme tableau vide
  const { data: movies, loading, error } = useFetch(apiPath, {}, []);

  // Définition du titre de la page
  useTitle(title);

  // Fonction pour recharger la page
  const handleReload = () => {
    window.location.reload();
  };

  // Détermination du contenu à afficher en fonction des états de chargement et d'erreur
  let contenu;

  if (loading) {
    contenu = (
      <div className="flex justify-center items-center h-screen">
        {/* <p className="text-2xl dark:text-white">Chargement des films...</p> */}
        <img src={Loading} className="w-10 max-sm:w-5" alt="" />
      </div>
    );
  } else if (error) {
    contenu = (
      <div className="flex flex-col items-center text-center">
        {/* Vous pouvez décommenter et utiliser une image de sauvegarde si nécessaire */}
        {/* <img src={Backup} className="w-40 rounded-lg" alt="Pas d'internet" /> */}
        <h1 className="text-2xl pt-9 max-lg:text-xl font-semibold dark:text-white">
          Aucune connexion Internet
        </h1>
        <p className="text-2xl text-gray-500 pt-2 max-lg:text-sm dark:text-gray-500">
          Impossible de charger cette page. Veuillez vérifier votre connexion et réessayer.
        </p>
        <Button onClick={handleReload} className="mt-4">
          Recharger la page
        </Button>
      </div>
    );
  } else {
    contenu = (
      /* Section contenant la liste des films avec des classes Tailwind pour le style */
      <section className="max-w-7xl mx-auto py-7">
        {/* Conteneur flex pour centrer les cartes des films et les disposer en colonnes */}
        <div className="flex justify-start flex-wrap mobile:justify-evenly">
          {/* Vérification si movies est un tableau et contient des éléments */}
          {Array.isArray(movies) && movies.length > 0 ? (
            movies.map((movie) => (
              // Utilisation de la clé unique 'id' pour chaque carte de film
              <Card key={movie.id} movie={movie} />
            ))
          ) : (
            <p className="text-center w-full text-gray-500">Aucun film trouvé.</p>
          )}
        </div>
      </section>
    );
  }

  return (
    // Élément principal de la page
    <main>
      {contenu}
    </main>
  );
};

// Exportation du composant MovieList pour être utilisé dans d'autres parties de l'application
export default MovieList;
