import Home from "./pages/Home/Home";
import TestTomato from "./pages/TestTomato/TestTomato";
import Results from "./pages/Results/Results";
import Dataset from "./pages/Dataset/Dataset";
import Products from "./components/Products/Products";
import AITechnology from "./components/AITechnology/AITechnology";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";

export default [
  { path: "/", element: <Home /> },
  { path: "/test", element: <TestTomato /> },
  { path: "/results", element: <Results /> },
  { path: "/dataset", element: <Dataset /> },
  { path: "/product", element: <Products /> },
  { path: "/aiTechnology", element: <AITechnology /> },
  {path: "/aboutUs", element: <About /> },
  {path: "/contactUs", element: <Contact /> }

];
