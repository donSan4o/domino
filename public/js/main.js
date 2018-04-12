// Page resize function

// Page init function
$(document).ready(initPage);

function initPage() {
    var swiper = new Swiper('.swiper-container', {
        spaceBetween: 30,
        effect: 'fade',
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    $('div.popup-link').click(function() {
        $(this).children('.popup-wrapper').fadeIn(300);
        $(this).children('.popup').fadeIn(300);
    });
    
    $('.what-we-print #open-calc-form, .recall-btn').click(function() {
        $('.what-we-print .calc-order .popup-wrapper').fadeIn(300);
        $('.what-we-print .calc-order .calc-form').fadeIn(300);
    });
    $('.recall-btn').click(function() {
        $('.what-we-print').children('.popup-wrapper').fadeIn(300);
        $('.what-we-print').children('.calc-form').fadeIn(300);
    });
    $('.stages-block .calc-order .open-form').click(function () {
        $('.stages-block .calc-order').children('.popup-wrapper').fadeIn(300);
        $('.stages-block .calc-order').children('.calc-form').fadeIn(300);
    });
    $('.close-popup,.popup-wrapper').click(function() {
        $('.popup, .calc-form, .success-popup').fadeOut(300);
        $('.popup-wrapper').fadeOut(300);
        return false;
    });

    //Default Action
    $(".tab_content").hide(); //Hide all content
    $("ul.tabs li:first").addClass("active").show(); //Activate first tab
    $(".tab_content:first").show(); //Show first tab content

    //On Click Event

    $("ul.tabs li").click(function() {
        $("ul.tabs li").removeClass("active"); //Remove any "active" class
        $(this).addClass("active"); //Add "active" class to selected tab
        $(".tab_content").hide(); //Hide all tab content
        var activeTab = $(this).find("a").attr("href"); //Find the rel attribute value to identify the active tab + content
        $(activeTab).fadeIn(); //Fade in the active content
        if ($(window).width() < 640) {
            var that = $(activeTab);
            $('body,html').animate({ scrollTop: that.offset().top }, 800);
        };
        return false;

    });

    if ($(window).width() < 641) {
        $('.phones-open').click(function() {
            $('.mobile-wrapper').slideToggle();
        })
    };
}
$(window).resize(function() {

});
// Custom Functions