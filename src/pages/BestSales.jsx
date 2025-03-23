import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Item from "../Components/Items/Item";
import { filterProducts } from "../Store/Slices/productSlice";

function BestSales() {
    const dispatch = useDispatch();

    const products = useSelector((state) => state.dproducts.filtereProducts) || [];

    useEffect(() => {
        dispatch(filterProducts("All"));
    }, [dispatch]);

    const btns = ["All", "Bags", "Sneakers", "Belt"];

    const [visiblecount, setvisiblecount] = useState(6)
    const handleMoreCount = () => {
        setvisiblecount(prevCount => prevCount + 3)
    }

    return (
        <>
            {/* Heading */}
            <div className="bold text-center mt-9 mb-8"> Best Seller</div>

            {/* Buttons */}
            <div className="flex justify-center gap-5">
                {btns.map((btn, index) => (
                    <button
                        key={index}
                        className="bg-gray-200 px-4 py-2 rounded-md mb-8"
                        onClick={() => dispatch(filterProducts(btn))}
                    >
                        {btn}
                    </button>
                ))}
            </div>

            {/* Product List */}
            <div className="flex flex-wrap justify-center gap-5 mb-5">
                {products.length > 0 ? (
                    products.slice(0, visiblecount).map((item) => <Item key={item.id} product={item} />)
                ) : (
                    <p>No products found</p>
                )}
            </div>
            {/* Button */}
            <button
                onClick={handleMoreCount}
                className="mt-8 block mx-auto px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 hover:scale-105 transition-transform">
                Load More
            </button>
        </>
    );
}

export default BestSales;
