import React from "react";
import ReactDOM from "react-dom";
import "./static/global.sass";

import Root from "./routes/";
import rendererStore from "./store/rendererStore";
import { Provider } from "react-redux";

const App = () => (
  <Provider store={rendererStore}>
    <Root />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById("root"));
