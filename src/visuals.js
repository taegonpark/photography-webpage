// import "./style.css"
const content = document.querySelector(".content");

const createHomeContent = () => {
    const container = document.createElement("div");
    container.classList.add("container");

    const box1 = document.createElement("div");
    box1.classList.add("box"); 
    box1.classList.add("box1"); 
    const icon = document.createElement("div");
    icon.classList.add("icon");
    box1.appendChild(icon);
    const title = document.createElement("h2");
    title.textContent = "Senshi's Dungeon Diner";
    box1.appendChild(title);
    container.appendChild(box1);

    const box2 = document.createElement("div");
    box2.classList.add("box"); 
    box2.classList.add("box2"); 
    const para = document.createElement("p");
    para.textContent = "This is a practice website for a fake restaurant. The Odin Project is a pretty great way to learn webdev, but the Full Stack JavaScript articles use a lot of confusing terminology.";
    box2.appendChild(para);
    container.appendChild(box2);

    const box3 = document.createElement("div");
    box3.classList.add("box"); 
    box3.classList.add("box3"); 
    const sun = document.createElement("p");
    sun.textContent = "Sunday: 8am - 8pm";
    box3.appendChild(sun);
    const mon = document.createElement("p");
    mon.textContent = "Monday: 6am - 6pm";
    box3.appendChild(mon);
    const tue = document.createElement("p");
    tue.textContent = "Tuesday: 6am - 6pm";
    box3.appendChild(tue);
    const wed = document.createElement("p");
    wed.textContent = "Wednesday: 6am - 6pm";
    box3.appendChild(wed);
    const thu = document.createElement("p");
    thu.textContent = "Thursday: 6am - 10pm";
    box3.appendChild(thu);
    const fri = document.createElement("p");
    fri.textContent = "Friday: 6am - 10pm";
    box3.appendChild(fri);
    container.appendChild(box3);
    
    content.appendChild(container);
}
const removeOldContainer = () => {
    const oldContainer = document.querySelector(".container");
    if (oldContainer != null){
        oldContainer.remove();
    }
}
const createMenuContent = () => {
    const container = document.createElement("div");
    container.classList.add("container");

    const menu1 = document.createElement("div");
    menu1.classList.add("box");
    menu1.classList.add("menu");

    const icon1 = document.createElement("div");
    icon1.classList.add("icon");
    menu1.appendChild(icon1);

    const info1 = document.createElement("div");
    info1.classList.add("info");
    const title1 = document.createElement("p");
    title1.textContent = "Man-Eating Plant Tart:";
    const text1 = document.createElement("p");
    text1.textContent = "A tart-like dish created by Senshi from the fruit of different Man-eating Plants. Described as salty by the group, it is likely to be more akin to a quiche but with an inedible shell.";
    info1.appendChild(title1);
    info1.appendChild(text1);
    menu1.appendChild(info1);

    container.appendChild(menu1);
    content.appendChild(container);
};
export {createHomeContent, removeOldContainer, createMenuContent};