import { ThemeSunIcon, ThemeMoonIcon } from '../../assets/svg/icons';
import { useTheme } from '../../hooks/useTheme';

const ToggleTheme = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <label
      htmlFor='dark-toggle'
      className='ml-auto flex w-fit cursor-pointer md:m-0'
    >
      <div className='relative'>
        <input
          type='checkbox'
          name='dark-mode'
          id='dark-toggle'
          className='sr-only'
          checked={isDark}
          onChange={toggleTheme}
        />
        <div className='block h-6 w-10 rounded-full border border-gray-950 dark:border-gray-50'></div>
        <div
          className={`absolute left-1 top-1 h-4 w-4 rounded-full bg-gray-900 p-0.5 transition dark:bg-gray-100 ${
            isDark ? 'translate-x-full' : 'translate-x-0'
          }`}
        >
          {isDark ? <ThemeSunIcon /> : <ThemeMoonIcon />}
        </div>
      </div>
    </label>
  );
};

export default ToggleTheme;
