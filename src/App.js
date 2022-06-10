import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutMe from './Pages/AboutMe/AboutMe';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home';
import NavBar from './Pages/NavBar/NavBar';
import Projects from './Pages/Projects/Projects';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<AboutMe/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;
