function selectOneFilter () {
    for (let filterButton of filterButtons) {
        filterButton.classList.remove('actived');
    }

    this.classList.add('actived');
}

let filterButtons = document.querySelectorAll('.filter__item');

for (let filterButton of filterButtons) {
    filterButton.addEventListener('click', selectOneFilter);
}


$(document).ready(function(){
    $('.header__burger').click(function(event){
        $('.header__burger, .header__menu').toggleClass('active');
        $('body').toggleClass('lock')
    });
     });
     $(document).ready(function(){
        $('.button_page').click(function(event){
            $(this).toggleClass('active');
            $('body').toggleClass('lock')
        });
         });


         
$('#carousel-products').owlCarousel({
    loop:true,
   nav: false,
   dots: true,

    responsive:{
        0:{
            items:1
        },
        
        768:{
            items:4
        }
    }
});



   