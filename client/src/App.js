import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter as Router,Routes,Route}  from "react-router-dom"
import {ToastContainer} from "react-toastify"
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Product from './pages/Product';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <Router>
      <ToastContainer/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/Product' element={<Product/>} />

      </Routes>
    </Router>
  );
}

export default App;
