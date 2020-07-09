//
let objetoAjax = new XMLHttpRequest();



//AJAX



//DEFINIR  LA URL DEL SERVICIO
let url = 'https://api.spotify.com/v1/artists/1ZwdS5xdxEREPySFridCfh/top-tracks?country=US';




//VARIABLE PARA ALMACENAR TOKEN
let token='Bearer BQAwqWxQtUWcfNIJ9j-QkLwZPxFo3q8RX-P3Vdt1W7bMro0uvBbTAJL1kW5qAZT6hAlCpCW_RC5e74wfLpwPH0GYWdV7VhRAfsliEUXb8Q6aXclkmx15pcRW6-y4QiA1NwH8pnoWSEvySzPjwrsibmP8Myk-ZfSZYTQ';

//ABRIR CONEXION
objetoAjax.open('GET',url,true);
//CREAR UN HEADER EN LA PETICION]
objetoAjax.setRequestHeader('Authorization', token);

//CARGAR LOS DATOS
objetoAjax.onload = function(){


    let respuesta=JSON.parse(this.responseText);
    console.log(respuesta);

}

objetoAjax.send();