import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";

import Header from "../Components/header/header";
import Footer from "../Components/footer/footer";

import products from "../Components/dummydata/dummydata";
import DiscountedProducts from "./DiscountedProducts";
import Item from "../Components/Items/Item";
import BestSales from "./BestSales";
import StaticMenShoes from "./StaticMenShoes";

function LandinPage() {
  return (
    <>
     <Header />
    <div className="flex gap-2.5 flex-wrap justify-center">
    <DiscountedProducts/>
    </div>
    <BestSales/>
    <StaticMenShoes/>
      <Outlet />
      <Footer />
    </>
  );
}

export default LandinPage;
