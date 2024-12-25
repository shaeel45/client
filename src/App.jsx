import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import "./css/style.css";

// Import pages
import LoginForm from "./components/LoginForm";
import Signup from "./components/Signup"; // Import Signup component
import Protected from "./components/Protected"; // Import ProtectedRoute
import AddTestimonial from "./pages/add-home/AddTestimonial";
import AddHeader from "./pages/add-home/AddHeader";
import AddTeam from "./pages/add-home/AddTeam";
import HeaderDetails from "./pages/add-home/HeaderDetails";
import HeaderEdit from "./pages/add-home/HeaderEdit";
import TeamDetails from "./pages/add-home/TeamDetails";
import TeamEdit from "./pages/add-home/TeamEdit";
import TestimonialDetails from "./pages/add-home/TestimonialDetails";
import TestimonialEdit from "./pages/add-home/TestimonialEdit";
import HeaderInsert from "./pages/add-home/HeaderInsert";
import TeamInsert from "./pages/add-home/TeamInsert";
import AddServices from "./pages/add-services/AddServices";
import Homep from './pages/Homep'

function App() {
  const location = useLocation();

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        {/* Public Routes */}
        <Route exact path="/login-form" element={<LoginForm />} />
        <Route exact path="/signup-form" element={<Signup />} />

        {/* Protected Routes */}
        <Route
          exact
          path="/"
          element={
            <Protected>
              <Homep />
            </Protected>
          }
        />
        <Route
          exact
          path="/add-header"
          element={
            <Protected>
              <AddHeader />
            </Protected>
          }
        />
        <Route
          exact
          path="/header-details"
          element={
            <Protected>
              <HeaderDetails />
            </Protected>
          }
        />
        <Route path="/header-details/:id" element={<HeaderDetails />} />
        <Route
          exact
          path="/header-edit"
          element={
            <Protected>
              <HeaderEdit />
            </Protected>
          }
        />
        <Route
          exact
          path="/header-edit/:id"
          element={
            <Protected>
              <HeaderEdit />
            </Protected>
          }
        />
        <Route
          exact
          path="/header-insert"
          element={
            <Protected>
              <HeaderInsert />
            </Protected>
          }
        />
        <Route
          exact
          path="/add-team"
          element={
            <Protected>
              <AddTeam />
            </Protected>
          }
        />
        <Route
          exact
          path="/team-details"
          element={
            <Protected>
              <TeamDetails />
            </Protected>
          }
        />
        <Route
          exact
          path="/team-edit"
          element={
            <Protected>
              <TeamEdit />
            </Protected>
          }
        />
        <Route
          exact
          path="/team-insert"
          element={
            <Protected>
              <TeamInsert />
            </Protected>
          }
        />
        <Route
          exact
          path="/add-testimonial"
          element={
            <Protected>
              <AddTestimonial />
            </Protected>
          }
        />
        <Route
          exact
          path="/testimonial-details"
          element={
            <Protected>
              <TestimonialDetails />
            </Protected>
          }
        />
        <Route
          exact
          path="/testimonial-edit"
          element={
            <Protected>
              <TestimonialEdit />
            </Protected>
          }
        />
        <Route
          exact
          path="/testimonial-insert"
          element={
            <Protected>
              <TestimonialEdit />
            </Protected>
          }
        />

        {/* Services */}
        <Route
          exact
          path="/add-services"
          element={
            <Protected>
              <AddServices />
            </Protected>
          }
        />
      </Routes>
    </>
  );
}

export default App;
