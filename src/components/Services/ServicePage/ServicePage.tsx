import {useNavigate, useParams} from 'react-router-dom';
import {servicesList} from '../servicesList.tsx';
import {NavBar} from '../../NavBar/NavBar.tsx';
import {Footer} from '../../Footer/Footer.tsx';
import {Button, Card, CardBody, CardFooter, Typography} from '@material-tailwind/react';
import StarRating from './StarRating/StarRating.tsx';
import RatingForm from './RatingForm/RatingForm.tsx';

const ServicePage = () => {
  const navigate = useNavigate();
  const { serviceName } = useParams();

  const service = servicesList.find((s) => s.urlName === serviceName);

  if (!service) {
    return <div>Service not found</div>;
  }

  const { name, description, duration, pricing, imageUrl, rating } = service;

  const handleReserveService = () => {
    navigate(`/reservation/${serviceName}`);
  };

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <NavBar />
        <div className="flex-1 flex flex-col lg:flex-row justify-evenly items-center w-screen mt-6 lg:mt-32 mb-6 gap-4 lg:gap-0">
          <div className="flex justify-center items-center">
            <img src={imageUrl} alt={name} className="rounded-xl w-3/4 xl:w-[60vh]"/>
          </div>
          <div className="text-start flex flex-col gap-4 w-3/4 xl:w-1/3">
            <Card>
              <CardBody>
                <Typography variant="h2" className="text-darkgreen py-2">{name}</Typography>
                <StarRating rating={rating}/>
                <Typography variant="h6">Description: </Typography><Typography>{description}</Typography>
                <Typography className="font-bold">Duration: <span className="font-normal">{duration}</span></Typography>
                <Typography className="font-bold">Pricing: <span className="font-normal">{pricing}</span></Typography>
              </CardBody>
              <CardFooter className="flex flex-col gap-6 pt-0">
                { name === 'Voucher' ? (
                  <Button className="w-full xl:w-1/3 bg-blue-gray-900" onClick={handleReserveService}>Purchase</Button>
                ) : (
                  <Button className="w-full xl:w-2/3 bg-blue-gray-900" onClick={handleReserveService}>Make a reservation</Button>
                )}
                <RatingForm/>
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
