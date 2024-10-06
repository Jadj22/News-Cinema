// Importation de Link depuis react-router-dom pour la navigation interne
import { Link } from "react-router-dom";
// Importation de React pour pouvoir utiliser les composants
import React from 'react';
// Importation d'image backup pour les films sans image
import Backup from '../assets/images/backup.jpg'

// Déclaration du composant fonctionnel Card qui prend les props 'movie'
const Card = ({ movie }) => {
  // Destructuration des propriétés de 'movie' pour obtenir id, original_title, overview, et poster_path
  const { id, original_title, overview, poster_path } = movie;
// Construction de l'URL complète de l'image en utilisant le chemin de l'image (poster_path) fourni par l'API TMDB avec une condition de verification d'existance
const image = poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}`: Backup;

  return (
    // Conteneur principal de la carte avec des classes Tailwind pour le style
    <div className=" max-sm: max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 m-3">
      
      {/* Utilisation de Link pour naviguer vers la page du film via son id */}
      <Link to={`/movie/${id}`}>
        {/* Affichage de l'image du film (poster) */}
        <img className="rounded-t-lg" src={image} alt="Movie poster" />
      </Link>
      
      {/* Contenu texte de la carte, incluant le titre et la description */}
      <div className="p-5">
        {/* Le titre du film avec un lien vers sa page */}
        <Link to={`/movie/${id}`}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{original_title}</h5>
        </Link>
        {/* Affichage de la description (overview) du film */}
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{overview}</p>
      </div>
    </div>
  );
};

// Exportation du composant Card pour être utilisé dans d'autres parties de l'application
export default Card;
