import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Addstudent from './Components/Addstudent';
import Viewstudent from './Components/Viewstudent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Searchstudent from './Components/Searchstudent';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Addstudent/>}/>
        <Route path="/view" exact element={<Viewstudent/>}/>
        <Route path="/search" exact element={<Searchstudent/>}/>
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
