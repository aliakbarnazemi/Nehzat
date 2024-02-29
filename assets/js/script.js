// Start Search
let btnsearch = document.querySelector(".search-icon");
let $body = document.querySelector("main");
let $searchcontent = document.querySelector(".search-content");
let _body = document.querySelector("body");
let closesearch = document.querySelector(".close-search");

$searchcontent.style.display = "none";

btnsearch.addEventListener("click", () => {
  $body.classList.add("search");
  $searchcontent.style.display = "block";
  _body.style.overflowY = "hidden";
});

closesearch.addEventListener("click", () => {
  $body.classList.remove("search");
  $searchcontent.style.display = "none";
  _body.style.overflowY = "scroll";
});
// End Search

// Start Quick Access
let $menu = document.querySelector(".menu-quick-access");
let $btnMenu = document.querySelector(".quick-access");
let $closeMenu = document.querySelector(".close-menu");

$btnMenu.addEventListener("click", () => {
  $body.classList.add("search");
  $menu.style.display = "block";
  _body.style.height = "100vh";
  _body.style.overflowY = "hidden";
  $menu.style.overflowY = "hidden";
  $menu.style.overflowX = "hidden";
});

$closeMenu.addEventListener("click", () => {
  $body.classList.remove("search");
  $menu.style.display = "none";
  _body.style.height = "auto";
  $menu.style.overflowY = "hidden";
  $menu.style.overflowX = "hidden";
  _body.style.overflowY = "scroll";
});

// End Quick Access

// Start Accardion
let $btnAcc = document.querySelector(".accardion-link");
let $Acc = document.querySelector(".accardion-items");
let $MainAcc = document.querySelector(".menu-item-accardion");
let $btnAccClose = document.querySelector(".accardion-link-close");

$btnAcc.addEventListener("click", () => {
  $MainAcc.style.height = "250px";
  $Acc.style.display = "flex";
  $btnAccClose.classList.remove("d-none");
  $btnAcc.classList.add("d-none");
});

$btnAccClose.addEventListener("click", () => {
  $MainAcc.style.height = "45px";
  $Acc.style.display = "none";
  $btnAccClose.classList.add("d-none");
  $btnAcc.classList.remove("d-none");
});

let $btnAcc2 = document.querySelector(".accardion-link2");
let $Acc2 = document.querySelector(".accardion-items2");
let $Acc2UL = document.querySelector(".accardion-items2 > ul");
let $MainAcc2 = document.querySelector(".menu-item-accardion2");
let $btnAccClose2 = document.querySelector(".accardion-link-close2");

$btnAcc2.addEventListener("click", () => {
  $MainAcc2.style.height = "350px";
  $Acc2.style.display = "flex";
  $btnAccClose2.classList.remove("d-none");
  $btnAcc2.classList.add("d-none");
  $MainAcc2.style.overflowY = "scroll";
});

$btnAccClose2.addEventListener("click", () => {
  $MainAcc2.style.height = "50px";
  $Acc2.style.display = "none";
  $btnAccClose2.classList.add("d-none");
  $btnAcc2.classList.remove("d-none");
  $MainAcc2.style.overflowY = "hidden";
});
// End Accardion

// Start Load More For Quick Access
let $btnLoad = document.querySelector(".city-more");
let $menuMore = document.querySelector(".more-quick-access .d-flex");

$btnLoad.addEventListener("click", () => {
  $menu.style.overflowY = "scroll";
  $btnLoad.classList.remove("d-flex");
  $btnLoad.classList.add("d-none");
  $menuMore.classList.add("d-none");
});

// End Load more for Quick Access

// Start Video JS
let VideoPlayer = document.querySelector("#vtarget");
let VideoThumb = document.querySelector(".thumb");
let VideoBTN = document.querySelector(".play-btn");

VideoBTN.addEventListener("click", () => {
  VideoThumb.classList.add("d-none");

  VideoPlayer.innerHTML =
    '<video id="my-player" class="video-js" controls preload="auto"><source src="assets/images/video.mp4"></source></video>';
  let player = videojs("my-player");
  player.play();
});
// End Video JS

