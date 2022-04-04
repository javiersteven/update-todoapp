import { AppUI } from "./AppUI.js";
import { AppContextProvider } from "../Context/appContext";

const App = () => {
  return (
    <AppContextProvider>
      <AppUI />
    </AppContextProvider>
  );
};
export { App };
