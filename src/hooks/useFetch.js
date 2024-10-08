// hooks/useFetch.js
import { useEffect, useState } from 'react';

// Ajout d'un paramètre initialData avec une valeur par défaut de null
const useFetch = (apiPath, queryTerm="") => {
  const [data, setData] = useState([]); // Utilisation de initialData
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Construction dynamique des paramètres de requête
  // const queryString = new URLSearchParams({
  //   api_key: process.env.REACT_APP_API_KEY,
  //   language: 'fr-FR', // Assure que les données sont en français
  //   ...queryParams
  // }).toString();

  const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${process.env.REACT_APP_API_KEY}&query=${queryTerm}&include_adult=false&language=fr`;


  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Erreur HTTP: ${response.status}`);
        }
        const json = await response.json();
        setData(json.results || json); // Supporte les listes et les détails
      } catch (err) {
        console.error("Erreur lors de la récupération des données:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
