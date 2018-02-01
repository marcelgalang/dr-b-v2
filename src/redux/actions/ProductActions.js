import ProductsApi from '../api/ProductsApi'

export const loadProducts = () => dispatch => {
  ProductsApi.getAllProducts().then(product => {
    dispatch(loadProductsSuccess(products));
  }).catch(error => {
    throw(error)
  })
}

export function loadProductsSuccess(products) {
  return {type: 'LOAD_PRODUCTS_SUCCESS', cats};
}
