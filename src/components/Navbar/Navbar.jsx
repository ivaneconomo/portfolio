import NavMenu from '../NavMenu/NavMenu';
import BarsMenu from '../BarsMenu/BarsMenu';

const Navbar = () => {
  return (
    <header className='sticky top-0 select-none bg-slate-50/70 p-4 backdrop-blur dark:bg-slate-950/70'>
      <div>
        <NavMenu />
      </div>
      <div className='md:hidden'>
        <BarsMenu />
      </div>
    </header>
  );
};

export default Navbar;
