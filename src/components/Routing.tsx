import { Outlet, Route, Routes } from "react-router-dom";
import Contact from "./Contact";
import Home from "./home/Home";
import AllProducts from "./AllProducts";

function Routing() {
  return (
    <>
      <Routes>
        <Route
          path="/ProductListingPage/contact"
          element={<Contact></Contact>}
        ></Route>

        <Route
          index
          path="/ProductListingPage/"
          element={<AllProducts></AllProducts>}
        ></Route>
      </Routes>
    </>
  );
}

export default Routing;
