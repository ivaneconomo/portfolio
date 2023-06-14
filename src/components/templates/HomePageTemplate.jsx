import Banner from '../organisms/Banner/Banner';
import Training from '../organisms/Training/Training';
import Projects from '../organisms/Projects/Projects';

const HomePageTemplate = () => {
  return (
    <div className='min-h-screen space-y-16 bg-slate-200 py-16 text-gray-950 dark:bg-slate-900 dark:text-gray-50'>
      <Banner />
      <Training />
      <Projects />
    </div>
  );
};

export default HomePageTemplate;
