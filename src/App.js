import './App.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import HowItWorks from './components/HowItWorks/HowItWorks';
import About from './components/About/About';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <HowItWorks />
      <About />
      <Footer />
    </div>
  );
}

export default App;
