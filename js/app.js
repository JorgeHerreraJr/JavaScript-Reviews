const reviews = [
  {
    id: 1,
    name: "Alora Pratt",
    job: "Chemist",
    img: "/images/female 1.JPEG",
    text: "'A beatiful & charming lady.'",
  },
  {
    id: 2,
    name: "Jane Oakley",
    job: "Doctor",
    img: "/images/female 2.jpg",
    text: "'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat ea pariatur accusantium totam atque quam explicabo optio libero repellat nisi.'",
  },
  {
    id: 3,
    name: "Quinn Ripley",
    job: "Paralegal",
    img: "/images/female 3.jpg",
    text: "'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat ea pariatur accusantium totam atque quam explicabo optio libero repellat nisi.'",
  },
  {
    id: 4,
    name: "Scarlet Ryder",
    job: "Electrician",
    img: "/images/female 4.jpg",
    text: "'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat ea pariatur accusantium totam atque quam explicabo optio libero repellat nisi.'",
  },
  {
    id: 5,
    name: "Willow Timber",
    job: "Cost Analyst",
    img: "/images/female 5.jpg",
    text: "'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat ea pariatur accusantium totam atque quam explicabo optio libero repellat nisi.'",
  },
];

//select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

//set starting item
let currentItem = 0;

//load initial item
window.addEventListener("DOMContentLoaded", function () {
  showPerson(currentItem);
});

//show person based on item
function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

//show next person
nextBtn.addEventListener("click", function(){
    currentItem++
    if(currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson(currentItem);
});

//show prev person
prevBtn.addEventListener("click", function(){
    currentItem--
    if(currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
});

//show rando
randomBtn.addEventListener("click", function() {
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
})
