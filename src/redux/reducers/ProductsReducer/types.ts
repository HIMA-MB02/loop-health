export interface IAction {
    type: string;
    payload: any;
}

export interface IProductsReducerState {
    filters: IFilter,
    selectedFilters: IFilterData
    products?: IProducts
}

export interface IProducts {
    data: IProductData[] | null;
    error: IError | null;
    loading: boolean;
}

export interface IProductData {
    additionalInfo: string;
    brand: string;
    category: string;
    effectiveDiscountAmountAfterTax: number;
    discountDisplayLabel: string;
    gender: string;
    productName: string;
    mrp: number;
    price: number;
    rating: number;
    ratingCount: number;
}
export interface IFilter {
    data: IFilterData | null;
    error: IError | null;
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

export interface IError {
    message: string;
    statusCode: number;
}