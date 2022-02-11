import ReduxAction from '../types/ReduxAction';
import ReduxActionType from '../types/ReduxActionType';
import initialState, { AppState } from './initialState';
import addItemToCart from './reducers/addItemToCart';
import clearCart from './reducers/clearCart';
import removeItemFromCart from './reducers/removeItemFromCart';

export default {
  reducer1(state: AppState = initialState, action: ReduxAction) {
    switch (action.type) {
      case ReduxActionType.ADD_ITEM:
        return addItemToCart(state, action);
      case ReduxActionType.REMOVE_ITEM:
        return removeItemFromCart(state, action);
      case ReduxActionType.CLEAR_CART:
        return clearCart(state, action);
      default:
        return state
    }
  }
}