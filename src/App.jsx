import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <>
      <ThemeProvider>
        <Header />
      </ThemeProvider>
      <Main />
      <Footer />
    </>
  );
}

export default App;
