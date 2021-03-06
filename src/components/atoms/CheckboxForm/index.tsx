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
    const selectedFilters = useSelector(
        (state: ReduxState) => state.productsReducer.selectedFilters
    );
    const [filterItems, setFilterItems] = React.useState<string[]>([]);
    const [showSearch, setShowSearch] = React.useState(false);

    React.useEffect(() => {
        setFilterItems(items);
    }, [items]);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (items.length) {
            setFilterItems(
                items.filter((i) =>
                    i.toLowerCase().includes(e.target.value.toLowerCase())
                )
            );
        }
    };
    const handleCheck = (itemName: string) => {
        dispatch(setSelectedFilters(filterDataKey, itemName));
    };
    const renderSkeleton = () => {
        return <FilterListSkeleton times={5} />;
    };
    const renderChecks = () => {
        return filterItems.map(
            (itemName, index) =>
                index < 10 && (
                    <div className='check-row' key={`${title}-${index}`}>
                        <button
                            className={`mr-1 check-style ${
                                selectedFilters[filterDataKey].includes(
                                    itemName
                                )
                                    ? 'btn-checked'
                                    : ''
                            }`}
                            onClick={() => handleCheck(itemName)}
                        ></button>
                        <label htmlFor={itemName}>{itemName}</label>
                    </div>
                )
        );
    };
    return (
        <div className='filter-box'>
            <div className='filter-row f-title'>
                {title}
                <button
                    className='search-filters'
                    onClick={() => setShowSearch(!showSearch)}
                >
                    <i className='fa fa-search'></i>
                </button>
            </div>
            {showSearch && (
                <div className='form-group'>
                    <input
                        type='text'
                        className='form-control search-filters-input'
                        placeholder={`Search for ${title.toLowerCase()}`}
                        onChange={handleSearch}
                    />
                </div>
            )}
            <div className='filter-row'>
                {renderChecks()}
                {isLoading && renderSkeleton()}
                {filterItems.length > 10 && (
                    <p className='text-danger check-row'>
                        +{filterItems.length - 10} more
                    </p>
                )}
                {!filterItems.length && !isLoading && (
                    <p className='text-danger check-row'>Nothing found!</p>
                )}
                {displayBorderBottom && <hr className='f-divider' />}
            </div>
        </div>
    );
};

export default CheckboxForm;
