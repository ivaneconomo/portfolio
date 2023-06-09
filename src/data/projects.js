import hyper_estrenos_project from '../assets/img/hyper_estrenos_project.png';
import game_plus_project from '../assets/img/game_plus_project.png';
import nova_tech_project from '../assets/img/nova_tech_project.png';

const projects = [
  {
    id: 1,
    title: 'Hyper Estrenos',
    imageSrc: hyper_estrenos_project,
    description:
      'Mi primer desafío como desarrollador tuvo como objetivo aplicar nuestro conocimiento en HTML, CSS y Bootstrap5. Teniendo en cuenta las buenas prácticas de la programación, y el diseño responsive.',
    githubLink: 'https://github.com/ivaneconomo/hyper-estrenos',
    websiteLink: 'https://hyper-estrenos.netlify.app',
  },
  {
    id: 2,
    title: 'Game Plus',
    imageSrc: game_plus_project,
    description:
      'En éste segundo proyecto implementamos JavaScript. Aplicamos lo aprendido sobre Local Storage y operaciones CRUD. Además seguimos ampliando la experiencia en metodologías ágiles, y el trabajo en equipo.',
    githubLink: 'https://github.com/ivaneconomo/game-plus',
    websiteLink: 'https://game-plus.netlify.app',
  },
  {
    id: 3,
    title: 'Nova Tech',
    imageSrc: nova_tech_project,
    description:
      'Como proyecto final, diseñamos y producimos un eCommerce. En esta última etapa aplicamos todo lo que aprendimos sobre el Stack MERN, además de las herramientas complementarias.',
    githubLink: 'https://github.com/ivaneconomo/Nova-Tech-frontend',
    websiteLink: 'https://nova-tech-technology.netlify.app',
  },
];

export default projects;
