function MeetTheTeam() {
  return (
    <>
      <div className="flex-1 flex flex-col gap-12 my-12">
        <h1 className="text-4xl font-bold text-darkgreen">Meet the Team</h1>
        <div className="flex flex-col justify-center items-center gap-20 lg:flex-row">
          <div className="flex flex-col w-full lg:w-1/3 gap-4 justify-center items-center">
            <img src="https://as2.ftcdn.net/jpg/02/38/01/23/480_F_238012309_7ra9g61WGxcNbfmdx31fZmuVvshYR0VO.jpg?token=1703284107_yxBPlt9tVZfNYwkIAu_v6KRt-fruA-iocsJRynDvpn0" className="rounded-full w-2/3" alt="Worker Headshot"/>
            <p className="text-darkgreen font-bold text-lg">Marta</p>
            <p>Owner, Cosmetologist, Manicurist.</p>
          </div>
          <div className="flex flex-col w-full lg:w-1/3 gap-4 justify-center items-center">
            <img src="https://as2.ftcdn.net/jpg/04/60/48/27/480_F_460482710_oSo5yTylNqffVHgR4liJIedZP24zEC2U.jpg?token=1703284107_6hV-uP46OcDYgPD1bUcbHJZuHusQdvFpq98CW1jJEPw"
              className="rounded-full w-2/3" alt="Worker Headshot"/>
            <p className="text-darkgreen font-bold text-lg">Kasia</p>
            <p>Make Up Artist, Manicurist.</p>
          </div>
          <div className="flex flex-col w-full lg:w-1/3 gap-4 justify-center items-center">
            <img src="https://as1.ftcdn.net/jpg/06/23/76/58/480_F_623765890_1hBSNw3IFKEDdLs1Rx5hHr61vMiXyvSd.jpg?token=1703284107_GRNH5aLYoNFSNx2Iz6_-qjUwsI71DHe8U1YI7nH0jQk"
              className="rounded-full w-2/3" alt="Worker Headshot"/>
            <p className="text-darkgreen font-bold text-lg">Ilona</p>
            <p>Cosmetologist, Make Up Artist, Manicurist.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default MeetTheTeam;
