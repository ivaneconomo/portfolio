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
    <article className='flex flex-col space-y-4 rounded bg-slate-50 pb-4 transition-all dark:border-slate-950/30 dark:bg-slate-950'>
      <div className='relative rounded-t'>
        <img className='rounded-t' src={imageSrc} alt={title} />
        <div className='absolute inset-0 bottom-0 top-auto flex h-24 flex-col justify-end gap-2 bg-gradient-to-t from-slate-50 via-slate-50/80 dark:from-slate-950 dark:via-slate-950/80'>
          <h3 className='bg-gradient-to-r from-sky-500 to-pistachio-500 bg-clip-text px-4 text-2xl font-bold text-transparent'>
            {title}
          </h3>
          <span className='flex flex-wrap gap-1 px-4'>
            {techs.map((tech) => (
              <Badge key={tech.id} {...tech} />
            ))}
          </span>
        </div>
      </div>

      <div className='flex h-full flex-col justify-between space-y-4'>
        <p className='hidden px-4 lg:block'>{description}</p>

        <div className='space-x-4 px-4'>
          <a
            className='text-gray-950/50 underline transition hover:text-gray-950 dark:text-gray-50/50 dark:hover:text-gray-50'
            href={githubLink}
            target='_blank'
            rel='noreferrer'
          >
            Repositorio
          </a>
          <a
            className='text-gray-950/50 underline transition hover:text-blue-500 dark:text-gray-50/50 dark:hover:text-blue-500'
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
