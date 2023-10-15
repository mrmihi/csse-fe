import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { default as App } from "@/App";

const Root = () => {
  // let basename = "/";

  // const matchPreviewDeployment = window.location.pathname.match(/preview\/pr-\d+/);

  // if (matchPreviewDeployment) {
  //   basename += matchPreviewDeployment[0];
  // }

  return (
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<Root />);
