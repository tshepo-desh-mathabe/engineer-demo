import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "semantic-ui-css/semantic.min.css";
import history from "./utils/BrowserHistory";
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <HistoryRouter history={history}>
      <App />
    </HistoryRouter>
  </StrictMode>
);
