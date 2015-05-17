function PRENegocio(negocio, x, y) {
    this.Sistema = "SIS_40";
    this.codNegocio = neg;
    this.capa = "http://soyempresariodigital.com:9090/lib/funciones/FUNClienteWMS.php?mapa=C:/ms4w/Apache/htdocs/chec/map/WMSTIPONEGOCIO.map";
    this.coorx = x;
    this.coory = y;
}

PRECategoria.prototype.cargarCategoriaVisor =  function() {
       var visor = document.getElementById("Visor-content").querySelector("#iframe-visor").contentWindow;
        visor.PRENegocio = this;
        var visor = this.obtenerVisor();
}


