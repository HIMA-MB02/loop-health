import React from 'react';
import './styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedFilters } from '../../../redux/actions';
import { ICheckboxForm } from './types';
import { ReduxState } from '../../../redux';
import { FilterListSkeleton } from '../../../skeletons';

const CheckboxForm: React.FunctionComponent<ICheckboxForm> = ({
    title,
    filterDataKey,
    items,
    displayBorderBottom = true
}) => {
    const dispatch = useDispatch();
    const isLoading = useSelector(
        (state: ReduxState) => state.productsReducer.filters.loading
    );

    const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(
            setSelectedFilters(
                filterDataKey,
                e.currentTarget.value,
                e.currentTarget.checked
            )
        );
    };
    const renderSkeleton = () => {
        return <FilterListSkeleton times={5} />;
    };
    const renderChecks = () => {
        return items.map(
            (itemName, index) =>
                index < 10 && (
                    <div className='check-row' key={`${title}-${index}`}>
                        <input
                            type='checkbox'
                            className='mr-1'
                            id={itemName}
                            name={itemName}
                            value={itemName}
                            onChange={(e) => handleCheck(e)}
                        />
                        <label htmlFor={itemName}>{itemName}</label>
                    </div>
                )
        );
    };
    return (
        <div className='filter-box'>
            <div className='filter-row f-title'>{title}</div>
            <div className='filter-row'>
                {renderChecks()}
                {isLoading && renderSkeleton()}
                {items.length > 10 && (
                    <p className='text-danger check-row'>
                        +{items.length - 10} more
                    </p>
                )}
                {displayBorderBottom && <hr className='f-divider' />}
            </div>
        </div>
    );
};

export default CheckboxForm;
