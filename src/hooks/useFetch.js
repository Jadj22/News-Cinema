// Importation des hooks useEffect et useState depuis React
import { useEffect, useState } from 'react';

// Déclaration du hook personnalisé useFetch qui prend une URL comme paramètre
const useFetch = (apiPath) => {

    // État pour stocker les données récupérées, initialisé à un tableau vide
    const [data, setData] = useState([]);
    // constante pour stoker le url
    const url = `https://api.themoviedb.org/3/${apiPath}?api_key=108e9688c1079bdf9b3d59a25b17aa54`

    // Utilisation de useEffect pour exécuter du code lors du montage du composant ou lors du changement de l'URL
    useEffect(() => {
        // Fonction asynchrone pour récupérer les films
        const fetchMovies = async () => {
            try {
                // Envoi d'une requête fetch à l'URL fournie
                const response = await fetch(url);
                // Conversion de la réponse en format JSON
                const json = await response.json();
                // Mise à jour de l'état avec les résultats des films
                setData(json.results);
            } catch (error) {
                // Gestion des erreurs lors de la récupération des données
                console.log(error);
            }
        };

        // Appel de la fonction pour récupérer les films
        fetchMovies();
    }, [url]); // Le tableau de dépendances, déclenche l'effet lorsque 'url' change

    // Retourne les données récupérées sous forme d'objet
    return { data };
};

// Exportation du hook useFetch pour être utilisé dans d'autres composants
export default useFetch;
