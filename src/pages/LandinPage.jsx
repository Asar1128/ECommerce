import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";

import Header from "../Components/header/header";
import Footer from "../Components/footer/footer";

import products from "../Components/dummydata/dummydata";
import DiscountedProducts from "./DiscountedProducts";

function LandinPage() {
  return (
    <>
      <Header />
  <DiscountedProducts/>
      {/* {products.map((item, index) => {
        return (
          <div key={item.id}>
            <div>
              <img src={item.img} alt="" />
            </div>
            <div>{item.name}</div>
            <div>{item.size}</div>
            <div>{item.color}</div>
            <div>{item.gender}</div>
            <div>{item.price}</div>
          </div>
        );
      })} */}
      <Outlet />
      <Footer />
    </>
  );
}

export default LandinPage;
