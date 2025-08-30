import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import Support from "./components/Support";
import RestaurantMenu from "./components/RestaurantMenu";
import "./styles.css"; // Import the single CSS file

/**
 * Main App Layout Component
 * Renders Header, dynamic content via Outlet, and Footer
 * This layout is shared across all routes that need header/footer
 */
const AppLayout = () => {
  return (
    <>
      <Header />
      <div className="main-content">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

/**
 * Router configuration with nested routes
 * About page is standalone (no header/footer)
 * Other pages use AppLayout wrapper
 */
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <div className="error-message">Page not found - 404</div>,
    children: [
      { 
        path: "/", 
        element: <Body /> 
      },
      { 
        path: "/support", 
        element: <Support /> 
      },
      { 
        path: "/restaurant/:resid", 
        element: <RestaurantMenu /> 
      }
    ],
  },
  {
    // About page as standalone route (no header/footer as per original code)
    path: "/about",
    element: <AboutUs />
  }
]);

/**
 * Root component that provides routing context
 */
const App = () => {
  return <RouterProvider router={appRouter} />;
};

// Initialize React application
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

export default App;