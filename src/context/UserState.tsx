import React, { useReducer } from "react";

import { HANDLE_ENC } from "./Types";
import UserReducer from "./UserReducer";
import UserContext from "./UserContext";

const UserState = (props: any) => {
  const initialState = {
    enc: false,
  };

  const [state, dispatch] = useReducer(UserReducer, initialState);

  const handleChangeEnc = (value: boolean) => {
    dispatch({ type: HANDLE_ENC, payload: value });
  };

  return (
    <UserContext.Provider
      value={{
        enc: state.enc,
        handleChangeEnc,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
