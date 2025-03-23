import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterDiscoutedProducts } from "../Store/Slices/productSlice";
import Item from "../Components/Items/Item";
import pmimage from "../assets/imgs/PromotionImage.png";

function DiscountedProducts() {
  const dispatch = useDispatch();
  const products = useSelector(
    (state) => state.dproducts.filterDiscoutedProducts
  );

  useEffect(() => {
    dispatch(filterDiscoutedProducts());
  }, [dispatch]);

  return (
    <>
      <div className="relative">
        <div className="h-[600px] w-[100%] overflow-hidden">
          <img
            className="w-[100dvw] h-full object-cover"
            src={pmimage}
            alt="Banner Image"
          />
        </div>
        {/* Sale */}
        <p className="absolute text-white font-bold text-4xl top-[30%] left-[120px]">
          Super Flash Sale <br /> 50% off
        </p>

        {/* Discounted Prices  */}
        <div className="flex mt-[-100px] justify-center">
          {products.length > 0 ? (
            products
              .slice(0, 3)
              .map((item) => <Item key={item.id} product={item} />)
          ) : (
            <p>No discounted products available.</p>
          )}
        </div>
      </div>
    </>
  );
}

export default DiscountedProducts;
