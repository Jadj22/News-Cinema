// MovieDetail.js
import { useParams } from "react-router-dom";

import Backup from '../assets/images/backup.jpg';
import useTitle from "../hooks/useTitle";
import useFetch from "../hooks/useFetch";

import Loading from '../assets/images/loading.gif'

const MovieDetail = () => {
  const params = useParams();

  // Utilisation du hook useFetch pour récupérer les détails du film
  const { data: movie, loading, error } = useFetch(`movie/${params.id}`);

  useTitle(movie ? movie.title : "Détails du Film");

  const image = movie && movie.poster_path 
    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
    : Backup;

  if (loading) {
    return (
      <main>
        <div className="flex justify-center items-center h-screen">
          {/* <p className="text-2xl">Chargement des détails du film...</p> */}
          <img src={Loading} className="w-10 max-sm:w-5"  alt="chargement" />
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main>
        <div className="flex flex-col items-center text-center">
          <img src={Backup} className="w-40 rounded-lg" alt="Erreur" />
          <h1 className="text-2xl pt-9 max-lg:text-xl font-semibold">Erreur</h1>
          <p className="text-2xl text-gray-500 pt-2 max-lg:text-sm">
            {error}. Veuillez réessayer plus tard.
          </p>
        </div>
      </main>
    );
  }

  return (
<main>
  <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-5">
    {/* Image du film */}
    <div className="col-span-1 sm:col-span-2 md:col-span-1 lg:col-span-1 max-w-sm mx-auto">
      <img className="rounded" src={image} alt={movie.title} />
    </div>

    {/* Détails du film */}
    <div className="col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-3 text-gray-700 text-lg dark:text-gray-200">
      <h1 className="text-4xl font-bold my-3 text-center sm:text-left">{movie.title}</h1>
      <p className="my-4 text-center sm:text-left">{movie.overview}</p>

      {/* Genres du film */}
      {movie.genres && (
        <p className="my-7 flex flex-wrap justify-center sm:justify-start gap-2">
          {movie.genres.map((genre) => (
            <span key={genre.id} className="mr-2 border border-gray-200 rounded dark:border-gray-600 p-2">
              {genre.name}
            </span>
          ))}
        </p>
      )}

      {/* Évaluation */}
      <div className="flex items-center justify-center sm:justify-start">
        <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <title>Rating star</title>
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.96a1 1 0 00.95.69h4.168c.969 0 1.371 1.24.588 1.81l-3.368 2.448a1 1 0 00-.364 1.118l1.286 3.96c.3.921-.755 1.688-1.54 1.118L10 13.347l-3.368 2.448c-.784.57-1.838-.197-1.539-1.118l1.286-3.96a1 1 0 00-.364-1.118L2.98 9.387c-.783-.57-.38-1.81.588-1.81h4.168a1 1 0 00.95-.69l1.286-3.96z" />
        </svg>
        <p className="ml-2 text-gray-900 dark:text-white">{movie.vote_average}</p>
        <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
        <span className="text-gray-900 dark:text-white">{movie.vote_count} avis</span>
      </div>

      {/* Détails supplémentaires */}
      <div className="text-center sm:text-left">
        <p className="m-4">
          <span className="mr-2 font-bold">Durée :</span>
          <span>{movie.runtime} min</span>
        </p>
        <p className="m-4">
          <span className="mr-2 font-bold">Budget :</span>
          <span>{movie.budget.toLocaleString()} $</span>
        </p>
        <p className="m-4">
          <span className="mr-2 font-bold">Recettes :</span>
          <span>{movie.revenue.toLocaleString()} $</span>
        </p>
        <p className="m-4">
          <span className="mr-2 font-bold">Date de sortie :</span>
          <span>{new Date(movie.release_date).toLocaleDateString('fr-FR')}</span>
        </p>
        <p className="m-4">
          <span className="mr-2 font-bold">Code IMDB :</span>
          <a href={`https://www.imdb.com/title/${movie.imdb_id}`} target="_blank" rel="noreferrer" className="text-blue-500 underline">
            {movie.imdb_id}
          </a>
        </p>
      </div>
    </div>
  </section>
</main>


  );
}

export default MovieDetail;
