import React from 'react';
import './styles.css';
import { IRatingSystem } from './types';

const RatingSystem: React.FunctionComponent<IRatingSystem> = ({ rating, ratingCount }) => {
    const renderPartialAndEmptyStars = (fullStars: number, partialStar: number) => {
        let count = 5 - fullStars;
        let partialAndEmpty = [];
        const emptyStarIcon = <i className='far fa-star'></i>;
        const partialStarIcon = <i className='fas fa-star-half-alt'></i>;
        if (partialStar > 0) {
            count -= 1;
            partialAndEmpty.push(partialStarIcon);
        }

        for (let i = 0; i < count; i++) {
            partialAndEmpty.push(emptyStarIcon);
        }
        return partialAndEmpty;
    };
    const renderFullStars = (count: number) => {
        let fullStars = [];
        const stars = <i className='fa fa-star'></i>;
        for (let i = 0; i < count; i++) {
            fullStars.push(stars);
        }
        return fullStars;
    };
    return (
        <div className='ratings-row'>
            {renderFullStars(Number(rating.split('.')[0]))}
            {renderPartialAndEmptyStars(
                Number(rating.split('.')[0]),
                Number(rating.split('.')[1])
            )}
            <span className='rating-count'>{ratingCount}</span>
        </div>
    );
};

export default RatingSystem;
