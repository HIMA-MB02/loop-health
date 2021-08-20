import { FilterDataKeys, IFilterData } from '../redux/reducers/ProductsReducer/types';

const updateFilter = (
    filterValue: string,
    filterDataKey: string,
    selectedFilters: IFilterData
) => {
    switch (filterDataKey) {
        case FilterDataKeys.categories:
            if (selectedFilters.categories.includes(filterValue)) {
                selectedFilters.categories = selectedFilters.categories.filter(
                    (value) => value !== filterValue
                );
            } else {
                selectedFilters.categories.push(filterValue);
            }
            break;
        case FilterDataKeys.brands:
            if (selectedFilters.brands.includes(filterValue)) {
                selectedFilters.brands = selectedFilters.brands.filter(
                    (value) => value !== filterValue
                );
            } else {
                selectedFilters.brands.push(filterValue);
            }
            break;
        case FilterDataKeys.discounts:
            if (selectedFilters.discounts.includes(filterValue)) {
                selectedFilters.discounts = selectedFilters.discounts.filter(
                    (value) => value !== filterValue
                );
            } else {
                selectedFilters.discounts.push(filterValue);
            }
            break;
        case FilterDataKeys.genders:
            if (selectedFilters.genders.includes(filterValue)) {
                selectedFilters.genders = selectedFilters.genders.filter(
                    (value) => value !== filterValue
                );
            } else {
                selectedFilters.genders.push(filterValue);
            }
            break;
        default:
            break;
    }
    return selectedFilters;
};

export default updateFilter;