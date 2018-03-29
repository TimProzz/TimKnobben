$(document).ready(function() {
    var skillsAreShown = 0;
    var pageIsLoaded = 0;
    var valueSpeed = 200;
    $( window ).on('load', function() {
        setTimeout(function(){
            pageIsLoaded = 1;
            if(! /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
                $("body").smoothWheel();
                $(window).enllax();
                new WOW().init();
            }
            $(".loading").css("overflow-y", "hidden");
            $("body").css("overflow-x", "hidden");
            $("body").css("overflow-y", "auto");
            $( ".loading" ).fadeOut( "slow", function() { 
            });
        }, 1000);
    });
    
    $(".scrollDownButton a").click(function(e){
        e.preventDefault();
        setTimeout(function(){
            if(window.location.href === "/"){
                $('body').animate({
                    scrollTop: $(".backgroundColorNormal").offset().top
                }, 900);
            } else {
                $('body').animate({
                    scrollTop: $(".backgroundColorLittleGrey").offset().top
                }, 900);
            }
        }, 1300);
    });
    
    $(".errorMessage").click(function() {
       $(".errorMessage").css("display", "none");                 
    });
    
    $.fn.isOnScreen = function(){

        var win = $(window);

        var viewport = {
            top : win.scrollTop(),
            left : win.scrollLeft()
        };
        viewport.right = viewport.left + win.width();
        viewport.bottom = viewport.top + win.height();

        var bounds = this.offset();
        bounds.right = bounds.left + this.outerWidth();
        bounds.bottom = bounds.top + this.outerHeight();

        return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));

    };
    $(window).scroll(function() {
        if(pageIsLoaded == 1) {
            if(skillsAreShown == 0) {
                if($(".skills").isOnScreen()) {
                    skillsAreShown = 1;
                    setTimeout(function(){
                        $(".skillProgressActual").each(function() {
                            var getID = "#" + this.id;
                            var linkIdToWidth = $(getID).attr("data-skill-progress");
                            setTimeout(function(){
                                $(getID).css("width", linkIdToWidth);
                                var idToChange = getID + "Content";
                                $(idToChange).text(linkIdToWidth);
                                    $(idToChange).fadeIn(500);
                            }, valueSpeed);
                            valueSpeed += 200;
                        });
                    }, 800);
                }
            }
        }
    });
    
    var options = {
        strings: ["an awesome dude :)", "a web developer.", "a software developer.", "a gamer."],
        typeSpeed: 65,
        loop: true,
        back_delay: 1400,
        backSpeed: 30
    }

    var typed = new Typed(".typed", options);
});