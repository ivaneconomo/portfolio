import ProjectCard from '../../molecules/ProjectCard/ProjectCard';

const Projects = () => {
  return (
    <section className='container space-y-4'>
      <h2 className='text-xl font-bold text-gray-950/50 dark:text-gray-50/50'>
        Proyectos en los que participé
      </h2>

      <ProjectCard />
    </section>
  );
};

export default Projects;
