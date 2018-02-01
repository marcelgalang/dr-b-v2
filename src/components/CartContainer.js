import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { checkout } from '../redux/modules/Cart'
import { getTotal, getCartProducts } from '../redux/modules/reducers'
import Cart from '../components/Cart'
import { Root, Main, Sidebar } from '../styles/ProductStyle'
import Products from './Products'

const CartContainer = ({ products, total, checkout, cart }) => (
  <Root>

  <Cart
    products={products}
    total={total}
    onCheckoutClicked={() => checkout(products)}
    />

  </Root>
)



const mapStateToProps = (state) => ({
  products: getCartProducts(state),
  total: getTotal(state)
})



export default connect(
  mapStateToProps,
  { checkout }
)(CartContainer)
