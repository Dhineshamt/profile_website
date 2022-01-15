import logo from './logo.svg';
import './App.css';
import {Header} from './components/Header';
import { Routing } from './Routing';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Routing />
      <Footer />
    </div>
  );
}

export default App;
