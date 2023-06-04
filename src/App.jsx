import AppViewport from './components/AppViewport/AppViewport';
import Banner from './components/Banner/Banner';
import Navbar from './components/Navbar/Navbar';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <>
      <ThemeProvider>
        <header className='sm:px-16 sticky top-0 select-none bg-slate-50/70 p-4 backdrop-blur dark:bg-slate-950/70'>
          <Navbar />
        </header>
      </ThemeProvider>
      <main className='sm:px-16 min-h-screen bg-slate-200 px-4 text-gray-950 dark:bg-slate-900 dark:text-gray-50'>
        <AppViewport />
        <Banner />
        <h1 className=''>Main Content</h1>
        <p className='text-gray-950 dark:text-gray-50'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae ab
          consequatur hic sit soluta blanditiis eius. Explicabo consectetur
          itaque ipsa quia optio, hic totam eaque, dolore deleniti rem natus
          aliquid.
        </p>
      </main>
      <footer className='h-24 bg-slate-50 text-gray-950 dark:bg-slate-950 dark:text-gray-50'>
        Copyright Portfolio
      </footer>
    </>
  );
}

export default App;
