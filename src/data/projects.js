import nova_tech_project from '../assets/img/nova_tech_project.jpg';
import game_plus_project from '../assets/img/game_plus_project.jpg';
import hyper_estrenos_project from '../assets/img/hyper_estrenos_project.jpg';

const projects = [
  {
    id: 1,
    title: 'Nova Tech',
    description:
      'Creamos un eCommerce con el stack MERN, utilizando Axios para comunicación, Mongoose para la base de datos y JWT y Bcrypt para la seguridad.',
    imageSrc: nova_tech_project,
    techs: [
      {
        id: 1,
        title: 'MongoDB',
        colors:
          'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
      },
      {
        id: 2,
        title: 'Express',
        colors: 'bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-300',
      },
      {
        id: 3,
        title: 'React',
        colors: 'bg-sky-100 text-sky-800 dark:bg-sky-900 dark:text-sky-300',
      },
      {
        id: 4,
        title: 'Node',
        colors: 'bg-lime-100 text-lime-800 dark:bg-lime-900 dark:text-lime-300',
      },
    ],
    githubLink: 'https://github.com/ivaneconomo/Nova-Tech-frontend',
    websiteLink: 'https://nova-tech-technology.netlify.app',
  },
  {
    id: 2,
    title: 'Game Plus',
    description:
      'En este proyecto JavaScript, aplicamos Local Storage para operaciones CRUD y ampliamos nuestra experiencia en metodologías ágiles.',
    imageSrc: game_plus_project,
    techs: [
      {
        id: 1,
        title: 'HTML',
        colors:
          'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300',
      },
      {
        id: 2,
        title: 'CSS',
        colors: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
      },
      {
        id: 3,
        title: 'Bootstrap',
        colors:
          'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300',
      },
      {
        id: 4,
        title: 'JavaScript',
        colors:
          'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
      },
    ],
    githubLink: 'https://github.com/ivaneconomo/game-plus',
    websiteLink: 'https://game-plus.netlify.app',
  },
  {
    id: 3,
    title: 'Hyper Estrenos',
    description:
      'Mi primer desafío como desarrollador, teniendo en cuenta las buenas prácticas de la programación, y el diseño responsive.',
    imageSrc: hyper_estrenos_project,
    techs: [
      {
        id: 1,
        title: 'HTML',
        colors:
          'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300',
      },
      {
        id: 2,
        title: 'CSS',
        colors: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
      },
      {
        id: 3,
        title: 'Bootstrap',
        colors:
          'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300',
      },
    ],
    githubLink: 'https://github.com/ivaneconomo/hyper-estrenos',
    websiteLink: 'https://hyper-estrenos.netlify.app',
  },
];

export default projects;
