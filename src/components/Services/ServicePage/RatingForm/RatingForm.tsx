import {Button, Rating, Textarea} from '@material-tailwind/react';

function RatingForm() {
  return (
    <div>
      <div className="flex flex-col gap-2">
        <Rating unratedColor="amber" ratedColor="amber" />
        <Textarea label="Review" />
        <Button type="submit" className="w-full xl:w-2/3 bg-blue-gray-900">Submit Review</Button>
      </div>
    </div>
  );
}

export default RatingForm;
