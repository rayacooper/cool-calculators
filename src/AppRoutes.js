import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Calculator from './Components/Calculator/Calculator';

    const AppRoutes = 
    <Routes>

        <Route element={<Calculator />} path="/" />

    </Routes>


export default AppRoutes;