
function PRECategoria() {
    this.Sistema = "SIS_40";
    this.tipo = "";
    this.palabraClave = "";
    this.tipcam = "";
    this.mipymesTipo = "";
    this.capa = "http://soyempresariodigital.com:9090/lib/funciones/FUNClienteWMS.php?mapa=C:/ms4w/Apache/htdocs/chec/map/WMSTIPONEGOCIO.map";
    this.extent = "";
    ArrayCampanas = "";
	this.negocio=false;
	this.xNegocio;
	this.yNegocio;
}

 //Asignamos PRECategoria al visor
PRECategoria.prototype.cargarCategoriaVisor =  function() {
       var visor = document.getElementById("Visor-content").querySelector("#iframe-visor").contentWindow;
        visor.PRECategoria = this;
        var visor = this.obtenerVisor();
}

//obtenemos el DOM del visor
PRECategoria.prototype.obtenerVisor =  function() {
       var visor = document.getElementById("Visor-content").querySelector("#iframe-visor").contentWindow;
       return visor; 
}

//Consultamos todas las mipymes que pertenecen a un tipo de categoria
PRECategoria.prototype.consultarMipymesCategoria = function(){
    var mipymes;
    var parametros = {
        "sistema": "SIS_40",
        "tabla": "t_mipyme, t_tipo_negocio",
        "campos": "pym_codigo",
        "condicion": "t_mipyme.pym_tipneg = t_tipo_negocio.tin_codigo and t_tipo_negocio.tin_nombre ='"+this.tipo+"'",
        "modificador": ""   
    };
    console.log(parametros);
    $.ajax({
        type: 'POST',
        url: 'http://www.soyempresariodigital.com/Geomarketing/FUNOferta/ConsultarBuscador',
        data: parametros,
        dataType: "json",
        async: false,
        success:function(data) {
            mipymes = data;
        }
    });
    this.mipymesTipo = mipymes;
}

