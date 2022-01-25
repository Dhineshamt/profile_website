import './style/index.scss';
import {Header} from './components/Header';
import { Routing } from './Routing';
import { Footer } from './components/Footer';

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
