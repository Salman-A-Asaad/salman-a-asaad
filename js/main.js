// Variable declration
let night = false;
let mood = document.getElementById("mood");
let skills = `<div
          style="width: 100%"
          class="skills g-5 row align-items-center justify-content-center"
        >
          <div
            class="skill col-sm-12 col-md-6 d-flex flex-row align-items-center justify-content-start"
          >
            <div class="icon text-primary fw-bold fs-5 me-3">
              <i class="bi bi-check2-circle"></i>
            </div>
            <div
              style="width: 100%"
              class="name-skill d-flex align-items-center justify-content-between flex-sm-row flex-md-column text-start"
            >
              <span style="width: 100%" class="fw-bold text-start">Html</span>
              <span style="width: 100%" class="fs-6 text-secondary text-start"
                >Advanced</span
              >
            </div>
          </div>
          <div
            class="skill col-sm-12 col-md-6 d-flex flex-row align-items-center justify-content-start"
          >
            <div class="icon me-3 text-primary fw-bold fs-5">
              <i class="bi bi-check2-circle"></i>
            </div>
            <div
              style="width: 100%"
              class="name-skill d-flex align-items-center justify-content-between flex-sm-row flex-md-column text-start"
            >
              <span style="width: 100%" class="fw-bold text-start">Css</span>
              <span style="width: 100%" class="fs-6 text-secondary text-start"
                >Advanced</span
              >
            </div>
          </div>
          <div
            class="skill ccol-sm-12 col-md-6 d-flex flex-row align-items-center justify-content-start"
          >
            <div class="icon me-3 text-primary fw-bold fs-5">
              <i class="bi bi-check2-circle"></i>
            </div>
            <div
              style="width: 100%"
              class="name-skill d-flex align-items-center justify-content-between flex-sm-row flex-md-column text-start"
            >
              <span style="width: 100%" class="fw-bold text-start">JS</span>
              <span style="width: 100%" class="fs-6 text-secondary text-start"
                >Intermediate</span
              >
            </div>
          </div>
          <div
            class="skill col-sm-12 col-md-6 d-flex flex-row align-items-center justify-content-start"
          >
            <div class="icon me-3 text-primary fw-bold fs-5">
              <i class="bi bi-check2-circle"></i>
            </div>
            <div
              style="width: 100%"
              class="name-skill d-flex align-items-center justify-content-between flex-sm-row flex-md-column text-start"
            >
              <span style="width: 100%" class="fw-bold text-start"
                >Bootstrap</span
              >
              <span style="width: 100%" class="fs-6 text-secondary text-start"
                >Intermediate</span
              >
            </div>
          </div>
          <div
            class="skill col-sm-12 col-md-6 d-flex flex-row align-items-center justify-content-start"
          >
            <div class="icon me-3 text-primary fw-bold fs-5">
              <i class="bi bi-check2-circle"></i>
            </div>
            <div
              style="width: 100%"
              class="name-skill d-flex align-items-center justify-content-between flex-sm-row flex-md-column text-start"
            >
              <span style="width: 100%" class="fw-bold text-start">Git</span>
              <span style="width: 100%" class="fs-6 text-secondary text-start"
                >Intermediate</span
              >
            </div>
          </div>
          <div
            class="skill col-sm-12 col-md-6 d-flex flex-row align-items-center justify-content-start"
          >
            <div class="icon me-3 text-primary fw-bold fs-5">
              <i class="bi bi-check2-circle"></i>
            </div>
            <div
              style="width: 100%"
              class="name-skill d-flex align-items-center justify-content-between flex-sm-row flex-md-column text-start"
            >
              <span style="width: 100%" class="fw-bold text-start">SASS</span>
              <span style="width: 100%" class="fs-6 text-secondary text-start"
                >Basic</span
              >
            </div>
          </div>
        </div>`;
