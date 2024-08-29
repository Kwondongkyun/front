const images =  [
    "0.jpg", "1.jpg", "2.jpg",
];

const chosenImage = images[Math.floor(Math.random()*images.length)];

const bgImage = document.createElement("img");

bgImage.src=`img/${chosenImage}`;

// body 내부에 bgImage 추가

document.body.appendChild(bgImage); 