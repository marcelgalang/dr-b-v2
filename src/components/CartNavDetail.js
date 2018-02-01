import React, { PropTypes } from 'react'
import { Button } from 'react-bootstrap';

const CartNavDetail  = ({ products, total, totalQuantity, onCartClicked }) => {
  const hasProducts = products.length > 0
  const nodes = hasProducts ? (
      <div> {totalQuantity}</div>
  ) : (
    <em>Your cart is empty.</em>
  )


  return (
    <Button styles='btn' outline color="secondary"
      disabled={hasProducts ? true : false}>
      <div
        onClick={onCartClicked}
        href={'#cart'}>
        Cart:{nodes}
      </div>

    </Button>
  )
}



export default CartNavDetail
