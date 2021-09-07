const reviews = [
  {
    id: 1,
    name: "alora pratt",
    job: "chemist",
    img: "/images/female 1.JPEG",
    text: "My beatiful & charming love.",
  },
  {
    id: 2,
    name: "jane oakley",
    job: "doctor",
    img: "/images/female 2.jpg",
    text: "Lorem ipsum dolor sit",
  },
  {
    id: 3,
    name: "quinn ripley",
    job: "paralegal",
    img: "/images/female 3.jpg",
    text: "Lorem ipsum dolor sit, amet",
  },
  {
    id: 4,
    name: "scarlet ryder",
    job: "electrician",
    img: "/images/female 4.jpg",
    text: "Lorem ipsum dolor sit, amet consectetur",
  },
  {
    id: 5,
    name: "willow timber",
    job: "cost analyst",
    img: "/images/female 5.jpg",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing",
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
