import {
  DownloadCVIcon,
  GitHubIcon,
  LinkedInIcon,
} from '../../assets/icons/icons';
import yo_reduced from '../../assets/img/yo_reduced.jpg';

const Banner = () => {
  return (
    <section className='flex flex-col space-y-6 py-12'>
      <div className='flex justify-between'>
        <div className='space-y-2'>
          <span className='text-2xl font-bold text-gray-950 dark:text-gray-50'>
            ¡Hola! Soy
          </span>
          <h1 className='bg-gradient-to-r from-sky-500 to-pistachio-500 bg-clip-text text-4xl font-bold text-transparent'>
            Iván Ecónomo
          </h1>
          <h2 className='text-xl text-gray-950/80 dark:text-gray-50/80'>
            Desarrollador web fullstack
          </h2>
        </div>
        <div
          style={{ width: '115px', height: '115px' }}
          className='hidden rounded-full bg-gradient-to-tr from-sky-500 to-pistachio-500 p-0 shadow-xl shadow-pistachio-500/50 dark:shadow-pistachio-500/30 xsm:flex'
        >
          <img
            className='rounded-full border-4 border-transparent object-cover shadow-lg shadow-sky-400/50 dark:shadow-sky-400/30'
            src={yo_reduced}
            alt='Foto de Iván'
            style={{ width: '115px', height: '115px' }}
          />
        </div>
      </div>

      <div className='flex items-center space-x-5'>
        <button className='flex items-center space-x-1 rounded bg-pistachio-500 px-2 py-0.5 transition hover:bg-pistachio-600 active:ring-1 dark:hover:bg-pistachio-400'>
          <DownloadCVIcon />
          <span className='text-gray-950'>Descargar CV</span>
        </button>

        <ul className='flex space-x-5'>
          <li>
            <a href='/#'>
              <LinkedInIcon />
            </a>
          </li>
          <li>
            <a href='/#'>
              <GitHubIcon />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Banner;
