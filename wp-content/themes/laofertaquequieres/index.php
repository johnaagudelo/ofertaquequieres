<?php get_header(); ?>
<body class="home">
        <!--[if lt IE 8]>
            <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->
    <div id="header">
      <div class="row">
        <div class="boderTop"></div>
        <a class="navbar-brand col-lg-2 col-md-3 col-xs-4 col-sm-3" href="<?php echo home_url()?>"><img src="<?php print IMAGES;?>/logo.png" alt="<?php bloginfo('name') ?> | <?php bloginfo('description') ?>"></a>
        <div class="slider">
          <ul>
            <li class="alimentos">
              <div class="container">
                <h1>Alimentos</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</p>
                <a href="" class="readmore">VER OFERTAS</a>
                <div class="image">
                  <img src="<?php print IMAGES;?>/img_slidehome1.png" alt="">
                </div>
              </div>
              <img src="<?php print IMAGES;?>/bg_slide1Home.jpg" alt="" class="backgroundSlide">
            </li>
            <li class="confeccion">
              <div class="container">
                <h1>Alimentos</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</p>
                <a href="" class="readmore">VER OFERTAS</a>
                <div class="image">
                  <img src="<?php print IMAGES;?>/img_slidehome1.png" alt="">
                </div>
              </div>
              <img src="<?php print IMAGES;?>/bg_slide1Home.jpg" alt="" class="backgroundSlide">
            </li>
            <li class="cuero">
              <div class="container">
                <h1>Alimentos</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</p>
                <a href="" class="readmore">VER OFERTAS</a>
                <div class="image">
                  <img src="<?php print IMAGES;?>/img_slidehome1.png" alt="">
                </div>
              </div>
              <img src="<?php print IMAGES;?>/bg_slide1Home.jpg" alt="" class="backgroundSlide">
            </li>
          </ul>
          <ol class="carousel-indicators">
            <li class="active"></li>
            <li></li>
            <li></li>
          </ol>
          <div class="scrollbarContainer"></div>
        </div>
        <div class="links col-xs-8 col-lg-5 col-md-6 col-sm-8">
          <a href="" class="paga"><img src="<?php print IMAGES;?>/tufactura.png" alt=""></a>
          <a href="" class="chec"><img src="<?php print IMAGES;?>/chec.png" alt=""></a>
          <div class="social">
            Siguenos en:<br>
            <a href="" class="icon-facebook-circled"></a>
            <a href="" class="icon-twitter-circled"></a>
          </div>
          <a href="" class="icon-sesion">Inicia Sesión</a>
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
      </div>  
    </div>
<?php get_footer(); ?>