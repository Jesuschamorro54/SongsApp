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
      <Route exact path="autors" element={<Autors />}></Route>
      <Route exact path="song/:id" element={<Letter />}></Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

//pendiente api

export default App;
