import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomNavbar from "./components/CustomNavbar";
import MainRoutes from "./routes/MainRoutes";

const App = () => {
  return (
    <div>
      <CustomNavbar />
      <MainRoutes />
    </div>
  );
};

export default App;
