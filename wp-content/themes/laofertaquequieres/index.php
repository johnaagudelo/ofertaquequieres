<?php get_header(); ?>
<body class="home">
    <!--[if lt IE 8]>
        <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
    <![endif]-->
    <div id="header">
        <div class="row">
            <div class="boderTop"></div>
            <div class="slider">
                <ul>
                    <?php query_posts('category_name=Slider Principal'); ?>
                    <?php while (have_posts()) : the_post(); ?>
                        <li class="slider-principal">
                            <div class="container">
                                <h1><?php the_title(); ?></h1>
                                <p><?php the_content(); ?></p>
                                <a href="" class="readmore">VER OFERTAS</a>
                                <div class="image">
                                    <img src="<?php the_field('imagen') ?>" alt="">
                                </div>
                            </div>
                            <img src="<?php print IMAGES; ?>/bg_slide1Home.jpg" alt="" class="backgroundSlide">
                        </li>
                    <?php endwhile; ?>
                </ul>
                <ol class="carousel-indicators">
                    <li class="active"></li>
                    <li></li>
                    <li></li>
                </ol>
                <div class="scrollbarContainer"></div>
            </div>
            <div class="links col-xs-12 col-lg-12 col-md-12 col-sm-12">
                <a class="navbar-brand col-lg-2 col-md-3 col-xs-4 col-sm-3" href="<?php echo home_url() ?>"><img src="<?php print IMAGES; ?>/logo.png" alt="<?php bloginfo('name') ?> | <?php bloginfo('description') ?>"></a>
                <div id="social">
                    <a href="" class="paga"><img src="<?php print IMAGES; ?>/tufactura.png" alt=""></a>
                    <a href="" class="chec"><img src="<?php print IMAGES; ?>/chec.png" alt=""></a>
                    <div class="social">
                        Siguenos en:<br>
                        <a href="https://www.facebook.com/pages/La-Oferta-Que-Quieres/256376717905182" target="_blank" class="icon-facebook-circled"></a>
                        <a href="https://twitter.com/OfertaQueQuiere" target="_blank" class="icon-twitter-circled"></a>
                    </div>
                    <a href="http://soyempresariodigital.com/Geomarketing" target="_blank" class="icon-sesion">Inicia Sesión</a>
                </div>
                <div id="btn-registro" class="registro"></div>
                 <div id="frm-refistro" class="frm-registro">
                    <div class="subscribe">
                        <div class="container">
                            <p>Recibe las mejores ofertas en tu correo electrónico</p>
                            <div class="form-group">
                                <input id="nombre" type="text" class="form-control" placeholder="Nombre" required="required">
                                <input id="email" type="email" class="form-control" placeholder="Correo electrónico" required="required">
                            </div>
                            <div class="btn btn-default" id="enviar-registro">Suscribirme</div>
                        </div>
                    </div>
                 </div>
            </div>
            <div class="categories">
                <h2>Bienvenido a la red de ofertas más grande de la región</h2>
                <p class="instruction">Click en la categoría para iniciar tu búsqueda.</p>
                <div class="container">
                    <a href="http://localhost:8080/ofertaquequieres/alimentos/" class="category"><img src="<?php print IMAGES; ?>/icon-alimentos.png" alt=""><br><span>ALIMENTOS</span></a>
                    <a href="http://localhost:8080/ofertaquequieres/confeccion/" class="category"><img src="<?php print IMAGES; ?>/icon-confeccion.png" alt=""><br><span>TEXTIL CONFECCIÓN </span></a>
                    <a href="http://localhost:8080/ofertaquequieres/cuero-y-calzado/" class="category"><img src="<?php print IMAGES; ?>/icon-cueroycalzado.png" alt=""><br><span>CUERO Y CALZADO</span></a>
                    <a href="http://localhost:8080/ofertaquequieres/muebles/" class="category"><img src="<?php print IMAGES; ?>/icon-muebles.png" alt=""><br><span>MADERA Y MUEBLES</span></a>
                    <a href="http://localhost:8080/ofertaquequieres/joyeria/" class="category"><img src="<?php print IMAGES; ?>/icon-joyeria.png" alt=""><br><span>JOYERIA Y ARTESANIAS</span></a>
                    <a href="http://localhost:8080/ofertaquequieres/salud-y-belleza/" class="category"><img src="<?php print IMAGES; ?>/icon-saludybelleza.png" alt=""><br><span>SALUD Y BELLEZA</span></a>
                    <a href="http://localhost:8080/ofertaquequieres/servicios/" class="category"><img src="<?php print IMAGES; ?>/icon-servicios.png" alt=""><br><span>SERVICIOS UNIVERSITARIOS</span></a>
                    <a href="http://localhost:8080/ofertaquequieres/metalmecanica/" class="category"><img src="<?php print IMAGES; ?>/icon-metalmecanica.png" alt=""><br><span>METALMECANICA</span></a>
                    <a href="http://localhost:8080/ofertaquequieres/comercio/" class="category"><img src="<?php print IMAGES; ?>/icon-comercio.png" alt=""><br><span>COMERCIO Y SERVICIOS</span></a>
                </div>
            </div>
        </div>  
    </div>
    <?php get_footer('home'); ?>