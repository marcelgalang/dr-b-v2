import React, { Component } from 'react'
import { Link, Route  } from 'react-router-dom';
import ProductDetail from '../components/ProductDetail';
import { Button } from 'react-bootstrap';



const ProductIndexItem = ({product, onAddToCartClicked}) => {
  const imgChoice = product.category.title == 'Phone' ?
      '/imgs/iphone.png' : product.category.title == 'Mac' ? '/imgs/macbook.png' : '/imgs/ipad.png'


  return (
      <article>

          <img src= {`${process.env.PUBLIC_URL +imgChoice}`} width="100px" height="100px" alt="product img"/>

          <span ><h6>{product.title} </h6>
            &#36;{product.price} |</span>


            <span> {product.description}</span>


        <Button
          outline color="secondary" size="sm"
          onClick={onAddToCartClicked}>
          add to cart
        </Button>

      </article>
    )
}


export default ProductIndexItem

class ProductLikes extends Component {
  constructor() {
    super();

    this.state = {
      counter: 0,
    };

     this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      counter: ++this.state.counter,
    });
  }

  render() {

    return(
      <div><button
      onClick={this.handleClick}>
      Likes
      </button>
       {this.state.counter}
      </div>
    )
  }
}
