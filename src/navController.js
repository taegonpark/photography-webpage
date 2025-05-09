// import "./style.css"
import {createConcertContent, removeOldPhotos, createTripContent, createOtherContent} from "./visuals"

const buttons = document.querySelectorAll("button");
const addConcertFunction = () => {
    buttons[0].addEventListener("click", ()=>{
    removeOldPhotos();
    createConcertContent();
    });
}
const addTripFunction = () => {
    buttons[1].addEventListener("click", ()=>{
    removeOldPhotos();
    createTripContent();
    });
}
const addOtherFunction = () => {
    buttons[2].addEventListener("click", ()=>{
    removeOldPhotos();
    createOtherContent();
    });
}
const startApp = () => {
    addConcertFunction();
    addTripFunction();
    addOtherFunction()
    // buttons[0].click();
}
export {startApp};