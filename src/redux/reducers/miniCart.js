import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/miniCart";
const initialState = {
  cartItems: []
};
export function miniCart(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART: {
      return Object.assign({}, state, {
        cartItems: state.cartItems.concat({
          id: action.id,
          item: action.item
        })
      });
    }
    case REMOVE_FROM_CART: {
      return Object.assign({}, state, {
        cartItems: state.cartItems.filter(element => {
          return element.id !== action.id;
        })
      });
    }
    default:
      return state;
  }
}
