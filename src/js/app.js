$(document).ready(function(){
    $('.header__burger').click(function(event){
        $('.header__burger, .header__menu').toggleClass('active');
        $('body').toggleClass('lock')
    });
     });

$( ".filter__item" ).on( "click", function() {
    $(this).toggleClass('actived');
});

$('#carousel-products').owlCarousel({
    loop:true,
   nav: false,
   dots: true,

    responsive:{
        0:{
            items:2
        },

        768:{
            items:4
        }
    }
});



   