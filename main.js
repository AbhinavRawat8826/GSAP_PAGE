
const lenis = new Lenis({
  duration: 2.6,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);



gsap.registerPlugin(CSSPlugin);



function cursor() {

  const cursor = document.querySelector(".cursor");
  const body = document.body;

  body.addEventListener("mousemove", (e) => {
    gsap.to(cursor, {
      x: e.x+'px',
      y: e.y+'px',
    });
  });
}
cursor();

function section1() {
  const tl = gsap.timeline();
  tl.from(".header", {
    y: -250,
    opacity: 0,
    duration: 1.2,
  });
  tl.from(".text-content h1, .text-content p", {
    y: 100,
    opacity: 0,
    duration: 1.8,
  });
}
section1();

function section2() {


  const sectionTwo = document.querySelector(".section2");
  const cursor = document.querySelector(".cursor");
  const video = document.querySelector(".vid");

  sectionTwo.addEventListener("mouseenter", () => {
    gsap.to(cursor, {
      height: "100px",
      width: "100px",
      fontSize: "25px",
      color: "black",
      margin: "20px",
      background: "white",
    });

    cursor.innerHTML = video.muted
      ? "<i class='fa-solid fa-volume-xmark'></i>"
      : "<i class='fa-solid fa-volume-high'></i>";
  });

  sectionTwo.addEventListener("mouseleave", () => {
    gsap.to(cursor, {
      height: "18px",
      width: "18px",
      margin: 0,
    });
    cursor.innerHTML = "";
  });

  sectionTwo.addEventListener("click", () => {
    video.muted = !video.muted;
    cursor.innerHTML = video.muted
      ? "<i class='fa-solid fa-volume-xmark'></i>"
      : "<i class='fa-solid fa-volume-high'></i>";
  });
}
section2();

function section3() {
  const cursor = document.querySelector(".cursor");
  const sectionThree = document.querySelector(".section3");

  sectionThree.addEventListener("mouseenter", () => {
    gsap.to(cursor, { backgroundColor: "black" });
  });
  sectionThree.addEventListener("mouseleave", () => {
    gsap.to(cursor, { backgroundColor: "white" });
  });

  gsap.to(sectionThree, {
    background: "white",
    color: "#0f0f0f",
    scrollTrigger: {
      trigger: ".section3",
      start: "40% 90%",
      end: "bottom 80%",
      scrub: 2,
    },
  });

  gsap.from(".section3 .right h1", {
    y: 100,
    opacity: 0,
    stagger: 0.5,
    duration: 1,
    scrollTrigger: {
      trigger: ".section3 .right",
      start: "top 40%",
      end: "bottom 35%",
      scrub: 0.5,
      // markers: true,
    },
  });

  gsap.from(".section3 .right h5", {
    x: -100,
    opacity: 0,
    stagger: 0.5,
    duration: 1,
    scrollTrigger: {
      trigger: ".section3 .right",
      start: "top 40%",
      end: "bottom 35%",
      scrub: 0.5,
      // markers: true,
    },
  });
}
section3();



function section4() {
  const cursor = document.querySelector(".cursor");
  const sectionFour = document.querySelector(".section4");
  const parentEl = document.querySelector(".bg");
  const videos = parentEl.querySelectorAll("video");
  const battleHeckVideo = parentEl.querySelector(".id-1"); 


  
  function setInitialVideo() {
    videos.forEach((video) => (video.style.display = "none"));
    if (battleHeckVideo) {
      battleHeckVideo.style.display = "block"; 
    }
  }
  
 
  setInitialVideo();
  
 
  const childElements = document.querySelectorAll(".first-project .first");
  
  childElements.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      const ids = item.getAttribute("data-id");
      const videoEl = parentEl.querySelector(`.id-${ids}`);
  
    
      videos.forEach((video) => {
        video.style.display = "none";
      });
  
     
      if (videoEl) videoEl.style.display = "block";
  
  
    });
  
    item.addEventListener("mouseleave", () => {
     
      videos.forEach((video) => {
        video.style.display = "none";
      });
  
      
      gsap.to(cursor, {
        height: "18px",
        width: "18px",
        margin: 0,
      });
    });
  });
  

  sectionFour.addEventListener("mouseenter", () => {
    gsap.to(cursor, {
      background: "white",
    });
  });

  sectionFour.addEventListener("mouseleave", () => {
    gsap.to(cursor, {
      background: "black",
      height: "18px",
      width: "18px",
      margin: 0,
    });
  });

  
  gsap.to(sectionFour, {
    background: "black",
    color: "white",
    scrollTrigger: {
      trigger: ".section4",
      start: "top 90%",
      end: "bottom 80%",
      scrub: 2,
    },
  });

  
  window.addEventListener("resize", setInitialVideo);
}

section4();




let parentEl = document.querySelector(".bg");
  let childEl = document.querySelectorAll(".first-project .first");

  childEl.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      let ids = item.getAttribute("data-id");
      let bgEl = document.querySelector(`.id-${ids}`);
      

      parentEl.querySelectorAll("video").forEach((video) => {
        video.style.display = "none";
      });

      bgEl.style.display = "block";

      gsap.to(cursor, {
        height: "100px",
        width: "100px",
        duration: 0.1,
        innerHTML: "<P>See Projects</P>",
        fontSize: "15px",
        margin: "20px",
      });
    });

  

    item.addEventListener("mouseleave", () => {
      let ids = item.getAttribute("data-id");
      let bgEl = document.querySelector(`.id-${ids}`);

      parentEl.querySelectorAll("video").forEach((video) => {
        video.style.display = "none";
      });

      bgEl.style.display = "none";

      

      gsap.to(cursor, {
        height: "18px",
        width: "18px",
        duration: 0.1,
        innerHTML: "",
        margin: 0,
      });
    });
  });

  const projects = document.querySelectorAll('.first');


projects.forEach(project => {
  project.addEventListener('mouseenter', () => {
    
    project.querySelector('h1').style.color = 'white';
    project.querySelector('h1').style.opacity = 1;

   
    projects.forEach(otherProject => {
      if (otherProject !== project) {
        otherProject.querySelector('h1').style.opacity = 0.3;
      }
    });
  });

 
  project.addEventListener('mouseleave', () => {
    
    projects.forEach(otherProject => {
      otherProject.querySelector('h1').style.color = 'white';
    });
  });
});





section4();


function section5() {
  const sectionFive = document.querySelector(".section5");
  const cursor = document.querySelector(".cursor");
  const textElements = document.querySelectorAll(".five .one h1");

  sectionFive.addEventListener("mouseenter", () => {
    gsap.to(cursor, {
      height:'0px',
      width:'0px'
    });
  });

  sectionFive.addEventListener("mouseleave", () => {
    gsap.to(cursor, {
      height:'18px',
      width:'18px'
    });
  });

  textElements.forEach((elem) => {
    let clutter = "";
    elem.textContent.split("").forEach((char) => {
      clutter += `<span>${char}</span>`;
    });
    elem.innerHTML = clutter;
  });

  gsap.to(".section5 .five .one h1 span", {
    scrollTrigger: {
      trigger: ".section5 .five .one h1 span",
      start: "top 40%",
      end: "bottom 35%",
      scrub: 3,
      // markers:true
    },
    stagger: 0.2,
    color: "rgb(248, 248, 156)",
  });
}
section5();
