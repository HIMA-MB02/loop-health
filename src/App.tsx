import React from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import { FilterContainer } from './components/containers';
import { fetchCategories } from './redux/actions';

const App: React.FunctionComponent = () => {
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);
    return (
        <div className='App'>
            <div className='container-fluid'>
                <div className='filter-flex'>
                    <FilterContainer />
                </div>
                <div className='products-flex'></div>
            </div>
        </div>
    );
};

export default App;
