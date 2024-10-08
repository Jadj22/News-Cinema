import { useSearchParams } from "react-router-dom";
import useFetch from "../hooks/useFetch"
import { Card } from "../components"
import useTitle from "../hooks/useTitle";


const Search = ({apiPath}) => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get('q');
  const { data: movies } = useFetch(apiPath, queryTerm);

  useTitle(`Resultat pour ${queryTerm}`);


  return (
    <main>
      <section className="py-7">
        <p className="text-3xl text-gray-700 dark:text-white">
          {/* Question : Et si la personne n'est pas connecte a internet devront nous lu afficher qu'il n'est
           pas possible de faire son recherche ou bien lui dire Aucun resultat trouvé pour son rechercher */}
          {Array.isArray(movies) && movies.length === 0 
            ? `Aucun résultat trouvé pour '${queryTerm}'` 
            : `Résultat pour '${queryTerm}'`}
          
        </p>
      </section>
          {/* Section contenant la liste des films avec des classes Tailwind pour le style */}
        <section className="max-w-7xl mx-auto py-7">
        {/* Conteneur flex pour centrer les cartes des films et les disposer en colonnes */}
        <div className="flex justify-center flex-wrap">
          {/* Boucle sur le tableau de films pour rendre un composant Card pour chaque film */}
          {Array.isArray(movies) && movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section> 
    </main>
  )
}

export default Search
