window.addEventListener("DOMContentLoaded", () => {
    let scrolly;
    let updown = 0;
    let position;
    let desktop_header = document.querySelector(".desktop-header");
    let mobile_header = document.querySelector(".mobile-header");
    let mySwiperCoverflow = document.querySelector(".mySwiperCoverflow");
    let newportfolios = document.getElementById("newportfolios");
    let bars = document.getElementById("bars");
    window.addEventListener("scroll", () => {
        scrolly = window.scrollY;
        if (scrolly > 100) {
            if (scrolly > updown) {
                position = "down";
            } else {
                position = "up";
            }
            updown = scrolly;
            if (position == "up") {
                if (desktop_header) {
                    desktop_header.classList.add("scroll")
                }
            } else {
                if (desktop_header) {
                    desktop_header.classList.remove("scroll");
                }
            }
            if (mobile_header) {
                mobile_header.classList.add("scroll")
            }
        } else {
            if (desktop_header) {
                desktop_header.classList.remove("scroll");
            }
            if (mobile_header) {
                mobile_header.classList.remove("scroll")
            }
        }
    });
    if (mySwiperCoverflow) {
        var swiper = new Swiper(".mySwiperCoverflow", {
            effect: "coverflow",
            grabCursor: true,
            centeredSlides: false,
            slidesPerView: 1,
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            },
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                },
            },
            // pagination: {
            //     el: ".mySwiperCoverflow-pagination",
            // },
        });
    }
    if (newportfolios) {
        let string = newportfolios.innerText;

        var typed = new Typed('#newportfolios', {
            strings: [string],
            typeSpeed: 50,
            loop: true,
        });
    }
    if(bars){
        bars.addEventListener("click",()=>{
            desktop_header.classList.toggle("open");
        })
    }
    AOS.init();
});