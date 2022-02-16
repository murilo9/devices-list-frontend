import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { Dispatch, SetStateAction } from "react";
import getCart from "../requests/getCart";
import DeviceInCart from "../types/DeviceInCart";

/**
 * Loads the cart from the server and update the store.
 * @param dispatch The dispatch function from the calling component.
 * @param setCart  The setCart hook from the calling component.
 * @param onError Optional onError hook.
 */
const loadCart = (
  dispatch: Dispatch<any>,
  setCart: ActionCreatorWithPayload<DeviceInCart[], string>,
  onError: Dispatch<SetStateAction<string>> = () => { }
) => {
  getCart().then((response: DeviceInCart[]) => {
    const cart = response
    dispatch(setCart(cart))
  })
    .catch(error => {
      onError('There was an error while loading the devices list. Make sure the server is up.');
    })
}

export default loadCart