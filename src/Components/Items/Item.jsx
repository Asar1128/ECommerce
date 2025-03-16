import React from "react";
import products  from "../dummydata/dummydata";

function Item({ product }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 transition-transform transform hover:scale-105 w-50 m-5">
      {/* Product Image */}
      <img src={product.img} alt={product.name} className="w-full h-48 object-cover rounded-md" />

      {/* Product Title */}
      <p className="mt-3 text-lg font-semibold text-gray-800">{product.name}</p>

      {/* Product Details */}
      <p className="text-sm text-gray-600">{product.type} - {product.gender}</p>
      <p className="text-sm text-gray-600">Color: {product.color}</p>
      <p className="text-sm text-gray-600">Size: {product.size}</p>

      {/* Pricing Section */}
      <div className="price flex items-center gap-3 mt-2">
        {product.onSale ? (
          <>
            <div className="old_price text-gray-500 line-through text-sm">${product.price}</div>
            <div className="new_price text-xl font-bold text-red-600">${product.discountedPrice}</div>
          </>
        ) : (
          <div className="new_price text-xl font-bold text-gray-800">${product.price}</div>
        )}
      </div>
    </div>
  );
}

export default Item;
