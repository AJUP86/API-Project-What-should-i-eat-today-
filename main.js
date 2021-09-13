import { USER_ID, USER_KEY } from "./API-variables.js";
import {
  clearDOMElement,
  createDOMElement,
  getDOMElement,
} from "./DOM_utils.js";
import { clickBtn } from "./events.js";
import { USER_INFO_ID, GREETING_ID } from "./id_variables.js";

//This variables are declared globally in this file because otherwise i would not be able to change their value.
export let QUERY = "";
export let USER_NAME = "";

// This function is handling the data.

async function fetchData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    getHtml(data.hits);
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
}

//This function generates an HTML div container with the search result.

const getHtml = (results) => {
  const searchResultsHtml = document.querySelector(".search-result");
  let html = "";
  results.map((element) => {
    html += `
    <div class="recipe">
      <img src="${element.recipe.image}" alt="" />
      <div class="recipe-info">
        <h1 class="title">${element.recipe.label}</h1>
        <a href="${element.recipe.url}" target="_blank" class="btn">Recipe</a>
      </div>
      <p class="calories">Calories: ${element.recipe.calories.toFixed(2)}</p>
      <p class="calories">Nutrition info: ${element.recipe.healthLabels}</p>
    </div>`;
  });
  searchResultsHtml.innerHTML = html;
};

//This function creates and give functionality to the start button.

const renderStartButton = () => {
  const button = createDOMElement("button", { id: "startButton" });
  button.textContent = "START";
  document.body.appendChild(button);
  button.addEventListener("click", clickBtn);
};

//This function stores the user name so after we can use it for display a message

const storeUserName = () => {
  const name = document.querySelector("form");
  name.addEventListener("submit", (e) => {
    e.preventDefault();
    USER_NAME = e.target.querySelector("input").value;
    const hideForm = getDOMElement(USER_INFO_ID);
    hideForm.style.visibility = "hidden";
    const newDiv = createDOMElement("p", { id: GREETING_ID });
    newDiv.textContent = `Hello ${USER_NAME}, welcome to "What should I eat today?" in this app you will be able to find a very tasty food recipe's suggestion, just type an ingredient or a type of food and enjoy. `;
    document.body.appendChild(newDiv);
    const searchBar = document.querySelector("section");
    searchBar.style.visibility = "visible";
  });
};

//This function stores the search value

async function getSearchValue() {
  const searchBar = document.querySelector(".search-input");
  searchBar.addEventListener("submit", (e) => {
    e.preventDefault();
    QUERY = e.target.querySelector("#search-bar").value;
    const API_URL = `https://api.edamam.com/api/recipes/v2?type=public&q=${QUERY}&app_id=${USER_ID}&app_key=${USER_KEY}`;
    fetchData(API_URL);
    const clearGreeting = getDOMElement(GREETING_ID);
    clearDOMElement(clearGreeting);
  });
}

//This function initialize the application.

const init = () => {
  console.log("hello");
  renderStartButton();
  storeUserName();
  getSearchValue();
};

window.addEventListener("load", init);
