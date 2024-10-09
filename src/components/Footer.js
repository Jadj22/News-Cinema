// Importation de FontAwesomeIcon et des icônes spécifiques
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faWhatsapp, faFacebook } from '@fortawesome/free-brands-svg-icons';
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
              href="https://www.linkedin.com/in/jadj-adjanke-ba79b2312?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
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
              href="https://www.instagram.com/jadjdev2/" 
              className="hover:underline me-4 md:me-6 flex items-center" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} className="text-lg" />
              <span className="hidden sm:block ms-2">Instagram</span>
            </a>
          </li>
          <li className="flex items-center me-4 md:me-6">
            <a 
              href="https://wa.me/+22870565073" 
              className="hover:underline flex items-center" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faWhatsapp} className="text-lg" />
              <span className="hidden sm:block ms-2">WhatsApp</span>
            </a>
          </li>
          <li className="flex items-center">
            <a 
              href="https://web.facebook.com/joel.adjanke.3/" 
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
