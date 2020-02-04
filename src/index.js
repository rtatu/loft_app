import React from "react";
import ReactDOM from "react-dom";
import "./static/global.sass";

import Root from "./routes/";
import rendererStore from "./store/rendererStore";
import { Provider } from "react-redux";

console.log(rendererStore.getState());

rendererStore.subscribe(() => console.log(rendererStore.getState()));

// rendererStore.subscribe

const App = () => (
  <Provider store={rendererStore}>
    <Root />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById("root"));
