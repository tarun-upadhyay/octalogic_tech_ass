export const addName = (data) => ({
  type: "ADD_NAME",
  payload: data,
});
export const addLastName = (data) => ({
  type: "ADD_LAST_NAME",
  payload: data,
});
export const addWheels = (data) => ({
  type: "SET_WHEELS",
  payload: data,
});
export const addVehicleType = (data) => ({
  type: "SET_VEHICLE_TYPE",
  payload: data,
});
export const addVehicleModel = (data) => ({
  type: "SET_VEHICLE_MODEL",
  payload: data,
});
export const addStartDate = (data) => ({
  type: "SET_START_DATE",
  payload: data,
});
export const addEndDate = (data) => ({
  type: "SET_END_DATE",
  payload: data,
});
export const intialState = (data) => ({
    type: "SET_INTIAL_STATE",
    payload: data,
  });
  