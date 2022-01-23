import logo from './logo.svg';
import './App.css';
import {Header} from './components/Header';
import { Routing } from './Routing';
import { Footer } from './components/Footer';
import { BrowserRouter } from 'react-router-dom';
import { Main } from './Main';

function App() {
  return (
    <div className="page-margin container">
      <Header/>
      <div className='page-size'>
        <Routing /> 
      </div>
      <Footer/>
    </div>
  );
}

export default App;
