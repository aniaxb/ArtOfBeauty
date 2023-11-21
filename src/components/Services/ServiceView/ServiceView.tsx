import {NavBar} from '../../NavBar/NavBar.tsx';
import {Footer} from '../../Footer/Footer.tsx';

function ServiceView() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <NavBar />
        <div className="flex-1 flex flex-col justify-center items-center w-screen">
          <h1>Service View</h1>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default ServiceView;
