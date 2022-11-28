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
import Authors from "./components/Authors";
import Letter from "./components/Letter";
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
    <Route exact path="/" element={<Root />}>
      <Route exact path="/" element={<Home />}></Route>
      <Route exact path="songs" element={<Songs />}></Route>
      <Route exact path="authors" element={<Authors />}></Route>
      <Route exact path="songs/:id" element={<Letter />}></Route>
      <Route exact path="authors/:name" element={<Songs />}></Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}


export default App;
