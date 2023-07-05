import SocialNav from '../../molecules/SocialNav/SocialNav';

const Banner = () => {
  return (
    <section className='container'>
      <div className='flex flex-col items-center justify-center rounded bg-slate-50/80 py-4 shadow dark:bg-slate-950/80 xs:py-8 md:py-12'>
        <div>
          <h1 className='lg:tet-8xl mb-2 bg-gradient-to-r from-pistachio-500 to-cyan-500 bg-clip-text text-4xl font-bold text-transparent xs:text-5xl sm:text-6xl md:mb-2 md:text-7xl'>
            Iván Ecónomo
          </h1>
          <h2 className='lg:tet-5xl mb-6 text-xl font-light xs:text-2xl sm:text-3xl md:mb-10 md:text-4xl'>
            Desarrollador web fullstack
          </h2>
          <SocialNav />
        </div>
      </div>
    </section>
  );
};

export default Banner;
