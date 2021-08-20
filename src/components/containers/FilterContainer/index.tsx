import React from 'react';
import './styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { ReduxState } from '../../../redux';
import { fetchCategories, setFilterLoading } from '../../../redux/actions';
import { FilterDataKeys } from '../../../redux/reducers/ProductsReducer/types';
import { CheckboxForm } from '../../atoms';

const FilterContainer: React.FunctionComponent = () => {
    const dispatch = useDispatch();
    const filters = useSelector(
        (state: ReduxState) => state.productsReducer.filters
    );

    React.useEffect(() => {
        dispatch(setFilterLoading(true));
        dispatch(fetchCategories());
    }, [dispatch]);
    return (
        <div className='mb-2 filter-bar'>
            <div className='f-heading'>Filters</div>
            <hr />
            {filters.data && (
                <div>
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
                        displayBorderBottom={false}
                    />
                </div>
            )}
            {filters.error && (
                <p className='text-danger filter-error'>{filters.error.message}</p>
            )}
        </div>
    );
};

export default FilterContainer;
