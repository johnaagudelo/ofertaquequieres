<div id="terminos" style="display: none;">
    <div id="box-lightbox">
        <div class="lightbox">
            <div id="lightbox-header">
                <?php query_posts('p=72'); ?>
                <?php while (have_posts()) : the_post(); ?>
                <h3><?php the_title(); ?></h3>
                <a class="closed">X</a>
            </div><!--cierro lightbox-header-->
            <div id="lightbox-content">
                <p>
                    <?php the_content(); ?>
                </p>
                <?php endwhile; ?>
            </div><!--cierro lightbox-content-->
        </div><!--cierro box-lightbox--> 
    </div>
</div>
<div id="registro" style="display: none;">
    <div id="box-lightbox">
        <div class="lightbox">
            <div id="lightbox-header">
                <h3>Informacion de registro</h3>
                <a class="closed">X</a>
            </div><!--cierro lightbox-header-->
            <div id="lightbox-content">
                <p id="mensaje">
                    Su Registro fue exitoso.
                </p>
            </div><!--cierro lightbox-content-->
        </div><!--cierro box-lightbox--> 
    </div>
</div>
<div class="subscribe">
      <div class="container">
        <p>Recibe las mejores ofertas en tu correo electrónico</p>
        <div class="form-group">
          <input id="nombre" type="text" class="form-control" placeholder="Nombre">
          <input id="email" type="text" class="form-control" placeholder="Correo electrónico">
        </div>
        <button type="submit" class="btn btn-default" id="enviar-registro">Suscribirme</button>
      </div>
    </div>
    <footer>
      <div class="logos">
        <a href=""><img src="<?php print IMAGES;?>/logo_chec.jpg" alt=""></a>
        <a href=""><img src="<?php print IMAGES;?>/logo_mintic.jpg" alt=""></a>
        <a href=""><img src="<?php print IMAGES;?>/logo_vive.jpg" alt=""></a>
        <a href=""><img src="<?php print IMAGES;?>/logo_innpulsa.jpg" alt=""></a>
        <a href=""><img src="<?php print IMAGES;?>/logo_todos.jpg" alt=""></a>
      </div>
      <div class="copyright">
        <div class="container">
          <p>Todos ls derechos reservados © laofertaquequieres.com</p>
          <a href="" class="text-left">Términos y Condiciones</a>
        </div>
      </div>
    </footer>
    <!--script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script-->
    <script src="<?php print JS;?>/vendor/jquery-1.11.2.min.js"></script>
    <script src="<?php print JS;?>/vendor/bootstrap.min.js"></script>
    <script src="<?php print JS;?>/vendor/CustomScrollbar.js"></script>
    <script src="<?php print JS;?>/vendor/jquery.easing-1.3.js"></script>
    <script src="<?php print JS;?>/vendor/jquery.iosslider.js"></script>
    <script src="<?php print JS;?>/main.js"></script>
    <script src="<?php print JS;?>/PRECategoria.js"></script>
        <script>
            var categorias = null;
                function load(pyme, coor){
					          var coordenadas = coor.split(",");
                    categorias = new PRECategoria();
                    categorias.mipymesTipo = pyme;  
                    categorias.cargarCategoriaVisor();
          					categorias.negocio=true;
          					categorias.xNegocio=coordenadas[0];
          					categorias.yNegocio=coordenadas[1];
                    categorias.informacionMipyme(pyme);
                }
                $(document).ready(function(){
                    $("#filtros li").click(function(){
                         var tipoCampa = $(this).attr("value");
                         $("#filtros li a").removeClass("active");
                         $(this).find("a").addClass("active");
                         categorias.tipcam = tipoCampa;
                         categorias.palabraClave = "";
                         $("#palabra-clave").val("");
                         var pyme = "'"+categorias.mipymesTipo+"'";
                         categorias.ConsultarCamp(pyme);
                     });
                    $("#buscar").click(function() {
                        var palabra = $("#palabra-clave").val();
                        categorias.palabraClave = palabra;
                        var pyme = "'"+categorias.mipymesTipo+"'";
                        categorias.ConsultarCamp(pyme);
                    });
                });
        </script>

    </body>
</html>