
import { Link } from 'react-router-dom'
import Backup from '../assets/images/backup.jpg'
import {Button} from "../components";
import { useEffect } from 'react';
const PageNotFound = () => {

  useEffect(() => {
    document.title = 'Page Not Found / News cinema'
  });

  return (
    <main>
        <section className="flex flex-col justify-center px-2">
          <div className="flex flex-col items-center my-4">
            <p className='text-4xl text-gray-700 font-bold my-10 dark:text-white'>404, Oops !</p>
            <div className='max-w-lg'>
              <img  className=" rounded " src={Backup} alt="404 Page not found" />
            </div>
          </div>
          <div className='flex justify-center my-4'>
            <Link to="/">
              <Button>Retourner a la page d'accueil</Button>
            </Link>
          </div>
        </section>
    </main>
  )
}

export default PageNotFound
