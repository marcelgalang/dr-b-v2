import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductDetail from './ProductDetail';
import ProductIndexItem from './ProductIndexItem';
import { Route } from 'react-router-dom';
import { getVisibleProducts } from '../redux/modules/Products';
import { Root, Main, Sidebar, SidebarItem } from '../styles/ProductStyle';
import { addToCart } from '../redux/modules/Cart';
import CartContainer from './CartContainer';
import { updateProduct } from '../redux/api/ProductsApi';
import ScrollableAnchor from 'react-scrollable-anchor';


class Tablets extends Component {
  render() {
    const { products, addToCart, counter } = this.props

    let tablets = products.filter(prodcuct => product.category.title === 'Tablet')
    console.log(tablets)



    return(
      <Root>
        <section>
          <div>{tablets.map((product) => (
            <SidebarItem key={product.id}>
              <ProductIndexItem
                key={product.id}
                product={product}

                onAddToCartClicked={() => addToCart(product.id)}
                />
            </SidebarItem>
          ))}</div>
        </section>
        <div>
          {
            <Route path="/products/:productId"  render={({match}) => (
              <ProductDetail product={products.find(product => product.id== match.params.productId)}/>
            )}/>

          }

        </div>
      </Root>
    )
  }
}

const mapStateToProps = state => ({
  products: getVisibleProducts(state.products),
  product: state.product,
  cart: state.cart,

})



export default connect(
  mapStateToProps, { addToCart }
)(Products)


