import {NavBar} from '../NavBar/NavBar.tsx';
import {Footer} from '../Footer/Footer.tsx';

function Services() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <NavBar />
        <div className="flex-1 flex flex-col justify-center items-center w-screen">
          <h1>Services</h1>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Services;
