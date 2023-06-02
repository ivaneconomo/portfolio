import { useState } from 'react';
import { BarsMenuIcon } from '../../assets/icons/icons';
import ToggleTheme from '../ToggleTheme/ToggleTheme';

const BarsMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className='flex items-center justify-between'>
        <span className='font-bold text-gray-950 dark:text-gray-50'>
          IVANECO
        </span>
        <input
          type='checkbox'
          id='menu-toggle'
          className='hidden'
          checked={isOpen}
          onChange={toggleMenu}
        />
        <label htmlFor='menu-toggle'>
          <BarsMenuIcon />
        </label>
      </div>
      {isOpen && (
        <nav className='flex flex-col items-end justify-center'>
          <ul className='my-4 max-w-fit space-y-4 text-end text-gray-950 dark:text-gray-50'>
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
      )}
    </>
  );
};

export default BarsMenu;
