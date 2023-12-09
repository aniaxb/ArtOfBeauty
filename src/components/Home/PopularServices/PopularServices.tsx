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
            <p>
              Discover the beauty of our Hybrid Manicure, a lasting and stylish nail treatment that includes the option for captivating nail art designs.
              Enjoy resilient and gorgeous nails with our expert touch.
            </p>
            <div>
              <Link to={'/service/hybrid-manicure'}>
                <Button className="bg-darkgreen lg:w-1/3 rounded-full">Read more</Button>
              </Link>
            </div>
          </div>
          <div className="flex flex-col w-2/3 lg:w-1/4 gap-4">
            <img src="/src/assets/evening_makeup.jpg" alt="Evening MakeUp"/>
            <p className="text-darkgreen font-bold text-lg">Evening Make-Up</p>
            <p>
              Craft captivating looks that accentuate your features and complement your unique style.
              Whether you're heading to a special event or a night out, let us transform your evening.
            </p>
            <div>
              <Link to={'/service/evening-makeup'}>
                <Button className="bg-darkgreen lg:w-1/3 rounded-full">Read more</Button>
              </Link>
            </div>
          </div>
          <div className="flex flex-col w-2/3 lg:w-1/4 gap-4">
            <img src="/src/assets/day_makeup.jpg" alt="Day Make-up"/>
            <p className="text-darkgreen font-bold text-lg">Day Make-up</p>
            <p>
              Day Makeup brings impeccable shine to your everyday look.
              Embrace the beauty of a timeless Day Makeup, enhancing your natural glow with a touch of sophistication and grace.
            </p>
            <div>
              <Link to={'/service/day-makeup'}>
                <Button className="bg-darkgreen lg:w-1/3 rounded-full">Read more</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
