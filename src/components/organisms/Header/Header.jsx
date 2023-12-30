import NavMenu from '../../molecules/NavMenu/NavMenu';
import BarsMenu from '../../molecules/BarsMenu/BarsMenu';

const Header = () => {
  return (
    <header className='select-none bg-slate-50/70 py-5 backdrop-blur dark:bg-slate-950/70'>
      <NavMenu />
      <BarsMenu />
    </header>
  );
};

export default Header;
