import React from 'react';
import { useSelector } from 'react-redux';
import { ReduxState } from '../../../redux';
import { FilterDataKeys } from '../../../redux/reducers/ProductsReducer/types';
import { CheckboxForm } from '../../atoms';

const FilterContainer: React.FunctionComponent = () => {
    const filters = useSelector(
        (state: ReduxState) => state.productsReducer.filters
    );
    return (
        <>
            {' '}
            {filters.data && (
                <>
                    <CheckboxForm
                        filterDataKey={FilterDataKeys.categories}
                        title='Categories'
                        items={filters.data.categories}
                    />
                    <CheckboxForm
                        filterDataKey={FilterDataKeys.brands}
                        title='Brands'
                        items={filters.data.brands}
                    />
                    <CheckboxForm
                        filterDataKey={FilterDataKeys.genders}
                        title='Genders'
                        items={filters.data.genders}
                    />
                    <CheckboxForm
                        filterDataKey={FilterDataKeys.discounts}
                        title='Discounts'
                        items={filters.data.discounts}
                    />
                </>
            )}
        </>
    );
};

export default FilterContainer;
