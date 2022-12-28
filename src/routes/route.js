import AdminRoot from "../page/Admin/AdminRoot";
import Dashboard from "../page/Admin/Dashboard";
import Product from "../page/Admin/Product";
import About from "../page/Main/About";
import Contact from "../page/Main/Contact";
import Home from "../page/Main/Home";
import MainRoot from "../page/Main/MainRoot";

export const ROUTES = [
  {
    path: "/",
    element: <MainRoot />,
    children: [
      { path: "", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
    ],
  },
  {
    path: "/admin/",
    element: <AdminRoot />,
    children: [
      { path: "", element: <Product /> },
      { path: "dashboard", element: <Dashboard /> },
    ],
  },
];
