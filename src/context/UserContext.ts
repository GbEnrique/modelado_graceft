import { createContext } from "react";

const UserContext = createContext({
  enc: false,
  handleChangeEnc: (value: boolean) => {},
});

export default UserContext;
