import Banner from './components/Banner/Banner';
import Navbar from './components/Navbar/Navbar';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <>
      <ThemeProvider>
        <Navbar />
      </ThemeProvider>
      <main className='min-h-screen bg-slate-200 text-gray-950 dark:bg-slate-900 dark:text-gray-50 space-y-5 p-4'>
        <Banner />
        <h1 className='m-0 text-5xl'>Main Content</h1>
        <p className='text-base textgray-950 dark:text-gray-50'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae ab
          consequatur hic sit soluta blanditiis eius. Explicabo consectetur
          itaque ipsa quia optio, hic totam eaque, dolore deleniti rem natus
          aliquid.
        </p>
        <p className='text-base text-gray-950 dark:text-gray-50'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae ab
          consequatur hic sit soluta blanditiis eius. Explicabo consectetur
          itaque ipsa quia optio, hic totam eaque, dolore deleniti rem natus
          aliquid.
        </p>
        <p className='text-base text-gray-950 dark:text-gray-50'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae ab
          consequatur hic sit soluta blanditiis eius. Explicabo consectetur
          itaque ipsa quia optio, hic totam eaque, dolore deleniti rem natus
          aliquid.
        </p>
        <p className='text-base text-gray-950 dark:text-gray-50'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae ab
          consequatur hic sit soluta blanditiis eius. Explicabo consectetur
          itaque ipsa quia optio, hic totam eaque, dolore deleniti rem natus
          aliquid.
        </p>
        <p className='text-base text-gray-950 dark:text-gray-50'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae ab
          consequatur hic sit soluta blanditiis eius. Explicabo consectetur
          itaque ipsa quia optio, hic totam eaque, dolore deleniti rem natus
          aliquid.
        </p>
        <p className='text-base text-gray-950 dark:text-gray-50'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae ab
          consequatur hic sit soluta blanditiis eius. Explicabo consectetur
          itaque ipsa quia optio, hic totam eaque, dolore deleniti rem natus
          aliquid.
        </p>
        <p className='text-base text-gray-950 dark:text-gray-50'>
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
