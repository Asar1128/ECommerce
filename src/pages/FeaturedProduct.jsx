import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Item from '../Components/Items/Item';
import { featureProduct } from '../Store/Slices/productSlice';

function FeaturedProduct() {
    const product = useSelector((state) => state.dproducts.featureProduct || []);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(featureProduct());
    }, [dispatch]);

    console.log("Products Found:", product); 

    return (
        <div className="max-w-6xl mx-auto p-6">
            <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
                Featured Products
            </h2>

            {product.length > 0 ? (
                <div className="flex justify-center">
                    {product.slice(0, 3).map((item) => (
                        <div key={item.id} className="rounded-lg p-4 hover:scale-105 transition-transform">
                            <Item product={item} />
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-center text-gray-600 text-lg">No Featured Products Found</p>
            )}
        </div>
    );
}

export default FeaturedProduct;
