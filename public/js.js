//Javacript for responsive navigation menu
    const menuBtn = document.querySelector(".menu-btn");
    const navigation = document.querySelector(".navigation");

    menuBtn.addEventListener("click", () => {
      menuBtn.classList.toggle("active");
      navigation.classList.toggle("active");
    });

    console.log("luffy");
    var container = "luffy";
    luffy(container);

    //Javacript for video slider navigation
    const btns = document.querySelectorAll(".nav-btn");
    const slides = document.querySelectorAll(".video-slide");
    const contents = document.querySelectorAll(".content");

    var sliderNav = function (manual) {
      btns.forEach((btn) => {
        btn.classList.remove("active");
      });

      slides.forEach((slide) => {
        slide.classList.remove("active");
      });

      contents.forEach((content) => {
        content.classList.remove("active");
      });

      btns[manual].classList.add("active");
      slides[manual].classList.add("active");
      contents[manual].classList.add("active");

      if (contents[manual].classList.contains("luffy")) {
        console.log("luffy");
        var container = "luffy";
        luffy(container);
      } else if (contents[manual].classList.contains('zoro')) {
          console.log("zoro");
          var container = "zoro";
          zoro(container);
      } else if (contents[manual].classList.contains('nami')) {
          console.log("nami");
          var container = "nami";
          nami(container);
      } else if (contents[manual].classList.contains('usopp')) {
          console.log("usopp");
          var container = "usopp";
          usopp(container);
      } else if (contents[manual].classList.contains('sanji')) {
          console.log("sanji");
          var container = "sanji";
          sanji(container);
      }
    }

    btns.forEach((btn, i) => {
      btn.addEventListener("click", () => {
        sliderNav(i);
      });
    });

$('#audio')[0].load();