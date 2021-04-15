



$(document).ready(function(){

    // Componente Precarga Barra
    $('#barra-carga').animate({
        width: '100%'
    },3000,'easeInExpo');

    $('#precarga-barra').delay(3000).animate({
        top: '-100%',
        opacity: 0
    },500,'easeInExpo');


    // Menu Responsive//

    $('aside#menu-movil').css('left','-290px');
    $('#cerrar').hide();

    $('#abrir').click(function(){
        $('aside#menu-movil').animate({
        left: 0
        },300,'easeOutExpo');
        $('#abrir').hide();
        $('#cerrar').show();

        $('header, main, footer').animate({

            left: 290,
            opacity: 0.15

        },300,'easeOutExpo');

         event.preventDefault();
    
     });

     $('#cerrar, aside#menu-movil nav a').click(function(){ 
        $('aside#menu-movil').animate({
            left: -290
        },300,'easeOutExpo');
        $('#abrir').show();
        $('#cerrar').hide();

        $('header, main, footer').animate({

            left: 0,
            opacity: 1

        },300,'easeOutExpo');
    });

    // Function para Detectar Scroll Down

    $(window).scroll(function(){
        if ($(this).scrollTop() > 10) {
             $('header').removeClass('transparente');
             $('header').addClass('gris');

 
           } else {
              $('header').removeClass('gris');
              $('header').addClass('transparente');


           }
        });


     // Componente Precarga Puntos
     $('#carga-01').animate({ opacity: 1 },200,'easeOutExpo');
     $('#carga-02').delay(200).animate({ opacity: 1 },200,'easeOutExpo');
     $('#carga-03').delay(400).animate({ opacity: 1 },200,'easeOutExpo');
     $('#carga-04').delay(600).animate({ opacity: 1 },200,'easeOutExpo');
     $('#carga-05').delay(800).animate({ opacity: 1 },200,'easeOutExpo');
     $('#carga-06').delay(1000).animate({ opacity: 1 },200,'easeOutExpo');
     $('#carga-07').delay(1200).animate({ opacity: 1 },200,'easeOutExpo');
     $('#carga-08').delay(1400).animate({ opacity: 1 },200,'easeOutExpo');
     $('#carga-09').delay(1600).animate({ opacity: 1 },200,'easeOutExpo');
     $('#carga-10').delay(1800).animate({ opacity: 1 },200,'easeOutExpo');
 
     $('#precarga-puntos').delay(2500).animate({
         top: '-100%',
         opacity: 0
     },500,'easeInExpo');



    // Sistema de Tabs
    $('#tab-01').click(function(){
        /* $('div#contenedor-tabs').css('left','0'); */
        $('div#contenedor-tabs').animate({
            left: 0
        },200,'easeOutExpo');

        $('#tab-01').addClass('tab-activa');
        $('#tab-01').removeClass('tab-inactiva');

        $('#tab-02, #tab-03').removeClass('tab-activa');
        $('#tab-02, #tab-03').addClass('tab-inactiva');
    });

    $('#tab-02').click(function(){
        /* $('div#contenedor-tabs').css('left','-1100px'); */
        $('div#contenedor-tabs').animate({
            left: '-100%'
        },200,'easeOutExpo');

        $('#tab-02').addClass('tab-activa');
        $('#tab-02').removeClass('tab-inactiva');

        $('#tab-01, #tab-03').removeClass('tab-activa');
        $('#tab-01, #tab-03').addClass('tab-inactiva');
    });

    $('#tab-03').click(function(){
        /* $('div#contenedor-tabs').css('left','-2200px'); */
        $('div#contenedor-tabs').animate({
            left: '-200%'
        },200,'easeOutExpo');

        $('#tab-03').addClass('tab-activa');
        $('#tab-03').removeClass('tab-inactiva');

        $('#tab-02, #tab-01').removeClass('tab-activa');
        $('#tab-02, #tab-01').addClass('tab-inactiva');
        
    });


    // Acordeón
    $('#abre-fila-01').click(function(){
        // Apertura y Cierre
        $('figure').hide(300);
        $('figure#conte-fila-01').show(300);

        // Íconos
        $('span.abierto').hide();
        $('span.cerrado').show();

        $('span.abierto',this).show();
        $('span.cerrado',this).hide();

        // Activos e Inactivos
        $('div.fila-acordeon a').removeClass('acord-abierto');
        $('div.fila-acordeon a').addClass('acord-cerrado');

        $('#abre-fila-01').addClass('acord-abierto');
        $('#abre-fila-01').removeClass('acord-cerrado');
    });


    $('#abre-fila-02').click(function(){
        // Apertura y Cierre
        $('figure').hide(300);
        $('figure#conte-fila-02').show(300);

        // Íconos
        $('span.abierto').hide();
        $('span.cerrado').show();

        $('span.abierto',this).show();
        $('span.cerrado',this).hide();

        // Activos e Inactivos
        $('div.fila-acordeon a').removeClass('acord-abierto');
        $('div.fila-acordeon a').addClass('acord-cerrado');

        $('#abre-fila-02').addClass('acord-abierto');
        $('#abre-fila-02').removeClass('acord-cerrado');
    });


    $('#abre-fila-03').click(function(){
        // Apertura y Cierre
        $('figure').hide(300);
        $('figure#conte-fila-03').show(300);

        // Íconos
        $('span.abierto').hide();
        $('span.cerrado').show();

        $('span.abierto',this).show();
        $('span.cerrado',this).hide();

        // Activos e Inactivos
        $('div.fila-acordeon a').removeClass('acord-abierto');
        $('div.fila-acordeon a').addClass('acord-cerrado');

        $('#abre-fila-03').addClass('acord-abierto');
        $('#abre-fila-03').removeClass('acord-cerrado');
    });

    // Acordeón abre de forma automática
    $('figure#conte-fila-01').delay(500).show(500);
    $('#abre-fila-01').removeClass('acord-cerrado');
    $('#abre-fila-01').addClass('acord-abierto');


    //Activador de Slick Slider

    $('.slick-inicio').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: true,
        dots: true,
        autoplaySpeed: 1500,
        speed: 500,
        fade: true,
        infinite: true
 
    });

});