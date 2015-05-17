<?php get_header(); ?>
<?php
/*
Template Name: Empresa
*/
?>
<body class="empresa" onload="load('<?php echo $_GET['mipyme']; ?>','<?php echo $_GET['coor']; ?>');">
        <!--[if lt IE 8]>
            <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->
    <div id="header">
      <div class="row">
        <div class="boderTop"></div>
        <a class="navbar-brand col-lg-2 col-md-3 col-xs-4 col-sm-3" href="<?php echo home_url()?>"><img src="<?php print IMAGES;?>/logo.png" alt="<?php bloginfo('name') ?> | <?php bloginfo('description') ?>"></a>
        <div class="col-lg-4 col-md-4 col-xs-12 col-sm-8 search">
          <div class="input-group">
            <div class="input-group-btn">
              <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-expanded="false">Todos<span class="caret"><img src="<?php print IMAGES;?>/arrow.png" alt=""></span></button>
              <ul class="dropdown-menu" role="menu">
                <li><a href="#">Todos</a></li>
                <li><a href="#">Ofertas</a></li>
                <li><a href="#">Promociones</a></li>
                <li><a href="#">Descuentos</a></li>
                <li><a href="#">Eventos</a></li>
                <li><a href="#">Casos de exito</a></li>
                <li><a href="#">Información Especial</a></li>
              </ul>
            </div><!-- /btn-group -->
            <input type="text" class="form-control" aria-label="..." placeholder="Encuentra la oferta que quieres" >
            <div class="input-group-btn">
              <button type="button" class="btn btn-default">Buscar</button>
            </div>
          </div><!-- /input-group -->
        </div><!-- /.col-lg-6 -->
        <div class="links col-xs-8 col-lg-5 col-md-6 col-sm-8">
          <a href="" class="paga"><img src="<?php print IMAGES;?>/tufactura.png" alt=""></a>
          <a href="" class="chec"><img src="<?php print IMAGES;?>/chec.png" alt=""></a>
          <div class="social">
            Siguenos en:<br>
            <a href="https://www.facebook.com/pages/La-Oferta-Que-Quieres/256376717905182" class="icon-facebook-circled"></a>
            <a href="https://twitter.com/OfertaQueQuiere" class="icon-twitter-circled"></a>
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
      </div>  
    </div>
    <div class="title">
      <div class="container">
        <span>¡Bienvenido a...!</span>
        <h1 id="nomest"></h1>
      </div>
    </div>
    <div class="contentMultimedia">
      <div class="container">
        <div class="col-xs-8 col-lg-6 col-md-6 col-sm-6">
          <div class="sliderEmpresa">
            <ul>
              <li><img src="<?php print IMAGES;?>/img1_sliderEmpresa.jpg" alt=""></li>
              <li><img src="<?php print IMAGES;?>/img1_sliderEmpresa.jpg" alt=""></li>
              <li><img src="<?php print IMAGES;?>/img1_sliderEmpresa.jpg" alt=""></li>
            </ul>
            <div class = 'prevButton'></div>   
            <div class = 'nextButton'></div>
          </div>
        </div>
        <div class="col-lg-6 col-md-8 col-sm-6">
          <h2>Nuestras sedes</h2>
          <div class="map" id="Visor-content">
            <iframe id="iframe-visor" class="negocio" src="http://localhost:8080/ofertaquequieres/visor-oferta/" frameborder="0"></iframe>
          </div>
        </div>
      </div>
    </div>
    <div class="descriptionEmpresa">
      <div class="container">
        <div class="col-lg-9 col-xs-12 col-md-9 col-sm-9">
          <span class="location">Manizales, Caldas, Colombia</span>
          <h3>Descripción.</h3>
          <p id="descrip"></p>
          <h3>Información de Contacto</h3>
          <p id="infcon"></p>
        </div>
        <div class="col-lg-3 col-xs-12 col-md-3 col-sm-3">
          <strong>Redes Sociales</strong><br>
          <a class="icon-facebook-circled" href=""></a>
          <a class="icon-twitter-circled" href=""></a>
        </div>
      </div>
    </div>
    <div class="publications">
      <div class="container">
      <div class="types col-lg-3 col-xs-12 col-md-3 col-sm-4">
        <ul class="postCategorias">
          <li><a class="active" href="">Todos</a></li>
          <li><a href="">Ofertas</a></li>
          <li><a href="">Promociones</a></li>
          <li><a href="">Descuentos</a></li>
          <li><a href="">Eventos</a></li>
          <li><a href="">Casos de Exito</a></li>
          <li><a href="">Información Especial</a></li>
        </ul>
      </div>
      <div class="contentItems col-lg-9 col-xs-12 col-md-9 col-sm-8">
        <a class="volver">Ver Categorias</a>
        <div class="item col-lg-6 col-xs-12 col-md-6 col-sm-6">
          <div class="image">
            <div class="icon"><img src="<?php print IMAGES;?>/icon-alimentos.png" alt=""></div>
            <img class="img-promo" src="<?php print IMAGES;?>/img_promo.jpg" alt="">
            <div class="over icon-ver"></div>
          </div>
          <div class="info">
            <h2>Deli Hamburguesa</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud...</p>
            <a href="" class="icon-empresa">Ver Empresa</a>
            <div class="price">$ 8.500</div>
            <hr>
            <div class="col-lg-8 col-sm-6 col-xs-8">
              <img class="logoMarca" src="<?php print IMAGES;?>/logo.png" alt="">
            </div>
            <div class="col-lg-4 col-sm-6 col-xs-4">
              <a class="icon-facebook-circled" href=""></a>
              <a class="icon-twitter-circled" href=""></a>
            </div>
          </div>
        </div>
        <div class="item col-lg-6 col-xs-12 col-md-6 col-sm-6">  
          <div class="image">
            <div class="icon"><img src="<?php print IMAGES;?>/icon-alimentos.png" alt=""></div>
            <img class="img-promo" src="<?php print IMAGES;?>/img_promo.jpg" alt="">
            <div class="over icon-ver"></div>
          </div>
          <div class="info">
            <h2>Deli Hamburguesa</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud...</p>
            <a href="" class="icon-empresa">Ver Empresa</a>
            <div class="price">$ 8.500</div>
            <hr>
            <div class="col-lg-8 col-sm-6 col-xs-8">
              <img class="logoMarca" src="<?php print IMAGES;?>/logo.png" alt="">
            </div>
            <div class="col-lg-4 col-sm-6 col-xs-4">
              <a class="icon-facebook-circled" href=""></a>
              <a class="icon-twitter-circled" href=""></a>
            </div>
          </div>
        </div>
        <div class="item col-lg-6 col-xs-12 col-md-6 col-sm-6">
          <div class="image">
            <div class="icon"><img src="<?php print IMAGES;?>/icon-alimentos.png" alt=""></div>
            <img class="img-promo" src="<?php print IMAGES;?>/img_promo.jpg" alt="">
            <div class="over icon-ver"></div>
          </div>
          <div class="info">
            <h2>Deli Hamburguesa</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud...</p>
            <a href="" class="icon-empresa">Ver Empresa</a>
            <div class="price">$ 8.500</div>
            <hr>
            <div class="col-lg-8 col-sm-6 col-xs-8">
              <img class="logoMarca" src="<?php print IMAGES;?>/logo.png" alt="">
            </div>
            <div class="col-lg-4 col-sm-6 col-xs-4">
              <a class="icon-facebook-circled" href=""></a>
              <a class="icon-twitter-circled" href=""></a>
            </div>
          </div>
        </div>
        <div class="item col-lg-6 col-xs-12 col-md-6 col-sm-6">
          <div class="image">
            <div class="icon"><img src="<?php print IMAGES;?>/icon-alimentos.png" alt=""></div>
            <img class="img-promo" src="<?php print IMAGES;?>/img_promo.jpg" alt="">
            <div class="over icon-ver"></div>
          </div>
          <div class="info">
            <h2>Deli Hamburguesa</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud...</p>
            <a href="" class="icon-empresa">Ver Empresa</a>
            <div class="price">$ 8.500</div>
            <hr>
            <div class="col-lg-8 col-sm-6 col-xs-8">
              <img class="logoMarca" src="<?php print IMAGES;?>/logo.png" alt="">
            </div>
            <div class="col-lg-4 col-sm-6 col-xs-4">
              <a class="icon-facebook-circled" href=""></a>
              <a class="icon-twitter-circled" href=""></a>
            </div>
          </div>
        </div>
      </div>
    </div>
<?php get_footer('negocio'); ?>
