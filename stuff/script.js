// SHOW/HIDE MENU ON MOBILE

let menu_btn = document.querySelector(".navbar-mobile-btn");
let menu = document.querySelector(".navbar-menu");
let list = document.querySelector(".navbar-list");
let items = document.querySelectorAll(".navbar-item");
let socials = document.querySelector(".socials");
let links = document.querySelectorAll(".navbar-link");
let body = document.body;

menu_btn.addEventListener("click", function () {
  menu.classList.toggle("navbar-mobile-menu");
  menu.classList.toggle("collapse");
  list.classList.toggle("navbar-mobile-list");

  items.forEach((element) => {
    element.classList.toggle("navbar-mobile-item");
  });

  socials.classList.toggle("navbar-mobile-socials");
});

list.addEventListener("click", function () {
  if (!menu.classList.contains("collapse")) {
    menu.classList.toggle("navbar-mobile-menu");
    menu.classList.toggle("collapse");
    list.classList.toggle("navbar-mobile-list");

    items.forEach((element) => {
      element.classList.toggle("navbar-mobile-item");
    });

    socials.classList.toggle("navbar-mobile-socials");
  }
});

// SHOW FIXED MENU ONLY IF SCROLL DOWN

let navbar = document.querySelector(".navbar");
let nav_container = document.querySelector(".navbar-container");

document.addEventListener("scroll", function () {
  if (window.innerWidth > 1200) {
    let pixels = 300;
    navbar.classList.toggle("navbar-fixed", window.scrollY > pixels);
    nav_container.classList.toggle("show", window.scrollY > pixels);
  }
});

// GET HEIGHTS FOR ACCORDIONS

let text1 = document.querySelector(".hide-text-inceput");
let text2 = document.querySelector(".hide-text-scopul");
let text1H, text2H;

let qAnswers = document.querySelectorAll(".q-answer");
let qCards = document.querySelectorAll(".q-card");
let qHeights = [0, 0, 0, 0, 0, 0, 0];

function getHeights() {
  text1H = text1.scrollHeight;
  text1.classList.remove("show-text-inceput");

  text2H = text2.scrollHeight;
  text2.classList.remove("show-text-scopul");

  qAnswers.forEach((ans, i) => {
    qHeights[i] = ans.scrollHeight;
  });
  qCards.forEach((card) => {
    card.classList.remove("show-text");
  });
}

getHeights();
window.onresize = getHeights;

// SHOW/HIDE TEXT CUM A INCEPUT

let hide_text_btn1 = document.querySelector(".show-text-btn-inceput");

hide_text_btn1.addEventListener("click", function () {
  text1.classList.toggle("show-text-inceput");
  text1.style.height = text1H.toString() + "px";

  let display_text = hide_text_btn1.innerText;
  if (hide_text_btn1.classList.contains("eng")) {
    if (display_text == "Read more") {
      hide_text_btn1.innerText = "Hide";
      hide_text_btn1.style.marginTop = "30px";
    } else {
      hide_text_btn1.innerText = "Read more";
      text1.style.height = "0px";
      hide_text_btn1.style.marginTop = "10px";
    }
  } else {
    if (display_text == "Citește mai mult") {
      hide_text_btn1.innerText = "Ascunde";
      hide_text_btn1.style.marginTop = "30px";
    } else {
      hide_text_btn1.innerText = "Citește mai mult";
      text1.style.height = "0px";
      hide_text_btn1.style.marginTop = "10px";
    }
  }
});

// SHOW/HIDE TEXT SCOPUL

let hide_text_btn2 = document.querySelector(".show-text-btn-scopul");

hide_text_btn2.addEventListener("click", function () {
  text2.classList.toggle("show-text-scopul");
  text2.style.height = text2H.toString() + "px";

  let display_text = hide_text_btn2.innerText;
  if (hide_text_btn2.classList.contains("eng")) {
    if (display_text == "Read more") {
      hide_text_btn2.innerText = "Hide";
      hide_text_btn2.style.marginTop = "30px";
    } else {
      hide_text_btn2.innerText = "Read more";
      text2.style.height = "0px";
      hide_text_btn2.style.marginTop = "10px";
    }
  } else {
    if (display_text == "Citește mai mult") {
      hide_text_btn2.innerText = "Ascunde";
      hide_text_btn2.style.marginTop = "30px";
    } else {
      hide_text_btn2.innerText = "Citește mai mult";
      text2.style.height = "0px";
      hide_text_btn2.style.marginTop = "10px";
    }
  }
});

// GALLERY ANIMATION
let pers_icons = document.querySelectorAll(".pers-btn");
let gallery_imgs = document.querySelectorAll(".change-img");

