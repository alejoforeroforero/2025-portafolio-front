
import { Outlet } from "react-router-dom";
import useLocalStorage from "use-local-storage";
import "./App.css";
import Nav from "./components/nav/Nav";

const App = () => {
  const preference = window.matchMedia("(prefers-color-scheme:dark)").matches;
  const [isDark, setIsDark] = useLocalStorage("isDark", preference);


  return (
    <div className="general-container" data-theme={isDark ? "dark" : "light"}>
      <Nav isDark={isDark} setIsDark={setIsDark} />
      <Outlet />
    </div>
  );
};

export default App;
