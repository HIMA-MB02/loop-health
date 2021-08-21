import React from 'react';import { useDispatch, useSelector } from 'react-redux';
import { ReduxState } from '../../../redux';
import { fetchProducts, setProductsLoading } from '../../../redux/actions';
import { ProductCard } from '../../atoms';
;

const ProductsContainer: React.FunctionComponent = () => {
    const products = useSelector((state: ReduxState) => state.productsReducer.products);
    const dispatch = useDispatch();

    const renderProducts = () => {
        return products.data?.map((product) => (
            <ProductCard product={product} />
        ));
    }

    React.useEffect(() => {
        dispatch(setProductsLoading(true));
        dispatch(fetchProducts());
    }, [dispatch]);
    return (
        <>
            {products.data && products.data.length && (
                renderProducts()
            )}
        </>
    );
}

export default ProductsContainer;