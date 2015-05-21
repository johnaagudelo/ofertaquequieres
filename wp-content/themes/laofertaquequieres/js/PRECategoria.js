
function PRECategoria() {
    this.Sistema = "SIS_40";
    this.tipo = "";
    this.palabraClave = "";
    this.tipcam = "";
    this.mipymesTipo = "";
    this.capa = "http://soyempresariodigital.com:9090/lib/funciones/FUNClienteWMS.php?mapa=C:/ms4w/Apache/htdocs/chec/map/WMSTIPONEGOCIO.map";
    this.extent = "";
    ArrayCampanas = "";
    this.negocio = false;
    this.xNegocio;
    this.yNegocio;
}

//Asignamos PRECategoria al visor
PRECategoria.prototype.cargarCategoriaVisor = function() {
    var visor = document.getElementById("Visor-content").querySelector("#iframe-visor").contentWindow;
    visor.PRECategoria = this;
    var visor = this.obtenerVisor();
}

//obtenemos el DOM del visor
PRECategoria.prototype.obtenerVisor = function() {
    var visor = document.getElementById("Visor-content").querySelector("#iframe-visor").contentWindow;
    return visor;
}

//Consultamos todas las mipymes que pertenecen a un tipo de categoria
PRECategoria.prototype.consultarMipymesCategoria = function() {
    var mipymes;
    var parametros = {
        "sistema": "SIS_40",
        "tabla": "t_mipyme, t_tipo_negocio",
        "campos": "pym_codigo",
        "condicion": "t_mipyme.pym_tipneg = t_tipo_negocio.tin_codigo and t_tipo_negocio.tin_nombre ='" + this.tipo + "'",
        "modificador": ""
    };
    console.log(parametros);
    $.ajax({
        type: 'POST',
        url: 'http://www.soyempresariodigital.com/Geomarketing/FUNOferta/ConsultarBuscador',
        data: parametros,
        dataType: "json",
        async: false,
        success: function(data) {
            mipymes = data;
        }
    });
    this.mipymesTipo = mipymes;
}

//obtenemos la pymes del extent con los filtro enviados
PRECategoria.prototype.mostrarExtent = function(extent) {

    if (extent != undefined) {
        this.extent = extent;
    }
        
    var parametros = {
        "sistema": "SIS_40",
        "xmax": this.extent.xmax,
        "xmin": this.extent.xmin,
        "ymax": this.extent.ymax,
        "ymin": this.extent.ymin,
        "tipo": this.tipo,
        "tipcam": this.tipcam,
        "palabraClave": this.palabraClave
    };
    var datos;
    $.ajax({
        data: parametros,
        url: 'http://www.soyempresariodigital.com/Geomarketing/FUNOferta/ConsultarExtent',
        type: 'POST',
        async: false,
        dataType: 'json',
        success: function(data) {
            datos = data;
        }
    });
    this.mipymesTipo = datos.respuesta;
    if(this.map != null){
        this.asignarEventos(this.map);
        this.map.filtrarMapa(this.map, this.mipymesTipo, this.capa);
    }
    this.ConsultarCamp(datos.respuesta);
}

PRECategoria.prototype.asignarEventos = function(map) {
    var map = map;
    this.map.filtrarMapa = function(map, filtro, capa) {
        var capa = capa;
        var map = map;
        var filtro_pymes = filtro
        for (var i = 0; i < map.LayersCopia.length; i++) {
            var layer = map.LayersCopia[i];
            map.LayersCopia.splice(i, 1);
            layer = map.getLayer(layer.id);
            map.removeLayer(layer);
            layer.refresh();

            if (filtro != "") {
                layer._getCapabilitiesURL = capa + "&filtro=t_mipyme.pym_codigo in (" + filtro + ")";
                layer.url = capa + "&filtro=t_mipyme.pym_codigo in (" + filtro + ")";
                layer.getMapURL = capa + "&filtro=t_mipyme.pym_codigo in (" + filtro + ")";

            } else {
                layer.getMapURL = capa + "&filtro=t_mipyme.pym_codigo=@@";
            }

            map.addLayer(layer);
            map.LayersCopia.push(layer);
            i = i + map.LayersCopia.length;
        }
    };

}

