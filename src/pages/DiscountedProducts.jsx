import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterDiscoutedProducts } from "../Store/Slices/productSlice";
import Item from "../Components/Items/Item";

function DiscountedProducts() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.dproducts.filterDiscoutedProducts);

  useEffect(() => {
    dispatch(filterDiscoutedProducts());
  }, [dispatch]);

  return (
    <>
      {products.length > 0 ? (
        products.map((item) => <Item key={item.id} product={item} />)
      ) : (
        <p>No discounted products available.</p>
      )}
    </>
  );
}

export default DiscountedProducts;
