import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import HomePage from "./pages/HomePage.tsx";
import Layout from "./pages/Layout.tsx";
import Signup from "./components/auth/Signup.tsx";
import Signin from "./components/auth/Signin.tsx";
import MovieBookingPage from "./pages/MovieBookingPage.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<HomePage />}>
        <Route path="/" element={<Signin />} />
        <Route path="/home/signup" element={<Signup />} />
        <Route path="/home/signin" element={<Signin />} />
      </Route>
      <Route path="/movies" element={<App />}/>
      <Route path="/movies/movie-ticket-booking/:showId" element={<MovieBookingPage />} />
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
