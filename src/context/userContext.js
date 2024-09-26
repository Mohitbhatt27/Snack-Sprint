import { createContext } from "react";

const userContext = createContext({
  userName: "Default",
});

export default userContext;
