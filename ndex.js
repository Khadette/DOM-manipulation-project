/* =========================
   IMAGE SLIDER (AUTO CHANGE)
========================= */

const images = {
  img1: [
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    "https://images.unsplash.com/photo-1526779259212-939e64788e3c"
  ],
  img2: [
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
    "https://images.unsplash.com/photo-1543353071-873f17a7a088"
  ],
  img3: [
    "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
    "https://images.unsplash.com/photo-1492724441997-5dc865305da7"
  ],
  img4: [
    "https://images.unsplash.com/photo-1506126613408-eca07ce68773",
    "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d"
  ]
};

/* Set initial images */
Object.keys(images).forEach(id => {
  document.getElementById(id).src = images[id][0];
});

/* Change every 30 seconds */
setInterval(() => {
  Object.keys(images).forEach(id => {
    const img = document.getElementById(id);
    const arr = images[id];

    let currentIndex = arr.indexOf(img.src);
    let nextIndex = (currentIndex + 1) % arr.length;

    img.src = arr[nextIndex];
  });
}, 30000);


/* =========================
   ADD TO LIST (SIMPLE)
========================= */

function addCard(name) {
  alert(name + " added to your list!");
}