window.addEventListener("load", () => {
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
})