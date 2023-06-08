import ToggleTheme from '../../atoms/ToggleTheme/ToggleTheme';

const NavMenu = () => {
  return (
    <nav className='container hidden justify-between md:flex'>
      <span className='font-bold text-gray-950 dark:text-gray-50'>IVANECO</span>
      <ul className='flex space-x-5 text-gray-950 dark:text-gray-50'>
        <li className='transition hover:text-gray-600 dark:hover:text-gray-400'>
          <a href='/#'>Formación</a>
        </li>
        <li className='transition hover:text-gray-600 dark:hover:text-gray-400'>
          <a href='/#'>Proyectos</a>
        </li>
        <li className='transition hover:text-gray-600 dark:hover:text-gray-400'>
          <a href='/#'>Tecnologías</a>
        </li>
      </ul>
      <ToggleTheme />
    </nav>
  );
};

export default NavMenu;
