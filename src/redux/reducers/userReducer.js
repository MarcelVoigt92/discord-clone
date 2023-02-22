import * as actions from "../constants/userConstant";

export const userLogInReducer = (state = {}, action) => {
  switch (action.type) {
    case actions.USER_LOGIN_REQUEST:
      return;
    case actions.USER_LOGIN_SUCCESS:
      return { user: action.payload };
  }
};
