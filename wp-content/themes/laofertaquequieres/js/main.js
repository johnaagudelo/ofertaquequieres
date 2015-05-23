$(document).ready(function() {
    var windowHeight = $(window).height();
    $('.home #header').height(windowHeight);
    $('.home #header .row').height(windowHeight);
    var elementPosition = $('.filters').offset();
    $(window).scroll(function() {
        if ($(window).scrollTop() > elementPosition.top) {
            $('.filters').css('position', 'fixed').css('top', '0');
        } else {
            $('.filters').css({'position': 'absolute', 'top': '459px'});
        }
        if ($(window).scrollTop() > $(".contentItems").offset().top) {
            $('.contentItems .volver').css('position', 'fixed');
        } else {
            $('.contentItems .volver').css({'position': 'absolute'});
        }
    });
    if ($('.imgSlider').width() > $('.imgSlider').height()) {
        $('.imgSlider').css({'width': 'auto', 'height': '100%'})
    }
    $('.contentItems').mCustomScrollbar({
        theme: "dark-3"
    });
    $(".navbar-nav li a").mouseover(function() {
        animate(this, 'bounceIn');
        return false;
    });
    $("#contCompa .item .image .over").mouseover(function() {
        animate(this, 'flipInX');
        return false;
    });
    function animate(element_ID, animation) {
        $(element_ID).addClass('animated ' + animation);
        var wait = window.setTimeout(function() {
            $(element_ID).removeClass('animated ' + animation)
        }, 500
                );
    }
    $(".row #contCompa .item").click(function() {
        console.log("click");
        $(this).parent().parent().find('.detail').fadeIn('slow');
    })

    $('.detail .cerrar').on('click', function(e) {
        e.preventDefault();
        $('#lightbox').fadeOut('slow');
    })
    $("footer .text-left").click(function(e) {
        e.preventDefault();
        console.log("click");
        $('#terminos').fadeIn('slow');
    })

    $('.closed').on('click', function(e) {
        e.preventDefault();
        $('#terminos').fadeOut('slow');
    })

    $('.closed').on('click', function(e) {
        e.preventDefault();
        $('#registro').fadeOut('slow');
    })
    /*slider*/
    $('.slider').iosSlider({
        desktopClickDrag: true,
        snapToChildren: true,
        infiniteSlider: true,
        navSlideSelector: '.carousel-indicators li',
        onSlideComplete: slideComplete,
        onSliderLoaded: sliderLoaded,
        onSlideChange: slideChange,
        autoSlide: true,
        scrollbar: true,
        scrollbarContainer: '.slider .scrollbarContainer',
        scrollbarMargin: '0',
        scrollbarBorderRadius: '0',
        keyboardControls: true
    });
    function slideChange(args) {
        $('.carousel-indicators li').removeClass('active');
        $('.carousel-indicators li:eq(' + (args.currentSlideNumber - 1) + ')').addClass('active');
    }
    function slideComplete(args) {
        if (!args.slideChanged)
            return false;
        $(args.sliderObject).find('h1, p, .readmore, .image').attr('style', '');
        if ($('.home').length != 0) {
            $(args.currentSlideObject).find('h1').delay(200).animate({
                left: '0',
                top: '15%',
                opacity: '1'
            }, 800, 'easeOutQuint');
            $(args.currentSlideObject).find('p').delay(800).animate({
                left: '0',
                top: '15%',
                opacity: '1'
            }, 800, 'easeOutQuint');
            $(args.currentSlideObject).find('.readmore').delay(800).animate({
                left: '0',
                opacity: '1'
            }, 800, 'easeInOutBack');
            $(args.currentSlideObject).find('.image').delay(600).animate({
                right: '10%',
                opacity: '1'
            }, 1200, 'easeInOutBack');
        } else {
            $(args.currentSlideObject).find('h1').delay(200).animate({
                left: '0',
                top: '0',
                opacity: '1'
            }, 800, 'easeOutQuint');
            $(args.currentSlideObject).find('p').delay(800).animate({
                left: '0',
                top: '0',
                opacity: '1'
            }, 800, 'easeOutQuint');
            $(args.currentSlideObject).find('.image').delay(600).animate({
                right: '10%',
                opacity: '1'
            }, 1200, 'easeInOutBack');
        }
    }

    function sliderLoaded(args) {
        $(args.sliderObject).find('h1, p, .readmore, .image').attr('style', '');
        if ($('.home').length != 0) {
            $(args.currentSlideObject).find('h1').delay(200).animate({
                left: '0',
                top: '15%',
                opacity: '1'
            }, 800, 'easeOutQuint');
            $(args.currentSlideObject).find('p').delay(800).animate({
                left: '0',
                top: '15%',
                opacity: '1'
            }, 800, 'easeOutQuint');
            $(args.currentSlideObject).find('.readmore').delay(800).animate({
                left: '0',
                opacity: '1'
            }, 800, 'easeInOutBack');
            $(args.currentSlideObject).find('.image').delay(600).animate({
                right: '10%',
                opacity: '1'
            }, 1200, 'easeInOutBack');
            slideChange(args);
        } else {
            $(args.currentSlideObject).find('h1').delay(200).animate({
                left: '0',
                top: '0',
                opacity: '1'
            }, 800, 'easeOutQuint');
            $(args.currentSlideObject).find('p').delay(800).animate({
                left: '0',
                top: '0',
                opacity: '1'
            }, 800, 'easeOutQuint');
            $(args.currentSlideObject).find('.image').delay(600).animate({
                right: '10%',
                opacity: '1'
            }, 1200, 'easeInOutBack');
            slideChange(args);

        }
    }
    $('.sliderEmpresa').iosSlider({
        scrollbar: true,
        snapToChildren: true,
        desktopClickDrag: true,
        scrollbarMargin: '0',
        scrollbarBorderRadius: 0,
        scrollbarHeight: '2px',
        navPrevSelector: $('.prevButton'),
        navNextSelector: $('.nextButton')
    });
    $(".results .contentItems .volver").click(function() {
        $('html, body').animate({
            scrollTop: $(".map").offset().top
        }, 1000);
    });
    $(".map .ver").click(function() {
        $('html, body').animate({
            scrollTop: $(".contentItems").offset().top
        }, 1000);
    });
    $(".publications .contentItems .volver").click(function() {
        $('html, body').animate({
            scrollTop: $(".publications").offset().top
        }, 1000);
    });
    $(".publications .postCategorias li a").click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $(".contentItems").offset().top
        }, 1000);
    });
    $("#enviar-registro").click(function() {
        
        var bandera = true;
        var nombre = $("#nombre").val();
        if(nombre == ""){
            $("#mensaje").html("El nombre y el correo electrónico son obligatorios");
            $('#registro').fadeIn('slow');
            bandera = false;
        }
        var email = $("#email").val();
        if(email == ""){
            $("#mensaje").html("El nombre y el correo electrónico son obligatorios");
            $('#registro').fadeIn('slow');
            bandera = false;
        }else{
            expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            if ( !expr.test(email) ){
                $("#mensaje").html("Error: La dirección de correo " + email + " es incorrecta.");
                $('#registro').fadeIn('slow');
                bandera = false;
            }
        }

        if(bandera){
            var parametros = {
            "sistema": "SIS_40",
            "nombre": nombre,
            "email": email
            }
            $.ajax({
                type: 'POST',
                url: 'http://www.soyempresariodigital.com/Geomarketing/FUNOferta/Registro',
                data: parametros,
                dataType: "json",
                async: false,
                success: function(data) {
                    //alert("sufuciiente");
                    if(data.mensaje[0]=="1"){
                        $("#mensaje").html("Su Registro fue exitoso.");
                        $('#registro').fadeIn('slow');
                        $("#nombre").val(" ");
                        $("#email").val(" ");
                    }else{
                        $("#mensaje").html("Error en el registro.");
                        $('#registro').fadeIn('slow');
                    }
                },
                error: function() {
                   // alert("suficiente");
                   $("#mensaje").html("Error en el Registro.");
                   $('#registro').fadeIn('slow');
                }

            });
        }
        
    });

     $("#btn-registro").click(function() {
        var alto = $("#frm-refistro").height();
        if(alto == 0){
            $("#frm-refistro").animate({
                height: "300",
                bottom: "-300"
          }, 500);
        }else{
            $("#frm-refistro").animate({
                height: "0",
                bottom: "0"
          }, 500);
        }
        
    });
    
});