//obtenemos la pymes del extent con los filtro enviados
PRECategoria.prototype.mostrarExtent =  function(extent) {
    
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
        success:function(data) {
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

PRECategoria.prototype.asignarEventos =  function(map) {
      var map = map;
      this.map.filtrarMapa =  function(map, filtro, capa){
        var capa = capa;
        var map = map;
        var filtro_pymes = filtro
        for(var i=0; i<map.LayersCopia.length;i++){
            var layer = map.LayersCopia[i];
                map.LayersCopia.splice(i, 1);
                layer = map.getLayer(layer.id);
                map.removeLayer(layer);
                layer.refresh();

                if(filtro!=""){
                        layer._getCapabilitiesURL = capa+"&filtro=t_mipyme.pym_codigo in ("+filtro+")";
                        layer.url = capa+"&filtro=t_mipyme.pym_codigo in ("+filtro+")";
                        layer.getMapURL = capa+"&filtro=t_mipyme.pym_codigo in ("+filtro+")";

                }else{
                        layer.getMapURL = capa+"&filtro=t_mipyme.pym_codigo=@@";
                    }
                
                    map.addLayer(layer);
                    map.LayersCopia.push(layer);
                    i = i+map.LayersCopia.length;
        }
    };

}

//Consultamos las campañas de las pymes de los filtros y del extent
PRECategoria.prototype.ConsultarCamp = function(mipymes){
    if(mipymes != ""){
        var campanas;
        var objeto;
        var condicion = "t_campana.pym_codigo = t_mipyme.pym_codigo and t_mipyme.pym_codigo = tg_sede.pym_codigo and t_mipyme.pym_codigo in("+mipymes+")";
        if(this.tipcam != ""){
            condicion =condicion+"and cam_tipo = '" + this.tipcam + "'";
        }
        if(this.palabraClave != ""){
            condicion =condicion+" and (cam_nombre ilike '%" + this.palabraClave + "%' or cam_descri ilike '%" + this.palabraClave + "%')";
        }
        var parametros = {
            "sistema": "SIS_40",
            "tabla": "t_campana, t_mipyme, tg_sede",
            "campos": "cam_codigo, t_mipyme.pym_codigo, cam_nombre, cam_descri, cam_fehoin, cam_fehofi, cam_tipo, t_campana.archivo_oid, t_campana.mime, t_campana.size, t_campana.archivo_nombre, cam_tercon, cam_pubobj, cam_costo, pym_pgfbid, pym_pertwi, x(st_transform(geom,3857)) as sed_latitu, y(st_transform(geom,3857)) as sed_lonlat",
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
                        var twitter = "";
                        var facebook = "";
                        var precio = "";
                        if(campanas.mensaje[i].pym_pertwi != "" && campanas.mensaje[i].pym_pertwi != "@"){
                            twitter = '<a class="icon-twitter-circled" target="_black" href="http://www.twitter.com/'+campanas.mensaje[i].pym_pertwi+'"></a>';
                        }
                        if(campanas.mensaje[i].pym_pgfbid != ""){
                            facebook= '<a class="icon-facebook-circled" target="_black" href="http://www.facebook.com/'+campanas.mensaje[i].pym_pgfbid+'"></a>';
                        }
                        if(campanas.mensaje[i].cam_costo != ""){
                            precio = '<div class="price">$'+campanas.mensaje[i].cam_costo+'</div>';
                        }
                        tarjeta ='<div class="item col-lg-6 col-md-6 col-sm-5 col-xs-10" onmouseover="localizar('+campanas.mensaje[i].sed_x+','+campanas.mensaje[i].sed_y+')"><div class="image"><div class="icon"><img src="http://localhost:8080/ofertaquequieres/wp-content/themes/laofertaquequieres/images/icon-alimentos.png" alt=""></div><img class="carga-imagen" id="'+campanas.mensaje[i].cam_codigo+'" src="http://localhost:8080/ofertaquequieres/wp-content/themes/laofertaquequieres/images/cam_loading.gif" alt=""><div class="over icon-ver"></div></div><div class="info"><h2>'+campanas.mensaje[i].cam_nombre+'</h2><p>'+descripcion+'</p><a href="http://localhost:8080/ofertaquequieres/negocio/?mipyme='+campanas.mensaje[i].pym_codigo+'&coor='+campanas.mensaje[i].sed_x+','+campanas.mensaje[i].sed_y+'"" class="icon-empresa">Ver Empresa</a>'+precio+'<div class="col-lg-8 col-md-8 col-xs-8 col-sm-8"><img class="logoMarca" src="http://localhost:8080/ofertaquequieres/wp-content/themes/laofertaquequieres/images/logo.png" alt=""></div><div class="col-lg-4 col-md-4 col-xs-4 col-sm-4">'+facebook+twitter+'</div></div>';
                         $("#contCompa").append(tarjeta);
                         objeto.PRECategoria.cargarImagenCampana(campanas.mensaje[i].cam_codigo, campanas.mensaje[i].archivo_oid);
                    }else{
                         if (campanas.mensaje[i].cam_descri.length > 120){
                                    var descripcion = campanas.mensaje[i].cam_descri.substring(0,120) + "...";
                                }else{
                                    var descripcion = campanas.mensaje[i].cam_descri;
                                }
                        var twitter = "";
                        var facebook = "";
                        var precio = "";
                        if(campanas.mensaje[i].pym_pertwi != "" && campanas.mensaje[i].pym_pertwi != "@"){
                            twitter = '<a class="icon-twitter-circled" target="_black" href="http://www.twitter.com/'+campanas.mensaje[i].pym_pertwi+'"></a>';
                        }
                        if(campanas.mensaje[i].pym_pgfbid != ""){
                            facebook= '<a class="icon-facebook-circled" target="_black" href="http://www.facebook.com/'+campanas.mensaje[i].pym_pgfbid+'"></a>';
                        }
                        if(campanas.mensaje[i].cam_costo != ""){
                            precio = '<div class="price">$'+campanas.mensaje[i].cam_costo+'</div>';
                        }

                        tarjeta ='<div class="item col-lg-6 col-md-6 col-sm-5 col-xs-10" onmouseover="localizar('+campanas.mensaje[i].sed_x+','+campanas.mensaje[i].sed_y+')"><div class="image"><div class="icon"><img src="http://localhost:8080/ofertaquequieres/wp-content/themes/laofertaquequieres/images/icon-alimentos.png" alt=""></div><img class="img-promo"  src="http://localhost:8080/ofertaquequieres/wp-content/themes/laofertaquequieres/images/img_promo.jpg" alt=""><div class="over icon-ver"></div></div><div class="info"><h2>'+campanas.mensaje[i].cam_nombre+'</h2><p>'+descripcion+'</p><a href="http://localhost:8080/ofertaquequieres/negocio/?mipyme='+campanas.mensaje[i].pym_codigo+'&coor='+campanas.mensaje[i].sed_x+','+campanas.mensaje[i].sed_y+'"" class="icon-empresa">Ver Empresa</a>'+precio+'<div class="col-lg-8 col-md-8 col-xs-8 col-sm-8"><img class="logoMarca" src="http://localhost:8080/ofertaquequieres/wp-content/themes/laofertaquequieres/images/logo.png" alt=""></div><div class="col-lg-4 col-md-4 col-xs-4 col-sm-4">'+facebook+twitter+'</div></div>';
                        $("#contCompa").append(tarjeta);

                    }
                }
                           
                if(campanas.mensaje.length > 0){
                    $("#result").html("Se encontraron <sapan class='cant-pub'>"+campanas.mensaje.length+" publicaciones</span>");
                }else{
                    $("#result").html("Se encontraron <sapan class='cant-pub'>0 publicaciones</span>");
                }
               
            }
        });
        this.ArrayCampanas = datos.mensaje;
    }else{
        $("#result").html("No se encontraron publicaciones: "+this.tipcam);
        $("#contCompa").html('<img class="logo-item" src="http://localhost:8080/ofertaquequieres/wp-content/themes/laofertaquequieres/images/logo.png"></img>');
    }
 
}


PRECategoria.prototype.localizar = function(x, y){    
    //this.MapManager.localizar(this.map, x, y);    
	this.MapManager.InfoCapaOver(x,y);	
}


PRECategoria.prototype.ObtenerInfoCap = function (punto, capas, widget) {    
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
        success: function (data) {
            infoCapa = data;
            //obj.MostrarInfoCapa(punto, data);
        }
    });
    return infoCapa;
}

PRECategoria.prototype.informacionMipyme = function (codigo) {    
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
        success:function(data) {
            infomipyme = data;
            $('#nomest').html(infomipyme.mensaje[0].pym_nomest);
            $('#descrip').html(infomipyme.mensaje[0].pym_descri);
            $('#infcon').html(infomipyme.mensaje[0].pym_nopeco+"<br>Email: "+infomipyme.mensaje[0].pym_email +"<br>Celular:"+infomipyme.mensaje[0].pym_celula);
        }
    });
}

PRECategoria.prototype.cargarImagenCampana = function(codigo,oid){
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
            $("#"+cam_codigo).addClass("img-promo");
        }
    });
}





 


 

