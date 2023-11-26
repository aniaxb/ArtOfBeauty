import {NavBar} from '../NavBar/NavBar.tsx';
import {Footer} from '../Footer/Footer.tsx';
import {Input, Select, Option } from '@material-tailwind/react';
import { FaSearch } from 'react-icons/fa';

function Services() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <NavBar />
        <div className="flex-1 flex flex-col justify-center items-center w-screen my-12">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="w-80">
              <Input label="Search" icon={<FaSearch />} crossOrigin={undefined} onChange={()=> console.log('searched')}/>
            </div>
            <div className="w-80">
              <Select label="Category" className="bg-darkgreen text-white">
                <Option>Makijaż dzienny</Option>
                <Option>Makijaż wieczorowy</Option>
                <Option>Manicure hybrydowy</Option>
                <Option>Manicure hybrydowy ze zdjęciem hybrydy</Option>
              </Select>
            </div>
          </div>

          <div className="flex-col justify-between items-center gap-12 lg:flex-row mt-12 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
            <div className="flex flex-col w-full gap-4 ">
              <img src="/src/assets/nails_photo.png" alt="Manicure Example" className="hover:scale-105 transition"/>
              <p className="text-darkgreen font-bold text-lg">Manicure hybrydowy ze zdjęciem hybrydy</p>
            </div>
            <div className="flex flex-col w-full gap-4">
              <img src="/src/assets/nails_photo.png" alt="Manicure Example" className="hover:scale-105 transition"/>
              <p className="text-darkgreen font-bold text-lg">Manicure hybrydowy ze zdjęciem hybrydy</p>
            </div>
            <div className="flex flex-col w-full gap-4">
              <img src="/src/assets/nails_photo.png" alt="Manicure Example" className="hover:scale-105 transition"/>
              <p className="text-darkgreen font-bold text-lg">Manicure hybrydowy ze zdjęciem hybrydy</p>
            </div>
            <div className="flex flex-col w-full gap-4">
              <img src="/src/assets/nails_photo.png" alt="Manicure Example" className="hover:scale-105 transition"/>
              <p className="text-darkgreen font-bold text-lg">Manicure hybrydowy ze zdjęciem hybrydy</p>
            </div>
            <div className="flex flex-col w-full gap-4">
              <img src="/src/assets/nails_photo.png" alt="Manicure Example" className="hover:scale-105 transition"/>
              <p className="text-darkgreen font-bold text-lg">Manicure hybrydowy ze zdjęciem hybrydy</p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Services;