pers_icons.forEach((element) => {
  element.addEventListener("click", function () {
    pers_icons.forEach((element2) => {
      if (element2.classList.contains("active-pers")) element2.classList.remove("active-pers");
    });
    element.classList.add("active-pers");

    if (element.classList.contains("dragnea")) {
      let i = 1;
      gallery_imgs.forEach((element2) => {
        element2.src = "stuff/img/dragnea/Dragnea" + i.toString() + ".png";
        i = i + 1;
      });
    } else if (element.classList.contains("vadim")) {
      let i = 1;
      gallery_imgs.forEach((element2) => {
        element2.src = "stuff/img/vadim/Vadim" + i.toString() + ".png";
        i = i + 1;
      });
    } else if (element.classList.contains("ceausescu")) {
      let i = 1;
      gallery_imgs.forEach((element2) => {
        element2.src = "stuff/img/ceausescu/Ceausescul" + i.toString() + ".png";
        i = i + 1;
      });
    } else if (element.classList.contains("basescu")) {
      let i = 1;
      gallery_imgs.forEach((element2) => {
        element2.src = "stuff/img/basescu/Basescu" + i.toString() + ".png";
        i = i + 1;
      });
    } else if (element.classList.contains("iohannis")) {
      let i = 1;
      gallery_imgs.forEach((element2) => {
        element2.src = "stuff/img/iohannis/Iohanis" + i.toString() + ".png";
        i = i + 1;
      });
    }
  });
});

// FAQ SHOW ANSWER

let qTitle = document.querySelectorAll(".q-title");

qTitle.forEach((question, i) => {
  question.addEventListener("click", function () {
    question.parentElement.classList.toggle("show-text");

    question.parentElement.children[1].style.height = qHeights[i].toString() + "px";

    if (question.parentElement.classList.contains("show-text")) {
      question.firstElementChild.style.transform = "rotate(90deg)";
      question.parentElement.children[1].style.height = qHeights[i].toString() + "px";
    } else {
      question.firstElementChild.style.transform = "rotate(0deg)";
      question.parentElement.children[1].style.height = "0px";
    }
  });
});

// COLOR NAV TEXT WHEN ON SECTION
let sections = document.querySelectorAll("section");

window.onscroll = () => {
  let current = "";

  sections.forEach((section) => {
    let sectionTop = section.offsetTop - 200;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  links.forEach((li) => {
    li.classList.remove("active");
    if (li.href.includes(current)) {
      li.classList.add("active");
    }
  });
};

// SLIDER MOBILE GALLERY

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 100,
  responsiveClass: true,
  center: true,
  responsive: {
    0: {
      items: 3,
    },
    700: {
      items: 5,
    },
  },
});

// TOKONOMICS

const ctx = document.getElementById("politikosChart").getContext("2d");
const cty = document.getElementById("scmbChart").getContext("2d");

Chart.defaults.font.family = "Oswald";
Chart.defaults.font.size = 15;
Chart.defaults.color = "#fff";
Chart.defaults.font.weight = 300;

const myChart1 = new Chart(ctx, {
  type: "pie",
  data: {
    labels: ["Dezvoltare Școalamaibună.ro", "Team + advisors/parteneri", "Airdrops, Marketing și Parteneriate"],
    datasets: [
      {
        label: "Procentaj",
        data: [60, 18, 22],
        backgroundColor: ["#6E1812", "#ad2e24", "#a8714c"],
        borderWidth: 3,
        borderColor: "#1e1e1e",
        hoverOffset: 6,
      },
    ],
  },
  plugins: [ChartDataLabels],
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
      datalabels: {
        color: "#fae6a7",
        anchor: "center",
        align: "end",
        offset: 25,
        font: { family: "Oswald", weight: 300, size: 14 },
        formatter: function (value, context) {
          return value + "%";
        },
      },
    },
  },
});

const myChart2 = new Chart(cty, {
  type: "pie",
  data: {
    labels: ["Adopție națională", "Producție cursuri", "Echipament", "Recurente"],
    datasets: [
      {
        label: "Procentaj",
        data: [50, 30, 10, 10],
        backgroundColor: ["#ad2e24", "#A15420", "#6E1812", "#BD913A"],
        borderWidth: 3,
        borderColor: "#1e1e1e",
        hoverOffset: 6,
      },
    ],
  },
  plugins: [ChartDataLabels],
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
      datalabels: {
        color: "#fae6a7",
        anchor: "center",
        align: "end",
        offset: 25,
        font: { family: "Oswald", weight: 300, size: 14 },
        formatter: function (value, context) {
          return value + "%";
        },
      },
    },
  },
});

/// POPUP

popupCloseBtndocument = document.getElementById("close-popup");
popup = document.querySelector(".mint-popup");
bodyPopup = document.querySelector(".body-popup");

popupCloseBtndocument.addEventListener("click", function () {
  popup.style.display = "none";
  bodyPopup.style.overflow = "unset";
});

history.scrollRestoration = 'manual';