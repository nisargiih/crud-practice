import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { createStore } from "redux";

import App from "./App";
import { listReducer } from "./Reducer/listReducer";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const store = createStore(listReducer);
root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
