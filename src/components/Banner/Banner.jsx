import {
  DownloadCVIcon,
  GitHubIcon,
  LinkedInIcon,
} from '../../assets/icons/icons';
import yo_reduced from '../../assets/img/yo_reduced.jpg';

const Banner = () => {
  return (
    <section className='flex items-center py-10 sm:justify-evenly'>
      <div className='flex flex-col'>
        <h1 className='text-2xl font-bold text-gray-950 dark:text-gray-50'>
          ¡Hola! Soy
          <span className='mb-2 mt-4 block bg-gradient-to-r from-sky-500 to-pistachio-500 bg-clip-text text-4xl font-bold text-transparent'>
            Iván Ecónomo
          </span>
        </h1>
        <h2 className='text-xl text-gray-950/80 dark:text-gray-50/80'>
          Desarrollador web fullstack
        </h2>

        <div className='mt-6 flex items-center space-x-5'>
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
      </div>

      <div
        style={{ width: '180px', height: '180px' }}
        className='hidden rounded-full bg-gradient-to-tr from-sky-500 to-pistachio-500 sm:flex shadow-2xl shadow-pistachio-500/50'
      >
        <img
          className='rounded-full border-4 border-transparent object-cover shadow-xl shadow-sky-400/50'
          src={yo_reduced}
          alt='Foto de Iván'
          style={{ width: '180px', height: '180px' }}
        />
      </div>
    </section>
  );
};

export default Banner;
