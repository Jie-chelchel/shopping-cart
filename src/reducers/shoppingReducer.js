// import * as actionType from "../actions.type";
import {
  ADD_TO_CART,
  ADJUST_QTY,
  LOAD_CURRENT_ITEM,
  REMOVE_FROM_CART,
} from "../actions/type";

const initialState = {
  products: [
    {
      id: 1,
      title: "This is the COOLEST Cube Ever",
      description:
        "This cube will keep you busy the entire day and it is very fun to play with",
      price: 15.0,
      image:
        "https://images.unsplash.com/photo-1591991731833-b4807cf7ef94?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 2,
      title: "Large Coffee Cup",
      description:
        "Get a big cup of coffee every morning before the day starts",
      price: 20.0,
      image:
        "https://images.unsplash.com/photo-1572119865084-43c285814d63?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 3,
      title: "Books That CHANGED My Life",
      description:
        "These books will keep you busy all throughout the entire lockdown and give you some great advise from famous people",
      price: 150.0,
      image:
        "https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1374&q=80",
    },
  ],
  cart: [],
  currentItem: null,
};

const shoppingReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const item = state.products.find((product) => {
        return product.id === action.payload;
      });
      const isInCart = state.cart.find((item) => {
        return item.id === action.payload ? true : false;
      });

      return {
        ...state,
        cart: isInCart
          ? state.cart.map((item) =>
              item.id === action.payload ? { ...item, qty: item.qty + 1 } : item
            )
          : [...state.cart, { ...item, qty: 1 }],
      };
    }
    case REMOVE_FROM_CART: {
      return {
        ...state,
        cart: state.cart.filter((item) => {
          return item.id !== action.payload;
        }),
      };
    }
    case ADJUST_QTY: {
      return { state };
    }
    case LOAD_CURRENT_ITEM: {
      return { state };
    }
    default: {
      return state;
    }
  }
};

export default shoppingReducer;
