window.addEventListener("scroll", function() {
    const header = document.querySelector("nav");
    const scrollPos = window.scrollY;
  
    if (scrollPos > 450) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
  
  window.addEventListener("scroll", function() {
    const button = document.querySelector("button");
    const scrollPos = window.scrollY;
  
    if (scrollPos > 450) {
      button.classList.add("scrolledB");
    } else {
      button.classList.remove("scrolledB");
    }
  });

//   NON NE HO IDEA DI COME HO FATTO. MA HA FUNZIONATO