import React from 'react';
import { useDispatch } from 'react-redux';
import { setSearchValue } from '../../../redux/actions';
import './styles.css';

const Navbar: React.FunctionComponent = () => {
    const dispatch = useDispatch();
    return (
        <nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
            <div className='container-fluid'>
                <div className='navbar-brand'>Clothes-Moi</div>
            </div>
            <div className='search-bar'>
                <i className='fa fa-search fa-icon-position'></i>
                <input
                    type='text'
                    className='search-control form-control'
                    placeholder='Search for a brand, product or category'
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        dispatch(setSearchValue(e.target.value))
                    }
                />
            </div>
        </nav>
    );
};

export default Navbar;
