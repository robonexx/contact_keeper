import './App.scss';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/layout/navbar/Navbar';
import { RiContactsBook2Line } from 'react-icons/ri'
import Home from './pages/home/Home';
import About from './pages/about/About';

function App() {
  return (
    <BrowserRouter>
    <>
      <Navbar icon={<RiContactsBook2Line />}/>
      <div className='container'>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/about' element={<About />}/>
          </Routes>
      </div>

    </>
    </BrowserRouter>
  );
}

export default App;
