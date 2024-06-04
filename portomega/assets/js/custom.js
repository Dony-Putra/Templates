/*
 *****************************************************
 *	CUSTOM JS DOCUMENT 								*
 *	"use strict" mode on						    *
 *****************************************************
 */
$(window).on('load', function() {

    "use strict";

    var portoWindow             = $(window)
    var counterSection          = $('.counter_section');
    var dropdownMenu            = $('.dropdown-menu a.dropdown-toggle');
    var videoPopupMag           = $('.test-popup-link');
    var testimonialSlider       = $(".portmg_main_testimonial_banner");
    var teamemSlider            = $(".portmg_circle_banner");
    var teamemSlider_2          = $(".portmg_team_slider");
    var threeColGallery         = $('.portmg_gallery_slider');
    var blogRelatedItem         = $('.blog_related_item');
    var portomegaBlogItem       = $('.portomega_blog__item');
    var productImgSliderItem    = $('.product_img_slider_item');
    var toggleIcon              = $('.clk');
    var magnifyGallery          = $(".gallery");
    var quantityNumber          = $('.num-in span');
    var fullPageComingSoon      = $('#fullpage');
    var formButton              = $('.form-button');
    var waveHide                = $(".wavy")
    var preloderDelay           = $("#preloader")
    var prograssLoading         = $(".loading");
    var fristOneDetail          = $("#frist-1-details");
    var fristTwoDetail          = $("#frist-2-details");
    var fristThreeDetail        = $("#frist-3-details");
    var fristFourDetail         = $("#frist-4-details");
    var fristone                = $("#frist-1");
    var fristTwo                = $("#frist-2");
    var fristThree              = $("#frist-3");
    var fristFour               = $("#frist-4");
    var backToTop               = $('.back-to-top');
    var opMenu                  = $('.op-menu');
    var searchCloseButton       = $('.closebtn')
    var searchButtonToggle      = $(".portomega_mini_search_bar .fa-search,.portomega_mini_search_bar_2 .fa-search");
    var searchBoxIcon           = $(".search-box .fa-times");
    var skillProgress           = $(".skills-progress span");
    var countingFunction        = $('.counting');
    var fullPageLicenseKey      = '7BD84A95-D1084D4A-BC7F4148-1A5435B2'
    var htmlBody                = $("html, body");
    var opMenu                  = $('.op-menu');
    var overlayContent          = $('.overlay-content');
    
    /*
    ------------------------
    // Preloader
    ------------------------
    */
    waveHide.fadeOut();
    preloderDelay.delay(350).fadeOut("slow");

    /*
    ----------------------
    // Fun Facts Counter
    ----------------------
    */
    if (counterSection.length) {
        counterSection.on('inview', function(event, visible, visiblePartX, visiblePartY) {
            if (visible) {
                $(this).find('.timer').each(function() {
                    var $this = $(this);
                    $({
                        Counter: 0
                    }).animate({
                        Counter: $this.text()
                    }, {
                        duration: 2000,
                        easing: 'swing',
                        step: function() {
                            $this.text(Math.ceil(this.Counter));
                        }
                    });
                });
                $(this).off('inview');
            }
        });
    }

    /*
    --------------------
    // Wow Animation
    --------------------
    */
    var wow = new WOW({
        boxClass: 'wow', // default
        animateClass: 'animated', // default
        offset: 0, // default
        mobile: true, // default
        live: true // default
    })
    wow.init();

    /*
    --------------------
    // Dropdown Menu
    --------------------
    */
    var navSubmenuShow = $('.dropdown-submenu .show');
    dropdownMenu.on('click', function(e) {
        if (!$(this).next().hasClass('show')) {
            $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
        }
        var subMenu = $(this).next(".dropdown-menu");
        subMenu.toggleClass('show');


        $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
            navSubmenuShow.removeClass("show");
        });

        return false;
    });


    /*
    -----------------
    // Video Popup
    -----------------
    */
    videoPopupMag.magnificPopup({
        type: 'iframe',
        iframe: {
            markup: '<div class="mfp-iframe-scaler">' +
                '<div class="mfp-close"></div>' +
                '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
                '<div class="mfp-title">Some caption</div>' +
                '</div>',
            patterns: {
                youtube: {
                    index: 'youtube.com/',
                    id: 'v=',
                    src: 'https://www.youtube.com/embed/ryzOXAO0Ss0'
                }
            }
        }
    });

    /*
    --------------------
    // Progress Bar 
    --------------------
    */

    prograssLoading.fadeOut(900);
    portoWindow.on('scroll', function() {
        skillProgress.each(function() {
            var bottomOfObject = $(this).offset().top + $(this).outerHeight();
            var bottomOfWindow = portoWindow.scrollTop() + portoWindow.height();
            var myVal = $(this).attr('data-value');
            if (bottomOfWindow > bottomOfObject) {
                $(this).css({
                    width: myVal
                });
            }
        });
        countingFunction.each(function() {
            var $this = $(this),
                countTo = $this.attr('data-count');

            $({
                countNum: $this.text()
            }).animate({
                countNum: countTo
            }, {
                duration: 1000,
                easing: 'linear',
                step: function() {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function() {
                    $this.text(this.countNum);
                }
            });
        });
    });

    /*
    ------------------------
    // Toggle Icon
    ------------------------
    */
    toggleIcon.click(function() {
        $(this).find('i').toggleClass('fa-plus fa-minus')
    });

    /*
    ------------------------
    //  Portfolio Magnific Popup
    ------------------------
    */
    magnifyGallery.magnificPopup({
        delegate: ".img-link",
        type: "image",
        tLoading: "Loading image #%curr%...",
        mainClass: "mfp-img-mobile",
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        }
    });

    /*
    ------------------------
    // Product Quantity
    ------------------------
    */
    quantityNumber.click(function() {
        var quantityInput = $(this).parents('.num-block').find('input.in-num');
        if ($(this).hasClass('minus')) {
            var count = parseFloat(quantityInput.val()) - 1;
            count = count < 1 ? 1 : count;
            if (count < 2) {
                $(this).addClass('dis');
            } else {
                $(this).removeClass('dis');
            }
            quantityInput.val(count);
        } else if (quantityInput.val() <= 9) {
            var count = parseFloat(quantityInput.val()) + 1
            quantityInput.val(count);
            if (count > 1) {
                $(this).parents('.num-block').find(('.minus')).removeClass('dis');
            }
        }
        quantityInput.change();
    });

    /*
    ------------------------
    // Team Meamber Details
    ------------------------
    */
    fristOneDetail.hide();
    fristTwoDetail.hide();
    fristThreeDetail.hide();
    fristFourDetail.hide();

    fristone.click(function() {
        fristOneDetail.show();
        fristTwoDetail.hide();
        fristThreeDetail.hide();
        fristFourDetail.hide();
    });

    fristTwo.click(function() {
        fristTwoDetail.show();
        fristThreeDetail.hide();
        fristFourDetail.hide();
        fristOneDetail.hide();
    });

    fristThree.click(function() {
        fristThreeDetail.show();
        fristOneDetail.hide();
        fristTwoDetail.hide();
        fristFourDetail.hide();
    });

    fristFour.click(function() {
        fristFourDetail.show();
        fristOneDetail.hide();
        fristTwoDetail.hide();
        fristThreeDetail.hide();
    });

    /*
    ---------------------------
    // Top to bottom
    ---------------------------
    */
    if (portoWindow.scrollTop() < 50) {
        backToTop.fadeOut();
    }
    portoWindow.scroll(function() {
        if ($(this).scrollTop() > 50) {
            backToTop.fadeIn();
        } else {
            backToTop.fadeOut();
        }
    });
    backToTop.click(function() {
        htmlBody.animate({
            scrollTop: 0
        }, 1000);
    });

    /*
    ---------------------------
    // Fullpage Scroll Section
    ---------------------------
    */

    if (fullPageComingSoon.length) {
        new fullpage('#fullpage', {
            backToTop: true,
            licenseKey: fullPageLicenseKey,
            navigation: true,
            navigationPosition: 'right',
            navigationTooltips: ['01', '02', '03'],
            responsiveWidth: 992,
	        
        });
    }

    /*
    ---------------------------
    // Countdown Section
    ---------------------------
    */
    if (fullPageComingSoon.length) {
        const second = 1000,
            minute = second * 60,
            hour = minute * 60,
            day = hour * 24;

        let countDown = new Date('Jul 29, 2021 00:00:00').getTime(),
            x = setInterval(function() {

                let now = new Date().getTime(),
                    distance = countDown - now;

                document.getElementById('days').innerText = Math.floor(distance / (day)),
                    document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
                    document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
                    document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);

            }, second)
    }
    /*
	---------------------------
	// Map Initialization
	---------------------------
	*/
    initMap();

    /*
    -------------------------------
    // Swiper Slider Activation
    -------------------------------
    */
    var galleryThumbs = new Swiper('.gallery-thumbs', {
        spaceBetween: 5,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        breakpoints: {
            0: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 4,
            },
        }
    });
    var galleryTop = new Swiper('.gallery-top', {
        spaceBetween: 10,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        thumbs: {
            swiper: galleryThumbs
        },
    });
    var galleryThumbSwiper = $('.gallery-thumbs .swiper-slide');
    var galleryTopVar = $('.gallery-top');
    var galleryThumb = $('.gallery-thumbs');
    var productCarouselTopWidth = galleryTopVar.outerWidth();
    galleryTopVar.css('height', productCarouselTopWidth);

    var productCarouselThumbsItemWith = galleryThumbSwiper.outerWidth();
    galleryThumb.css('height', productCarouselThumbsItemWith);

    /*
    ----------------------
    // Mobile Menu Toogle
    ----------------------
    */
    
    opMenu.click(function() {
        opMenu.hide(100);
        overlayContent.show(200);
    });
    searchCloseButton.click(function() {
        opMenu.show(600);
    });

    /*
	-----------------
	//Search Toggle
	-----------------
	*/
    var searchBoxToggle = $(".search-box");
    var portMiniSearch = $(".portomini_search_bar");
    searchButtonToggle.click(function() {
       searchBoxToggle.fadeToggle();
        portMiniSearch.focus();
    });
    searchBoxIcon.click(function() {
        searchBoxToggle.fadeOut();
    });
    /*
	------------------------
	// Owl Carousel Slider
	------------------------
	*/
    if (testimonialSlider.length) {
        testimonialSlider.owlCarousel({
            loop: true,
            margin: 8,
            nav: false,
            dots: true,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        });
    }

    if (teamemSlider.length) {
        teamemSlider.owlCarousel({
            loop: true,
            margin: 8,
            nav: false,
            dots: true,
            autoplay: false,
            autoplaySpeed: 2000,
            autoplayHoverPause: true,
            autoplayTimeout: 3000,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3,

                }
            }
        });
    }

    if (teamemSlider_2.length) {
        teamemSlider_2.owlCarousel({
            loop: true,
            nav: false,
            dots: true,
            autoplay: false,
            autoplaySpeed: 2000,
            autoplayHoverPause: true,
            autoplayTimeout: 3000,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3,
                }
            }
        });
    }

    if (threeColGallery.length) {
        threeColGallery.owlCarousel({
            items: 4,
            loop: true,
            autoplay: false,
            autoplaySpeed: 2000,
            autoplayHoverPause: true,
            autoplayTimeout: 3000,
            nav: true,
            dots: false,
            navText: ['<span class="fas fa-chevron-left fa-2x"></span>', '<span class="fas fa-chevron-right fa-2x"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 4,
                }
            }
        });
    }

    if (blogRelatedItem.length) {
        blogRelatedItem.owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            dots: false,
            autoplay: true,
            autoplaySpeed: 2000,
            autoplayHoverPause: true,
            autoplayTimeout: 3000,
            navText: ["<i class='fas fa-chevron-circle-left'></i>", "<i class='fas fa-chevron-circle-right'></i>"],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 2
                }
            }
        });
    }

    if (portomegaBlogItem.length) {
        portomegaBlogItem.owlCarousel({
            loop: true,
            margin: 8,
            nav: true,
            dots: false,
            autoplay: true,
            autoplaySpeed: 2000,
            autoplayHoverPause: true,
            autoplayTimeout: 3000,
            navText: ["<i class='fas fa-chevron-circle-left'></i>", "<i class='fas fa-chevron-circle-right'></i>"],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        });
    }

    if (productImgSliderItem.length) {
        productImgSliderItem.owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            dots: false,
            navText: ["<i class='fas fa-chevron-circle-left'></i>", "<i class='fas fa-chevron-circle-right'></i>"],
            autoplay: true,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 3
                }
            }
        });
    }

    /*
    ----------------------
    // Ajax Form
    ----------------------
    */
    formButton.on('click', function() {
        var status = $(this).closest('form').find('.my-form-status');
        var form = $(this).closest('form').attr('id');
        var formId = document.getElementById(form);
        formId.addEventListener("submit", function(ev) {
            ev.preventDefault();

            var data = new FormData(formId);
            ajax(formId.method, formId.action, data, success, error);
        });

        function success() {
            formId.reset();
            formButton.style = "display: none ";
            status.html("Thanks for the Inquiry!");
        }

        function error() {
            status.html("Oops! There was a problem.");
        }

    });

    function ajax(method, url, data, success, error) {
        var xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = function() {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                success(xhr.response, xhr.responseType);
            } else {
                error(xhr.status, xhr.response, xhr.responseType);
            }
        };
        xhr.send(data);
    }
});

