var tlSaying01 = gsap.timeline({ repeat: -1 });
var tlSaying02 = gsap.timeline({ repeat: -1 });
var tlSaying03 = gsap.timeline({ repeat: -1 });
var tlSaying04 = gsap.timeline({ repeat: -1 });
var tlSaying05 = gsap.timeline({ repeat: -1 });

tlSaying01.from(".saying01", { delay: 2, duration: 2, x: 10, y: 30, opacity: 0, ease: "expo.out" });
tlSaying01.to(".saying01", {delay:4, duration: 2, x: 10, y: 30, opacity: 0, ease: "expo.out" });

tlSaying02.from(".saying04", {delay:4, duration: 2, x: -30, y: 0, opacity: 0, ease: "expo.out" }, );
tlSaying02.to(".saying04", {delay:10, duration: 2, x: -30, y: 0, opacity: 0, ease: "expo.out" }, );

tlSaying03.from(".saying02", {delay:6, duration: 2, x: 20, y: 10, opacity: 0, ease: "expo.out" }, );
tlSaying03.to(".saying02", {delay:4, duration: 2, x: 20, y: 10, opacity: 0, ease: "expo.out" }, );

tlSaying04.from(".saying03", {delay:8, duration: 2, x: -10, y: 25, opacity: 0, ease: "expo.out" }, );
tlSaying04.to(".saying03", { delay:2, duration: 4, x: -10, y: 25, opacity: 0, ease: "expo.out" }, );

tlSaying05.from(".saying05", {delay:10, duration: 2, x: 30, y: -10, opacity: 0, ease: "expo.out" }, );
tlSaying05.to(".saying05", {delay:8, duration: 2, x: 30, y: -10, opacity: 0, ease: "expo.out" }, );