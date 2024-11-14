import './App.css';
import {Routes,Route} from  'react-router-dom';
import Home from './pages/Home';
import Users from './pages/Users';
import AssignWork from './pages/AssignWork';


function App() {
  return (
  <div className={`App`}>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/work-assigned" element={<AssignWork/>}/>
      <Route path="/Users" element={<Users/>}/>
    </Routes>
  </div>
  );
}

export default App;
