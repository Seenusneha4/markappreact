import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Addstudent from './Components/Addstudent';
import Viewstudent from './Components/Viewstudent';

function App() {
  return (
    <div>
      <Addstudent/>
      <Viewstudent/>
    </div>
  );
}

export default App;
