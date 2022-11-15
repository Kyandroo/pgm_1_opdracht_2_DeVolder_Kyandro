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
const projectInfo = document.querySelector(".project-info");
let detailText = document.querySelector(".project-info-content");

const filterBar = document.querySelector("#filter");

const socialBlock = document.querySelector("#socials");

const copyrightBlock = document.querySelector("footer");

/* Alles van navigatie ophalen */
const getNavigation = (navItem) => {
  return `<li><a target="blank" href="${navItem.link}">${navItem.name}</a></li>`;
}

navigation.forEach(project => {
  uList.innerHTML += `${getNavigation(project)}`;
});

/* De verschillende events ophalen en weergeven */
const getEvents = (event) => {
  return `<p><a target="blank" href="${event.link}">${event.title}</a></p>`;
}

events.forEach(project => {
  eventArticle.innerHTML += `${getEvents(project)}`;
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
  <img class="project-header-image" src="${projectPart.screenshots[0]}" alt="Screenshot van het project">
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
filterBar.addEventListener("keyup", (event) => {
  const searchStr = event.target.value;
  const filteredProj = projects.filter(project => {
    return project.title.toLowerCase().includes(searchStr.toLowerCase());
  })
  console.log(filteredProj);
  filteredProj.forEach(project => {
    projectArticle.innerHTML = `${getProjects(project)}`;
  });
});

/* Detail ophalen voor project door klik */
const getDetailImages = (images) => {
  // console.log(images);
  let tempStrImgs = images.map((image) => {
    return `<img class="project-header-image" src="${image}" alt="Screenshot van het project">`;
  })
  return tempStrImgs.join("");
}

const openDetails = (id) => {
  let project = projects.find((project) => project.id == id);
  return `<div class="detail-images">
      ${getDetailImages(project.screenshots)}
      </div>
      <h1>${project.author.firstName} ${project.author.lastName}</h1>
      <h2>${project.title}</h2>
      <p class="synopsis">${project.synopsis}</p>
      <div class="tech-in-card">
      ${getTech(project)}
      </div>`;
}

/* Klik event */
const openInfo = (id) => {
  projectInfo.classList.remove("hidden");
}

const projectCards = document.querySelectorAll(".project-card");
projectCards.forEach(element => {

  element.addEventListener("click", (event) => {
    openInfo();
    detailText.innerHTML = openDetails(element.dataset.id);
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

socials.forEach(project => {
  socialBlock.innerHTML += `${getSocials(project)}`;
});

/* Copyright ophalen beneden de pagina */
const copyrightText = '<p class="copyright-text">Copyright 2022 \u{00A9} Associate Degree in Computer Programming \u{007C} Artevelde University of Applied Sciences \u{007C} Disclaimer</p>';
copyrightBlock.innerHTML += `${copyrightText}`;