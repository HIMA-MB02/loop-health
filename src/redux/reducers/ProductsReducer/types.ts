export interface IAction {
    type: string;
    payload: any;
}

export interface IProductsReducerState {
    filters: IFilter,
    selectedFilters: IFilterData
}

export interface IFilter {
    data: IFilterData | null;
    error: IFilterError | null;
    loading: boolean;
}

export interface IFilterData {
    categories: string[];
    genders: string[];
    brands: string[];
    discounts: string[];
}

export const FilterDataKeys = {
    categories: 'categories',
    genders: 'genders',
    brands: 'brands',
    discounts: 'discounts'
};

export const DiscountTypes = {
    MORE_THAN_50: '> 50% off',
    LESS_THAN_50: '< 50% off>'
};

export interface IFilterError {
    message: string;
    statusCode: number;
}