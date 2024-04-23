export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_NAME": {
      return {
        ...state,
        firstName: action.payload,
      };
    }
    case "ADD_LAST_NAME": {
      return {
        ...state,
        lastName: action.payload,
      };
    }
    case "SET_WHEELS": {
      return {
        ...state,
        wheels: action.payload,
      };
    }
    case "SET_VEHICLE_TYPE": {
      return {
        ...state,
        vehicleType: action.payload.value,
        vehicleTypeName: action.payload.typeName,
      };
    }
    case "SET_VEHICLE_MODEL": {
      return {
        ...state,
        vehicleModel: action.payload.value,
        vehicleModelName: action.payload.typeName,
      };
    }
    case "SET_START_DATE": {
      return {
        ...state,
        startDate: action.payload,
      };
    }
    case "SET_END_DATE": {
      return {
        ...state,
        endDate: action.payload,
      };
    }
    case "SET_INTIAL_STATE": {
      return {
        ...state,
        firstName: "",
        lastName: "",
        wheels: "",
        vehicleType: "",
        vehicleTypeName: "",
        vehicleModel: "",
        vehicleModelName: "",
        startDate: "",
        endDate: "",
      };
    }

    default: {
      return state;
    }
  }
};
