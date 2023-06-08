import Footer from './components/organisms/Footer/Footer';
import Header from './components/organisms/Header/Header';
import HomePage from './components/pages/HomePage';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <>
      <ThemeProvider>
        <Header />
      </ThemeProvider>
      <HomePage />
      <Footer />
    </>
  );
}

export default App;
