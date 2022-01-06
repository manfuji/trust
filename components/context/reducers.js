import {
  ADD_TO_CART,
  AUTH,
  AUTH_FAIL,
  DECREASE_QTY,
  INCREASE_QTY,
  LOGOUT,
  REMOVE_FROM_CART,
  USER,
} from "./Types";

export const Reducers = (state, action) => {
  switch (action.type) {
    case AUTH:
      return {
        ...state,
        isAuthenticated: true,
        isAdmin: action.payload.isAdmin,
        token: action.payload.token,
        username:action.payload.username,
        profilePic:action.payload.profilePic,
        userId:action.payload.userId
      };

    case LOGOUT:
      return {
        isAuthenticated: false,
        isAdmin: false,
        token: "",
      };
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, qty: 1 }],
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((c) => c.id !== action.payload.id),
      };
    case INCREASE_QTY:
      return {
        ...state,
        cart: state.cart.filter((c) =>
          c.id === action.payload.id ? (c.qty += 1) : c.qty
        ),
      };
    case DECREASE_QTY:
      return {
        ...state,
        cart: state.cart.filter((c) =>
          c.id === action.payload.id && c.qty > 1
            ? (c.qty -= 1)
            : c.id !== action.payload.id
        ),
      };
    
    default:
      return state;
  }
};
