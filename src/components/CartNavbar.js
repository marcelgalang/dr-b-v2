import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { checkout } from '../redux/modules/Cart'
import { getTotal, getCartProducts, getTotalQuantity } from '../redux/modules/reducers'
import CartNavDetail from '../components/CartNavDetail'
import { createCart } from '../redux/api/CartApi'

class CartNavbar extends Component {


  render(){
    const { products, total, cart, totalQuantity, externalId } = this.props

    return(
      <CartNavDetail
        products={products}
        total={total}
        totalQuantity={totalQuantity}
        onCartClicked={() => createCart(cart)}
        externalId={externalId} />
    )
  }
}





const mapStateToProps = (state) => ({
  products: getCartProducts(state),
  total: getTotal(state),
  totalQuantity: getTotalQuantity(state),
  externalId: state.cart.externalId,
  cart: (state.cart)
})



export default connect(
  mapStateToProps,
  { checkout }
)(CartNavbar)
