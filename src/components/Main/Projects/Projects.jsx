import { GitHubIcon, WebIcon } from '../../../assets/svg/icons';

const Projects = () => {
  return (
    <section className='container my-12 space-y-4'>
      <h2 className='text-xl font-bold text-gray-950/50 dark:text-gray-50/50'>
        Proyectos en los que participé
      </h2>

      <article className='space-y-4 rounded bg-slate-300 pb-4 dark:bg-slate-800 border-slate-500/50 border'>
        <div className='h-40 w-full rounded-t bg-[url("src/assets/img/hyper_estrenos_project.png")] bg-cover'>
          <div className='flex h-40 w-full items-end rounded-t bg-gradient-to-t from-slate-300 px-4'>
            <h3 className='bg-gradient-to-r from-yellow-500 to-red-500 bg-clip-text text-xl font-extrabold text-transparent backdrop-blur rounded'>
              Hyper Estrenos
            </h3>
          </div>
        </div>

        <p className='px-4'>
          Mi primer desafío como desarrollador tuvo como objetivo aplicar
          nuestro conocimiento en HTML, CSS y Bootstrap5. Teniendo en cuenta las
          buenas prácticas de la programación, y el diseño responsive.
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
    </section>
  );
};

export default Projects;