//Consultamos las campañas de las pymes de los filtros y del extent
PRECategoria.prototype.ConsultarCamp = function(mipymes){
    if(mipymes != ""){
        var campanas;
        var objeto;
        var condicion = "pym_codigo in("+mipymes+")";
        if(this.tipcam != ""){
            condicion =condicion+"and cam_tipo = '" + this.tipcam + "'";

        }
        if (this.palabraClave != "") {
            condicion = condicion + " and (cam_nombre ilike '%" + this.palabraClave + "%' or cam_descri ilike '%" + this.palabraClave + "%')";
        }
        var parametros = {
            "sistema": "SIS_40",
            "tabla": "v_publicaciones_campana",
            "campos": "*",
            "condicion": condicion,
            "modificador": "order by cam_fehoin"
        };
        $.ajax({
            PRECategoria: this,
            type: 'POST',
            url: 'http://www.soyempresariodigital.com/Geomarketing/FUNOferta/ConsultarCampanas',
            data: parametros,
            dataType: "json",
            async: false,

            success:function(data) {
                objeto = this; 
                campanas = data;
                var tarjeta = "";
                $("#result").html("");
                $("#contCompa").html("");
                if(campanas.mensaje.length>0){
                    for (var i = 0; i < campanas.mensaje.length; i++) {
                        tarjeta = "";
                        var tamano = campanas.mensaje[i].tam_size;
                        if(tamano != 0 && tamano != null && tamano != "" && tamano != "0"){  
                            $("#result").html("Buscando Publicaciones, espere un momento.....");
                            if (campanas.mensaje[i].cam_descri.length > 120){
                                var descripcion = campanas.mensaje[i].cam_descri.substring(0,120) + "...";
                            }else{
                                var descripcion = campanas.mensaje[i].cam_descri;
                            }
                            var tipo = "";
                            var twitter = "";
                            var facebook = "";
                            var precio = "";
                            tipo = objeto.PRECategoria.obtenerImagenTipoCampana(campanas.mensaje[i].cam_tipo);
                            if(campanas.mensaje[i].pym_pertwi != "" && campanas.mensaje[i].pym_pertwi != "@"){
                                twitter = '<a class="icon-twitter-circled" target="_black" href="http://www.twitter.com/'+campanas.mensaje[i].pym_pertwi+'"></a>';
                            }
                            if(campanas.mensaje[i].pym_pgfbid != ""){
                                facebook= '<a class="icon-facebook-circled" target="_black" href="http://www.facebook.com/'+campanas.mensaje[i].pym_pgfbid+'"></a>';
                            }
                            if(campanas.mensaje[i].cam_costo != ""){
                                precio = '<div class="price">$'+campanas.mensaje[i].cam_costo+'</div>';
                            }
                            tarjeta ='<div class="item col-lg-6 col-md-6 col-sm-5 col-xs-10"   onmouseover="localizar('+campanas.mensaje[i].sed_x+','+campanas.mensaje[i].sed_y+')"><div class="image"><div class="icon"><img src="http://localhost:8080/ofertaquequieres/wp-content/themes/laofertaquequieres/images/'+tipo+'" alt=""></div><img class="carga-imagen" id="'+campanas.mensaje[i].cam_codigo+'" src="http://localhost:8080/ofertaquequieres/wp-content/themes/laofertaquequieres/images/cam_loading.gif" alt=""><div onclick="detail(' + i + ')" class="over icon-ver"></div></div><div class="info"><h2>'+campanas.mensaje[i].cam_nombre+'</h2><p>'+descripcion+'</p><a href="http://localhost:8080/ofertaquequieres/negocio/?mipyme='+campanas.mensaje[i].pym_codigo+'&coor='+campanas.mensaje[i].sed_x+','+campanas.mensaje[i].sed_y+'" class="icon-empresa">Ver Empresa</a>'+precio+'<div class="col-lg-8 col-md-8 col-xs-8 col-sm-8"><img class="logoMarca" src="http://localhost:8080/ofertaquequieres/wp-content/themes/laofertaquequieres/images/logo.png" alt=""></div><div class="col-lg-4 col-md-4 col-xs-4 col-sm-4">'+facebook+twitter+'</div></div>';
                             $("#contCompa").append(tarjeta);
                             objeto.PRECategoria.cargarImagenCampana(campanas.mensaje[i].cam_codigo, campanas.mensaje[i].archivo_oid, "img-promo");
                        }else{
                             if (campanas.mensaje[i].cam_descri.length > 120){
                                        var descripcion = campanas.mensaje[i].cam_descri.substring(0,120) + "...";
                                    }else{
                                        var descripcion = campanas.mensaje[i].cam_descri;
                                    }
                            var tipo = "";
                            var twitter = "";
                            var facebook = "";
                            var precio = "";
                            tipo = objeto.PRECategoria.obtenerImagenTipoCampana(campanas.mensaje[i].cam_tipo);
                            if(campanas.mensaje[i].pym_pertwi != "" && campanas.mensaje[i].pym_pertwi != "@"){
                                twitter = '<a class="icon-twitter-circled" target="_black" href="http://www.twitter.com/'+campanas.mensaje[i].pym_pertwi+'"></a>';
                            }
                            if(campanas.mensaje[i].pym_pgfbid != ""){
                                facebook= '<a class="icon-facebook-circled" target="_black" href="http://www.facebook.com/'+campanas.mensaje[i].pym_pgfbid+'"></a>';
                            }
                            if(campanas.mensaje[i].cam_costo != ""){
                                precio = '<div class="price">$'+campanas.mensaje[i].cam_costo+'</div>';
                            }

                            tarjeta ='<div class="item col-lg-6 col-md-6 col-sm-5 col-xs-10"  onmouseover="localizar('+campanas.mensaje[i].sed_x+','+campanas.mensaje[i].sed_y+')"><div class="image"><div class="icon"><img src="http://localhost:8080/ofertaquequieres/wp-content/themes/laofertaquequieres/images/'+tipo+'" alt=""></div><img class="img-promo"  src="http://localhost:8080/ofertaquequieres/wp-content/themes/laofertaquequieres/images/img_promo.jpg" alt=""><div onclick="detail(' + i + ')" class="over icon-ver"></div></div><div class="info"><h2>'+campanas.mensaje[i].cam_nombre+'</h2><p>'+descripcion+'</p><a href="http://localhost:8080/ofertaquequieres/negocio/?mipyme='+campanas.mensaje[i].pym_codigo+'&coor='+campanas.mensaje[i].sed_x+','+campanas.mensaje[i].sed_y+'" class="icon-empresa">Ver Empresa</a>'+precio+'<div class="col-lg-8 col-md-8 col-xs-8 col-sm-8"><img class="logoMarca" src="http://localhost:8080/ofertaquequieres/wp-content/themes/laofertaquequieres/images/logo.png" alt=""></div><div class="col-lg-4 col-md-4 col-xs-4 col-sm-4">'+facebook+twitter+'</div></div>';
                            $("#contCompa").append(tarjeta);

                        }
                    }
                }else{
                    $("#contCompa").html('<img class="logo-item" src="http://localhost:8080/ofertaquequieres/wp-content/themes/laofertaquequieres/images/logo.png"></img>');
                }         
                if(campanas.mensaje.length > 0){
                    $("#result").html("<span class='cant-pub'>"+objeto.PRECategoria.tipcam+"</span> Cantidad públicaciones: <span class='cant-pub'>"+campanas.mensaje.length+"</span>");
                }else{
                    $("#result").html("<span class='cant-pub'>"+objeto.PRECategoria.tipcam+"</span> Cantidad públicaciones: <span class='cant-pub'>0</span>");
                }
               
            }
        });
        ArrayCampanas = campanas.mensaje;
    }else{
        $("#result").html("No se encontraron publicaciones, de tipo ("+this.tipcam+") en el Mapa");
        $("#contCompa").html('<img class="logo-item" src="http://localhost:8080/ofertaquequieres/wp-content/themes/laofertaquequieres/images/logo.png"></img>');
    }
 
}


