export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export function addToCart(id, item) {
  return { type: ADD_TO_CART, id: id, item: item };
}

export function removeFromCart(id) {
  return { type: REMOVE_FROM_CART, id: id };
}
