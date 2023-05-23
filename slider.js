if (document.documentElement.clientWidth <= 768) {
    let swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 10,
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
        spaceBetween: 10,
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

