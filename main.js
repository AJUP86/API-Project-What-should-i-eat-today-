import { createDOMElement } from "./DOM_utils.js";
import { clickBtn } from "./events.js";

const renderStartButton = () => {
  const button = createDOMElement("button", { id: "startButton" });
  button.textContent = "START";
  document.body.appendChild(button);
  button.addEventListener("click", clickBtn);
};
const renderSubmitButton = () => {
  const submitButton = createDOMElement("button", { id: "submitButton" });
  submitButton.textContent = "SUBMIT";
  submitButton.style.visibility = "hidden";
  document.body.appendChild(submitButton);
};

const init = () => {
  console.log("hello");
  renderStartButton();
  renderSubmitButton();
};

window.addEventListener("load", init);
