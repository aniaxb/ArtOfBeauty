import { Rating } from '@material-tailwind/react';
import PropTypes from 'prop-types';

// @ts-ignore
const StarRating = ({ rating }) => {
  return (
    <div className="flex items-center gap-2 mb-2">
      <Rating value={rating} readonly />
      <div className="flex flex-row gap-2">
        <span color="gray" className="text-sm font-medium">
          {rating}
        </span>
        <span color="gray" className="text-sm font-medium">
                    out of
        </span>
        <span color="gray" className="text-sm font-medium">
                    5
        </span>
      </div>
    </div>
  );
};

StarRating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default StarRating;
