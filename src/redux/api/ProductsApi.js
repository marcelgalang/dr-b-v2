import { receiveProducts } from '../modules/Products'

const url = `localhost:3000`
export const getAllProducts = () => dispatch => {
  fetch(`http://localhost:3000/api/products`)
    .then(response => response.json())
    .then(products => {
    dispatch(receiveProducts(products))
  })
}

export const updateProduct = (product) => {
  console.log(JSON.stringify({product: product}))
  fetch(`/api/products/${product.id}`, {
    method: 'PUT',
    headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify({product: product})
  })
  .then(response => response.json()
    ).catch(error => {
      return error;
    });

  }
