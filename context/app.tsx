import React from "react";

export const AppContext = React.createContext({ pageName: "Home" });

const AppProvider = ({ children, pageName }) => (
  <AppContext.Provider value={{ pageName }}>{children}</AppContext.Provider>
);

export default AppProvider;
