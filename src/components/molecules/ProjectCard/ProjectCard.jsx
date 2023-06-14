/* eslint-disable react/prop-types */

import Badge from '../../atoms/Badge/Badge';

const ProjectCard = ({
  title,
  description,
  imageSrc,
  techs,
  githubLink,
  websiteLink,
}) => {
  return (
    <article className='flex flex-col rounded bg-slate-50 pb-4 shadow-sm dark:bg-slate-950 md:flex-row md:pb-0'>
      <div className='relative rounded-t md:rounded-l'>
        <div className='relative h-full'>
          <img
            className='h-full rounded-t object-cover md:rounded-l'
            src={imageSrc}
            alt={title}
          />
          <span className='botom-0 absolute inset-0 top-auto flex h-1/3 flex-col justify-end gap-2 bg-gradient-to-t from-slate-50 via-slate-50/70 dark:from-slate-950 dark:via-slate-950/70 md:left-auto md:right-0 md:h-full md:w-1/3 md:bg-gradient-to-l'></span>
        </div>
      </div>

      <div className='flex flex-col justify-center space-y-4 py-4'>
        <div className='space-y-4'>
          <h3 className='bg-gradient-to-r from-pistachio-500 to-cyan-500 bg-clip-text px-4 text-2xl font-bold text-transparent'>
            {title}
          </h3>
          <span className='flex flex-wrap gap-1 px-4'>
            {techs.map((tech) => (
              <Badge key={tech.id} {...tech} />
            ))}
          </span>
        </div>

        <p className='px-4 text-gray-950/70 dark:text-gray-50/70'>
          {description}
        </p>

        <div className='space-x-4 px-4'>
          <a
            className='text-gray-950/50 underline hover:text-gray-950 dark:text-gray-50/50 dark:hover:text-gray-50'
            href={githubLink}
            target='_blank'
            rel='noreferrer'
          >
            Repositorio
          </a>
          <a
            className='text-gray-950/50 underline hover:text-blue-500 dark:text-gray-50/50 dark:hover:text-blue-500'
            href={websiteLink}
            target='_blank'
            rel='noreferrer'
          >
            Ir al sitio
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
