import {NavBar} from '../NavBar/NavBar.tsx';
import {Button, Card, CardBody, CardHeader, Input, Typography} from '@material-tailwind/react';
import {FaEnvelope, FaKey, FaRegUser} from 'react-icons/fa';

function Register() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <NavBar/>
        <div className="flex-1 flex flex-col justify-center items-center w-screen my-12 lg:my-0">
          <div className="w-3/4">
            <Card className="p-8">
              <CardHeader className="p-4">
                <Typography variant="h3">Register</Typography>
              </CardHeader>
              <CardBody>
                <div className="flex flex-col lg:flex-row gap-12 items-center">
                  <div className="flex flex-col gap-6 items-center w-full">
                    <div className="w-full lg:w-2/3">
                      <Input label="First Name" icon={<FaRegUser />} crossOrigin={undefined} />
                    </div>
                    <div className="w-full lg:w-2/3">
                      <Input label="Last Name" icon={<FaRegUser />} crossOrigin={undefined} />
                    </div>
                    <div className="w-full lg:w-2/3">
                      <Input label="E-mail address" icon={<FaEnvelope />} crossOrigin={undefined} />
                    </div>
                    <div className="w-full lg:w-2/3">
                      <Input type="password" label="Password" icon={<FaKey />} crossOrigin={undefined} />
                      <Typography
                        variant="small"
                        color="gray"
                        className="mt-2 flex items-center gap-1 font-normal "
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="-mt-px h-4 w-4"
                        >
                          <path
                            fillRule="evenodd"
                            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                            clipRule="evenodd"
                          />
                        </svg>
                              Use at least 8 characters, one uppercase, one lowercase and one number.
                      </Typography>
                    </div>
                    <div className="w-full lg:w-1/3">
                      <Button variant="gradient" className="w-full">Sign Up</Button>
                    </div>
                  </div>
                  <div className="">
                    <img src="/src/assets/undraw_sign_up.svg" alt=""/>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
