import ProjectCard from '../../molecules/ProjectCard/ProjectCard';
import projects from '../../../data/projects.js';

const Projects = () => {
  return (
    <section className='container space-y-8'>
      <h2 className='text-2xl font-bold text-gray-950/60 dark:text-gray-50/60'>
        Proyectos en los que participé
      </h2>
      <div className=''>
        <div className='space-y-8 md:grid md:grid-cols-3 md:items-stretch md:gap-4 md:space-y-0'>
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
