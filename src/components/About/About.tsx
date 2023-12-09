import {NavBar} from '../NavBar/NavBar.tsx';
import {Footer} from '../Footer/Footer.tsx';
import {Typography} from '@material-tailwind/react';

function About() {
  return (
    <>
      <div className="min-h-screen flex flex-col justify-center items-center">
        <NavBar />
        <div className="flex-1 flex flex-col lg:flex-row justify-around items-center w-screen my-4 lg:my-0 p-4 ">
          <div className="w-full lg:w-1/3">
            <Typography variant='h2' className="text-darkgreen uppercase">About Us</Typography>
            <Typography variant='h5' className="font-normal mt-8">Welcome to Art of Beauty, where elegance meets expertise. At our beauty salon, we take pride in creating a serene escape for self-care and indulgence. Our team of skilled professionals is dedicated to enhancing your natural beauty, leaving you refreshed and radiant. Discover the artistry of beauty at our salon, where every visit is an experience in luxury and self-discovery.</Typography>
          </div>
          <div className="">
            <img src="https://as2.ftcdn.net/jpg/04/53/94/27/480_F_453942717_PonJagZcCbu1IRScJ577GTjSJ4l10nF3.jpg?token=1703282765_DQKuAYvGXwjc7ecmFW8dTxPoN2HaKMBWvRSCsEuiWvg" alt=""/>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default About;
