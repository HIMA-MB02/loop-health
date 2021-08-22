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
            if (g === product.gender) {
                isValid = true;
            } else {
                isValid = false;
            }
        });
        selectedFilters.categories.forEach((c) => {
            if (c === product.category) {
                isValid = true;
            } else {
                isValid = false;
            }
        });
        selectedFilters.brands.forEach((b) => {
            if (b === product.brand) {
                isValid = true;
            } else {
                isValid = false;
            }
        });
        selectedFilters.discounts.forEach((d) => {
            if (
                d === DiscountTypes.LESS_THAN_50 &&
                product.effectiveDiscountPercentageAfterTax < 50
            ) {
                isValid = true;
            } else {
                isValid = false;
            }
            if (
                d === DiscountTypes.MORE_THAN_50 &&
                product.effectiveDiscountPercentageAfterTax >= 50
            ) {
                isValid = true;
            } else {
                isValid = false;
            }
        });
        return isValid;
    });
};

export default getFilteredProducts;