PRECategoria.prototype.localizar = function(x, y){    
    //this.MapManager.localizar(this.map, x, y);    
    movtarjeta();
    this.MapManager.InfoCapaOver(x, y);
}


PRECategoria.prototype.ObtenerInfoCap = function(punto, capas, widget) {
    var objeto = this;
    var infoCapa;
    $.ajax({
        type: 'POST',
        url: 'http://www.soyempresariodigital.com/Geomarketing/FUNMapa/ConsultarInfoCapSinSession',
        data: '{"x":"' + punto.x + '","y":"' + punto.y + '","capa":"' + capas + '","sistema":"SIS_40"}',
        //data: '{"capa":"' + objinfomapa.capactiva + '","coordenada":"' +punto +'"}',
        dataType: "json",
        async: false,
        contentType: "application/json; charset=iso-8859-1",
        success: function(data) {
            infoCapa = data;
            //obj.MostrarInfoCapa(punto, data);
        }
    });
    return infoCapa;
}

PRECategoria.prototype.informacionMipyme = function(codigo) {
    $('#redes-sociales').html("");
    var infomipyme = null;
    var parametros = {
        "sistema": "SIS_40",
        "codmipyme": codigo
    };
    console.log(parametros);
    $.ajax({
        type: 'POST',
        url: 'http://www.soyempresariodigital.com/Geomarketing/FUNOferta/ConsultarMipyme',
        data: parametros,
        dataType: "json",
        async: false,
        success: function(data) {
            infomipyme = data;
            $('#nomest').html(infomipyme.mensaje[0].pym_nomest);
            $('#descrip').html(infomipyme.mensaje[0].pym_descri);
            $('#infcon').html(infomipyme.mensaje[0].pym_nopeco + "<br>Email: " + infomipyme.mensaje[0].pym_email + "<br>Celular:" + infomipyme.mensaje[0].pym_celula);

            var horarios = "";
            for (var i = 1; i < infomipyme.mensaje.length; i++) {
                if(infomipyme.mensaje[i].hor_finman != infomipyme.mensaje[i].hor_initar){
                    if(horarios == ""){
                    horarios = horarios + infomipyme.mensaje[i].hor_tipo+": "+infomipyme.mensaje[i].hor_iniman+ " a "+ infomipyme.mensaje[i].hor_finman+" y "+ infomipyme.mensaje[i].hor_initar+" a "+infomipyme.mensaje[i].hor_fintar;
                    }else{
                        horarios = horarios + "<br>"+infomipyme.mensaje[i].hor_tipo+": "+infomipyme.mensaje[i].hor_iniman+ " a "+ infomipyme.mensaje[i].hor_finman+" y "+ infomipyme.mensaje[i].hor_initar+" a "+infomipyme.mensaje[i].hor_fintar;
                    }
                }else{
                    if(horarios == ""){
                    horarios = horarios + infomipyme.mensaje[i].hor_tipo+": "+infomipyme.mensaje[i].hor_iniman+ " - "+infomipyme.mensaje[i].hor_fintar+ " (Trabajo continuo)";
                    }else{
                        horarios = horarios + "<br>"+infomipyme.mensaje[i].hor_tipo+": "+infomipyme.mensaje[i].hor_iniman+ " - "+infomipyme.mensaje[i].hor_fintar+ " (Trabajo continuo)";
                    }
                }
            };
            $('#horario').html(horarios);

            var tamano = infomipyme.mensaje[0].size;
            if(tamano != 0 && tamano != null && tamano != "" && tamano != "0"){
                var parametros = {
                "oid": infomipyme.mensaje[0].archivo_oid,
                "sistema": "SIS_40"
                };
                $.ajax({
                type: 'POST',
                url: 'http://www.soyempresariodigital.com/Geomarketing/FUNOferta/ObtenerFoto',
                data: parametros,
                dataType: "json",
                async: true,
                success:function(data) {
                    var img64 = data;
                    $(".contentMultimedia .sliderEmpresa #imagen-negocio").attr("src","data:;base64,"+img64.mensaje);
                    $(".contentMultimedia .sliderEmpresa #imagen-negocio").removeClass();
                }
                });
            }else{
                    $(".contentMultimedia .sliderEmpresa #imagen-negocio").attr("src","http://localhost:8080/ofertaquequieres/wp-content/themes/laofertaquequieres/images/img1_sliderEmpresa.jpg");
                    $(".contentMultimedia .sliderEmpresa #imagen-negocio").removeClass();
            }

            if(infomipyme.mensaje[0].pym_pgfbid != ""){
                $('.descriptionEmpresa .container #redes-sociales').append('<a class="icon-facebook-circled" target="_black" href="http://www.facebook.com/'+infomipyme.mensaje[0].pym_pgfbid+'"></a>');
            }
            if(infomipyme.mensaje[0].pym_pertwi != "" && infomipyme.mensaje[0].pym_pertwi != "@"){
                $('.descriptionEmpresa').find("#redes-sociales").append('<a class="icon-twitter-circled" target="_black" href="http://www.twitter.com/'+infomipyme.mensaje[0].pym_pertwi+'"></a>');
            }
            
        }
    });
}

