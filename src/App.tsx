import {Route, Routes} from 'react-router-dom';
import Home from './components/Home/Home.tsx';
import Services from './components/Services/Services.tsx';
import Contact from './components/Contact/Contact.tsx';
import ServicePage from './components/Services/ServicePage/ServicePage.tsx';
import Register from './components/Register/Register.tsx';
import Login from './components/Login/Login.tsx';
import Reservation from './components/Reservation/Reservation.tsx';
import About from './components/About/About.tsx';

function App() {

  return (
    <Routes>
      <Route path={'/'} element={<Home/>}></Route>
      <Route path={'/services'} element={<Services/>}></Route>
      <Route path={'/contact'} element={<Contact/>}></Route>
      <Route path={'/about'} element={<About/>}></Route>
      <Route path="/service/:serviceName" element={<ServicePage />}></Route>
      <Route path={'/register'} element={<Register/>}></Route>
      <Route path={'/login'} element={<Login/>}></Route>
      <Route path="/reservation/:serviceName" element={<Reservation />} />
    </Routes>
  );
}

export default App;