// Start Dropdowns
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches(".city-title-main-arrow")) {
    let dropdowns = document.getElementsByClassName("dropdown1-content");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
// End Dropdowns



// Start Tab
const tabItems = document.querySelectorAll(".tab-btn");
const tabPanels = document.querySelectorAll(".tab-content");

let currentTabIndex = 0;

function switchTab(newTabIndex) {
  tabItems[currentTabIndex].classList.remove("selected");
  tabPanels[currentTabIndex].classList.remove("selected");

  currentTabIndex = newTabIndex;

  tabItems[currentTabIndex].classList.add("selected");
  tabPanels[currentTabIndex].classList.add("selected");
}

setInterval(() => {
  const nextTabIndex = (currentTabIndex + 1) % tabItems.length;
  switchTab(nextTabIndex);
}, 10000);

tabItems.forEach((tabItem, index) => {
  tabItem.addEventListener("click", () => {
    if (index !== currentTabIndex) {
      switchTab(index);
      autoSwitchInterval
    }
  });
});

// Start Tab Mobile

const tabItems2 = document.querySelectorAll(".tab-btn-mobile");
const tabPanels2 = document.querySelectorAll(".tab-mobile");

let currentTabIndex2 = 0;

function switchTab2(newTabIndex2) {
  tabItems2[currentTabIndex2].classList.remove("selected");
  tabPanels2[currentTabIndex2].classList.remove("selected");
  tabPanels2[currentTabIndex2].classList.remove("d-block");

  currentTabIndex2 = newTabIndex2;

  tabItems2[currentTabIndex2].classList.add("selected");
  tabPanels2[currentTabIndex2].classList.add("selected");
  tabPanels2[currentTabIndex2].classList.add("d-block");
}

tabItems2.forEach((tabItem, index) => {
  tabItem.addEventListener("click", () => {
    if (index !== currentTabIndex2) {
      switchTab2(index);
    }
  });
});

const autoSwitchInterval2 = setInterval(() => {
  const nextTabIndex2 = (currentTabIndex2 + 1) % tabItems2.length;
  switchTab2(nextTabIndex2);
}, 10000);
// End Tab

// Start City 
let cities = document.querySelectorAll('.cities');
let citiesvalue = cities.id;
let cityContentList = document.querySelector('.city-content-list');
let citycontent = document.getElementById('city-content');
let x = [4, 5, 6, 7]

function isfahan() {
  cityContentList.style.display = 'none';
  citycontent.innerHTML = 'اصفهان';
}

function x1() {
  cityContentList.style.display = 'none';
  citycontent.innerHTML = 'آذربایجان شرقی';
}

function semnan() {
  cityContentList.style.display = 'none';
  citycontent.innerHTML = 'سمنان';
}

function yazd() {
  cityContentList.style.display = 'none';
  citycontent.innerHTML = 'یزد';
}

function fars() {
  cityContentList.style.display = 'none';
  citycontent.innerHTML = 'فارس';
}

function tehran() {
  cityContentList.style.display = 'none';
  citycontent.innerHTML = 'تهران';
}
// End City

// // Start Sticky Menu
let $header = document.querySelector('.header');
let layer2 = document.querySelector('.layer-2');
let layer3 = document.querySelector('.layer-3');
let layer1 = document.querySelector('.layer-1');
let navItems = document.querySelector('.nav-item');
let navSticky = document.querySelector('.nav-sticky');
let header2 = document.querySelector('.header-sticky-main');
let $headerLogo = document.querySelector('.logo-section-header');
let $headerLogoImg = document.querySelector('.logo');
let $headerLogoSticky = document.querySelector('.logo-sticky');
let $quickAccessP = document.querySelector('.quick-access-p');

window.addEventListener('scroll', () => {
  if (window.scrollY >= 60) {
    header2.style.height = '120px';
    $header.style.position = 'fixed';
    $header.classList.remove('container');
    $header.classList.remove('container-custom');
    $header.classList.add('container-fluid');
    $header.classList.add('header-sticky');
    layer2.classList.add('layer-2-sticky');
    layer2.classList.remove('layer-2');
    layer3.classList.remove('layer-3');
    layer3.classList.add('layer-3-sticky');
    layer1.classList.add('layer-1-sticky');
    layer1.classList.remove('layer-1');
    navItems.classList.remove('nav-item');
    navItems.classList.add('nav-sticky');
    $headerLogo.classList.add('logo-section-header-sticky');
    $headerLogo.classList.remove('logo-section-header');
    $headerLogoSticky.classList.remove('d-none');
    $headerLogoImg.classList.add('d-none');
    $quickAccessP.classList.add('d-none');
  }

  if (window.scrollY <= 60) {
    header2.style.height = '0px';
    $header.style.position = 'sticky';
    $header.classList.add('container');
    $header.classList.remove('header-sticky');
    layer2.classList.remove('layer-2-sticky');
    layer1.classList.add('layer-1');
    layer2.classList.add('layer-2');
    layer3.classList.add('layer-3');
    layer3.classList.remove('layer-3-sticky');
    layer1.classList.remove('layer-1-sticky');
    navItems.classList.remove('nav-sticky');
    navItems.classList.add('nav-item');
    $headerLogo.classList.remove('logo-section-header-sticky');
    $headerLogo.classList.add('logo-section-header');
    $headerLogoSticky.classList.add('d-none');
    $headerLogoImg.classList.remove('d-none');
    $quickAccessP.classList.remove('d-none');
  }
})
// // End Stick Menu