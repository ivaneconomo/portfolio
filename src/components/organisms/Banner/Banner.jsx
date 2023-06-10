import ButtonDownload from '../../atoms/ButtonDownload/ButtonDownload';
import { GitHubIcon, LinkedInIcon } from '../../atoms/icons/icons';

const Banner = () => {
  return (
    <section className='container flex flex-col space-y-6'>
      <div>
        <div className='space-y-2'>
          <span className='text-2xl font-bold text-gray-950 dark:text-gray-50 sm:text-3xl'>
            ¡Hola! Soy
          </span>
          <h1 className='bg-gradient-to-r from-sky-500 to-pistachio-500 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl'>
            Iván Ecónomo
          </h1>
          <h2 className='text-xl text-gray-950/80 dark:text-gray-50/80 sm:text-2xl'>
            Desarrollador web fullstack
          </h2>
        </div>
      </div>

      <div className='flex items-center space-x-5'>
        <ButtonDownload />
        <ul className='flex items-center space-x-5'>
          <li>
            <a
              href='https://www.linkedin.com/in/ivaneconomo/'
              target='_blank'
              rel='noreferrer'
            >
              <LinkedInIcon />
            </a>
          </li>
          <li>
            <a
              href='https://github.com/ivaneconomo/'
              target='_blank'
              rel='noreferrer'
            >
              <GitHubIcon />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Banner;
