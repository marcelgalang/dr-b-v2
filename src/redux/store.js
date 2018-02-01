
import { createStore, applyMiddleware } from 'redux'
import reducer from './modules/reducers'
import thunk from 'redux-thunk'
import { getAllProducts } from './api/ProductsApi'
import { getAllCarts } from './api/CartApi'


export function configureStore(){
  return createStore(reducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...[ thunk ]))
}

export const store = configureStore()

store.dispatch(getAllProducts())
store.dispatch(getAllCarts())