let project = `<div style="width: 100%" class="project">
          <div class="card">
            <img class="card-img-top" src="img/mt-show.jpeg" alt="mt-show" />
            <div class="card-body">
              <h5 class="card-title d-inline-block me-2 text-secondary">
                MT Show
              </h5>
              <a
                href="https://salman-a-asaad.github.io/MTshow/"
                class="btn btn-primary"
                ><i class="bi bi-link-45deg"></i
              ></a>
            </div>
          </div>
          <div class="card">
            <img class="card-img-top" src="img/education.png" alt="mt-show" />
            <div class="card-body">
              <h5 class="card-title d-inline-block me-2 text-secondary">
                Education
              </h5>
              <a
                href="https://salman-a-asaad.github.io/Education/"
                class="btn btn-primary"
                ><i class="bi bi-link-45deg"></i
              ></a>
            </div>
          </div>
          <div class="card">
            <img
              class="card-img-top"
              src="img/frontend-bootcamb.jpeg"
              alt="mt-show"
            />
            <div class="card-body">
              <h5 class="card-title d-inline-block me-2 text-secondary">
                Frontend
              </h5>
              <a
                href="https://salman-a-asaad.github.io/Frontend-Bootcamp/"
                class="btn btn-primary"
                ><i class="bi bi-link-45deg"></i
              ></a>
            </div>
          </div>
          <div class="card">
            <img
              class="card-img-top"
              src="img/health-care.jpeg"
              alt="mt-show"
            />
            <div class="card-body">
              <h5 class="card-title d-inline-block me-2 text-secondary">
                Health Care
              </h5>
              <a
                href="https://salman-a-asaad.github.io/Hospital/"
                class="btn btn-primary"
                ><i class="bi bi-link-45deg"></i
              ></a>
            </div>
          </div>
          <div class="card">
            <img class="card-img-top" src="img/shopping.jpeg" alt="mt-show" />
            <div class="card-body">
              <h5 class="card-title d-inline-block me-2 text-secondary">
                Shopping
              </h5>
              <a
                href="https://salman-a-asaad.github.io/Shopping/"
                class="btn btn-primary"
                ><i class="bi bi-link-45deg"></i
              ></a>
            </div>
          </div>
          <div class="card">
            <img class="card-img-top" src="img/travel.png" alt="mt-show" />
            <div class="card-body">
              <h5 class="card-title d-inline-block me-2 text-secondary">
                Travel
              </h5>
              <a
                href="https://salman-a-asaad.github.io/Travel/"
                class="btn btn-primary"
                ><i class="bi bi-link-45deg"></i
              ></a>
            </div>
          </div>
        </div>`;
let projectsSelect = document.getElementById("projects-select");
let skillsSelect = document.getElementById("skills-select");
let showProSki = document.getElementById("show-pro-ski");
showProSki.innerHTML = project;
if (localStorage.getItem("night") == "true") {
  setMood();
}
// Functions
function setMood() {
  if (!night) {
    night = !night;
    mood.innerHTML = `<i class="bi bi-moon"></i>`;
    document.head.innerHTML += `<link rel="stylesheet" href="css/night-mood.css" />`;
    localStorage.setItem("night", night);
  } else {
    night = !night;
    mood.innerHTML = `<i class="bi bi-brightness-high"></i>`;
    document.head.lastChild.remove();
    localStorage.setItem("night", night);
  }
}
function setProjects() {
  showProSki.innerHTML = project;
  showProSki.style.overflowY = "scroll";
  projectsSelect.classList.add("selected");
  skillsSelect.classList.remove("selected");
}
function setSkills() {
  showProSki.innerHTML = skills;
  showProSki.style.overflow = "hidden";
  projectsSelect.classList.remove("selected");
  skillsSelect.classList.add("selected");
}
// Events
mood.addEventListener("click", setMood);
projectsSelect.addEventListener("click", setProjects);
skillsSelect.addEventListener("click", setSkills);
