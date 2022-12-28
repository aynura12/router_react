import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { ROUTES } from "./routes/route";

function App() {
  const router = createBrowserRouter(ROUTES);
  return <RouterProvider router={router} />;
}

export default App;
