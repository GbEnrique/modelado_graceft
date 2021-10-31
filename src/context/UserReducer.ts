import { HANDLE_ENC } from "./Types";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state: any, action: any) => {
  const { payload, type } = action;

  switch (type) {
    case HANDLE_ENC:
      return {
        ...state,
        enc: payload,
      };

    default:
      return state;
  }
};
