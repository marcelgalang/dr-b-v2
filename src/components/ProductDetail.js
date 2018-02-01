import React, { Component } from 'react'

class ProductDetail extends Component{


  render(){
    const { product } = this.props

    return (
      <div>
        <div>
          <div>{product.category.title} service</div>
          <h1>{product.title}</h1>
          <h2>description: {product.description}</h2> <div>&#36;{product.price}</div>
        </div>

      </div>
    )
  }
}




export default ProductDetail
