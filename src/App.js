import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './Pages/NavBar/NavBar';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        {/* <Route path='/about' element={<NavBar/>}/> */}
      </Routes>
    </div>
  );
}

export default App;
