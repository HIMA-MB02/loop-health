import React from 'react';import { useDispatch, useSelector } from 'react-redux';
import { ReduxState } from '../../../redux';
import { fetchProducts, setProductsLoading } from '../../../redux/actions';
import { IProductData } from '../../../redux/reducers/ProductsReducer/types';
import ProductCardListSkeleton from '../../../skeletons/ProductCardListSkeleton';
import { ProductCard } from '../../atoms';
;

const ProductsContainer: React.FunctionComponent = () => {
    const dispatch = useDispatch();
    const products = useSelector((state: ReduxState) => state.productsReducer.filteredProducts);

    // NOTE: Since search and filter functionaliy are inter-dependent, we need a useState inside the component, 
    // so as to apply search parameters inside this component only once data has been filtered inside redux.
    // If search and filter are independent, we could handle the search paraeters inside redux itself. Hence abstracting this logic from react.
    const [productsState, setProductsState] = React.useState<IProductData[]>([]);
    const searchValue = useSelector((state: ReduxState) => state.productsReducer.searchValue);
    console.log(searchValue);

    React.useEffect(() => {
        if (searchValue && productsState.length) {
            setProductsState(
                productsState.filter(
                    (p) =>
                        p.brand
                            .toLowerCase()
                            .includes(searchValue.toLowerCase()) ||
                        p.category
                            .toLowerCase()
                            .includes(searchValue.toLowerCase()) ||
                        p.productName
                            .toLowerCase()
                            .includes(searchValue.toLowerCase())
                )
            );
        } else if (!searchValue && products.data) {
            setProductsState(products.data);
        }
    }, [searchValue, productsState, products]);

    React.useEffect(() => {
        if (products.data && products.data.length) {
            setProductsState(products.data);
        }
    }, [products]);

    React.useEffect(() => {
        dispatch(setProductsLoading(true));
        dispatch(fetchProducts());
    }, [dispatch]);

    const renderProducts = () => {
        return productsState.map((product) => (
            <ProductCard product={product} />
        ));
    }

    return (
        <>
            {productsState && !!productsState.length && renderProducts()}
            {products.loading && <ProductCardListSkeleton times={8} />}
            {products.error && <div className='text-danger'>{products.error.message}</div>}
            {!products.loading && !productsState.length && <h2 className='text-danger m-3'>Nothing Found!</h2>}
        </>
    );
}

export default ProductsContainer;