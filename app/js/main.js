"use strict";

/* Importeren van de objecten uit data.js */
import {
  navigation,
  events,
  projects,
  socials
} from "./data.js";

const uList = document.querySelector("#full-list");
const eventArticle = document.querySelector("#event-div");

const projectArticle = document.querySelector("#all-cards");
const projectCard = document.querySelectorAll(".project-card");
const projectInfo = document.querySelector(".project-info");
const detailText = document.querySelector(".project-info-content");

const filterBar = document.querySelector("#filter");

const socialBlock = document.querySelector("#socials");

const copyrightBlock = document.querySelector("footer");

/* Alles van navigatie ophalen */
const getNavigation = (navItem) => {
  return `<li><a target="blank" href="${navItem.link}">${navItem.name}</a></li>`;
}

navigation.forEach(item => {
  uList.innerHTML += `${getNavigation(item)}`;
});

/* De verschillende events ophalen en weergeven */
const getEvents = (event) => {
  return `<p><a target="blank" href="${event.link}">${event.title}</a></p>`;
}

events.forEach(text => {
  eventArticle.innerHTML += `${getEvents(text)}`;
});

/* Time counter vanaf begin van dit schooljaar */
const countUpTimer = (time) => {
  let countUpTo = new Date(time);

  let second = 1000;
  let minute = second * 60;
  let hour = minute * 60;
  let day = hour * 24;
  let timer;

  const getTimeLeft = () => {
    let currentTime = new Date();
    let timeBlock = currentTime - countUpTo;

    let days = Math.floor(timeBlock / day);
    let hours = Math.floor((timeBlock % day) / hour);
    let minutes = Math.floor((timeBlock % hour) / minute);
    let seconds = Math.floor((timeBlock % minute) / second);

    document.querySelector("#timer-block").innerHTML = `<p class="clock">${days}days ${hours}h ${minutes}m ${seconds}s</p>
    <p class="text-under-time">running in current academic year 2022-23</p>`;
  }

  timer = setInterval(getTimeLeft, 1000);
}

countUpTimer(1663569900000);

/* De verschillende cards met projecten ophalen */
// Oproepen van alles binnen de cards
const getProjects = (projectPart) => {
  return `<div data-id="${projectPart.id}" class="project-card">
  <div class="header-img-card">
    <img class="project-header-image" src="${projectPart.screenshots[0]}" alt="">
  </div>
  <h1>${projectPart.author.firstName} ${projectPart.author.lastName}</h1>
  <h2>${projectPart.title}</h2>
  <div class="tech-in-card">
    ${getTech(projectPart)}
  </div>
  </div>`;
}

// Weg met komma tussen technologieën
const getTech = (tech) => {
  let tempStrTech = tech.technologies.map((tech) => {
    return `<p>${tech.name}</p>`;
  })
  return tempStrTech.join("");
}

projects.forEach(project => {
  projectArticle.innerHTML += `${getProjects(project)}`;
});

/* Live search */
console.log(filterBar);

filterBar.addEventListener("keyup", (event) => {
  const searchStr = event.target.value;
  const filteredChars = projects.filter(character => {
    return character.title.includes(searchStr);
  })
  getTech(filteredChars);
});

/* Detail ophalen voor project door klik */
const getDetailImages = (images) => {
  console.log(images);
  for (let index = 0; index < images.length; index++) {
    return `<img class="project-header-image" src="${images.screenshots}" alt="beeld">`
  }
  console.log(images);
}

// projects.forEach(imgs => {
//   detailText.innerHTML += `${getDetailImages(imgs)}`;
// });

const openDetails = (detail) => {
  return `${getDetailImages(detail.screenshots)}
  <h1>${detail.author.firstName} ${detail.author.lastName}</h1>
  <h2>${detail.title}</h2>
  <div class="tech-in-card">
    ${getTech(detail)}
  </div>
  <p>${detail.synopsis}</p>`;
}

projects.forEach(details => {
  detailText.innerHTML += `${openDetails(details)}`;
});

/* Klik event */
const openInfo = () => {
  projectInfo.classList.remove("hidden");
}

projectCard.forEach(element => {
  element.addEventListener("click", openInfo, (event) => {
    openDetails(event.event.target.dataset.id || event.target.parentNode.dataset.id || event.target.parentNode.parentNode.dataset.id)
  });
});

const closeInfo = () => {
  projectInfo.classList.add("hidden");
}

document.querySelector(".close-cross").addEventListener("click", closeInfo);

/* Time counter tot het volgende schooljaar */
const countDownTimer = (time) => {
  let countDownFrom = new Date(time);

  let second = 1000;
  let minute = second * 60;
  let hour = minute * 60;
  let day = hour * 24;
  let timer;

  const getTimeToGo = () => {
    let currentTime = new Date();
    let timeBlock = countDownFrom - currentTime;

    let days = Math.floor(timeBlock / day);
    let hours = Math.floor((timeBlock % day) / hour);
    let minutes = Math.floor((timeBlock % hour) / minute);
    let seconds = Math.floor((timeBlock % minute) / second);

    document.querySelector("#timer-block-two").innerHTML = `<p class="clock">${days}days ${hours}h ${minutes}m ${seconds}s</p>
    <p class="text-under-time">till next academic year 2023-24</p>`;
  }

  timer = setInterval(getTimeToGo, 1000);
}

countDownTimer(1695019500000);

/* De verschillende social media icon links ophalen */
const getSocials = (socialitem) => {
  return `<a target="blank" href="${socialitem.link}"><img src="${socialitem.image}" alt="Logo van ${socialitem.name}"></a>`;
}

socials.forEach(social => {
  socialBlock.innerHTML += `${getSocials(social)}`;
});

/* Copyright ophalen beneden de pagina */
const copyrightText = '<p class="copyright-text">Copyright 2022 \u{00A9} Associate Degree in Computer Programming \u{007C} Artevelde University of Applied Sciences \u{007C} Disclaimer</p>';
copyrightBlock.innerHTML += `${copyrightText}`;