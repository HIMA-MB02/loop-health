import React from 'react';
import './styles.css';
import SkeletonBase from '../SkeletonBase';
import { IProductCardListSkeleton } from './types';

const FilterSkeleton = () => {
    return (
        <div className='product-card'>
            <div className='product-image'>
                <SkeletonBase type='box skeleton-img' />
            </div>
            <div className='product-body'>
                <div className='skeleton-name'>
                    <SkeletonBase type='title' />
                </div>
                <SkeletonBase type='text' />
                <SkeletonBase type='text' />
                <SkeletonBase type='text' />
            </div>
        </div>
    );
};
const ProductCardListSkeleton: React.FunctionComponent<IProductCardListSkeleton> =
    ({ times }) => {
        let card = [];
        for (let i = 0; i < times; i++) {
            card.push(<FilterSkeleton key={i} />);
        }
        return <>{card}</>;
    };

export default ProductCardListSkeleton;
