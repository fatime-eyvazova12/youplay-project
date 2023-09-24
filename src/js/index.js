// Swiper
const swiper = new Swiper(".sample-slider", {
  loop: true,
  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Countdown Timer

const targetDate = new Date();
targetDate.setDate(targetDate.getDate() + 119);
targetDate.setHours(targetDate.getHours() + 22);
targetDate.setMinutes(targetDate.getMinutes() + 59);
targetDate.setSeconds(targetDate.getSeconds() + 59);

function updateCountdown() {
  const currentDate = new Date();
  const timeDifference = targetDate - currentDate;

  if (timeDifference > 0) {
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = `
     <div class='countdown-element'>
        <span class='element-text'>Days</span>
        <span class='number'>${days}</span>
     </div>
     <div class='countdown-element'>
        <span class='element-text'>Hours</span>
        <span class='number'>${hours}</span> 
     </div>
    <div class='countdown-element'>
        <span class='element-text'>Minutes</span>
         <span class='number'>${minutes}</span>
    </div>
    <div class='countdown-element'>
        <span class='element-text'>Seconds</span>
        <span class='number'>${seconds}</span>
    </div>
    `;
  } else {
    document.getElementById("countdown").innerHTML = "Countdown expired!";
    clearInterval(interval);
  }
}

const interval = setInterval(updateCountdown, 1000);

updateCountdown();

// Products

const products = [
  {
    img: "/src/img/1.jpeg",
    title: "Bloodborne",
    id: 0,
    count: "$ 50.00",
  },
  {
    img: "/src/img/2.jpeg",
    title: "Soul Sacrifice",
    id: 1,
    count: "$ 10.00",
  },
  {
    img: "/src/img/3.jpeg",
    title: "Assassin’s Creed 4",
    id: 2,
    count: "$ 21.00",
    oldPrice: "$ 49.99",
  },
  {
    img: "/src/img/4.jpeg",
    title: "Dragons Dogma",
    id: 3,
    count: "$ 34.99",
  },
  {
    img: "/src/img/5.jpeg",
    title: "Dark Souls II",
    id: 4,
    count: "$ 29.99",
  },
  {
    img: "/src/img/6.jpeg",
    title: "Prototype 3",
    id: 5,
    count: "$ 20.00",
  },
  {
    img: "/src/img/7.jpeg",
    title: "Skyrim",
    id: 6,
    count: "$ 14.99",
  },
  {
    img: "/src/img/8.jpeg",
    title: "Lords of the Fallen",
    id: 7,
    count: "$ 14.99",
    oldPrice: "$ 23.00",
  },
  {
    img: "/src/img/5.jpeg",
    title: "Dark Souls II",
    id: 8,
    count: "$ 29.99",
  },
];

const product = [
  ...new Set(
    products.map((item) => {
      return item;
    })
  ),
];
let a = 0;

document.getElementById("product-card").innerHTML = product
  .map((item) => {
    let { img, title, count, oldPrice } = item;
    const hasOldPrice = typeof item.oldPrice !== "undefined";

    return ` <div class='product-element'>
                <a class='element-link' href='#'>
                    <div class='img-tag'>
                        <img src=${img} alt='image'/>
                    </div>
                    <div class='bottom-info'>
                        <h2 class='info-text'>${title}</h2>
                        <div class='icon-price'>
                            <span class='icon'>☆☆☆☆☆</span>
                            <span class='count'>${count}</span>
                            ${
                              hasOldPrice
                                ? `<span class='old-price'>${oldPrice}</span>`
                                : ""
                            }
                        </div>
                    </div>
                </a>
                <div class="btn-add-to-cart">
                  <a href="#">Add to cart</a>
                 </div>
     
            </div>
    </div>`;
  })
  .join("");

// Swiper
const slider = new Swiper(".gallery", {
  loop: true,
  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 20,
  pagination: {
    el: ".slider-pagination",
  },
  navigation: {
    nextEl: ".slider-button-next",
    prevEl: ".slider-button-prev",
  },
});
//light gallery
lightGallery(document.querySelector(".gallery .gallery-container"));
