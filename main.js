gsap.registerPlugin(ScrollTrigger);
function loco() {
  gsap.registerPlugin(ScrollTrigger);
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("main"),
    smooth: true,
  });
  locoScroll.on("scroll", ScrollTrigger.update);
  ScrollTrigger.scrollerProxy("main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector("main").style.transform
      ? "transform"
      : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}
loco();

var main = document.querySelector("main");
var crsr = document.querySelector("#crsr");
var mouseX = 0;
var mouseY = 0;
var crsrX = 0;
var crsrY = 0;
var speed = 0.1;
document.addEventListener("mousemove", function (dets) {
  mouseX = dets.x;
  mouseY = dets.y;
});
function updateCursor() {
  var distX = mouseX - crsrX;
  var distY = mouseY - crsrY;
  crsrX += distX * speed;
  crsrY += distY * speed;
  crsr.style.top = `${crsrY - 10}px`;
  crsr.style.left = `${crsrX - 10}px`;
  requestAnimationFrame(updateCursor);
}
requestAnimationFrame(updateCursor);

function hoverCrsrChange() {
  crsr.style.width = "auto";
  crsr.style.height = "auto";
  crsr.style.borderRadius = "20px";
  crsr.style.padding = "2px 4px";
}
function hovCrsrChangeRev() {
  crsr.innerHTML = "";
  crsr.style.width = "20px";
  crsr.style.height = "20px";
  crsr.style.borderRadius = "50%";
}

var mainVid = document.querySelector(".hero-section video");
mainVid.addEventListener("mouseenter", function () {
  crsr.innerHTML = "Sound on";
  hoverCrsrChange();
});
mainVid.addEventListener("mouseleave", function () {
  crsr.innerHTML = "";
  hovCrsrChangeRev();
});

var workImg = document.querySelector(".work-con-left img");
workImg.addEventListener("mouseenter", function () {
  crsr.innerHTML = "View";
  hoverCrsrChange();
});
workImg.addEventListener("mouseleave", function () {
  crsr.innerHTML = "";
  hovCrsrChangeRev();
});

var workVid = document.querySelector(".work-con-right video");
workVid.addEventListener("mousemove", function () {
  crsr.innerHTML = "View";
  hoverCrsrChange();
});
workVid.addEventListener("mouseleave", function () {
  crsr.innerHTML = "";
  hovCrsrChangeRev();
});

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".hero-section h1",
    scroller: "main",
    start: "top 24%",
    end: "top 0%",
    scrub: 3,
  },
});
tl.to(
  ".hero-section h1",
  {
    x: "-100px",
    ease: "power2.out",
  },
  "anim"
);
tl.to(
  ".hero-section h2",
  {
    x: "100px",
    ease: "power2.out",
  },
  "anim"
);
tl.to(
  ".hero-section video",
  {
    width: "100%",
    ease: "power2.out",
  },
  "anim"
);
const tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".hero-section h1",
    scroller: "main",
    start: "top -69%",
    end: "top -70%",
    scrub: 3,
  },
});
tl2.to(main, {
  backgroundColor: "#fff",
});

const tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".hero-section h1",
    scroller: "main",
    start: "top -270%",
    end: "top -280%",
    scrub: 3,
  },
});
tl3.to(main, {
  backgroundColor: "#000",
});

function mentionClients() {
  var mentionEffect = document.querySelectorAll(".mention-container .elem");
  mentionEffect.forEach((element) => {
    element.addEventListener("mouseenter", function () {
      var mentionImg = element.getAttribute("data-image");
      var mentionImgW = element.getAttribute("data-width");
      var mentionImH = element.getAttribute("data-height");
      document.querySelector(".mention-container .elem >*").style.opacity = 1;
      crsr.style.width = `${mentionImgW}`;
      crsr.style.height = `${mentionImH}`;
      crsr.style.borderRadius = `0`;
      crsr.style.mixBlendMode = `normal`;
      crsr.style.backgroundImage = `url(${mentionImg})`;
      crsr.style.backgroundColor = `transparent`;
    });
    element.addEventListener("mouseleave", function () {
      document.querySelector(".mention-container .elem >*").style.opacity = 1;
      crsr.style.width = `20px`;
      crsr.style.height = `20px`;
      crsr.style.borderRadius = `50%`;
      crsr.style.backgroundImage = `none`;
      crsr.style.mixBlendMode = `difference`;
      crsr.style.backgroundColor = `#edbfff`;
    });
  });
}
mentionClients();

var navShow = document.querySelector(".navLeft-cir");
var navbar = document.querySelector(".navbar");
navShow.addEventListener("click", function () {
  navbar.style.top = "100%";
});

// function navScrollShow() {
//   var navScroller = document.querySelector(".nav-scroller");
//   var navLinks = document.querySelectorAll(".navbar li a");
//   navLinks.forEach((link) => {
//     link.addEventListener("mouseenter", function () {
//       navScroller.style.zIndex = 9;
//       navScroller.style.opacity = 1;
//     });
//     link.addEventListener("mouseleave", function () {
//       navScroller.style.zIndex = 0;
//       navScroller.style.opacity = 0;
//     });
//   });
// }
// navScrollShow();
