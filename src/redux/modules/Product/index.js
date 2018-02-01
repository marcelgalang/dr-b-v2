const INCREASE_COUNT ='INCREASE_COUNT'

export const addLike = () => ({
  type: INCREASE_COUNT,
  
})

const counter = (state = 0, action) => {
  switch (action.type) {
    case INCREASE_COUNT:

    return state + 1

    default:
      return state
  }
}

export default counter
