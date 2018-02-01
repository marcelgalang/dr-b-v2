import React from 'react'

const Product = ({ price, quantity, title, category }) => (

  <div>
    {category.title}: {title} - {quantity ? ` ${quantity} x` : null} &#36;{price}
  </div>
)





export default Product
