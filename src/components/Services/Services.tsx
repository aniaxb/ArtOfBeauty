import {NavBar} from '../NavBar/NavBar.tsx';
import {Footer} from '../Footer/Footer.tsx';
import {Input, Select, Option } from '@material-tailwind/react';
import { FaSearch } from 'react-icons/fa';
import {Link} from 'react-router-dom';
import {servicesList} from './servicesList.tsx';

function Services() {

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <NavBar />
        <div className="flex-1 flex flex-col justify-center items-center w-screen my-12 lg:my-32 xl:my-10">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="w-80">
              <Input label="Search" icon={<FaSearch />} crossOrigin={undefined} onChange={()=> console.log('searched')}/>
            </div>
            <div className="w-80">
              <Select label="Category" className="bg-darkgreen text-white">
                <Option>Voucher</Option>
                <Option>Day Make-up</Option>
                <Option>Evening Make-up</Option>
                <Option>Hybrid Manicure</Option>
              </Select>
            </div>
          </div>

          <div className="flex-col justify-around items-center gap-10 px-16 lg:flex-row mt-12 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
            {servicesList.map((service) => (
              <div key={service.urlName} className="flex flex-col w-full gap-4">
                <Link to={`/service/${service.urlName}`}>
                  <img src={service.imageUrl} alt={service.name} className="hover:scale-105 transition w-full" />
                </Link>
                <p className="text-darkgreen font-bold text-lg">{service.name}</p>
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Services;
