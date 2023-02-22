import * as actions from "../constants/userConstant";

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: actions.USER_LOGIN_REQUEST,
    });
  } catch (error) {}
};
