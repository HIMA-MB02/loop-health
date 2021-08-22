import { ReduxState } from '..';
import getAPI from '../../api/getAPI';
import {
    getCategotiesFromObject,
    getFilteredProducts,
    updateFilter
} from '../../utils';
import {
    IFilterData,
    IProductData,
    IProducts
} from '../reducers/ProductsReducer/types';
import { AppDispatch } from '../store';
import { ACTION_TYPES } from './action.types';

let api = process.env.REACT_APP_DOMAIN ? process.env.REACT_APP_DOMAIN : '';

// Fetches the list of menu items to be displayed
export const fetchFilters = () => {
    return async (dispatch: AppDispatch) => {
        try {
            const result = await getAPI(api);
            if (result.products) {
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
        let filteredProducts: IProductData[] | null =
            getState().productsReducer.filteredProducts.data;

        if (filteredProducts) {
            filteredProducts = getFilteredProducts(
                filteredProducts,
                updatedFilters
            );
        }
        dispatch({
            type: ACTION_TYPES.SET_SELECTED_FILTERS,
            payload: {
                selectedFilters: updatedFilters,
                filteredProducts: {
                    data: filteredProducts,
                    error: null,
                    loading: false
                }
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

// self explainatory
export const setProductsLoading = (isLoading: boolean) => {
    return {
        type: ACTION_TYPES.SET_PRODUCTS_LOADING,
        payload: {
            loading: isLoading
        }
    };
};

// fetches list of products from the database
export const fetchProducts = () => {
    return async (dispatch: AppDispatch) => {
        try {
            const result = await getAPI(api);
            if (result.products) {
                const prods: IProducts = {
                    data: result.products as IProductData[],
                    error: null,
                    loading: false
                };
                dispatch({
                    type: ACTION_TYPES.SET_PRODUCTS_DATA,
                    payload: {
                        products: prods,
                        filteredProducts: prods
                    }
                });
            } else {
                throw new Error('Something went wrong!');
            }
        } catch (e) {
            const prods = {
                data: null,
                error: {
                    message: e instanceof Error ? e.message : e,
                    statusCode: 400
                },
                loading: false
            };
            dispatch({
                type: ACTION_TYPES.SET_PRODUCTS_DATA,
                payload: {
                    products: prods,
                    filteredProducts: prods
                }
            });
        }
    };
};

export const setSearchValue = (value: string) => {
    return {
        type: ACTION_TYPES.SET_SEARCH_VALUE,
        payload: {
            searchValue: value
        }
    };
};
