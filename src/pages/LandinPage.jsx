import React from 'react'
import { Outlet } from 'react-router-dom'

import Header from '../Components/header/header'
import Footer from '../Components/footer/footer'

function LandinPage() {
  return (
   <>
   <Header />
    <div>LandinPage</div>
   <Outlet/>
    <Footer />
   </>
  )
}

export default LandinPage