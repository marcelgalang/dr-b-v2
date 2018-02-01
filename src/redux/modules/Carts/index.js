export const LOAD_CARTS_SUCCESS = 'LOAD_CARTS_SUCCESS'

const initialState = {
  carts: []
}

export function loadCartsSuccess(carts) {
  return {type: LOAD_CARTS_SUCCESS, carts};
}

const carts = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CARTS_SUCCESS:
      return action.carts

    default:
      return state
  }
}

export default carts
