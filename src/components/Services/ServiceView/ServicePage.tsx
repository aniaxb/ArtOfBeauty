import { useParams } from 'react-router-dom';
import {servicesList} from '../servicesList.tsx';
import {NavBar} from '../../NavBar/NavBar.tsx';
import {Footer} from '../../Footer/Footer.tsx';
import {Button, Card, CardBody, CardFooter, Typography} from '@material-tailwind/react';

const ServicePage = () => {
  const { serviceName } = useParams();

  // Find the service data based on the serviceName
  const service = servicesList.find((s) => s.urlName === serviceName);

  if (!service) {
    return <div>Service not found</div>;
  }

  const { name, description, duration, pricing, imageUrl } = service;

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <NavBar />
        <div className="flex-1 flex flex-col lg:flex-row justify-evenly items-center w-screen mt-32 mb-6">
          <div>
            <img src={imageUrl} alt={name} className="rounded-xl w-[60vh]"/>
          </div>
          <div className="text-start flex flex-col gap-4 w-1/3">
            <Card>
              <CardBody>
                <Typography variant="h2" className="text-darkgreen py-4">{name}</Typography>
                <Typography variant="h6">{description}</Typography>
                <Typography variant="h6">Duration: {duration}</Typography>
                <Typography variant="h6">Pricing: {pricing}</Typography>
              </CardBody>
              <CardFooter>
                { name === 'Voucher' ? (
                  <Button className="w-1/3 bg-blue-gray-900">Purchase</Button>
                ) : (
                  <Button className="w-1/3 bg-blue-gray-900">Make a reservation</Button>
                )}
              </CardFooter>
            </Card>
          </div>
        </div>
        <Footer/>
      </div>
    </>
  );
};

export default ServicePage;
