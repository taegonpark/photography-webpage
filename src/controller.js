// import "./style.css"
import {createHomeContent, removeOldContainer, createMenuContent} from "./visuals"

const buttons = document.querySelectorAll("button");
const addHomeFunction = () => {
    buttons[0].addEventListener("click", ()=>{
    removeOldContainer();
    createHomeContent();
    });
}
const addMenuFunction = () => {
    buttons[1].addEventListener("click", ()=>{
    removeOldContainer();
    createMenuContent();
    });
}
const startApp = () => {
    addHomeFunction();
    addMenuFunction();
    buttons[0].click();
}
export {startApp};