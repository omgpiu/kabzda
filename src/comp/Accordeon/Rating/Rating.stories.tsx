import React, {useState} from 'react';
import Rating, {RatingValueType} from './Rating';


export default {
    title: 'Rating stories',
    component: Rating,
};

export const EmptyRating = () => <Rating value={0} onClick={a => a}/>;
export const RatingOne = () => <Rating value={1} onClick={a => a}/>;
export const RatingTwo = () => <Rating value={2} onClick={a => a}/>;
export const RatingThree = () => <Rating value={3} onClick={a => a}/>;
export const RatingFour = () => <Rating value={4} onClick={a => a}/>;
export const RatingFive = () => <Rating value={5} onClick={a => a}/>;
export const RatingChanging = () => {

    const [rating, setRating] = useState<RatingValueType>(0);

    return <Rating value={rating} onClick={setRating}/>;
};


