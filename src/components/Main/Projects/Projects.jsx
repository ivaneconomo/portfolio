import { GitHubIcon, WebIcon } from '../../../assets/svg/icons';

const Projects = () => {
  return (
    <section className='container my-12 space-y-4'>
      <h2 className='text-xl font-bold text-gray-950/50 dark:text-gray-50/50'>
        Proyectos en los que participé
      </h2>

      <article className='space-y-4 rounded border border-slate-50/30 bg-slate-50 pb-4 dark:border-slate-950/30 dark:bg-slate-950'>
        <div className='flex h-60 w-full items-end rounded-t bg-[url("../../../src/assets/img/hyper_estrenos_project.png")] bg-cover bg-top'>
          <div className='flex h-36 w-full items-end rounded-t bg-gradient-to-t from-slate-50 via-slate-50/30 dark:from-slate-950 dark:via-slate-950/60'>
            <h3 className='container bg-gradient-to-r from-yellow-500 to-red-500 bg-clip-text text-xl font-extrabold text-transparent'>
              Hyper Estrenos
            </h3>
          </div>
        </div>

        <p className='container'>
          Mi primer desafío como desarrollador tuvo como objetivo aplicar
          nuestro conocimiento en HTML, CSS y Bootstrap5. Teniendo en cuenta las
          buenas prácticas de la programación, y el diseño responsive.
        </p>

        <div className='container flex items-center space-x-4'>
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
