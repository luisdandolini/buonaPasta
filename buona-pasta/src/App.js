import './App.css';
import Navbar from './Navbar';
import Slideshow from './Slideshow';
import Menu from './Menu';
import Footer from './Footer';
import './global.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Slideshow />
      <Menu />
      <Footer />
    </div>
  );
}

export default App;
