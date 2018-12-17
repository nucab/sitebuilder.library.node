import React from "react";
import ReactDOM from "react-dom";
import Example from "./Example";

it("Example renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Example test="123123" />, div);
});
