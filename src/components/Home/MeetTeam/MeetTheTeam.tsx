import {Button} from '@material-tailwind/react';

function MeetTheTeam() {
  return (
    <>
      <div className="flex-1 flex flex-col gap-12 my-12">
        <h1 className="text-4xl font-bold text-caribbean">Meet the Team</h1>
        <div className="flex flex-col justify-center items-center gap-20 lg:flex-row">
          <div className="flex flex-col w-2/3 lg:w-1/3 gap-4 justify-center items-center">
            <img src="/src/assets/worker_photo.png" className="rounded-full w-2/3" alt="Worker Headshot"/>
            <p className="text-caribbean font-bold text-lg">Ilona</p>
            <p>Cosmetologist, Make Up Artist, Manicurist.</p>
            <div>
              <Button className="bg-caribbean rounded-full">Read more</Button>
            </div>
          </div>
          <div className="flex flex-col w-2/3 lg:w-1/3 gap-4 justify-center items-center">
            <img src="/src/assets/worker_photo.png" className="rounded-full w-2/3" alt="Worker Headshot"/>
            <p className="text-caribbean font-bold text-lg">Ilona</p>
            <p>Cosmetologist, Make Up Artist, Manicurist.</p>
            <div>
              <Button className="bg-caribbean rounded-full">Read more</Button>
            </div>
          </div>
          <div className="flex flex-col w-2/3 lg:w-1/3 gap-4 justify-center items-center">
            <img src="/src/assets/worker_photo.png" className="rounded-full w-2/3" alt="Worker Headshot"/>
            <p className="text-caribbean font-bold text-lg">Ilona</p>
            <p>Cosmetologist, Make Up Artist, Manicurist.</p>
            <div>
              <Button className="bg-caribbean rounded-full">Read more</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MeetTheTeam;
