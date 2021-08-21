import React from 'react';

const formatRupee = (price: number, valueClassName?: string, symbolClassName?: string) => {
    const withDecimal = price.toFixed(2).toString();
    const x = withDecimal.substring(0, withDecimal.length - 3);
    let lastThree = x.substring(x.length - 3);
    const otherNumbers = x.substring(0, x.length - 3);
    if (otherNumbers !== '') lastThree = ',' + lastThree;
    const result =
        otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ',') + lastThree;

    return (
        <>
            <span className={`${symbolClassName}`}>&#8377;</span>
            <span className={`${valueClassName}`}>{result}</span>
        </>
    );
};

export default formatRupee;
