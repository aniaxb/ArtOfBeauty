import {Button} from '@material-tailwind/react';
import {Link} from 'react-router-dom';

export default function PopularServices() {
  return (
    <>
      <div className="flex-1 flex flex-col gap-12 my-12">
        <h1 className="text-4xl font-bold text-darkgreen">Popular services</h1>
        <div className="flex flex-col justify-center items-center gap-12 lg:flex-row">
          <div className="flex flex-col w-2/3 lg:w-1/4 gap-4 ">
            <img src="/src/assets/nails_photo.png" alt="Hybrid Manicure"/>
            <p className="text-darkgreen font-bold text-lg">Hybrid Manicure</p>
            <p>Manicure hybrydowy wraz ze zdjęciem hybrydy, to trwały i piękny lakier z możliwością umieszczenia wzoru na paznokciach.</p>
            <div>
              <Link to={'/services'}>
                <Button className="bg-darkgreen lg:w-1/3 rounded-full">Read more</Button>
              </Link>
            </div>
          </div>
          <div className="flex flex-col w-2/3 lg:w-1/4 gap-4">
            <img src="/src/assets/nails_photo.png" alt="Evening MakeUp"/>
            <p className="text-darkgreen font-bold text-lg">Evening MakeUp</p>
            <p>Manicure hybrydowy wraz ze zdjęciem hybrydy, to trwały i piękny lakier z możliwością umieszczenia wzoru na paznokciach.</p>
            <div>
              <Link to={'/services'}>
                <Button className="bg-darkgreen lg:w-1/3 rounded-full">Read more</Button>
              </Link>
            </div>
          </div>
          <div className="flex flex-col w-2/3 lg:w-1/4 gap-4">
            <img src="/src/assets/nails_photo.png" alt="Manicure Example"/>
            <p className="text-darkgreen font-bold text-lg">Manicure hybrydowy ze zdjęciem hybrydy</p>
            <p>Manicure hybrydowy wraz ze zdjęciem hybrydy, to trwały i piękny lakier z możliwością umieszczenia wzoru na paznokciach.</p>
            <div>
              <Link to={'/services'}>
                <Button className="bg-darkgreen lg:w-1/3 rounded-full">Read more</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
