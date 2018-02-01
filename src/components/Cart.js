import React, { PropTypes } from 'react';
import Product from './Product';
import { Button } from 'react-bootstrap';



const CartDetail  = ({ products, total, onCheckoutClicked, onCartClicked }) => {
  const hasProducts = products.length > 0
  const nodes = hasProducts ? (
    products.map(product =>
      <Product
        category={product.category}
        title={product.title}
        price={product.price}
        quantity={product.quantity}
        key={product.id}
      />
    )
  ) : (
    <em>Your cart is empty.</em>
  )

  return (
    <div>
      <h3>{nodes}</h3>
      <p>Total: &#36;{total}</p>
      <Button color="secondary"

        onClick={onCartClicked}>
        Save Cart</Button>
        &nbsp;
      <Button
        color="secondary"
        onClick={onCheckoutClicked}
        disabled={hasProducts ? '' : true }>
        Checkout
      </Button>
    </div>
  )
}



export default CartDetail
