import { useState } from 'react';
import { ToggleBars } from '../../assets/icons/icons';
import ToggleTheme from '../ToggleTheme/ToggleTheme';

const BarsMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='flex flex-col items-end'>
      <input
        type='checkbox'
        id='menu-toggle'
        className='hidden'
        checked={isOpen}
        onChange={toggleMenu}
      />
      <label htmlFor='menu-toggle'>
        <ToggleBars />
      </label>
      {isOpen && (
        <div>
          <ul className='my-4 max-w-fit space-y-4 text-end text-gray-950 transition dark:text-gray-50'>
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
      )}
    </div>
  );
};

export default BarsMenu;
