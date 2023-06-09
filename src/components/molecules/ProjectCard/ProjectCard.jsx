/* eslint-disable react/prop-types */
import { GitHubIcon, WebIcon } from '../../atoms/icons/icons';

const ProjectCard = ({
  title,
  imageSrc,
  description,
  githubLink,
  websiteLink,
}) => {
  return (
    <article className='flex flex-col justify-between gap-2 rounded bg-slate-50 pb-4 transition-all dark:border-slate-950/30 dark:bg-slate-950'>
      <div className='rounded-t md:relative'>
        <img className='rounded-t' src={imageSrc} alt={title} />

        <div className='bg-gradient-to-t from-slate-50 via-slate-50/80 dark:from-slate-950 dark:via-slate-950/80 md:absolute md:inset-0 md:bottom-0 md:top-auto md:flex md:h-24 md:items-end'>
          <h3 className='bg-gradient-to-r from-yellow-500 to-red-500 bg-clip-text px-4 py-4 text-2xl font-extrabold text-transparent'>
            {title}
          </h3>
        </div>
      </div>

      <p className='px-4'>{description}</p>

      <div className='flex items-center space-x-6 px-4'>
        <a
          className='group flex space-x-2 text-gray-950/50 underline transition hover:text-gray-950 dark:text-gray-50/50 dark:hover:text-gray-50'
          href={githubLink}
          target='_blank'
          rel='noreferrer'
        >
          Repositorio
        </a>
        <a
          className='group flex space-x-2 text-gray-950/50 underline transition hover:text-blue-500 dark:text-gray-50/50 dark:hover:text-blue-500'
          href={websiteLink}
          target='_blank'
          rel='noreferrer'
        >
          Ir al sitio
        </a>
      </div>
    </article>
  );
};

export default ProjectCard;
