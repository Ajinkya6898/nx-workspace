import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { asyncWithLDProvider } from "launchdarkly-react-client-sdk";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const renderApp = async () => {
  const LDProvider = await asyncWithLDProvider({
    clientSideID: "6374811224c4bc1206a6aebf",
  });

  root.render(
    <LDProvider>
      <App />
    </LDProvider>
  );
};
renderApp();
