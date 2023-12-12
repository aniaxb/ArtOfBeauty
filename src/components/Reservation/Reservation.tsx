import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { servicesList } from '../Services/servicesList.tsx';
import {NavBar} from '../NavBar/NavBar.tsx';
import {Button, Card, CardBody, CardHeader, Input, Typography} from '@material-tailwind/react';
import {FaCalendarAlt, FaCreditCard, FaLock} from 'react-icons/fa';
import {FaMoneyBill1Wave} from 'react-icons/fa6';
import { MdDiscount } from 'react-icons/md';

const SummaryPage = () => {
  const { serviceName } = useParams();
  const [service, setService] = useState<Service | null>(null);
  const [selectedMethod, setSelectedMethod] = useState('cash');

  useEffect(() => {
    const selectedService = servicesList.find((s) => s.urlName === serviceName);

    if (selectedService) {
      setService(selectedService);
    } else {
      setService(null);
    }
  }, [serviceName]);

  if (!service) {
    return <div>Loading... No service found in reservation</div>;
  }

  const { name, description, duration, pricing, imageUrl } = service;

  const handleMethodClick = (method: string) => {
    setSelectedMethod(method);
  };

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <NavBar />
        <div className="flex-1 flex justify-evenly items-center w-screen">
          <div className="text-start flex flex-col w-3/4">
            <Card className="p-6 mt-12">
              <CardHeader>
                <Typography variant="h2" className="text-center text-darkgreen p-2">Summary</Typography>
              </CardHeader>
              <CardBody>
                <div className="flex flex-col lg:flex-row gap-12 justify-between items-center">
                  <div className="w-full lg:w-1/2 flex flex-col gap-6">
                    <Typography variant="h2" className="text-darkgreen">{name}</Typography>
                    <Typography variant="h6">Description: </Typography><Typography className="w-full lg:w-2/3">{description}</Typography>
                    <Typography className="font-bold">Duration: <span className="font-normal">{duration}</span></Typography>
                    <Typography className="font-bold">Pricing: <span className="font-normal">{pricing}</span></Typography>
                    <div className="w-full lg:w-2/3">
                      <hr/>
                    </div>
                    <Typography variant="h5">Payment Method</Typography>
                    <div className="flex flex-col xl:flex-row gap-4  justify-between w-full lg:w-2/3">
                      <div
                        className={`border-2 rounded-lg py-2 px-6 flex gap-4 justify-center items-center ${
                          selectedMethod === 'cash' ? 'border-darkgreen border-opacity-50' : 'focus:border-darkgreen'
                        }`}
                        onClick={() => handleMethodClick('cash')}
                      >
                        <span><FaMoneyBill1Wave /></span>
                        <p>Cash</p>
                      </div>
                      <div
                        className={`border-2 rounded-lg py-2 px-6 flex gap-4 justify-center items-center ${
                          selectedMethod === 'card' ? 'border-darkgreen border-opacity-50' : 'focus:border-darkgreen'
                        }`}
                        onClick={() => handleMethodClick('card')}
                      >
                        <span><FaCreditCard /></span>
                        <p>Card</p>
                      </div>
                      <div
                        className={`border-2 rounded-lg py-2 px-6 flex gap-4 justify-center items-center ${
                          selectedMethod === 'blik' ? 'border-darkgreen border-opacity-50' : 'focus:border-darkgreen'
                        }`}
                        onClick={() => handleMethodClick('blik')}
                      >
                        <img src="https://pbs.twimg.com/profile_images/1628047888558223363/bXcAvIfG_400x400.jpg" alt="" className="w-6"/>
                        <p>Blik</p>
                      </div>

                    </div>
                    { selectedMethod === 'card' ? (
                      <div className="w-full lg:w-2/3">
                        <div className="w-full mb-4">
                          <Input label="Credit Card Number" icon={<FaCreditCard />} crossOrigin={undefined} />
                        </div>
                        <div className="flex flex-col xl:flex-row gap-4 w-full">
                          <div className="w-1/2">
                            <Input label="Date" icon={<FaCalendarAlt />} crossOrigin={undefined} />
                          </div>
                          <div className="w-1/2">
                            <Input label="CCV" icon={<FaLock />} crossOrigin={undefined} />
                          </div>
                        </div>
                      </div>) : selectedMethod === 'blik' ?
                      (<div>
                        <div className="w-full lg:w-2/3">
                          <div className="w-full">
                            <Input label="Blik Code _ _ _ _" crossOrigin={undefined} />
                          </div>
                        </div>
                      </div>) : (<Typography variant="h6">Payment at the salon</Typography>)
                    }
                    <div className="flex flex-col gap-2 w-full lg:w-2/3 mb-4">
                      <Typography variant="h6">Discount</Typography>
                      <Input label="Discount code" icon={<MdDiscount />} crossOrigin={undefined} />
                    </div>
                    { name === 'Voucher' ? (
                      <Button className="w-full lg:w-2/3 bg-blue-gray-900" >Purchase</Button>
                    ) : (
                      <Button className="w-full lg:w-2/3 bg-blue-gray-900" >Make a reservation</Button>
                    )}
                  </div>
                  <div>
                    <img src={imageUrl} alt={name} className="rounded-xl w-full lg:w-[32vw]"/>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default SummaryPage;

interface Service {
    urlName: string;
    name: string;
    description: string;
    duration: string;
    pricing: string;
    imageUrl: string;
}
