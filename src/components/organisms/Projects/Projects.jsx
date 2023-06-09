import ProjectCard from '../../molecules/ProjectCard/ProjectCard';
import projects from '../../../data/projects.js';

const Projects = () => {
  return (
    <section className='container space-y-4'>
      <h2 className='text-xl font-bold text-gray-950/50 dark:text-gray-50/50'>
        Proyectos en los que participé
      </h2>
      <div className=''>
        <div className='space-y-8 lg:grid lg:grid-cols-3 lg:items-stretch lg:gap-6 lg:space-y-0'>
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