function movtarjeta() {
    $("#contCompa .item .image .over").mouseover(function() {
        animate(this, 'flipInX');
        return false;
    });
}

function animate(element_ID, animation) {
    $(element_ID).addClass('animated ' + animation);
    var wait = window.setTimeout(function() {
        $(element_ID).removeClass('animated ' + animation)
    }, 500
            );
}
function detail(index) {
     $('#lightbox').fadeIn('slow');
     $('.detail .descriptionItem #redes-sociales').html("");
     $(".detail .sliderItem .sliderOffer #detalle-imagen").attr("src","http://localhost:8080/ofertaquequieres/wp-content/themes/laofertaquequieres/images/cam_loading.gif");
     $(".detail .sliderItem .sliderOffer #detalle-imagen").removeClass();
     $(".detail .sliderItem .sliderOffer #detalle-imagen").addClass("carga-imagen-detalle");
     var tipo = "";
      switch(ArrayCampanas[index].cam_tipo)
        {
        case "Oferta":
          tipo = "http://localhost:8080/ofertaquequieres/wp-content/themes/laofertaquequieres/images/oferta.png";
          break;
        case "Promoción":
          tipo = "http://localhost:8080/ofertaquequieres/wp-content/themes/laofertaquequieres/images/promocion.png";
          break;
        case "Descuento":
          tipo = "http://localhost:8080/ofertaquequieres/wp-content/themes/laofertaquequieres/images/descuento.png";
          break;
        case "Evento":
          tipo = "http://localhost:8080/ofertaquequieres/wp-content/themes/laofertaquequieres/images/evento.png";
          break;
        case "Caso Exito":
          tipo = "http://localhost:8080/ofertaquequieres/wp-content/themes/laofertaquequieres/images/casode-exito.png";
          break;
        case "Información Especial":
          tipo = "http://localhost:8080/ofertaquequieres/wp-content/themes/laofertaquequieres/images/informacion.png";
          break;
        };
    $(".detail .infoItem .infoEmpresa #imagen-tipo").attr("src",tipo);
    var tamano = ArrayCampanas[index].tam_size;
    if(tamano != 0 && tamano != null && tamano != "" && tamano != "0"){
        var parametros = {
        "oid": ArrayCampanas[index].archivo_oid,
        "sistema": "SIS_40"
        };
        $.ajax({
        type: 'POST',
        url: 'http://www.soyempresariodigital.com/Geomarketing/FUNOferta/ObtenerFoto',
        data: parametros,
        dataType: "json",
        async: true,
        success:function(data) {
            var img64 = data;
            $(".detail .sliderItem .sliderOffer #detalle-imagen").attr("src","data:;base64,"+img64.mensaje);
            $(".detail .sliderItem .sliderOffer #detalle-imagen").removeClass();
            $(".detail .sliderItem .sliderOffer #detalle-imagen").addClass("imagen-detalle");
        }
        });
    }else{
            $(".detail .sliderItem .sliderOffer #detalle-imagen").attr("src","http://localhost:8080/ofertaquequieres/wp-content/themes/laofertaquequieres/images/img1_detalle.jpg");
            $(".detail .sliderItem .sliderOffer #detalle-imagen").removeClass();
            $(".detail .sliderItem .sliderOffer #detalle-imagen").addClass("imagen-detalle");
    }
    
    $('.detail .infoEmpresa #fecha_ini').html(ArrayCampanas[index].cam_fehofi);
    $('.detail .infoEmpresa #fecha_fin').html(ArrayCampanas[index].cam_fehoin);
    $('.detail .infoEmpresa #nom_empresa_1').html(ArrayCampanas[index].pym_nombre);
    $('.detail .descriptionItem #nom_campana').html(ArrayCampanas[index].cam_nombre);
    $('.detail .infoEmpresa #cat_mipyme').html(ArrayCampanas[index].cam_tipo);
    $('.detail .descriptionItem #desc_campana').html(ArrayCampanas[index].cam_descri);
    if(ArrayCampanas[index].cam_costo != ""){
         $('.detail .descriptionItem #precio').html('<div class="price">$'+ ArrayCampanas[index].cam_costo +'</div>');
    }
    if(ArrayCampanas[index].pym_pertwi != "" && ArrayCampanas[index].pym_pertwi != "@"){
        $('.detail .descriptionItem #redes-sociales').append('<a class="icon-twitter-circled" target="_black" href="http://www.twitter.com/'+ArrayCampanas[index].pym_pertwi+'"></a>');
    }
    if(ArrayCampanas[index].pym_pgfbid != ""){
        $('.detail .descriptionItem #redes-sociales').append('<a class="icon-facebook-circled" target="_black" href="http://www.facebook.com/'+ArrayCampanas[index].pym_pgfbid+'"></a>');
    }

    $('.detail .descriptionItem .icon-empresa').attr("href","http://localhost:8080/ofertaquequieres/negocio/?mipyme='+campanas.mensaje[i].pym_codigo+'&coor='+campanas.mensaje[i].sed_x+','+campanas.mensaje[i].sed_y+'");
    
  
}

PRECategoria.prototype.cargarImagenCampana = function(codigo,oid,clase){
      var img64;
      var cam_codigo = codigo;
      var parametros = {
        "oid": oid,
        "sistema": "SIS_40"
        };
        $.ajax({
        type: 'POST',
        url: 'http://www.soyempresariodigital.com/Geomarketing/FUNOferta/ObtenerFoto',
        data: parametros,
        dataType: "json",
        async: true,
        success:function(data) {
            img64 = data;
            $("#"+cam_codigo).attr("src","data:;base64,"+img64.mensaje);
            $("#"+cam_codigo).removeClass();
            $("#"+cam_codigo).addClass(clase);
        }
    });
}

PRECategoria.prototype.obtenerImagenTipoCampana = function(tipo){
        var imagen;
        switch(tipo)
        {
        case "Oferta":
          imagen = "oferta.png";
          break;
        case "Promoción":
          imagen = "promocion.png";
          break;
        case "Descuento":
          imagen = "descuento.png";
          break;
        case "Evento":
          imagen = "evento.png";
          break;
        case "Caso Exito":
          imagen = "casode-exito.png";
          break;
        case "Información Especial":
          imagen = "informacion.png";
          break;
        }

        return imagen;
}

