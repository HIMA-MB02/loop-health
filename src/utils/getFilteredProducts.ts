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

    let filteredProducts: IProductData[] = [...products];
        console.log(filteredProducts, selectedFilters.genders);

    if (selectedFilters.genders.length)
        filteredProducts = filteredProducts.filter((product) => {
            let isValid = false;
            selectedFilters.genders.forEach((g) => {
                if (g === product.gender) {
                    isValid = true;
                }
            });
            return isValid;
        });

    if (selectedFilters.categories.length)
        filteredProducts = filteredProducts.filter((product) => {
            let isValid = false;
            selectedFilters.categories.forEach((c) => {
                if (c === product.category) {
                    isValid = true;
                }
            });
            return isValid;
        });
        console.log(filteredProducts);
        if (selectedFilters.brands.length)
            filteredProducts = filteredProducts.filter((product) => {
                let isValid = false;
                selectedFilters.brands.forEach((b) => {
                    if (b === product.brand) {
                        isValid = true;
                    }
                });
                return isValid;
            });

        if (selectedFilters.discounts.length)
            filteredProducts = filteredProducts.filter((product) => {
                let isValid = false;
                selectedFilters.discounts.forEach((d) => {
                    if (
                        d === DiscountTypes.LESS_THAN_50 &&
                        product.effectiveDiscountPercentageAfterTax < 50
                    ) {
                        isValid = true;
                    }
                    if (
                        d === DiscountTypes.MORE_THAN_50 &&
                        product.effectiveDiscountPercentageAfterTax >= 50
                    ) {
                        isValid = true;
                    }
                });
                return isValid;
            });
    return filteredProducts;
};

export default getFilteredProducts;
