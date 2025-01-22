
import { Routes , Route} from 'react-router-dom';
import './App.css';
import './components/Navbar'
import Navbar from './components/Navbar';
import {About,Contact,Services,Home} from './components/Pages';

function App() {
  return (
   <div className='App'>
    <Navbar></Navbar>
    <Routes>
    <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/services' element={<Services/>}/>
    </Routes>
   </div>
  );
}

export default App;
