import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ReduxState } from '../../../redux';
import { setSelectedFilters } from '../../../redux/actions';
import { ICheckbox } from './types';

const Checkbox: React.FunctionComponent<ICheckbox> = ({
    itemName,
    filterDataKey
}) => {
    const selectedFilter = useSelector(
        (state: ReduxState) => state.productsReducer.selectedFilters
    );
    const dispatch = useDispatch();
    const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setSelectedFilters(filterDataKey, e.currentTarget.value));
    };
    return (
        <div className='check-row'>
            <input
                type='checkbox'
                className='mr-1'
                id={itemName}
                name={itemName}
                value={itemName}
                defaultChecked={selectedFilter[filterDataKey].includes(
                    itemName
                )}
                onChange={handleCheck}
            />
            <label htmlFor={itemName}>{itemName}</label>
        </div>
    );
};

export default Checkbox;
