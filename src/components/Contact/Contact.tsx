import {NavBar} from '../NavBar/NavBar.tsx';
import {Card, CardBody, Typography} from '@material-tailwind/react';
import Map from './Map/Map.tsx';
import 'leaflet/dist/leaflet.css';
import {FaEnvelope, FaLocationArrow, FaPhoneAlt} from 'react-icons/fa';
import {Footer} from '../Footer/Footer.tsx';

function Contact() {
  return (
    <>
      <NavBar />
      <div className="min-h-screen flex flex-col justify-center items-center">
        <Card className="mt-6 w-3/4 p-6 bg-darkgreen shadow-2xl">
          <Typography variant="h1" className="text-white">Contact</Typography>
          <CardBody>
            <div className="flex flex-col xl:flex-row justify-around items-center ">
              <div className="flex flex-col items-start gap-6 mb-6 ml-6">
                <Typography variant="h5" color="blue-gray" className="mt-6 flex gap-4 text-white">
                  <FaPhoneAlt /> +44 123123123
                </Typography>
                <Typography variant="h5" color="blue-gray" className="flex gap-4 text-white">
                  <FaEnvelope /> artofbeauty@mail.com
                </Typography>
                <Typography variant="h5" color="blue-gray" className="flex gap-4 text-white">
                  <FaLocationArrow /> Southwark Street 1
                </Typography>
                <Typography variant="h5" color="blue-gray" className="flex gap-4 text-white">
                  <span className="font-bold">NIP</span> 1231231231
                </Typography>
              </div>
              <div>
                <Map/>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
      <Footer/>
    </>
  );
}

export default Contact;
