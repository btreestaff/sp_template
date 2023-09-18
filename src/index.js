import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/layout";

// --- IMPORT ROUTES HERE ---
import Index from "./routes/_index";
import Contact from "./routes/contact";
import NewPage from "./routes/new-page";

// --------------------------

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Index /> },
      { path: "/contact", element: <Contact /> },
      { path: "/newpage", element: <NewPage /> }
    ]
  }
]);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
