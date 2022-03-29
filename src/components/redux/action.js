// const addGoodsToCart = {
//   type: 'ADD_GOOD_TO_CART',
//   text: 'Item is added to cart'
// }

// const removeGoodsToCart = {
//   type: 'REMOVE_GOOD_TO_CART',
//   text: 'Remove'
// }

export function addGoodToCart(id) {
  return {
    type: 'ADD_GOOD_TO_CART',
    payload: {
      id: id
    }
  }
}

export function removeGoodsToCar(id) {
  return {
    type: 'REMOVE_GOOD_TO_CART',
    payload: {
      id: id
    }
  }
}