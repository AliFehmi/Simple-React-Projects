import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import BasketPage from './BasketPage';
import Signup from './Signup';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/basket' element={<BasketPage/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/login' element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
