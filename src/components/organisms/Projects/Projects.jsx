import ProjectCard from '../../molecules/ProjectCard/ProjectCard';
import projects from '../../../data/projects.js';

const Projects = () => {
  return (
    <section className='container space-y-8'>
      <h2 className='text-3xl text-gray-950 dark:text-gray-50'>
        Proyectos en los que participé
      </h2>
      <div>
        <div className='space-y-8'>
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
