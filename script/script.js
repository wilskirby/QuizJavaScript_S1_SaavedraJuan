function obtenerClima(){
    //Ciudad Fija dada
    let ciudad = 'Floridablanca';
    let url = 'http://api.weatherapi.com/v1/current.json?key=47ccdbb88c914ea7b58135604252804&q=' + ciudad + '&lang=es';
  

    // Realizar la petición
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
  
    // Configurar la función de respuesta
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4) {
        if (xhr.status == 200) {
          let d = JSON.parse(xhr.responseText);
          document.getElementById('resultado').innerHTML = `
            <h3>${d.location.name}</h3>
            <p>${d.current.temp_c}°C - ${d.current.condition.text}</p>
            <img src="https:${d.current.condition.icon}">
          `;
        } else {
          document.getElementById('resultado').innerHTML = 'Error :(';
        }
      }
    };
  
    xhr.send();
  }
  
  // Ejecutarlo apenas abra la página
  obtenerClima();

  