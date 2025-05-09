import img1 from './assets/boxer.avif';
import img2 from './assets/untitled.avif';
import img3 from './assets/warrior.avif';
// import imagePaths from './assets/assets.json';
const images = [img1, img2, img3];
const content = document.querySelector(".content");

// JSON METHOD FAILED
// const createConcertContent = () => {
//     imagePaths.forEach((path) => {
//         const img = document.createElement('img');
//         console.log(path);
//         img.src = path;
//         img.alt = "photo";
//         const photo = document.createElement("div");
//         photo.classList.add("photo");
//         photo.appendChild(img);
//         content.appendChild(photo);
//     });
// }

// IMPORT ARRAY SUCCESS
const createConcertContent = () => {
    images.forEach((path) => {
        const photo = document.createElement("div");
        photo.classList.add("photo");
        const img = document.createElement('img');
        img.src = path;
        img.alt = "photo";
        img.loading = 'lazy';
        photo.appendChild(img);
        content.appendChild(photo);
    });
}

// DYNAMIC METHOD FAILED
// const createConcertContent = () => {
//     const imagesContext = require.context('./assets', false, /\.(avif|png|jpe?g|svg)$/);
//     const imagesMap = {};

//     imagesContext.keys().forEach((key) => {
//         const fileName = key.replace('./', '');
//         imagesMap[fileName] = imagesContext(key);
//     });
//     imagePaths.forEach((fileName) => {
//         const img = document.createElement('img');
//         console.log(imagesMap[fileName]);
//         img.src = imagesMap[fileName];
//         const photo = document.createElement("div");
//         photo.classList.add("photo");
//         img.alt = "photo";
//         img.loading = 'lazy';
//         photo.appendChild(img);
//         content.appendChild(photo);
//     });
// }

const createTripContent = () => {
    // const photo1 = document.createElement("div");
    // photo1.classList.add("photo");
    // const img1 = document.createElement("img");
    // img1.src = trip1;
    // img1.alt = "untitled";
    // photo1.append(img1);
    // content.append(photo1);
}
const createOtherContent = () => {
    // const photo1 = document.createElement("div");
    // photo1.classList.add("photo");
    // const img1 = document.createElement("img");
    // img1.src = other1;
    // img1.alt = "warrior";
    // photo1.append(img1);
    // content.append(photo1);
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