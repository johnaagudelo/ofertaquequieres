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
                                <li><img id="detalle-imagen" class="carga-imagen-detalle" src="http://localhost:8080/ofertaquequieres/wp-content/themes/laofertaquequieres/images/cam_loading.gif" alt=""></li>
                            </ul>
                            <a href="" class="controlLeft"></a>
                            <a href="" class="controlRight"></a>
                        </div>
                    </div>
                    <div class="col-lg-12 description col-md-12 col-xs-12">
                        <div class="descriptionItem">
                            <h2 id="nom_campana"></h2>
                            <p id="desc_campana"><br><br></p>
                            <a href="#" class="icon-empresa">Ver más ofertas de esta MYPYME</a>
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
        <div class="col-xs-12 col-lg-5 col-md-6 col-sm-6">
          <div class="sliderEmpresa">
            <ul>
              <li><img id="imagen-negocio" class="carga-imagen-negocio" src="http://localhost:8080/ofertaquequieres/wp-content/themes/laofertaquequieres/images/cam_loading.gif" alt=""></li>
            </ul>
          </div>
        </div>
        <div class="col-lg-7 col-md-6 col-sm-6">
          <h2>Nuestras sedes</h2>
          <div class="map col-lg-7 col-md-6 col-sm-12" id="Visor-content">
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
          <h3>Información de Contacto.</h3>
          <p id="infcon"></p>
          <h3>Horario de atención.</h3>
          <p id="horario"></p>
        </div>
        <div class="col-lg-3 col-xs-12 col-md-3 col-sm-3">
          <strong>Redes Sociales</strong><br>
          <div id="redes-sociales"></div>
        </div>
      </div>
    </div>
    <div class="publications">
      <div class="container">
      <div class="row">
         <div class="col-lg-3 col-xs-12 col-md-3 col-sm-4">
         </div>
        <div class="col-lg-9 col-xs-12 col-md-9 col-sm-8 search">
          <div class="input-group"> 
              <input type="text" class="form-control" id="palabra-clave" aria-label="..." placeholder="Encuentra la oferta que quieres" >
              <div class="input-group-btn">
                <button type="button"  id="buscar" class="btn btn-default">Buscar</button>
              </div>
            </div><!-- /input-group -->
          </div><!-- /.col-lg-6 -->
      </div> 
      <div class="types col-lg-3 col-xs-12 col-md-3 col-sm-4">
        <ul class="postCategorias" id="filtros">
          <li class="active" value=""><a>Todos</a></li>
          <li value="Oferta"><a>Ofertas</a></li>
          <li value="Promoción"><a >Promociones</a></li>
          <li value="Descuento"><a >Descuentos</a></li>
          <li value="Evento"><a>Eventos</a></li>
          <li value="Caso Exito"><a >Casos de Exito</a></li>
          <li value="Información Especial"><a >Información Especial</a></li> 
        </ul>
      </div>
      <div class="contentItems col-lg-9 col-xs-12 col-md-9 col-sm-8">
         <div id="result">
                Aqui encontrara la oferta que quieres...
          </div> 
        <a class="volver">Ver Públicaciones</a>
        <div id="contCompa">
                    <img class="logo-item" src="<?php print IMAGES; ?>/logo.png"></img>
            </div>
      </div>
    </div>
<?php get_footer('negocio'); ?>
