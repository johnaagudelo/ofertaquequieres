
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
    ;

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
            console.log(datos.respuesta);
        }
    });
    this.mipymesTipo = datos.respuesta;
    if (this.map != null) {
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
PRECategoria.prototype.ConsultarCamp = function(mipymes) {
    if (mipymes != "") {
        var datos;
        var condicion = "t_campana.pym_codigo = t_mipyme.pym_codigo and t_mipyme.pym_codigo = tg_sede.pym_codigo and t_mipyme.pym_codigo in(" + mipymes + ")";
        if (this.tipcam != "") {
            condicion = condicion + "and cam_tipo = '" + this.tipcam + "'";
        }
        if (this.palabraClave != "") {
            condicion = condicion + " and (cam_nombre ilike '%" + this.palabraClave + "%' or cam_descri ilike '%" + this.palabraClave + "%')";
        }
        var parametros = {
            "sistema": "SIS_40",
            "tabla": "t_campana, t_mipyme, tg_sede",
            "campos": "cam_codigo, t_mipyme.pym_codigo, cam_nombre, cam_descri, cam_fehoin, cam_fehofi, cam_tipo, t_campana.archivo_oid, t_campana.mime, t_campana.size, t_campana.archivo_nombre, cam_tercon, cam_pubobj, cam_costo, pym_pgfbid, pym_pertwi, x(st_transform(geom,3857)) as sed_latitu, y(st_transform(geom,3857)) as sed_lonlat",
            "condicion": condicion,
            "modificador": "order by cam_fehoin"
        };
        console.log(parametros);
        $.ajax({
            type: 'POST',
            url: 'http://www.soyempresariodigital.com/Geomarketing/FUNOferta/ConsultarCampanas',
            data: parametros,
            dataType: "json",
            async: false,
            success: function(data) {
                datos = data;
                console.log(datos.mensaje);
            }
        });
        this.PintarCampa(datos);
        ArrayCampanas = datos.mensaje;
    } else {
        $("#contCompa").html("No se Encontro ninguna " + this.tipcam);
    }


}

//Pintamos las tarjetas de las campañas de las pymes
PRECategoria.prototype.PintarCampa = function(campanas) {
    var tarjeta = "";
    var img64 = "";
    $("#contCompa").html("");
    for (var i = 0; i < campanas.mensaje.length; i++) {
        tarjeta = "";
        var tamano = campanas.mensaje[i].tam_size;
        if (tamano != 0 && tamano != null && tamano != "" && tamano != "0") {
            var parametros = {
                "oid": campanas.mensaje[i].archivo_oid,
                "sistema": "SIS_40"
            };

            $.ajax({
                index: i,
                campana: campanas.mensaje[i],
                type: 'POST',
                url: 'http://www.soyempresariodigital.com/Geomarketing/FUNOferta/ObtenerFoto',
                data: parametros,
                dataType: "json",
                async: true,
                beforeSend: function() {
                    $("#mensaje").html("Buscando Publicaciones, espere un momento.....");
                },
                success: function(data) {
                    var campa = this;
                    img64 = data;
                    if (campa.campana.cam_descri.length > 120) {
                        var descripcion = campa.campana.cam_descri.substring(0, 120) + "...";
                    } else {
                        var descripcion = campa.campana.cam_descri;
                    }

                    $("#mensaje").html("");

                    tarjeta = '<div class="item col-lg-6 col-sm-6" onclick="detail(' + campa.index + ')" onmouseover="localizar(' + campa.index + ',' + campa.campana.sed_x + ',' + campa.campana.sed_y + ')"><div class="image"><div class="icon"><img src="http://localhost:8080/ofertaquequieres/wp-content/themes/laofertaquequieres/images/icon-alimentos.png" alt=""></div><img class="img-promo" src="data:;base64,' + img64.mensaje + '" alt=""><div class="over icon-ver"></div></div><div class="info"><h2>' + campa.campana.cam_nombre + '</h2><p>' + descripcion + '</p><a href="http://localhost:8080/ofertaquequieres/negocio/?mipyme=' + campa.campana.pym_codigo + '&coor=' + campa.campana.sed_x + ',' + campa.campana.sed_y + '&cat=' + this.tipo + '" class="icon-empresa">Ver Empresa</a><div class="price">$ 8.500</div><div class="col-lg-8 col-md-8 col-xs-8"><img class="logoMarca" src="http://localhost:8080/oferta/wp-content/themes/laofertaquequieres/images/logo.png" alt=""></div><div class="col-lg-4 col-md-4 col-xs-4"><a class="icon-facebook-circled" href=""></a><a class="icon-twitter-circled" href=""></a></div></div></div>';
                    $("#contCompa").append(tarjeta);
                }

            });
        } else {
            if (campanas.mensaje[i].cam_descri.length > 120) {
                var descripcion = campanas.mensaje[i].cam_descri.substring(0, 120) + "...";
            } else {
                var descripcion = campanas.mensaje[i].cam_descri;
            }
            tarjeta = '<div class="item col-lg-6" onmouseover="localizar(' + i + ',' + campanas.mensaje[i].sed_x + ',' + campanas.mensaje[i].sed_y + ')"><div class="image"><div class="icon"><img src="<img src="http://localhost:8080/ofertaquequieres/wp-content/themes/laofertaquequieres/images/icon-alimentos.png" alt=""></div><img class="img-promo" src="http://localhost:8080/ofertaquequieres/wp-content/themes/laofertaquequieres/images/img_promo.jpg" alt=""></div><div class="info"><h2>' + campanas.mensaje[i].cam_nombre + '</h2><p>' + descripcion + '</p><a href="#" class="icon-empresa">Ver Empresa</a><div class="price">$ 8.500</div></div></div>';
            $("#contCompa").append(tarjeta);
        }
    }

    if (campanas.mensaje.length > 0) {
        $("#contCompa").prepend("Se encontraron " + campanas.mensaje.length + " publicaciones");
    } else {
        $("#contCompa").html("Se encontraron 0 publicaciones");
    }

}

PRECategoria.prototype.localizar = function(x, y) {
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
    console.log("click");
    console.log(ArrayCampanas);
    $('#lightbox').fadeIn('slow');
    $('.detail .infoEmpresa #fecha_ini').html(ArrayCampanas[index].cam_fehofi);
    $('.detail .infoEmpresa #fecha_fin').html(ArrayCampanas[index].cam_fehoin);
    $('.detail .infoEmpresa #nom_empresa_1').html('Nombre de la Mipyme');
    $('.detail .infoEmpresa #cat_mipyme').html('Categoria');
    $('.detail .descriptionItem #nom_empresa_2').html('Nombre de la Mipyme');
    $('.detail .descriptionItem #desc_campana').html(ArrayCampanas[index].cam_descri);
    $('.detail .descriptionItem .price').html('$ 00.000');
  //  var campana = ArrayCampanas[index];
  
}









