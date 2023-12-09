import {useNavigate, useParams} from 'react-router-dom';
import {servicesList} from '../servicesList.tsx';
import {NavBar} from '../../NavBar/NavBar.tsx';
import {Footer} from '../../Footer/Footer.tsx';
import {Button, Card, CardBody, CardFooter, Typography} from '@material-tailwind/react';

const ServicePage = () => {
  const navigate = useNavigate();
  const { serviceName } = useParams();

  const service = servicesList.find((s) => s.urlName === serviceName);

  if (!service) {
    return <div>Service not found</div>;
  }

  const { name, description, duration, pricing, imageUrl } = service;

  const handleReserveService = () => {
    navigate(`/reservation/${serviceName}`);
  };

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
                <Typography variant="h6">Description: </Typography><Typography>{description}</Typography>
                <Typography className="font-bold">Duration: <span className="font-normal">{duration}</span></Typography>
                <Typography className="font-bold">Pricing: <span className="font-normal">{pricing}</span></Typography>
              </CardBody>
              <CardFooter>
                { name === 'Voucher' ? (
                  <Button className="w-1/3 bg-blue-gray-900" onClick={handleReserveService}>Purchase</Button>
                ) : (
                  <Button className="w-1/3 bg-blue-gray-900" onClick={handleReserveService}>Make a reservation</Button>
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
