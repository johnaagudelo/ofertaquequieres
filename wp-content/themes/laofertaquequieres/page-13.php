<?php get_header(); ?>
<?php
/*
Template Name: Categoria
*/
?>
<body class="muebles" onload="load('Maderas y Muebles');">
        <!--[if lt IE 8]>
            <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->
    <div id="header">
      <div class="row">
        <div class="boderTop"></div>
        <a class="navbar-brand col-lg-2 col-md-3 col-xs-4 col-sm-3" href="<?php echo home_url()?>"><img src="<?php print IMAGES;?>/logo.png" alt="<?php bloginfo('name') ?> | <?php bloginfo('description') ?>"></a>
        <div class="texSmartphone visible-xs-*">Muebles</div>
            <div class="slider">
                <?php
                $args = array('post_type' => 'slider', 'posts_per_page' => 10, 'p'=>'46');
                $the_query = new WP_Query($args);
                ?>
                <?php if ($the_query->have_posts()) : ?>
                    <?php while ($the_query->have_posts()) : $the_query->the_post(); ?>
                        <ul class="hidden-xs">
                            <li>
                                <div class="container">
                                    <h1>Madera y Muebles</h1>
                                    <p><?php the_content(); ?></p>
                                    <div class="image">
                                        <img src="<?php the_field('imagen_1') ?>" alt="">
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="container">
                                    <h1>Madera y Muebles</h1>
                                    <p><?php the_content(); ?></p>
                                    <div class="image">
                                        <img src="<?php the_field('imagen_2') ?>" alt="">
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="container">
                                    <h1>Madera y Muebles</h1>
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
                        <?php the_post_thumbnail();?>
                        <div class="scrollbarContainer"></div>
                    <?php endwhile; ?>
                <?php endif; ?>
            </div>
        
        <div class="links col-xs-8 col-lg-5 col-md-6 col-sm-8">
          <a href="" class="paga"><img src="<?php print IMAGES;?>/tufactura.png" alt=""></a>
          <a href="" class="chec"><img src="<?php print IMAGES;?>/chec.png" alt=""></a>
          <div class="social">
            Siguenos en:<br>
            <a href="" class="icon-facebook-circled"></a>
            <a href="" class="icon-twitter-circled"></a>
          </div>
          <a href="http://soyempresariodigital.com/Geomarketing" class="icon-sesion">Inicia Sesión</a>
        </div>
        <div class="categories">
          <p class="instruction">Clic en la categoría para iniciar tu búsqueda</p>
          <div class="container">
           <a href="http://localhost:8080/ofertaquequieres/alimentos/" class="category"><img src="<?php print IMAGES;?>/icon-alimentos.png" alt=""><br><span>ALIMENTOS</span></a>
            <a href="http://localhost:8080/ofertaquequieres/confeccion/" class="category"><img src="<?php print IMAGES;?>/icon-confeccion.png" alt=""><br><span>CONFECCIÓN</span></a>
            <a href="http://localhost:8080/ofertaquequieres/cuero-y-calzado/" class="category"><img src="<?php print IMAGES;?>/icon-cueroycalzado.png" alt=""><br><span>CUERO Y CALZADO</span></a>
            <a href="http://localhost:8080/ofertaquequieres/muebles/" class="category"><img src="<?php print IMAGES;?>/icon-muebles.png" alt=""><br><span>MUEBLES</span></a>
            <a href="http://localhost:8080/ofertaquequieres/joyeria/" class="category"><img src="<?php print IMAGES;?>/icon-joyeria.png" alt=""><br><span>JOYERIA</span></a>
            <a href="http://localhost:8080/ofertaquequieres/salud-y-belleza/" class="category"><img src="<?php print IMAGES;?>/icon-saludybelleza.png" alt=""><br><span>SALUD Y BELLEZA</span></a>
            <a href="http://localhost:8080/ofertaquequieres/servicios/" class="category"><img src="<?php print IMAGES;?>/icon-servicios.png" alt=""><br><span>SERVICIOS</span></a>
            <a href="http://localhost:8080/ofertaquequieres/metalmecanica/" class="category"><img src="<?php print IMAGES;?>/icon-metalmecanica.png" alt=""><br><span>METALMECANICA</span></a>
            <a href="http://localhost:8080/ofertaquequieres/comercio/" class="category"><img src="<?php print IMAGES;?>/icon-comercio.png" alt=""><br><span>COMERCIO</span></a>
          </div>
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
      </div>  
    </div>
    <div class="row results">
      <div class="row buscardor">
            <div class="col-lg-6 col-md-5 search">
                    <div class="input-group">
                        <input type="text" id="palabra-clave" class="form-control" aria-label="..." placeholder="Encuentra la oferta que quieres" >
                        <div class="input-group-btn">
                            <button type="button" id="buscar" class="btn btn-default">Buscar</button>
                        </div>
                    </div><!-- /input-group -->
                </div><!-- /.col-lg-6 -->
            <div class="resultados col-lg-6 col-md-5 search" id="result">
                Explora en el mapa y encontrara la oferta que quieres...
            </div> 
        </div>
      <div class="map col-lg-6 col-md-5" id="Visor-content">
         <iframe id="iframe-visor" class="categoria" src="http://localhost:8080/ofertaquequieres/visor-oferta/" frameborder="0"></iframe>
        <a class="ver">Ver resultados</a>
      </div>
       
        <div class="contentItems col-lg-6 col-md-7 col-xs-12" >
            <a class="volver">Volver a mapa</a>
            <div id="contCompa">
                    <img class="logo-item" src="<?php print IMAGES; ?>/logo.png"></img>
            </div>
        
        <div class="detail col-lg-12 col-md-12 col-xs-12">
          <div class="infoItem col-lg-3 col-md-3 col-xs-12 col-sm-4">
            <div class="infoEmpresa">
              <img src="<?php print IMAGES;?>/icon-muebles.png" alt="" class="icon">
              <strong>Incio de oferta</strong>
              2015-04-24 - 12:00m
              <strong>Fin de oferta</strong>
              2015-07-24 - 7:00pm
              <strong>Nombre MYPYME</strong>
              La Hamburgueseria
              <strong>Categoría</strong>
              Alimentos
            </div>
          </div>
          <div class="sliderItem col-lg-9 col-md-9 col-xs-12 col-sm-8">
            <a href="" class="cerrar">X</a>
            <div class="sliderOffer">
              <ul>
                <li><img src="<?php print IMAGES;?>/img1_detalle.jpg" alt=""></li>
                <li><img src="<?php print IMAGES;?>/img1_detalle.jpg" alt=""></li>
                <li><img src="<?php print IMAGES;?>/img1_detalle.jpg" alt=""></li>
              </ul>
              <a href="" class="controlLeft"></a>
              <a href="" class="controlRight"></a>
            </div>
          </div>
          <div class="col-lg-12 description col-md-12 col-xs-12">
          <div class="descriptionItem">
              <h2>Deli Hamburguesa</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occa Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna<br><br>

  Aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.ecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <a href="" class="icon-empresa">Ver más ofertas de esta MYPYME</a>
              <div class="price">$ 8.500</div>
              <div class="col-lg-8 col-md-8 col-xs-8">
                <img class="logoMarca" src="<?php print IMAGES;?>/logo.png" alt="">
              </div>
              <div class="col-lg-4 col-md-4 col-xs-4">
                <a class="icon-facebook-circled" href=""></a>
                <a class="icon-twitter-circled" href=""></a>
              </div>
            </div>
          </div>
        </div>
       
        
    
      </div>
    </div>

        
<?php get_footer(); ?>