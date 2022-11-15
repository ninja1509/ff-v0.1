// import logo from './logo.svg';
import './App.css';
// import NavBar from './component/Navbar';
import Dashboard from './screens/Dashboard'
import Explore from './screens/Explore'
import Login from './screens/Login'
import SignUp from './screens/SignUp';
import Profile from './screens/Profile';
// import logoMobile from './assets/logo-final-spiral.png';

import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      {/* <Dashboard /> */}
          <BrowserRouter>
                    
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/Explore" element={<Explore />} />
              <Route path="/Dashboards" element={<Dashboard />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />

            </Routes>
            
          </BrowserRouter>
    </div>
  );
}

export default App;
