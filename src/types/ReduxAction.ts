import ReduxActionType from "./ReduxActionType";
interface ReduxAction {
  type: ReduxActionType,
  payload: any
}

export default ReduxAction;