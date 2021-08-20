import React from 'react';
import SkeletonBase from '../SkeletonBase';
import { IFilterListSkeleton } from './types';

const FilterSkeleton = () => {
    return (
        <div className='check-row'>
            <SkeletonBase type='title' />
        </div>
    );
}
const FilterListSkeleton: React.FunctionComponent<IFilterListSkeleton> = ({
    times
}) => {
    let card = [];
    for (let i = 0; i < times; i++) {
        card.push(<FilterSkeleton key={i} />);
    }
    return <>{card}</>;
};

export default FilterListSkeleton;
