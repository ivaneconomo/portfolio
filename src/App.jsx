import AppViewport from './components/AppViewport/AppViewport';
import Banner from './components/Banner/Banner';
import Navbar from './components/Navbar/Navbar';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <>
      <ThemeProvider>
        <header className='sticky top-0 select-none bg-slate-50/70 py-5 backdrop-blur dark:bg-slate-950/70'>
          <Navbar />
        </header>
      </ThemeProvider>
      <main className='min-h-screen bg-slate-200 text-gray-950 dark:bg-slate-900 dark:text-gray-50'>
        <AppViewport />
        <Banner />
        <section className='container space-y-3'>
          <h2 className='text-xl font-bold text-gray-950/50 dark:text-gray-50/50'>
            Formación como desarrollador
          </h2>
          <p className='text-gray-950 dark:text-gray-50'>
            Completé un bootcamp intensivo en desarrollo web (2022-2023).
            Durante el programa, participé en tres proyectos utilizando
            tecnologías como{' '}
            <span className='font-semibold text-orange-500'>HTML</span>,{' '}
            <span className='font-semibold text-blue-500'>CSS</span>,{' '}
            <span className='font-semibold text-yellow-500'>JavaScript</span> y
            el stack{' '}
            <span className='bg-gradient-to-r from-sky-500 via-purple-500 to-green-500 bg-clip-text font-bold text-transparent'>
              MERN
            </span>
            . Además, adquirí experiencia en metodologías ágiles como Scrum y
            desarrollé habilidades de trabajo en equipo. Estos proyectos me
            permitieron aplicar de manera efectiva mis conocimientos y
            habilidades adquiridas en un entorno práctico.
          </p>
        </section>
      </main>
      <footer className='h-24 bg-slate-50 text-gray-950 dark:bg-slate-950 dark:text-gray-50'>
        Copyright Portfolio
      </footer>
    </>
  );
}

export default App;
