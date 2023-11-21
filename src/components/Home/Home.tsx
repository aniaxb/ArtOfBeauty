import {NavBar} from '../NavBar/NavBar.tsx';
import {Footer} from '../Footer/Footer.tsx';
import Header from './Header/Header.tsx';
import PopularServices from './PopularServices/PopularServices.tsx';
import MeetTheTeam from './MeetTeam/MeetTheTeam.tsx';

export default function Home() {

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <NavBar />
        <div className="flex-1 flex flex-col justify-center items-center w-screen">
          <Header/>
          <PopularServices/>
          <MeetTheTeam/>
        </div>
        <Footer />
      </div>
    </>
  );

}
