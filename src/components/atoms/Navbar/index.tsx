import React from 'react';
import './styles.css';

const Navbar: React.FunctionComponent = () => {
    return (
        <nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
            <div className='container-fluid'>
                <div className='navbar-brand'>Dashboard</div>
            </div>
            <div className='search-bar'>
                <i className='fa fa-search fa-icon-position'></i>
                <input
                    type='text'
                    className='search-control form-control'
                    placeholder='Search for a brand, product or category'
                />
            </div>
        </nav>
    );
};

export default Navbar;
