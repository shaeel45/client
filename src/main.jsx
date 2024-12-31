import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ThemeProvider from './utils/ThemeContext';
import App from './App.jsx';
import './index.css';
import Aboutp from './pages/Aboutp.jsx';
import Portfoliop from './pages/Portfoliop.jsx';
import Servicep from './pages/Servicep.jsx';
import Blogp from './pages/Blogp.jsx';
import Contactp from './pages/Contactp.jsx';
// import Homep from './pages/Homep.jsx';
import MV from './pages/MV.jsx';
import Teamp from './pages/Teamp.jsx';
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
import PrivacyPolicy from './pages/Privacypolicy.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Homep />
      },
      {
        path: "/about",
        element: <Aboutp />
      },
      {
        path: "/portfolio",
        element: <Portfoliop />
      },
      {
        path: "/services",
        element: <Servicep />
      },
      {
        path: "/blogs",
        element: <Blogp />
      },
      {
        path:'/privacypolicy',
        element:<PrivacyPolicy />
      },
      {
        path: "/contact",
        element: <Contactp />
      },
      {
        path: "/mission-vision",
        element: <MV />
      },
      {
        path: "/team",
        element: <Teamp />
      },
      {
        path: "/login-form",
        element: <LoginForm />
      },
      {
        path: "/signup-form",
        element: <Signup />
      },
      {
        path: "/add-header",
        element: (
          <Protected>
            <AddHeader />
          </Protected>
        )
      },
      {
        path: "/header-details/:id",
        element: <HeaderDetails />
      },
      {
        path: "/header-edit/:id",
        element: (
          <Protected>
            <HeaderEdit />
          </Protected>
        )
      },
      {
        path: "/header-insert",
        element: (
          <Protected>
            <HeaderInsert />
          </Protected>
        )
      },
      {
        path: "/add-team",
        element: (
          <Protected>
            <AddTeam />
          </Protected>
        )
      },
      {
        path: "/team-details/:id",
        element: <TeamDetails />
      },
      {
        path: "/team-edit/:id",
        element: (
          <Protected>
            <TeamEdit />
          </Protected>
        )
      },
      {
        path: "/team-insert",
        element: (
          <Protected>
            <TeamInsert />
          </Protected>
        )
      },
      {
        path: "/add-testimonial",
        element: (
          <Protected>
            <AddTestimonial />
          </Protected>
        )
      },
      {
        path: "/testimonial-details/:id",
        element: <TestimonialDetails />
      },
      {
        path: "/testimonial-edit/:id",
        element: (
          <Protected>
            <TestimonialEdit />
          </Protected>
        )
      },
      {
        path: "/testimonial-insert",
        element: (
          <Protected>
            <TestimonialInsert />
          </Protected>
        )
      },
      {
        path: "/add-services",
        element: (
          <Protected>
            <AddServices />
          </Protected>
        )
      },
      {
        path: "/service-insert",
        element: (
          <Protected>
            <ServiceInsert />
          </Protected>
        )
      },
      {
        path: "/service-details/:id",
        element: (
          <Protected>
            <ServiceDetails />
          </Protected>
        )
      },
      {
        path: "/service-edit/:id",
        element: (
          <Protected>
            <ServiceEdit />
          </Protected>
        )
      },
      {
        path: "/add-portfolio",
        element: (
          <Protected>
            <AddPortfolio />
          </Protected>
        )
      },
      {
        path: "/portfolio-insert",
        element: (
          <Protected>
            <PortfolioInsert />
          </Protected>
        )
      },
      {
        path: "/portfolio-details/:id",
        element: (
          <Protected>
            <PortfolioDetails />
          </Protected>
        )
      },
      {
        path: "/portfolio-edit/:id",
        element: (
          <Protected>
            <PortfolioEdit />
          </Protected>
        )
      },
      {
        path: "/add-about",
        element: (
          <Protected>
            <AddAbout />
          </Protected>
        )
      },
      {
        path: "/about-insert",
        element: (
          <Protected>
            <AboutInsert />
          </Protected>
        )
      },
      {
        path: "/about-details/:id",
        element: (
          <Protected>
            <AboutDetails />
          </Protected>
        )
      },
      {
        path: "/about-edit/:id",
        element: (
          <Protected>
            <AboutEdit />
          </Protected>
        )
      },
      {
        path: "/add-blog",
        element: (
          <Protected>
            <AddBlog />
          </Protected>
        )
      },
      {
        path: "/blog-insert",
        element: (
          <Protected>
            <BlogInsert />
          </Protected>
        )
      },
      {
        path: "/blog-details/:id",
        element: (
          <Protected>
            <BlogDetails />
          </Protected>
        )
      },
      {
        path: "/blog-edit/:id",
        element: (
          <Protected>
            <BlogEdit />
          </Protected>
        )
      },
      {
        path: "/add-text",
        element: (
          <Protected>
            <AddText />
          </Protected>
        )
      },
      {
        path: "/text-insert",
        element: (
          <Protected>
            <TextInsert />
          </Protected>
        )
      },
      {
        path: "/text-details/:id",
        element: (
          <Protected>
            <TextDetails />
          </Protected>
        )
      },
      {
        path: "/text-edit/:id",
        element: (
          <Protected>
            <TextEdit />
          </Protected>
        )
      },
      {
        path: "/add-mission",
        element: (
          <Protected>
            <AddMission />
          </Protected>
        )
      },
      {
        path: "/mission-insert",
        element: (
          <Protected>
            <MissionInsert />
          </Protected>
        )
      },
      {
        path: "/mission-details/:id",
        element: (
          <Protected>
            <MissionDetails />
          </Protected>
        )
      },
      {
        path: "/mission-edit/:id",
        element: (
          <Protected>
            <MissionEdit />
          </Protected>
        )
      },
      {
        path: "/add-vision",
        element: (
          <Protected>
            <AddVision />
          </Protected>
        )
      },
      {
        path: "/vision-insert",
        element: (
          <Protected>
            <VisionInsert />
          </Protected>
        )
      },
      {
        path: "/vision-details/:id",
        element: (
          <Protected>
            <VisionDetails />
          </Protected>
        )
      },
      {
        path: "/vision-edit/:id",
        element: (
          <Protected>
            <VisionEdit />
          </Protected>
        )
      },
      {
        path: "/add-corevalue",
        element: (
          <Protected>
            <AddCoreValue />
          </Protected>
        )
      },
      {
        path: "/corevalue-insert",
        element: (
          <Protected>
            <CoreValueInsert />
          </Protected>
        )
      },
      {
        path: "/corevalue-details/:id",
        element: (
          <Protected>
            <CoreValueDetails />
          </Protected>
        )
      },
      {
        path: "/corevalue-edit/:id",
        element: (
          <Protected>
            <CoreValueEdit />
          </Protected>
        )
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);