import { loadCartsSuccess } from '../modules/Carts'

  export const getAllCarts =() => dispatch => {

    fetch(`http://localhost:3000/api/carts`)
    .then(response => response.json())
    .then(carts => {
      dispatch(loadCartsSuccess(carts))
    })
    .catch(error => {
      return error;
      });
    }

  export const updateCart=(cart)=> {

    fetch(`/api/carts/${cart.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({cart: cart})
    })
    .then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }


  export const createCart = (cart) => {
    const formattedCart = {
      product_ids: cart.addedIds,
      quantity_by_id: JSON.stringify(cart.quantityById),
    }
    fetch(`/api/carts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({cart: formattedCart})
    })
    .then(response =>  response.json()
    ).catch(error => {
      return error;
    });
  }
