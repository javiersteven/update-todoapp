import React from "react";
import { useState } from "react";
const AppContext = React.createContext(); // contexto principal

const defaultTodos = [
  { todo: "hacer esto", complete: false, id: 0 },
  { todo: "hacer esto otro", complete: false, id: 1 },
  { todo: "hacer aquello", complete: false, id: 2 },
  { todo: "hacer además esto", complete: false, id: 3 },
  { todo: "no hacer esto", complete: false, id: 4 }
];

const AppContextProvider = ({ children }) => {
  
    // Las constantes que seran consumidas
  const [active, setActive] = useState(false);
  const [submiting, setSubmiting] = useState("");
  const [todos, setTodos] = useState(defaultTodos);
  
  // Retorna un provide con todas las 
  // constantes en la prop value 
  return (
    <AppContext.Provider
      value={{
        active,
        setActive,
        submiting,
        setSubmiting,
        todos,
        setTodos
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
