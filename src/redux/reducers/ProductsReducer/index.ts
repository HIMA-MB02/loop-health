import { ACTION_TYPES } from '../../actions/action.types';
import { initialFilterData, initialFilter, initialProducts } from './initialData';
import { IAction, IProductsReducerState } from './types';

const initialState: IProductsReducerState = {
    filters: initialFilter,
    selectedFilters: initialFilterData,
    products: initialProducts
};

const productsReducer = (
    _state: IProductsReducerState = initialState,
    { type, payload }: IAction
): IProductsReducerState => {
    switch (type) {
        case ACTION_TYPES.SET_FILTER_DATA:
            return {
                ..._state,
                filters: payload.filters
            };
        case ACTION_TYPES.SET_SELECTED_FILTERS:
            return {
                ..._state,
                selectedFilters: payload.selectedFilters
            };
        case ACTION_TYPES.SET_FILTER_LOADING:
            return {
                ..._state,
                filters: {
                    ..._state.filters,
                    loading: payload.loading
                }
            };
        case ACTION_TYPES.SET_PRODUCTS_DATA:
            return {
                ..._state,
                products: payload.products
            }
        default:
            return _state;
    }
};
export default productsReducer;
