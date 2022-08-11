import './App.scss';
import Navbar from './components/layout/navbar/Navbar';
import { RiContactsBook2Line } from 'react-icons/ri'

function App() {
  return (
    <div className="App">
      <Navbar icon={<RiContactsBook2Line />}/>
    <h1>Clean repo</h1>
    </div>
  );
}

export default App;
