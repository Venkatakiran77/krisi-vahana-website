import React from "react";
import { useRoutes } from "react-router-dom";
import routes from "./routes";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  const router = useRoutes(routes);

  return (
    <>
      <Navbar />
      {router}
      <Footer />
    </>
  );
}

export default App;
