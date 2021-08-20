import React from 'react';
import './App.css';
import { Navbar } from './components/atoms';
import { FilterContainer } from './components/containers';

const App: React.FunctionComponent = () => {
    return (
        <div>
            <Navbar />
            <div className='main-container container-fluid'>
                <div className='filter-flex'>
                    <FilterContainer />
                </div>
                <div className='products-flex'>someName</div>
            </div>
        </div>
    );
};

export default App;
