import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
  Outlet,
} from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Songs from "./components/Songs";
import Autors from "./components/Autors";
import "./App.css";

const Root = () => {
  return (
    <div className="App">
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="/" element={<Home />}></Route>
      <Route path="songs" element={<Songs />}></Route>
      <Route path="autors" element={<Autors />}></Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
