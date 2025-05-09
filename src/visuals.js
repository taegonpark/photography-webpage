// import "./style.css"
import concert1 from './assets/boxer.jpg';
import trip1 from './assets/untitled.jpg';
import other1 from './assets/warrior.jpg';

const content = document.querySelector(".content");

const createConcertContent = () => {
    const photo1 = document.createElement("div");
    photo1.classList.add("photo");
    const img1 = document.createElement("img");
    img1.src = concert1;
    img1.alt = "boxer";
    photo1.append(img1);
    content.append(photo1);

    const photo2 = document.createElement("div");
    photo2.classList.add("photo");
    const img2 = document.createElement("img");
    img2.src = trip1;
    img2.alt = "untitled";
    photo2.append(img2);
    content.append(photo2);
}
const createTripContent = () => {
    const photo1 = document.createElement("div");
    photo1.classList.add("photo");
    const img1 = document.createElement("img");
    img1.src = trip1;
    img1.alt = "untitled";
    photo1.append(img1);
    content.append(photo1);
}
const createOtherContent = () => {
    const photo1 = document.createElement("div");
    photo1.classList.add("photo");
    const img1 = document.createElement("img");
    img1.src = other1;
    img1.alt = "warrior";
    photo1.append(img1);
    content.append(photo1);
}
const removeOldPhotos= () => {
    const oldPhotos = document.querySelectorAll(".photo");
    if (oldPhotos != null){
        for (let i = 0; i < oldPhotos.length; i++){
            oldPhotos[i].remove();
        }
    }
}
export {createConcertContent, removeOldPhotos, createTripContent, createOtherContent};