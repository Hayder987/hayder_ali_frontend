import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { router } from "./router/router";
import { RouterProvider } from "react-router";
import AuthProvider from "./context/AuthProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>
);
