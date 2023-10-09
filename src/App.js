import "./App.css";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Menu from "./components/menu/Menu";
import { QueryClientProvider, QueryClient } from "react-query";
import { useState } from "react";

const App = () => {
  const client = new QueryClient();
  const [toggleSideBar, setToggleSideBar] = useState("open");
  return (
    <QueryClientProvider client={client}>
      <div className="container container_menu_close">
        <Header
          onMenuButtonClick={() => {
            setToggleSideBar((state) => (state === "open" ? "close" : "open"));
          }}
        />
        <Menu toggleState={toggleSideBar} />
        <Main isFullWidth={toggleSideBar === "close"} />
      </div>
    </QueryClientProvider>
  );
};

export default App;
