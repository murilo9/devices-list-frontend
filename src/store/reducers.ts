import ReduxAction from '../types/ReduxAction';
import ReduxActionType from '../types/ReduxActionType';
import actionTypes from '../types/ReduxActionType';
import initialState, { AppState } from './initialState';

export default {
  reducer1(state: AppState = initialState, action: ReduxAction) {
    switch (action.type) {
      case ReduxActionType.ADD_FOO:
        state.stuff.push('foo');
        break;
      case ReduxActionType.ADD_BAR:
        state.stuff.push('bar');
        break;
      default:
        return state
    }
  }
}