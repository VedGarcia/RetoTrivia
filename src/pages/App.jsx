import { useRoutes, BrowserRouter } from "react-router-dom";
import { LevelProvider } from "../context/index";
// import Logo from "../components/Logo/index";
import "./App.css";
import Home from "./home/index";
import Question from "./Question/index";
import LevelUp from "./LevelUp/index";
import GameOver from "./GameOver/index";
import NotFound from "./NotFound/index";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/question", element: <Question /> },
    { path: "/level-up", element: <LevelUp /> },
    { path: "/game-over", element: <GameOver /> },
    { path: "/*", element: <NotFound /> },
  ]);
  return routes;
};

function App() {
  return (
    <LevelProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </LevelProvider>
  );
}

export default App;
