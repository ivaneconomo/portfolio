import NavMenu from '../NavMenu/NavMenu';
import BarsMenu from '../BarsMenu/BarsMenu';

const Navbar = () => {
  return (
    <>
      <div>
        <NavMenu />
      </div>
      <div className='md:hidden'>
        <BarsMenu />
      </div>
    </>
  );
};

export default Navbar;
