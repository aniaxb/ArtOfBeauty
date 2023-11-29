import {NavBar} from '../NavBar/NavBar.tsx';
import {Button, Card, CardBody, CardHeader, Input, Typography} from '@material-tailwind/react';
import {FaEnvelope, FaKey} from 'react-icons/fa';

function Login() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <NavBar/>
        <div className="flex-1 flex flex-col justify-center items-center w-screen my-12 lg:my-0">
          <div className="w-3/4">
            <Card className="p-8">
              <CardHeader className="p-4">
                <Typography variant="h3">Login</Typography>
              </CardHeader>
              <CardBody>
                <div className="flex flex-col lg:flex-row gap-12 items-center">
                  <div className="">
                    <img src="/src/assets/undraw_sign_in.svg" alt=""/>
                  </div>
                  <div className="flex flex-col gap-6 w-full items-center">
                    <div className="w-full lg:w-2/3">
                      <Input label="E-mail address" icon={<FaEnvelope />} crossOrigin={undefined} />
                    </div>
                    <div className="w-full lg:w-2/3">
                      <Input type="password" label="Password" icon={<FaKey />} crossOrigin={undefined} />
                    </div>
                    <div className="w-full lg:w-1/3">
                      <Button variant="gradient" className="w-full">Sign In</Button>
                    </div>
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

export default Login;
