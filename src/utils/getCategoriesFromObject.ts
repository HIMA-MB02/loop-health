import { DiscountTypes, IFilterData } from '../redux/reducers/ProductsReducer/types';

const getCategotiesFromObject = (products: any[]): IFilterData => {
    let filterData: IFilterData = {
        brands: [],
        categories: [],
        discounts: [],
        genders: []
    };

    filterData = products.reduce(
        (previousFilters: IFilterData, currentValue) => {
            const newFilters = { ...previousFilters };
            if (!previousFilters.brands.includes(currentValue.brand)) {
            }
            newFilters.brands.push(currentValue.brand);
            if (!previousFilters.categories.includes(currentValue.category))
                newFilters.categories.push(currentValue.category);
            if (!previousFilters.genders.includes(currentValue.gender))
                newFilters.genders.push(currentValue.gender);
            return newFilters;
        },
        filterData
    );
    filterData = {
        ...filterData,
        discounts: [DiscountTypes.MORE_THAN_50, DiscountTypes.LESS_THAN_50]
    };

    return filterData;
};

export default getCategotiesFromObject