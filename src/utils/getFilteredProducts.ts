import {
    DiscountTypes,
    IFilterData,
    IProductData
} from '../redux/reducers/ProductsReducer/types';

const getFilteredProducts = (   
    products: IProductData[],
    selectedFilters: IFilterData
): IProductData[] => {
    if (
        !(
            selectedFilters.discounts.length ||
            selectedFilters.brands.length ||
            selectedFilters.categories.length ||
            selectedFilters.genders.length
        )
    )
        return products;
    return products.filter((product) => {
        let isValid = false;
        selectedFilters.genders.forEach((g) => {
            if (g === product.gender) isValid = true;
        });
        selectedFilters.categories.forEach((c) => {
            if (c === product.category) isValid = true;
        });
        selectedFilters.brands.forEach((b) => {
            if (b === product.brand) isValid = true;
        });
        selectedFilters.discounts.forEach((d) => {
            if (
                d === DiscountTypes.LESS_THAN_50 &&
                product.effectiveDiscountPercentageAfterTax < 50
            )
                isValid = true;
            if (
                d === DiscountTypes.MORE_THAN_50 &&
                product.effectiveDiscountPercentageAfterTax >= 50
            )
                isValid = true;
        });
        return isValid;
    });
};

export default getFilteredProducts;
