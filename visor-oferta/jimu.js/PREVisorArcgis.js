/**************************************************/
/*Nombre:Juan David Cardona Carmona         */
/*Fecha:2015-03-27                                */
/*Descripcion: Permite cargar un visorarcgis y dar capcidad de interactuar con framework.
/**************************************************/

function PREVisorArcgis() {
    this.sistema = "SIS_40";
    this.perfil = perfil;
    this.codigoMapa = mapa;
    this.servidor = servidor;
    this.formularioPadre = formularioPadre;
    this.iframeCodigo = iframeCodigo;
    this.mapa;
    this.capas = [];
    this.PREMapa; 
    //this.objetosGlobalesDelPrevisorArcgis = objetosGlobalesDelPrevisorArcgis;
    //this.objetosDelVisorArcgis = [];
    //th/is.Visores = [];
}





/************************************/
/*Pre: */
/*Pos: */
/*Descripción: */
/************************************/
PREVisorArcgis.prototype.ObtenerVisorArcgis = function () {
    var visorArcgis = document.getElementById(this.formularioPadre).querySelector("#" + this.iframeCodigo).contentWindow;
    return visorArcgis;
}




/************************************/
/*Pre: */
/*Pos: */
/*Descripción: */
/************************************/
PREVisorArcgis.prototype.CargarCamposCapa = function (capa, widget) {
    var obj = widget;
    var objeto = this;
    var elementos;
    $.ajax({
        type: 'POST',
        url: objeto.servidor + '/FUNMapa/ConsultarFiltro',
        data: '{"capa":"' + capa + '"}',
        dataType: "json",
        async: false,
        contentType: "application/json; charset=iso-8859-1",
        success: function (data) {
            elementos = data;
        }
    });
    return elementos;
}


/************************************/
/*Pre: */
/*Pos: */
/*Descripción: */
/************************************/
PREVisorArcgis.prototype.ObtenerInfoCap = function (punto, capas, widget) {
    var obj = widget;
    var objeto = this;
    var infoCapa;    
    $.ajax({
        type: 'POST',
        url: objeto.servidor + '/FUNMapa/ConsultarInfoCap',
        data: '{"x":"' + punto.x + '","y":"' + punto.y + '","capa":"' + capas + '"}',
        //data: '{"capa":"' + objinfomapa.capactiva + '","coordenada":"' +punto +'"}',
        dataType: "json",
        async: false,
        contentType: "application/json; charset=iso-8859-1",
        success: function (data) {
            infoCapa = data;
            obj.MostrarInfoCapa(punto, data);
        }
    });
    return infoCapa;
}



/************************************/
/*Pre: debe existir la mapa,capa, la configuración de localizae en infocapa y los campos para el filtro*/
/*Pos: filtra la capa en el mapa*/
/*Descripción: */
/************************************/
//PREVisorArcgis.prototype.Filtrar = function (campos) {
//    var arcplan = this.ObtenerArcplan();
//    alert("PREArcplan Voy a llamar a filtrar");
//    for (var i = 0; i < this.Visores.length; i++) {
//        if (this.Visores[i].formulario.json[0].funcion[0] != null && this.Visores[i].formulario.json[0].funcion[0].evento != "") {
//            var funciones = this.Visores[i].formulario.json[0].funcion[0].evento.split("#")[1].split("|");
//            for (var j = 0; j < funciones.length; j++) {
//                if (funciones[j].split("@")[0] == "Filtrar") {
//                    var arrCampos = campos.split(";")[0];
//                    for (var k = 0; k < arrCampos.length; k++) {
//                        var codigoObjeto = arrCampos[0].split(",")[0];
//                        var valoresCampos = arrCampos[0].split(",")[1];
//                        var capa = funciones[j].split("@")[1];
//                        var indice = funciones[j].split("@")[2];
//                        var filtro = funciones[j].split("@")[3].split(",");
//                        if (this.ObtenerObjeto(codigoObjeto)) {
//                            filtro[0] = filtro[0].replace(codigoObjeto, valoresCampos);
//                            this.Visores[i].mapa[0].AsignarFiltro(capa, indice, filtro[0]);
//                            var pestana = this.Visores[i].contenedorBase.split("#")[0].trim();
//                            clsperfil.onepages[0].ObtenerIndice(pestana);
//                        }
//                    }
//                }
//            }
//        }
//    }
//}

///************************************/
///*Pre: debe existir la mapa,capa, la configuración de localizae en infocapa y los campos para el filtro*/
///*Pos: Ubica el elemento a buscar y hace foco sobre el en el mapa*/
///*Descripción: */
///************************************/
//PREVisorArcgis.prototype.Localizar = function (elemento) {
//    for (var i = 0; i < this.Visores.length; i++) {
//        if (this.Visores[i].formulario.json[0].funcion[0] != null && this.Visores[i].formulario.json[0].funcion[0].evento != "") {
//            var funciones = this.Visores[i].formulario.json[0].funcion[0].evento.split("#")[1].split("|");
//            for (var j = 0; j < funciones.length; j++) {
//                if (funciones[j].split("@")[0] == "Localizar") {
//                    var codigoObjeto = elemento.split(";")[0];
//                    var capa = funciones[j].split("@")[1];
//                    var valoresCampos = elemento.split(";")[1];
//                    var filtro = funciones[j].split("@")[2].split(",");
//                    if (this.ObtenerObjeto(codigoObjeto)) {
//                        filtro[0] = filtro[0].replace(codigoObjeto, valoresCampos);
//                        this.Visores[i].mapa[0].LocalizarElemento(capa, filtro[0]);
//                        var pestana = this.Visores[i].contenedorBase.split("#")[0].trim();
//                        clsperfil.onepages[0].ObtenerIndice(pestana);
//                    }
//                }
//            }
//        }
//    }
//}


//PREVisorArcgis.prototype.ObtenerObjeto = function (codigo) {
//    for (var i = 0; i < this.objetosDelArcplan.length; i++) {
//        if (codigo == this.objetosDelArcplan[i].ID && this.objetosDelArcplan[i].Pertenece == this.iframeCodigo) {
//            return true;
//        }
//    }
//    return false;
//}


//PREVisorArcgis.prototype.AbrirFormularioConfPlataforma = function (codigoObjeto) {
//    for (var i = 0; i < this.objetosDelArcplan.length; i++) {
//        if (this.objetosDelArcplan[i].ID == codigoObjeto) {
//            var nombre = this.objetosDelArcplan[i].Descripcion.split(",")[0];
//            var onepage = this.objetosDelArcplan[i].Descripcion.split(",")[1];
//            for (var j = 0; j < clsperfil.onepages.length; j++) {
//                if (clsperfil.onepages[j].codigoOnePage == onepage) {
//                    clsperfil.onepages[j].AbrirFormulario(nombre, this.objetosDelArcplan[i].Evento, this.objetosDelArcplan[i].Cartografia);
//                }
//            }
//        }
//    }
//}


//PREVisorArcgis.prototype.AbrirFormularioConfArcplan = function (nombre, evento, mapa) {
//    clsperfil.onepages[0].AbrirFormulario(nombre, evento, mapa);
//}
///************************************/
///*Pre: */
///*Pos: */
///*Descripción: */
///************************************/
//PREVisorArcgis.prototype.FiltrarLocalizar = function () {
//    alert("PREArcplan Voy a llamar a FiltrarLocalizar");
//}