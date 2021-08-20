import { ACTION_TYPES } from '../actions/types';
import { initialFilterData, initialFilter } from './initialData';
import { IAction, IProductsReducerState } from './types';

const initialState: IProductsReducerState = {
    filters: initialFilter,
    selectedFilters: initialFilterData
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
            }
        default:
            return _state;
    }
};
export default productsReducer;