/*
----------------------
// Functions Defination
----------------------
*/

function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

function initMap() {
    "use strict";

    var mapDiv = $('#gmap_canvas');

    if (mapDiv.length) {
        var myOptions = {
            zoom: 12,
            scrollwheel: true,
            draggable: true,
            center: new google.maps.LatLng(-37.81614570000001, 144.95570680000003),
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            navigationControl: true,
            mapTypeControl: true,
            scaleControl: true,
            styles: [
                      {
                        "elementType": "geometry",
                        "stylers": [
                          {
                            "color": "#212121"
                          }
                        ]
                      },
                      {
                        "elementType": "labels.icon",
                        "stylers": [
                          {
                            "visibility": "off"
                          }
                        ]
                      },
                      {
                        "elementType": "labels.text.fill",
                        "stylers": [
                          {
                            "color": "#757575"
                          }
                        ]
                      },
                      {
                        "elementType": "labels.text.stroke",
                        "stylers": [
                          {
                            "color": "#212121"
                          }
                        ]
                      },
                      {
                        "featureType": "administrative",
                        "elementType": "geometry",
                        "stylers": [
                          {
                            "color": "#757575"
                          }
                        ]
                      },
                      {
                        "featureType": "administrative.country",
                        "elementType": "labels.text.fill",
                        "stylers": [
                          {
                            "color": "#9e9e9e"
                          }
                        ]
                      },
                      {
                        "featureType": "administrative.land_parcel",
                        "stylers": [
                          {
                            "visibility": "off"
                          }
                        ]
                      },
                      {
                        "featureType": "administrative.locality",
                        "elementType": "labels.text.fill",
                        "stylers": [
                          {
                            "color": "#bdbdbd"
                          }
                        ]
                      },
                      {
                        "featureType": "poi",
                        "elementType": "labels.text.fill",
                        "stylers": [
                          {
                            "color": "#757575"
                          }
                        ]
                      },
                      {
                        "featureType": "poi.park",
                        "elementType": "geometry",
                        "stylers": [
                          {
                            "color": "#181818"
                          }
                        ]
                      },
                      {
                        "featureType": "poi.park",
                        "elementType": "labels.text.fill",
                        "stylers": [
                          {
                            "color": "#616161"
                          }
                        ]
                      },
                      {
                        "featureType": "poi.park",
                        "elementType": "labels.text.stroke",
                        "stylers": [
                          {
                            "color": "#1b1b1b"
                          }
                        ]
                      },
                      {
                        "featureType": "road",
                        "elementType": "geometry.fill",
                        "stylers": [
                          {
                            "color": "#2c2c2c"
                          }
                        ]
                      },
                      {
                        "featureType": "road",
                        "elementType": "labels.text.fill",
                        "stylers": [
                          {
                            "color": "#8a8a8a"
                          }
                        ]
                      },
                      {
                        "featureType": "road.arterial",
                        "elementType": "geometry",
                        "stylers": [
                          {
                            "color": "#373737"
                          }
                        ]
                      },
                      {
                        "featureType": "road.highway",
                        "elementType": "geometry",
                        "stylers": [
                          {
                            "color": "#3c3c3c"
                          }
                        ]
                      },
                      {
                        "featureType": "road.highway.controlled_access",
                        "elementType": "geometry",
                        "stylers": [
                          {
                            "color": "#4e4e4e"
                          }
                        ]
                      },
                      {
                        "featureType": "road.local",
                        "elementType": "labels.text.fill",
                        "stylers": [
                          {
                            "color": "#616161"
                          }
                        ]
                      },
                      {
                        "featureType": "transit",
                        "elementType": "labels.text.fill",
                        "stylers": [
                          {
                            "color": "#757575"
                          }
                        ]
                      },
                      {
                        "featureType": "water",
                        "elementType": "geometry",
                        "stylers": [
                          {
                            "color": "#000000"
                          }
                        ]
                      },
                      {
                        "featureType": "water",
                        "elementType": "labels.text.fill",
                        "stylers": [
                          {
                            "color": "#3d3d3d"
                          }
                        ]
                      }
                    ]
        };
        var map = new google.maps.Map(document.getElementById('gmap_canvas'), myOptions);

        var map_cityaddress = '<strong>Envato</strong><br>Envato, King Street, Melbourne, Victoria<br>';

        var infowindow = new google.maps.InfoWindow();

        var marker, i;
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(-37.81614570000001, 144.95570680000003),
            map: map,
            icon: "",
        });

        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infowindow.setContent(map_cityaddress);
                infowindow.open(map, marker);
            }
        })(marker, i));
    }
}