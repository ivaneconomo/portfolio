import NavMenu from '../NavMenu/NavMenu';
import BarsMenu from '../BarsMenu/BarsMenu';

const Navbar = () => {
  return (
    <header className='sticky top-0 flex select-none justify-end bg-slate-50/70 p-4 backdrop-blur dark:bg-slate-950/70 md:block'>
      <div>
        <NavMenu />
      </div>
      <div className='ms-auto md:hidden'>
        <BarsMenu />
      </div>
    </header>
  );
};

export default Navbar;
