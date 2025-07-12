import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import "./main.css";
import MainLayout from "./layout/MainLayout";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MainLayout />
  </StrictMode>
);
