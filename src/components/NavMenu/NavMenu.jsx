import ToggleTheme from '../ToggleTheme/ToggleTheme';

const NavMenu = () => {
  return (
    <div className='hidden md:flex md:justify-between items-center'>
      <div>
        <strong className='text-gray-950 dark:text-gray-50'>IVANECO</strong>
      </div>
      <ul className='flex space-x-5 text-gray-950 transition dark:text-gray-50'>
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
    </div>
  );
};

export default NavMenu;
