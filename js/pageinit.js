$(function() {

    $(":input").inputmask();
    $("#phone").inputmask({ "mask": "+7 (999) 999-9999" });
    $("#phone1").inputmask({ "mask": "+7 (999) 999-9999" });
    $("#phone2").inputmask({ "mask": "+7 (999) 999-9999" });


    //start mainban
    function mainbanCarusel() {
        var checkWidth = $(window).width();
        var infoCaruselBox = $('.js-carousel-mainban');


        infoCaruselBox.addClass('owl-carousel').owlCarousel({
            margin: 0,
            autoplay: true,
            autoplayTimeout: 4000,
            autoplayHoverPause: true,
            nav: true,
            dots: true,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 1
                },
                980: {
                    items: 1
                },
                1950: {
                    item: 1

                }
            }
        });

    };
    $(document).ready(mainbanCarusel);
    $(window).resize(mainbanCarusel);
    //end mainban

    //begin brand carousel
    function fotoCarusel() {
        var slickopts = {
            slidesToShow: 3,
            slidesToScroll: 3,
            rows: 2, // Removes the linear order. Would expect card 5 to be on next row, not stacked in groups.
            responsive: [{
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 776,
                    settings: {
                        slidesToShow: 2,
                        rows: 1 // This doesn't appear to work in responsive (Mac/Chrome)
                    }
                },
                {
                    breakpoint: 680,
                    settings: {
                        slidesToShow: 1,
                        rows: 1 // This doesn't appear to work in responsive (Mac/Chrome)
                    }
                }
            ]
        };

        $('.js-foto-carousel').slick(slickopts);

    };
    $(document).ready(fotoCarusel);
    $(window).resize(fotoCarusel);
    //end brand carousel

    //begin news carousel
    function newsCarusel() {
        var checkWidth = $(window).width();
        var infoCaruselBox = $('.js-news');

        if (checkWidth < 1219) {
            infoCaruselBox.addClass('owl-carousel').owlCarousel({
                margin: 0,
                nav: true,
                dots: false,
                responsive: {
                    0: {
                        items: 1
                    },
                    768: {
                        items: 2
                    },
                    1239: {
                        items: 2
                    }
                }
            });
        } else {
            if (infoCaruselBox.data('owlCarousel') != 'undefined') {
                infoCaruselBox.trigger('destroy.owl.carousel').removeClass('owl-carousel');
            }
        }
    };
    $(document).ready(newsCarusel);
    $(window).resize(newsCarusel);
    //end news carousel


    //begin expert carousel
    function expert1Carusel() {
        var checkWidth = $(window).width();
        var infoCaruselBox = $('.js-expert-owlcarousel1');

        if (checkWidth < 747) {
            infoCaruselBox.addClass('owl-carousel').owlCarousel({
                margin: 0,
                nav: true,
                dots: false,
                autoHeight: true,
                responsive: {
                    0: {
                        items: 1
                    }
                }
            });
        } else {
            if (infoCaruselBox.data('owlCarousel') != 'undefined') {
                infoCaruselBox.trigger('destroy.owl.carousel').removeClass('owl-carousel');
            }
        }
    };
    $(document).ready(expert1Carusel);
    $(window).resize(expert1Carusel);
    //end expertcarousel


    //start expert
    function expertCarusel() {
        var checkWidth = $(window).width();
        var infoCaruselBox = $('.js-carousel-expert');


        infoCaruselBox.addClass('owl-carousel').owlCarousel({
            margin: 0,
            autoplay: false,
            autoHeight: true,
            autoplayTimeout: 4000,
            autoplayHoverPause: true,
            nav: true,
            dots: true,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 1
                },
                980: {
                    items: 1
                },
                1950: {
                    item: 1

                }
            }
        });

    };
    $(document).ready(expertCarusel);
    $(window).resize(expertCarusel);
    //end mainban


    //start client  
    function clientCarusel() {
        var checkWidth = $(window).width();
        var infoCaruselBox = $('.js-carousel-client');

        infoCaruselBox.addClass('owl-carousel').owlCarousel({
            center: true,
            items: 4,
            nav: true,
            dots: false,
            loop: true,
            margin: 10,
            responsive: {
                600: {
                    items: 2
                }
            }
        });

    };
    $(document).ready(clientCarusel);
    $(window).resize(clientCarusel);
    //end client  

    //start reviews  
    function reviewsCarusel() {
        var checkWidth = $(window).width();
        var infoCaruselBox = $('.js-carousel-reviews');

        infoCaruselBox.addClass('owl-carousel').owlCarousel({
            margin: 20,
            nav: true,
            dots: false,
            responsive: {
                0: {
                    margin: 0,
                    items: 1
                },
                768: {
                    items: 2
                },
                980: {
                    items: 4
                },
                1950: {
                    item: 5
                }
            }
        });

    };
    $(document).ready(reviewsCarusel);
    $(window).resize(reviewsCarusel);
    //end reviews  

    //start sidebar
    $('.js-sidebar-show').on('click', function(event) {
        event.preventDefault();
        showSidebar();
        console.log("menu");
    });
    $('.js-sidebar-hide').on('click', function(event) {
        event.preventDefault();
        hideSidebar();
    });

    function showSidebar() {

        $('.js-sidebar').addClass('l-sidebar--open');
        $('.js-sidebar-block').addClass('l-sidebar-block--open');

        var tempWidth,
            tempWidthNew,
            scrollWidth;

        // scroll width compensation
        tempWidth = $('body').outerWidth(true);
        $('body').addClass('g-ov-h');
        tempWidthNew = $('body').outerWidth(true);
        scrollWidth = tempWidthNew - tempWidth;
        $('body').css({ 'padding-right': scrollWidth });
        $('.b-fixed-head').css({ 'right': scrollWidth })

    }

    function hideSidebar() {
        $('.js-sidebar').removeClass('l-sidebar--open');
        $('.js-sidebar-block').removeClass('l-sidebar-block--open');

        // scroll width compensation
        $('body').removeClass('g-ov-h');
        $('body').css({ 'padding-right': 0 });
        $('.b-fixed-head').css({ 'right': 0 })
    }

    // меню в сайдбаре
    $('.js-sidebarmenu-achor').on('click', function(event) {
        event.preventDefault();
        var $menuItem = $(this).parent('.js-sidebarmenu-achor-wrap').parent('.js-sidebarmenu-item');
        var $menuNextLvl = $(this).parents('.js-sidebarmenu-achor-wrap').next('.js-sidebarmenu-content');

        $menuItem.toggleClass('sidebar-menu__item--open');
        $menuNextLvl.stop(true, false).slideToggle('slow')
    });
    //end siderbar
});


