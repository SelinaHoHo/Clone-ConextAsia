import { useRoutes } from "react-router-dom";
import "./App.css";
import DetailPage from "./pages/DetailPage";
import HomePage from "./pages/HomePage";
import Not from "./pages/NotFoundPage";

function App() {
  let Router = useRoutes([
    { path: "/", element: <HomePage /> },
    { path: "/detail/:name", element: <DetailPage /> },
    { path: "*", element: <Not /> },
  ]);

  return Router;
}

export default App;
