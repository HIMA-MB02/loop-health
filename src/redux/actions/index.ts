import { ReduxState } from '..';
import getAPI from '../../api/getAPI';
import { getCategotiesFromObject } from '../../utils';
import { FilterDataKeys, IFilter, IFilterData } from '../reducers/ProductsReducer/types';
import { AppDispatch } from '../store';
import { ACTION_TYPES } from './action.types';
// import { ACTION_TYPES } from './types';

let api = 'https://demo7242716.mockable.io/products';

export const fetchCategories = () => {
    return async (dispatch: AppDispatch) => {
        try {
            const result = await getAPI(api);
            const filterData: IFilterData = getCategotiesFromObject(
                result.products
            );
            const filters: IFilter = {
                data: filterData,
                error: null,
                loading: false
            };
            dispatch({
                type: ACTION_TYPES.SET_FILTER_DATA,
                payload: {
                    filters
                }
            });
        } catch (e) {
            const filters: IFilter = {
                data: null,
                error: {
                    message: e.message,
                    statusCode: e.statusCode
                },
                loading: false
            };
            dispatch({
                type: ACTION_TYPES.SET_FILTER_DATA,
                payload: {
                    filters
                }
            });
        }
    };
};

const updateFilter = (filterValue: string, filterDataKey: string, selectedFilters: IFilterData) => {
        switch (filterDataKey) {
            case FilterDataKeys.categories:
                if (selectedFilters.categories.includes(filterValue)) {
                    selectedFilters.categories =
                        selectedFilters.categories.filter(
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
                    selectedFilters.discounts =
                        selectedFilters.discounts.filter(
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
}

export const setSelectedFilters = (
    filterDataKey: string,
    filterValue: string,
    filterIsChecked: boolean
) => {
    return (dispatch: AppDispatch, getState: () => ReduxState) => {
        const selectedFilters: IFilterData =
            getState().productsReducer.selectedFilters;
        const updatedFilters: IFilterData = updateFilter(filterValue, filterDataKey, selectedFilters);
        dispatch({
            type: ACTION_TYPES.SET_SELECTED_FILTERS,
            payload: {
                selectedFilters: updatedFilters
            }
        })
    };
};
