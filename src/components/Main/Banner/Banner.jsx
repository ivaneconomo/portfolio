import {
  DownloadCVIcon,
  GitHubIcon,
  LinkedInIcon,
} from '../../../assets/svg/icons';

const Banner = () => {
  return (
    <section className='container flex flex-col space-y-6'>
      <div>
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
      </div>

      <div className='flex items-center space-x-5'>
        <button className='flex items-center space-x-1 rounded bg-pistachio-500 px-2 py-0.5 transition hover:bg-pistachio-600 active:ring-1 dark:hover:bg-pistachio-300'>
          <DownloadCVIcon />
          <span className='text-gray-950'>Descargar CV</span>
        </button>

        <ul className='flex items-center space-x-5'>
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
