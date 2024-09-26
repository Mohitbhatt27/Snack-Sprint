import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import userContext from "./context/userContext";
import appStore from "./redux/appStore";
import { Provider } from "react-redux";

function App() {
  const [name, setName] = useState("");
  useEffect(() => {
    setName("Mohit");
  }, []);

  return (
    <>
      <Provider store={appStore}>
        <userContext.Provider value={name}>
          <Header />
          <Outlet />
        </userContext.Provider>
      </Provider>
    </>
  );
}

export default App;