// tabbed content
// http://www.entheosweb.com/tutorials/css/tabs.asp
$(".tab_content").hide();
$(".tab_content:first").show();

/* if in tab mode */
$("ul.tabs li").click(function() {

    $(".tab_content").hide();
    var activeTab = $(this).attr("rel");
    $("#" + activeTab).fadeIn();

    $("ul.tabs li").removeClass("active");
    $(this).addClass("active");

    $(".tab_drawer_heading").removeClass("d_active");
    $(".tab_drawer_heading[rel^='" + activeTab + "']").addClass("d_active");

});
/* if in drawer mode */
$(".tab_drawer_heading").click(function() {

    $(".tab_content").hide();
    var d_activeTab = $(this).attr("rel");
    $("#" + d_activeTab).fadeIn();

    $(".tab_drawer_heading").removeClass("d_active");
    $(this).addClass("d_active");

    $("ul.tabs li").removeClass("active");
    $("ul.tabs li[rel^='" + d_activeTab + "']").addClass("active");
});


/* Extra class "tab_last" 
   to add border to right side
   of last tab */
$('ul.tabs li').last().addClass("tab_last");


$(document).ready(function() {

    var $wrapper = $('.tab-wrapper'),
        $allTabs = $wrapper.find('.tab-content > div'),
        $tabMenu = $wrapper.find('.tabs li'),
        $line = $('<div class="line"></div>').appendTo($tabMenu);

    $allTabs.not(':first-of-type').hide();
    $tabMenu.filter(':first-of-type').find(':first').width('100%')

    $tabMenu.each(function(i) {
        $(this).attr('data-tab', 'tab' + i);
    });

    $allTabs.each(function(i) {
        $(this).attr('data-tab', 'tab' + i);
    });

    $tabMenu.on('click', function() {

        var dataTab = $(this).data('tab'),
            $getWrapper = $(this).closest($wrapper);

        $getWrapper.find($tabMenu).removeClass('active');
        $(this).addClass('active');

        $getWrapper.find('.line').width(0);
        $(this).find($line).animate({ 'width': '100%' }, 'fast');
        $getWrapper.find($allTabs).hide();
        $getWrapper.find($allTabs).filter('[data-tab=' + dataTab + ']').show();
    });

}); //end ready



class Slider {
    constructor() {
        this.container = document.querySelector('.slider');
        this.slides = this.container.querySelectorAll('.slide');
        this.active = 0;
        this.activeElement = this.slides[this.active];
        console.log(this.activeElement)

        this.next = this.next.bind(this);
        this.prev = this.prev.bind(this);
        this.setActive = this.setActive.bind(this);

        this.setActive();
    }

    setActive() {
        this.activeElement.classList.remove('active');
        this.activeElement = this.slides[this.active];
        this.activeElement.classList.add('active');

        let i = this.slides.length - this.active;
        this.slides.forEach((slide, index) => {
            if (index === this.active) {
                i = 0;
            }
            if (i === this.slides.length - 1) {
                slide.style.transitionDelay = '0ms';
            } else {
                slide.style.transitionDelay = '';
            }
            slide.setAttribute('data-order', i);
            i++;
        })
    }

    next() {
        if (this.active === this.slides.length - 1) {
            this.active = 0;
        } else {
            this.active++;
        }
        this.setActive();
    }

    prev() {
        if (this.active === 0) {
            this.active = this.slides.length - 1;
        } else {
            this.active--;
        }
        this.setActive();
    }
}

const slider = new Slider();
document.querySelector('.next').onclick = slider.next;
document.querySelector('.prev').onclick = slider.prev;
document.querySelector('.slides').onclick = slider.next;