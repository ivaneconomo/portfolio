import Banner from './Banner/Banner';
import TrainingAsDev from './TrainingAsDev/TrainingAsDev';
import Projects from './Projects/Projects';

const Main = () => {
  return (
    <main className='min-h-screen bg-slate-200 text-gray-950 dark:bg-slate-900 dark:text-gray-50'>
      <Banner />
      <TrainingAsDev />
      <Projects />
    </main>
  );
};

export default Main;
