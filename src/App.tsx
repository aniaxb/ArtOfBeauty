import {Route, Routes} from 'react-router-dom';
import Home from './components/Home/Home.tsx';
import Services from './components/Services/Services.tsx';

function App() {

  return (
    <Routes>
      <Route path={'/'} element={<Home/>}></Route>
      <Route path={'/services'} element={<Services/>}></Route>
    </Routes>
  );
}

export default App;
