<?php get_header(); ?>
<?php
/*
  Template Name: Categoria
 */
?>
<body class="servicios" onload="load('Servicios Universitarios');">
    <!--[if lt IE 8]>
        <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
    <![endif]-->
    <div id="agenda" class="agenda col-lg-5 col-md-6 col-sm-6 col-xs-12">
        <div class="contenido-agenda">
            <div class="buscador-mipyme">
                <div class="input-group">
                    <input type="text" id="palabra-clave-busqueda" class="form-control" aria-label="..." placeholder="Encuentra la Mipyme." >
                    <div class="input-group-btn">
                        <button type="button" id="buscar-pyme" class="btn btn-default">Buscar</button>
                    </div>
                </div><!-- /input-group -->
            </div><!-- /.col-lg-6 -->
            <div class="agenda-mipymes contentItems col-lg-12 col-md-12">
            </div>
        </div>
    </div>
    <div id="header">
        <div class="row">
            <div id="lightbox">
                <div class="detail col-lg-12 col-md-12 col-xs-12">
                    <div class="infoItem col-lg-3 col-md-3 col-xs-12 col-sm-4">
                        <div class="infoEmpresa">
                            <img  id="imagen-tipo" alt="" class="icon">
                            <strong>Fecha inicio</strong>
                            <p id="fecha_ini"></p>
                            <strong>Fecha fin</strong>
                            <p id="fecha_fin"><p>
                                <strong>Nombre MIPYME</strong>
                            <p id="nom_empresa_1"></p>
                            <strong>Categoría</strong>
                            <p id="cat_mipyme"><p>
                        </div>
                    </div>
                    <div class="sliderItem col-lg-9 col-md-9 col-xs-12 col-sm-8">
                        <a href="" class="cerrar">X</a>
                        <div class="sliderOffer">
                            <ul>
                                <li><img id="detalle-imagen" class="carga-imagen" src="http://localhost:8080/ofertaquequieres/wp-content/themes/laofertaquequieres/images/cam_loading.gif" alt=""></li>
                            </ul>
                            <a href="" class="controlLeft"></a>
                            <a href="" class="controlRight"></a>
                        </div>
                    </div>
                    <div class="col-lg-12 description col-md-12 col-xs-12">
                        <div class="descriptionItem">
                            <h2 id="nom_campana"></h2>
                            <p id="desc_campana"><br><br></p>
                            <a href="" class="icon-empresa">Ver más ofertas de esta MYPYME</a>
                            <div id="precio"></div>
                            <div class="col-lg-8 col-md-8 col-xs-8">
                                <img class="logoMarca" src="<?php print IMAGES; ?>/logo.png" alt="">
                            </div>
                            <div id="redes-sociales" class="col-lg-4 col-md-4 col-xs-4">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="boderTop"></div>
            <div class="links col-xs-12 col-lg-12 col-md-12 col-sm-12">
                <a class="navbar-brand col-lg-2 col-md-3 col-xs-4 col-sm-3" href="<?php echo home_url() ?>"><img src="<?php print IMAGES; ?>/logo.png" alt="<?php bloginfo('name') ?> | <?php bloginfo('description') ?>"></a>
                <div id="social">
                    <a href="" class="paga"><img src="<?php print IMAGES; ?>/tufactura.png" alt=""></a>
                    <a href="" class="chec"><img src="<?php print IMAGES; ?>/chec.png" alt=""></a>
                    <div class="social">
                        Siguenos en:<br>
                        <a href="" class="icon-facebook-circled"></a>
                        <a href="" class="icon-twitter-circled"></a>
                    </div>
                    <a href="" class="icon-sesion">Inicia Sesión</a>
                </div>
            </div>
            <div class="texSmartphone visible-xs-*">Servicios</div>
        </div>  
    </div>
    <div class="slider">
        <?php
        $args = array('post_type' => 'slider', 'posts_per_page' => 10, 'p' => '54');
        $the_query = new WP_Query($args);
        ?>
        <?php if ($the_query->have_posts()) : ?>
            <?php while ($the_query->have_posts()) : $the_query->the_post(); ?>
                <ul class="hidden-xs">
                    <li>
                        <div class="container">
                            <h1>Servicios</h1>
                            <p><?php the_content(); ?></p>
                            <div class="image">
                                <img src="<?php the_field('imagen_1') ?>" alt="">
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="container">
                            <h1>Servicios</h1>
                            <p><?php the_content(); ?></p>
                            <div class="image">
                                <img src="<?php the_field('imagen_2') ?>" alt="">
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="container">
                            <h1>Servicios</h1>
                            <p><?php the_content(); ?></p>
                            <div class="image">
                                <img src="<?php the_field('imagen_3') ?>" alt="">
                            </div>
                        </div>
                    </li>
                </ul>
                <ol class="carousel-indicators hidden-xs">
                    <li class="active"></li>
                    <li></li>
                    <li></li>
                </ol>
                <?php the_post_thumbnail(); ?>
                <div class="scrollbarContainer"></div>
            <?php endwhile; ?>
        <?php endif; ?>
    </div>
    <div class="collapse navbar-collapse navbar-fixed-top filters" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav container" id="filtros">
            <li class="active" value=""><a >Todos</a></li>
            <li value="Oferta"><a>Ofertas</a></li>
            <li value="Promoción"><a >Promociones</a></li>
            <li value="Descuento"><a >Descuentos</a></li>
            <li value="Evento"><a>Eventos</a></li>
            <li value="Caso Exito"><a >Casos de Exito</a></li>
            <li value="Información Especial"><a >Información Especial</a></li> 
        </ul>
    </div>
    <div class="row results">
        <div class="row buscardor">
            <div class="resultados col-lg-6 col-md-5 search" id="result">
                Explora en el mapa y encontraras la oferta que quieres...
            </div> 
            <div class="col-lg-6 col-md-5 search">
                <div class="input-group">
                    <input type="text" id="palabra-clave" class="form-control" aria-label="..." placeholder="Encuentra la oferta que quieres por palabra clave" >
                    <div class="input-group-btn">
                        <button type="button" id="buscar" class="btn btn-default">Buscar</button>
                    </div>
                </div><!-- /input-group -->
            </div><!-- /.col-lg-6 -->

        </div>
        <div class="map col-lg-6 col-md-5" id="Visor-content">
            <iframe id="iframe-visor" class="categoria" src="http://localhost:8080/ofertaquequieres/visor-oferta/" frameborder="0"></iframe>
            <a class="ver">Ver resultados</a>
        </div>
        <div class="contentItems col-lg-6 col-md-7" >
            <a class="volver">Volver a mapa</a>
            <div id="contCompa">
                <img class="logo-item" src="<?php print IMAGES; ?>/logo.png"></img>
            </div>
        </div>
    </div>
    <div class="categories">
        <p class="instruction">Clic en la categoría para iniciar tu búsqueda</p>
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
    <?php get_footer(); ?>
