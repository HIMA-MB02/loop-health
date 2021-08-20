import { IFilter, IFilterData, IProducts } from './types';


export const initialFilterData: IFilterData = {
    brands: [],
    categories: [],
    discounts: [],
    genders: []
};
export const initialFilter: IFilter = {
    data: initialFilterData,
    error: null,
    loading: false
};
export const initialProducts: IProducts = {
    data: [],
    error: null,
    loading: false
}
