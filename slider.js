if (document.documentElement.clientWidth <= 425) {
    let swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        freeMode: true,
        cssMode: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        mousewheel: true,
        keyboard: true,

    });
} else {
    let swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        freeMode: true,
        cssMode: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        mousewheel: true,
        keyboard: true,

    });
}

