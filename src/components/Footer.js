// Importation de FontAwesomeIcon et des icônes spécifiques
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="  shadow  dark:bg-gray-800">
      <div className=" w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024 <Link to="/" className="hover:underline">News cinema</Link>. Tous droits réservés.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0 sm:justify-start max-sm:justify-center">
          <li className="flex items-center">
            <a 
              href="https://www.linkedin.com" 
              className="hover:underline me-4 md:me-6 flex items-center" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} className="text-lg" />
              <span className="hidden sm:block ms-2">LinkedIn</span>
            </a>
          </li>
          <li className="flex items-center">
            <a 
              href="https://www.instagram.com" 
              className="hover:underline me-4 md:me-6 flex items-center" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} className="text-lg" />
              <span className="hidden sm:block ms-2">Instagram</span>
            </a>
          </li>
          <li className="flex items-center">
            <a 
              href="https://www.twitter.com" 
              className="hover:underline me-4 md:me-6 flex items-center" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} className="text-lg" />
              <span className="hidden sm:block ms-2">Twitter</span>
            </a>
          </li>
          <li className="flex items-center">
            <a 
              href="https://www.facebook.com" 
              className="hover:underline flex items-center" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} className="text-lg" />
              <span className="hidden sm:block ms-2">Facebook</span>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
