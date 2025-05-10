import img0 from './assets/concerts/DSC00151.avif';
import img1 from './assets/concerts/DSC07468.avif';
import img2 from './assets/concerts/DSC07656.avif';
import img3 from './assets/concerts/DSC07800.avif';
import img4 from './assets/concerts/DSC07868.avif';
import img5 from './assets/concerts/DSC07896.avif';
import img6 from './assets/concerts/DSC096172.avif';
import img7 from './assets/concerts/DSC09830.avif';
import img8 from './assets/concerts/DSC098532.avif';
import img9 from './assets/concerts/DSC09886.avif';
const concertImages = [img7, img8, img0, img1, img4, img5, img9, img6, img2, img3];

import img10 from './assets/trips/DSC03073.avif';
import img11 from './assets/trips/DSC03145.avif';
import img12 from './assets/trips/DSC03276.avif';
import img13 from './assets/trips/DSC03676.avif';
import img14 from './assets/trips/DSC03758.avif';
import img15 from './assets/trips/DSC03798.avif';
import img16 from './assets/trips/DSC03816.avif';
import img17 from './assets/trips/DSC03817.avif';
import img18 from './assets/trips/DSC03876.avif';
import img19 from './assets/trips/DSC03945.avif';
import img20 from './assets/trips/DSC05500.avif';
import img21 from './assets/trips/DSC06513.avif';
import img22 from './assets/trips/DSC06515.avif';
import img23 from './assets/trips/DSC06570.avif';
import img24 from './assets/trips/DSC06656.avif';
const tripImages = [img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21, img22, img23, img24];

import img25 from './assets/other/DSC03320.avif';
const otherImages = [img25];

const content = document.querySelector(".content");

const createConcertContent = () => {
    concertImages.forEach((path) => {
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
const createTripContent = () => {
    tripImages.forEach((path) => {
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
const createOtherContent = () => {
    otherImages.forEach((path) => {
        const photo = document.createElement("div");
        photo.classList.add("photo");
        photo.classList.add("solo");
        const img = document.createElement('img');
        img.src = path;
        img.alt = "photo";
        img.loading = 'lazy';
        photo.appendChild(img);
        content.appendChild(photo);
    });
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