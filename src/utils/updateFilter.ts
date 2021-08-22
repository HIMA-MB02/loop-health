import { IFilterData } from '../redux/reducers/ProductsReducer/types';

const updateFilter = (
    filterValue: string,
    filterDataKey: string,
    selectedFilters: IFilterData
) => {
    if (selectedFilters[filterDataKey].includes(filterValue)) {
        selectedFilters[filterDataKey] = selectedFilters[filterDataKey].filter(
            (value) => value !== filterValue
        );
    } else {
        selectedFilters[filterDataKey].push(filterValue);
    }
    return selectedFilters;
};

export default updateFilter;
