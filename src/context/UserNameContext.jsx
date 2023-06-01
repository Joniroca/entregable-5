import { createContext, useState } from "react";

export const UserNameContext = createContext(null);

export const UserNameProvider = ({ children }) => {
  const [userName, setUserName] = useState(
    localStorage.getItem("userName") ?? ""
  );

  const saveUserName = (newUserName) => {
    setUserName(newUserName);
    localStorage.setItem("userName", newUserName);
  };
  const removeUserName = () => {
    setUserName("");
    localStorage.removeItem("userName");
  };
  const value = { userName, saveUserName, removeUserName };
  return (
    // el contexto.Provider recibe una prop llamada value --> en este caso le pasamos la CONST value
    <UserNameContext.Provider value={value}>
      {children}
    </UserNameContext.Provider>
  );
};
