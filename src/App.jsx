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
import TestimonialInsert from "./pages/add-home/TestimonialInsert";
import HeaderInsert from "./pages/add-home/HeaderInsert";
import TeamInsert from "./pages/add-home/TeamInsert";
import AddServices from "./pages/add-services/AddServices";
import Homep from "./pages/Homep";
import ServiceInsert from "./pages/add-services/ServiceInsert";
import ServiceDetails from "./pages/add-services/ServiceDetails";
import ServiceEdit from "./pages/add-services/ServiceEdit";
import AddPortfolio from "./pages/add-portfolio/AddPortfolio";
import PortfolioInsert from "./pages/add-portfolio/PortfolioInsert";
import PortfolioDetails from "./pages/add-portfolio/PortfolioDetails";
import PortfolioEdit from "./pages/add-portfolio/PortfolioEdit";
import AddAbout from "./pages/add-about/AddAbout";
import AboutInsert from "./pages/add-about/AboutInsert";
import AboutDetails from "./pages/add-about/AboutDetails";
import AboutEdit from "./pages/add-about/AboutEdit";
import AddBlog from "./pages/add-blog/AddBlog";
import BlogInsert from "./pages/add-blog/BlogInsert";
import BlogDetails from "./pages/add-blog/BlogDetails";
import BlogEdit from "./pages/add-blog/BlogEdit";
import AddText from "./pages/add-text/AddText";
import TextInsert from "./pages/add-text/TextInsert";
import TextDetails from "./pages/add-text/TextDetails";
import TextEdit from "./pages/add-text/TextEdit";
import AddMission from "./pages/add-mission/AddMission";
import MissionDetails from "./pages/add-mission/MissionDetails";
import MissionInsert from "./pages/add-mission/MissionInsert";
import MissionEdit from "./pages/add-mission/MissionEdit";
import AddVision from "./pages/add-vision/AddVision";
import VisionInsert from "./pages/add-vision/VisionInsert";
import VisionDetails from "./pages/add-vision/VisionDetails";
import VisionEdit from "./pages/add-vision/VisionEdit";
import AddCoreValue from "./pages/add-corevalue/AddCoreValue";
import CoreValueInsert from "./pages/add-corevalue/CoreValueInsert";
import CoreValueDetails from "./pages/add-corevalue/CoreValueDetails";
import CoreValueEdit from "./pages/add-corevalue/CoreValueEdit";
import AddUser from "./pages/add-user/AddUser";
import UserInsert from "./pages/add-user/UserInsert";
import UserDetails from "./pages/add-user/UserDetails";
import UserEdit from "./pages/add-user/UserEdit";
import AddContact from "./pages/add-contact/AddContact";
import ContactInsert from "./pages/add-contact/ContactInsert";
import ContactDetails from "./pages/add-contact/ContactDetails";
import ContactEdit from "./pages/add-contact/ContactEdit";
import AddPhone from "./pages/add-phone/AddPhone";
import PhoneInsert from "./pages/add-phone/PhoneInsert";
import PhoneDetails from "./pages/add-phone/PhoneDetails";
import PhoneEdit from "./pages/add-phone/PhoneEdit";
import AddAddress from "./pages/add-address/AddAddress";
import AddressInsert from "./pages/add-address/AddressInsert";
import AddressDetails from "./pages/add-address/AddressDetails";
import AddressEdit from "./pages/add-address/AddressEdit";
import Message from "./pages/message/Message";
import MessageDetails from "./pages/message/MessageDetails";

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
        <Route path="/header-details/:id" element={<HeaderDetails />} />
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
        <Route path="/team-details/:id" element={<TeamDetails />} />
        <Route path="/team-edit/:id" element={<TeamEdit />} />
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
          path="/testimonial-details/:id"
          element={<TestimonialDetails />}
        />
        <Route path="/testimonial-edit/:id" element={<TestimonialEdit />} />
        <Route
          exact
          path="/testimonial-insert"
          element={
            <Protected>
              <TestimonialInsert />
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
        <Route
          exact
          path="/service-insert"
          element={
            <Protected>
              <ServiceInsert />
            </Protected>
          }
        />
        <Route
          exact
          path="/service-details/:id"
          element={
            <Protected>
              <ServiceDetails />
            </Protected>
          }
        />
        <Route
          exact
          path="/service-edit/:id"
          element={
            <Protected>
              <ServiceEdit />
            </Protected>
          }
        />

        {/* Portfolio */}
        <Route
          exact
          path="/add-portfolio"
          element={
            <Protected>
              <AddPortfolio />
            </Protected>
          }
        />
        <Route
          exact
          path="/portfolio-insert"
          element={
            <Protected>
              <PortfolioInsert />
            </Protected>
          }
        />
        <Route
          exact
          path="/portfolio-details/:id"
          element={
            <Protected>
              <PortfolioDetails />
            </Protected>
          }
        />
        <Route
          exact
          path="/portfolio-edit/:id"
          element={
            <Protected>
              <PortfolioEdit />
            </Protected>
          }
        />

        {/* About */}
        <Route
          exact
          path="/add-about"
          element={
            <Protected>
              <AddAbout />
            </Protected>
          }
        />
        <Route
          exact
          path="/about-insert"
          element={
            <Protected>
              <AboutInsert />
            </Protected>
          }
        />
        <Route
          exact
          path="/about-details/:id"
          element={
            <Protected>
              <AboutDetails />
            </Protected>
          }
        />
        <Route
          exact
          path="/about-edit/:id"
          element={
            <Protected>
              <AboutEdit />
            </Protected>
          }
        />

        {/* Blogs */}
        <Route
          exact
          path="/add-blog"
          element={
            <Protected>
              <AddBlog />
            </Protected>
          }
        />
        <Route
          exact
          path="/blog-insert"
          element={
            <Protected>
              <BlogInsert />
            </Protected>
          }
        />
        <Route
          exact
          path="/blog-details/:id"
          element={
            <Protected>
              <BlogDetails />
            </Protected>
          }
        />
        <Route
          exact
          path="/blog-edit/:id"
          element={
            <Protected>
              <BlogEdit />
            </Protected>
          }
        />

        {/* About */}
        <Route
          exact
          path="/add-text"
          element={
            <Protected>
              <AddText />
            </Protected>
          }
        />
        <Route
          exact
          path="/text-insert"
          element={
            <Protected>
              <TextInsert />
            </Protected>
          }
        />
        <Route
          exact
          path="/text-details/:id"
          element={
            <Protected>
              <TextDetails />
            </Protected>
          }
        />
        <Route
          exact
          path="/text-edit/:id"
          element={
            <Protected>
              <TextEdit />
            </Protected>
          }
        />

        {/* Mission */}
        <Route
          exact
          path="/add-mission"
          element={
            <Protected>
              <AddMission />
            </Protected>
          }
        />
        <Route
          exact
          path="/mission-insert"
          element={
            <Protected>
              <MissionInsert />
            </Protected>
          }
        />
        <Route
          exact
          path="/mission-details/:id"
          element={
            <Protected>
              <MissionDetails />
            </Protected>
          }
        />
        <Route
          exact
          path="/mission-edit/:id"
          element={
            <Protected>
              <MissionEdit />
            </Protected>
          }
        />

        {/* Vision */}
        <Route
          exact
          path="/add-vision"
          element={
            <Protected>
              <AddVision />
            </Protected>
          }
        />
        <Route
          exact
          path="/vision-insert"
          element={
            <Protected>
              <VisionInsert />
            </Protected>
          }
        />
        <Route
          exact
          path="/vision-details/:id"
          element={
            <Protected>
              <VisionDetails />
            </Protected>
          }
        />
        <Route
          exact
          path="/vision-edit/:id"
          element={
            <Protected>
              <VisionEdit />
            </Protected>
          }
        />

        {/* Core Values */}
        <Route
          exact
          path="/add-corevalue"
          element={
            <Protected>
              <AddCoreValue />
            </Protected>
          }
        />
        <Route
          exact
          path="/corevalue-insert"
          element={
            <Protected>
              <CoreValueInsert />
            </Protected>
          }
        />
        <Route
          exact
          path="/corevalue-details/:id"
          element={
            <Protected>
              <CoreValueDetails />
            </Protected>
          }
        />
        <Route
          exact
          path="/corevalue-edit/:id"
          element={
            <Protected>
              <CoreValueEdit />
            </Protected>
          }
        />

        {/* User */}
        <Route
          exact
          path="/add-user"
          element={
            <Protected>
              <AddUser />
            </Protected>
          }
        />
        <Route
          exact
          path="/user-insert"
          element={
            <Protected>
              <UserInsert />
            </Protected>
          }
        />
        <Route
          exact
          path="/user-details/:id"
          element={
            <Protected>
              <UserDetails />
            </Protected>
          }
        />
        <Route
          exact
          path="/user-edit/:id"
          element={
            <Protected>
              <UserEdit />
            </Protected>
          }
        />

        {/* Contact */}
        <Route
          exact
          path="/add-contact"
          element={
            <Protected>
              <AddContact />
            </Protected>
          }
        />
        <Route
          exact
          path="/contact-insert"
          element={
            <Protected>
              <ContactInsert />
            </Protected>
          }
        />
        <Route
          exact
          path="/contact-details/:id"
          element={
            <Protected>
              <ContactDetails />
            </Protected>
          }
        />
        <Route
          exact
          path="/contact-edit/:id"
          element={
            <Protected>
              <ContactEdit />
            </Protected>
          }
        />

        {/* Phone Card */}
        <Route
          exact
          path="/add-phone"
          element={
            <Protected>
              <AddPhone />
            </Protected>
          }
        />
        <Route
          exact
          path="/phone-insert"
          element={
            <Protected>
              <PhoneInsert />
            </Protected>
          }
        />
        <Route
          exact
          path="/phone-details/:id"
          element={
            <Protected>
              <PhoneDetails />
            </Protected>
          }
        />
        <Route
          exact
          path="/phone-edit/:id"
          element={
            <Protected>
              <PhoneEdit />
            </Protected>
          }
        />

        {/* Address */}
        <Route
          exact
          path="/add-address"
          element={
            <Protected>
              <AddAddress />
            </Protected>
          }
        />
        <Route
          exact
          path="/address-insert"
          element={
            <Protected>
              <AddressInsert />
            </Protected>
          }
        />
        <Route
          exact
          path="/address-details/:id"
          element={
            <Protected>
              <AddressDetails />
            </Protected>
          }
        />
        <Route
          exact
          path="/address-edit/:id"
          element={
            <Protected>
              <AddressEdit />
            </Protected>
          }
        />

        {/* Message */}
        <Route
          exact
          path="/add-message"
          element={
            <Protected>
              <Message />
            </Protected>
          }
        />
        <Route
          exact
          path="/message-details"
          element={
            <Protected>
              <MessageDetails />
            </Protected>
          }
        />
      </Routes>
    </>
  );
}

export default App;
