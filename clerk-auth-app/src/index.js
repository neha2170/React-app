import React from "react";
import { createRoot } from "react-dom/client";
import { ClerkProvider } from "@clerk/clerk-react";
import App from "./App";

const key = process.env.REACT_APP_CLERK_KEY;
console.log(key, "frontendApi");

if (!key) {
  throw new Error("Key was not found");
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <ClerkProvider publishableKey={key}>
    <App />
  </ClerkProvider>
);
