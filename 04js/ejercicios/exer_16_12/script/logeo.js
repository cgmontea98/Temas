"use strict";
// Llamando elemtos de manera global
const $form = document.getElementById("login");
const leg = document.getElementsByTagName("legend")[0];
const alertPlaceholder = document.getElementById("liveAlertPlaceholder");

// Creando objeto global
const incio = {
  correo: null,
  password: null,
  aceptar: null,
};

// Creando alerta por campos extraido de Bootstrap
const alert = (message, type) => {
    const wrapper = document.createElement("div");
    wrapper.innerHTML = [
      `<div class="alert alert-${type} alert-dismissible" role="alert">`,
      `   <div>${message}</div>`,
      '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      "</div>",
    ].join("");
  
    alertPlaceholder.append(wrapper);
  };

// Se extrae escuhadores: valores y check... Pueden ir de últmas también
$form.correo.addEventListener("input", (e) => {
  incio.correo = e.target.value;
});

$form.password.addEventListener("input", (e) => {
  incio.password = e.target.value;
});

$form.exampleCheck1.addEventListener("change", (e) => {
  incio.aceptar = e.target.checked;
});

// Escuacha de evento: enviar con boton
$form.addEventListener("submit", (e) => {
  e.preventDefault();
  /* if(!incio.correo || !incio.password || !incio.aceptar){
        leg.classList.add('text-danger');
        console.log('error')
    } se hace negación con or || donde */
  /* if(incio.correo && incio.password && incio.aceptar){
        return true;
    }else{
        leg.classList.add('text-danger');
        return false
} */

  //validacion de usuario
  if (valdio() === true) {
    checkedPermitido(incio);
  } else {
    leg.classList.add("text-danger");
    alert("Todos los campos son obligatorios son obligatorios", "danger");
  }
});

//El formulario tiene datos?
function valdio() {
  if (incio.correo && incio.password && incio.aceptar) {
    return true;
  } else {
    leg.classList.add("text-danger");
    return false;
  }
}

//validar usuario específico
function checkedPermitido(obj) {
  /*CAMINO1 //creando objeto de validación
  const permitido = {
    correo: "cristian@montealegre.rub",
    password: 123,
    aceptar: true,
  };
  //Validar y dar acceso si se cumple todo
  if(obj.correo === permitido.correo && obj.password === permitido.password && obj.aceptar === permitido.aceptar){
    console.log('acceso permitido');
  }else{
    console.log('No permitido');
  } */

  try {
    //creando objeto de validación
    const permitido = {
      correo: "cristian@montealegre.rub",
      password: 123,
      aceptar: true,
    };
    //Validar y dar acceso si se cumple todo
    if (
      obj.correo === permitido.correo &&
      parseInt(obj.password) === permitido.password &&
      obj.aceptar === permitido.aceptar
    ) {
      console.log("acceso permitido");
      window.open('../index.html', '_self')
    } else {
        alert("Denegado revisar credenciales", "warning");
    }
  } catch (error) {
    console.log("se produjo error en check", error);
  }
}
