import React from 'react';
import { formatRupee } from '../../../utils';
import RatingSystem from '../RatingSystem';
import './styles.css';
import { IProductCard } from './types';

const ProductCard: React.FunctionComponent<IProductCard> = ({ product }) => {
    console.log(product);
    return (
        <div className='product-card'>
            <div className='product-image'>
                <img
                    src={product.searchImage}
                    className='p-img'
                    alt={product.productName}
                />
            </div>
            <div className='product-body'>
                <h6 className='product-name'>{product.productName}</h6>
                <p className='text-muted'>{product.additionalInfo}</p>
                <RatingSystem
                    rating={product.rating.toString()}
                    ratingCount={product.ratingCount}
                />
                <div className='product-price-row'>
                    <span className='product-price'>
                        {formatRupee(product.price, 'price-text', 'mt-1')}
                    </span>
                    {!!product.effectiveDiscountAmountAfterTax && (
                        <>
                            <span className='product-mrp'>
                                {formatRupee(product.mrp)}
                            </span>
                            <span className='p-discount-amount'>
                                Save{' '}
                                {formatRupee(
                                    product.effectiveDiscountAmountAfterTax
                                )}{' '}
                                {product.discountDisplayLabel.slice(0, 4)}
                                {')'}
                            </span>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
