import { PayloadAction } from "@reduxjs/toolkit";
import Device from "../../types/Device";
import ReduxAction from "../../types/ReduxAction";
import { AppState } from "../initialState";


export default function setDevicesList(state: AppState, action: PayloadAction<Device[]>) {
  state.devicesList = action.payload;
}