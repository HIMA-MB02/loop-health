import { ReduxState } from '..';
import getAPI from '../../api/getAPI';
import { getCategotiesFromObject } from '../../utils';
import updateFilter from '../../utils/updateFilter';
import {
    IFilterData, IProductData
} from '../reducers/ProductsReducer/types';
import { AppDispatch } from '../store';
import { ACTION_TYPES } from './action.types';

let api = 'https://demo7242716.mockable.io/products';

/** ACTIONS FOR FILTERS */

// Fetches the list of menu items to be displayed
export const fetchFilters = () => {
    return async (dispatch: AppDispatch) => {
        try {
            const result = await getAPI(api);
            if (result.products) {
                console.log(result.products);
                const filterData: IFilterData = getCategotiesFromObject(
                    result.products
                );
                dispatch({
                    type: ACTION_TYPES.SET_FILTER_DATA,
                    payload: {
                        filters: {
                            data: filterData,
                            error: null,
                            loading: false
                        }
                    }
                });
            } else {
                throw new Error('Something went wrong!');
            }
        } catch (e) {
            const msg = e instanceof Error ? e.message : e;
            dispatch({
                type: ACTION_TYPES.SET_FILTER_DATA,
                payload: {
                    filters: {
                        data: null,
                        error: {
                            message: msg,
                            statusCode: 400
                        },
                        loading: false
                    }
                }
            });
        }
    };
};


// Updates the seleted filters in the redux store.
export const setSelectedFilters = (
    filterDataKey: string,
    filterValue: string
) => {
    return (dispatch: AppDispatch, getState: () => ReduxState) => {
        const selectedFilters: IFilterData =
            getState().productsReducer.selectedFilters;
        const updatedFilters: IFilterData = updateFilter(
            filterValue,
            filterDataKey,
            selectedFilters
        );
        dispatch({
            type: ACTION_TYPES.SET_SELECTED_FILTERS,
            payload: {
                selectedFilters: updatedFilters
            }
        });
    };
};

// self explainatory
export const setFilterLoading = (isLoading: boolean) => {
    return {
        type: ACTION_TYPES.SET_FILTER_LOADING,
        payload: {
            loading: isLoading
        }
    };
};


/** ACTIONS FOR PRODUCTS */
export const fetchProducts = () => {
    return async (dispatch: AppDispatch) => {
        try {
            const result = await getAPI(api);
            if (result.products) {
                dispatch({
                    type: ACTION_TYPES.SET_PRODUCTS_DATA,
                    payload: {
                        products: {
                            data: result.products as IProductData[],
                            error: null,
                            loading: false
                        }
                    }
                });
            } else {
                throw new Error('Something went wrong!');
            }
        } catch (e) {
            const msg = e instanceof Error ? e.message : e;
            dispatch({
                type: ACTION_TYPES.SET_PRODUCTS_DATA,
                payload: {
                    products: {
                        data: null,
                        error: {
                            message: msg,
                            statusCode: 400
                        },
                        loading: false
                    }
                }
            });
        }
    };
};