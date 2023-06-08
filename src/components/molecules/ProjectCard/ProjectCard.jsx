import { GitHubIcon, WebIcon } from '../../../assets/svg/icons';

const ProjectCard = () => {
  return (
    <article className='space-y-4 rounded border border-slate-50/30 bg-slate-50 pb-4 dark:border-slate-950/30 dark:bg-slate-950'>
      <div className='flex h-60 w-full items-end rounded-t bg-[url("../../../src/assets/img/hyper_estrenos_project.png")] bg-cover bg-top'>
        <div className='flex h-24 w-full items-end rounded-t bg-gradient-to-t from-slate-50 via-slate-50/80 dark:from-slate-950 dark:via-slate-950/80'>
          <h3 className='bg-gradient-to-r from-yellow-500 to-red-500 bg-clip-text px-4 text-xl font-extrabold text-transparent'>
            Hyper Estrenos
          </h3>
        </div>
      </div>

      <p className='px-4'>
        Mi primer desafío como desarrollador tuvo como objetivo aplicar nuestro
        conocimiento en HTML, CSS y Bootstrap5. Teniendo en cuenta las buenas
        prácticas de la programación, y el diseño responsive.
      </p>

      <div className='flex items-center space-x-4 px-4'>
        <a
          className='group flex space-x-2 text-gray-950/50 underline transition hover:text-gray-950 dark:text-gray-50/50 dark:hover:text-gray-50'
          href='https://github.com/ivaneconomo/hyper-estrenos'
          target='_blank'
          rel='noreferrer'
        >
          <GitHubIcon />
          <span>Repositorio</span>
        </a>
        <a
          className='group flex space-x-2 text-gray-950/50 underline transition hover:text-blue-500 dark:text-gray-50/50 dark:hover:text-blue-500'
          href='https://hyper-estrenos.netlify.app'
          target='_blank'
          rel='noreferrer'
        >
          <WebIcon />
          <span>Ir al sitio</span>
        </a>
      </div>
    </article>
  );
};

export default ProjectCard;
