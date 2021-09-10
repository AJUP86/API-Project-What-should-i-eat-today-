import { getDOMElement } from "./DOM_utils.js";
import { START_BUTTON_ID, USER_INFO_ID } from "./id_variables.js";

//This function handles the start button click.

export const startButton = () => {
  const hiddenForm = getDOMElement(USER_INFO_ID);
  hiddenForm.style.visibility = "visible";
  const visibleStartBtn = getDOMElement(START_BUTTON_ID);
  visibleStartBtn.style.visibility = "hidden";
};
