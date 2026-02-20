import Home from "./pages/Home/Home";
import Products from "./components/Products/Products";
import AITechnology from "./components/AITechnology/AITechnology";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";

export default [
  { path: "/", element: <Home /> },
  { path: "/product", element: <Products /> },
  { path: "/aiTechnology", element: <AITechnology /> },
  { path: "/aboutUs", element: <About /> },
  { path: "/contactUs", element: <Contact /> },
];
