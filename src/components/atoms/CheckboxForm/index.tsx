import React from 'react';
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
        console.log(
            e.currentTarget.value,
            e.currentTarget.checked,
            filterDataKey
        );
        dispatch(setSelectedFilters(filterDataKey, e.currentTarget.value, e.currentTarget.checked))
    };
    const renderChecks = () => {
        return items.map((itemName, index) => (
            <div className='col-12' key={`${title}-${index}`}>
                <input type='checkbox' id={itemName} name={itemName} value={itemName} onChange={(e) => handleCheck(e)}/>
                <label htmlFor={itemName}>{itemName}</label>
            </div>
        ));
    };
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>{title}</div>
                </div>
                <div className='row'>{renderChecks()}</div>
            </div>
        </>
    );
};

export default CheckboxForm;
