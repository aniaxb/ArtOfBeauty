import { useState } from 'react';
import {Dialog, DialogBody, Button} from '@material-tailwind/react';

const Discount = () => {
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} handler={handleClose} className="discount-bg" size={'sm'}>
      <DialogBody>
        <div className="flex justify-center items-center">
          <div className="flex flex-col gap-8 w-1/2">
            <input
              type="text"
              value="CODE10"
              readOnly
              className="p-2 mb-4 bg-black text-white text-center rounded-md" />
            <Button
              onClick={handleClose}
              className="text-black bg-orange-200 px-4 py-2 rounded-md"
            >
                  Close
            </Button>
          </div>
        </div>


      </DialogBody>
    </Dialog>
  );
};

export default Discount;

