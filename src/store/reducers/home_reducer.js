import * as actionTypes from "../actions/actionsTypes";

let initialState = {
  homes: [],
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_COMMUNITIES_ID_FROM_HOME:
      return {
        ...state,
        home: action.payload.home,
        community: action.payload.community,
      };

    default:
      return state;
  }
};

export default homeReducer;
