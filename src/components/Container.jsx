import React from 'react'
import Banner from './Banner'
import SaleComponents from './SaleComponents'

const Container = () => {
  return (
    <div>
      <Banner></Banner>
     <div className="mx-40">
     <SaleComponents></SaleComponents>
     </div>
    </div>
  )
}

export default Container