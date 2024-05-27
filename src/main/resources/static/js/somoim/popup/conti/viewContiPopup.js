var viewContiPopup = {
    init: function() {
        $("#viewContiPopup").modal('show');
        viewContiPopup.showSlide();
    },
    bind: function() {
    },
    showSlide: function() {
        let main_scrollbar_drag = $(".main_swiper");
        let scroll_move = $(".main_swiper").width();
        var main_swiper = new Swiper(".main_swiper", {
            slidesPerView: "auto",
            spaceBetween: 0,
            speed:1200,
            centeredSlides: true,
            loop: true,
            // navigation: {
            //     nextEl: ".main_next",
            //     prevEl: ".main_prev",
            // },
            pagination: {
                el: ".pagination_fraction",
                type: "fraction",
            },
            on: {
                slideChange: function() {
                    main_scrollbar_drag.animate({ left: scroll_move * this.realIndex }, 100);
                },
            },
        });
    },
}

$(function(){
    viewContiPopup.init();
});