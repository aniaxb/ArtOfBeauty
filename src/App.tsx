import {Route, Routes} from 'react-router-dom';
import Home from './components/Home/Home.tsx';
import Services from './components/Services/Services.tsx';
import Contact from './components/Contact/Contact.tsx';
import ServicePage from './components/Services/ServiceView/ServicePage.tsx';

function App() {

  return (
    <Routes>
      <Route path={'/'} element={<Home/>}></Route>
      <Route path={'/services'} element={<Services/>}></Route>
      <Route path={'/contact'} element={<Contact/>}></Route>
      <Route path="/service/:serviceName" element={<ServicePage />}></Route>
    </Routes>
  );
}

export default App;
