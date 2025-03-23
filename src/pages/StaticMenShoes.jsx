import React from 'react'
import Button from '../Components/Button/Button'
import StaticData from "./DataSec"

// Images
import StaticShoeImage from "../assets/imgs/StaticShoe.svg";
import Container from '../Components/Container/Container';



function StaticMenShoes() {
  return (
   <>
  <div className="shop-sec bg-[#40BFFF] mt-[50px]">
 <Container>
 <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
      {/* Text Section */}
      <div className="shop-text space-y-3 text-center md:text-left text-base/10">
        <p className=" font-semibold text-white text-5xl">Adidas Men Running Sneakers</p>
        <p className=" text-white">Performance and design. Taken right to the edge.</p>
        <Button className="bg-none border-b-2 border-white text-white hover:opacity-50" >Shop Now</Button>
      </div>

      {/* Image Section */}
      <div className="shop-img flex justify-center">
        <img 
          src={StaticShoeImage} 
          alt="Adidas Sneakers" 
          className="w-full max-w-[794px] h-auto"
        />
      </div>
    </div>
 </Container>
</div>
<StaticData/>

   </>
  )
}

export default StaticMenShoes