import React from "react";
import { createRoot } from "react-dom/client";
import { AppProvider } from "./context";
import App from "./App";


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <AppProvider>
    <App />
    </AppProvider>
    
  </React.StrictMode>
);

