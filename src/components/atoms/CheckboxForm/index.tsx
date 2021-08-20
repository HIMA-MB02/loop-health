import React from 'react';
import './styles.css';
import { useDispatch } from 'react-redux';
import { setSelectedFilters } from '../../../redux/actions';
import { ICheckboxForm } from './types';

const CheckboxForm: React.FunctionComponent<ICheckboxForm> = ({
    title,
    filterDataKey,
    items
}) => {
    const dispatch = useDispatch();

    const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(
            setSelectedFilters(
                filterDataKey,
                e.currentTarget.value,
                e.currentTarget.checked
            )
        );
    };
    const renderChecks = () => {
        return items.map((itemName, index) => (
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
        ));
    };
    return (
        <div className='filter-box'>
            <div className='filter-row f-title'>{title}</div>
            <div className='filter-row'>{renderChecks()}</div>
        </div>
    );
};

export default CheckboxForm;
