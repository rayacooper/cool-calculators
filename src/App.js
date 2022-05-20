
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AppRoutes from './AppRoutes';
import Navbar from './Components/Navbar/Navbar';
import Calculator from './Components/Calculator/Calculator';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        {AppRoutes}
      </div>
    </Router>
    
  );
}

export default App;
