import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CheckboxForm } from './components/atoms';
import { ReduxState } from './redux';
import { fetchCategories } from './redux/actions';
import { FilterDataKeys } from './redux/reducers/types';

const App: React.FunctionComponent = () => {
    const dispatch = useDispatch();
    const filters = useSelector(
        (state: ReduxState) => state.productsReducer.filters
    );
    React.useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);
    return (
        <div className='App'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-3'>
                        {filters.data && (
                            <CheckboxForm
                                filterDataKey={FilterDataKeys.categories}
                                title='Categories'
                                items={filters.data.categories}
                            />
                        )}
                    </div>
                    <div className='col-md-9'></div>
                </div>
            </div>
        </div>
    );
};

export default App;
