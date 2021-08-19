import * as actionTypes from "./type";

export const addToCart = (itemID) => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: itemID,
  };
};

export const removeFromCart = (itemID) => {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    payload: itemID,
  };
};

export const adjustQty = (itemID, qty) => {
  return {
    type: actionTypes.ADJUST_QTY,
    payload: {
      id: itemID,
      qty: qty,
    },
  };
};

export const loadCurrentItem = (item) => {
  return {
    type: actionTypes.LOAD_CURRENT_ITEM,
    payload: item,
  };
};
