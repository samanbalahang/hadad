window.addEventListener("DOMContentLoaded", () => {
    let scrolly;
    let updown = 0;
    let position;
    let headers = document.querySelectorAll("header");
    let mySwiperCoverflow = document.querySelector(".mySwiperCoverflow");
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
                if (headers.length > 0) {
                    headers.forEach(header => {
                        header.classList.add("scroll")
                    });
                }
            } else {
                if (headers.length > 0) {
                    headers.forEach(header => {
                        header.classList.remove("scroll");
                    });
                }
            }
        } else {
            if (headers.length > 0) {
                headers.forEach(header => {
                    header.classList.remove("scroll");
                });
            }
        }
    });
    if (mySwiperCoverflow) {
        var swiper = new Swiper(".mySwiperCoverflow", {
            effect: "coverflow",
            grabCursor: true,
            centeredSlides: false,
            slidesPerView: 3,
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
            // pagination: {
            //     el: ".mySwiperCoverflow-pagination",
            // },
        });
    }

});