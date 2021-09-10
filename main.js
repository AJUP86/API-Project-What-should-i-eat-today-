import { createDOMElement } from "./DOM_utils.js";
import { clickStartBtn } from "./events.js";

const renderStartButton = () => {
  const button = createDOMElement("button", { id: "startButton" });
  button.textContent = "START";
  document.body.appendChild(button);
  button.addEventListener("click", clickStartBtn);
};

const init = () => {
  console.log("hello");
  renderStartButton();
};

window.addEventListener("load", init);
