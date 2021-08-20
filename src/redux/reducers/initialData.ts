import { IFilter, IFilterData } from './types';


export const initialFilterData: IFilterData = {
    brands: [],
    categories: [],
    discounts: [],
    genders: []
};
export const initialFilter: IFilter = {
    loading: false,
    error: null,
    data: initialFilterData
};
