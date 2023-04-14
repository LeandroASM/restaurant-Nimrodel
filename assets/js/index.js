//Función que permite mostrar el fomulario de contacto y ocultar el de reserva
function formContacto(){
    document.getElementById("form-contacto").classList.remove('d-none')
    document.getElementById("form-contacto").classList.add('d-block');

    document.getElementById("form-reserva").classList.add('d-none')
}

//Función que permite mostrar el fomulario de reserva y ocultar el de contacto
function formReserva(){
    document.getElementById("form-reserva").classList.remove('d-none')
    document.getElementById("form-reserva").classList.add('d-block');

    document.getElementById("form-contacto").classList.add('d-none')
}

//utilizamos el evento ready, para luego empezar a utilizar 
//los elementos del formulario y validar datos
$(document).ready(function(){

    $("#boton-reserva").click(function(){
        var validacion = validarFormReserva();
        if(validarFormReserva()){
        
        alert("Estimado(a) " + validacion.nombre + " agradecemos por reservar con nosotros. Hemos registrado " + validacion.asistentes + " asistentes. Se ha enviado el código de confirmación al correo " + validacion.correo + " \n Gracias por preferirnos");
        }    
    });

    /*
    llenar modal con los datos del restaurant
    */

    $('.img-producto').click(function(){
        var imgScr = this.src;
        var titulo = this.closest('div').querySelector('h5').innerHTML;
        var texto = this.closest('div').querySelector('p').innerHTML;
        
        $('#titulo_modal').text(titulo);
        $('#texto_modal').text(texto);
        $('#img_modal').attr('src',imgScr);

        $('.myModal').show();
    })
    /* 
        cerrar modal con el ícono X
    */
    $('#close_modal').click(function(){
        $('.myModal').hide();
    })

    /* 
        cerrar modal haciendo click en el area opacada
    */
    $('.myModal').click(function(event){
        if(!$(event.target).closest('#modal_content').lenght){
            $(this).hide();
        }
    })

});

//validamos los datos que se obtienen mediante JQuery
function validarFormReserva(){
    var nombre = $.trim($("#nombre-reserva").val());
    var correo = $.trim($("#correo-reserva").val());
    var telefono = $.trim($("#telefono-reserva").val());
    var fecha = $.trim($("#fecha-reserva").val());
    var hora = $.trim($("#hora-reserva").val());
    var asistentes = $.trim($("#asistentes-reserva").val());

    var formValido = true;
    if(nombre == "" || validarNombre(nombre) == false){
        alert("El campo 'Nombre' es requerido y debe tener un formato correcto");
        formValido = false;
    }
    if(correo == "" || validarCorreo(correo) == false){
        alert("El campo 'Correo' es requerido y debe tener un formato correcto");
        formValido = false;
    }

    if(asistentes == "" ){
        alert("El campo 'Asistentes' es requerido y debe tener un formato correcto");
        formValido = false;
    }

    return {formValido: formValido, nombre: nombre, correo: correo, asistentes: asistentes};
}



var form = document.getElementById("formulario-contacto");
//función que se ejecuta al enviar el formulario
form.addEventListener('submit',function(event){
    event.preventDefault();
    if(validarForm()){
        exito();
    }
})

//función que valida los datos ingresados al formulario
function validarForm(){
    var datos = obtenerDatos();
    var nombre = datos.nombre;
    var correo = datos.correo;
    var telefono = datos.telefono;
    var motivo = datos.motivo;
    var textomotivo = datos.textomotivo;
    
    var formValido = true;
    if(nombre == "" || validarNombre(nombre) == false){
        alert("El campo 'Nombre' es requerido y debe tener un formato correcto");
        formValido = false;
    }
    
    if(correo == "" || validarCorreo(correo) == false){
        alert("El campo 'Correo' es requerido y debe tener un formato correcto");
        formValido = false;
    }
    
    if(telefono == "" ){
        alert("El campo 'Teléfono es requerido y debe tener un formato correcto");
        formValido = false;
    }
    
    if(motivo == ""){
        alert("El campo 'Motivo' es requerido y debe tener un formato correcto");
        formValido = false;
    }
    
    if(textomotivo == ""){
        alert("El campo 'Razón del Motivo' es requerido y debe tener un formato correcto");
        formValido = false;
    }
    return formValido;
}
//Función que muestra un mensaje cuando los datos son válidos
function exito(){
    var datos = obtenerDatos();
    var nombre = datos.nombre;
    var correo = datos.correo;
    var motivo = datos.motivo;

    alert(`Muchas gracias ${nombre} hemos recibido su ${motivo} y enviaremos una pronta respuesta al correo ${correo}`);
}

//Función que obtiene los datos del formulario, que serán utilizados en el resto de funciones
function obtenerDatos(){
    var nombre = document.getElementById("nombre").value;
    var correo = document.getElementById("correo").value;
    var telefono = document.getElementById("telefono").value;
    var motivo = document.getElementById("motivo").value;
    var textomotivo = document.getElementById("textomotivo").value;
    return {
        nombre:nombre,
        correo:correo,
        telefono:telefono,
        motivo:motivo,
        textomotivo:textomotivo 
    };
}   


//funciones que validan si el formato de los datos ingresados son correctos
function validarNombre(nombre){
    let expression = /^[a-zñáéíóú]+(\s[a-zñáéíóú]+)?$/i;
    return expression.test(nombre);
}

function validarCorreo(correo){
    let expression = /^[\w]+(\.)?[\w]+@[\w]+\.[\w]{2,3}$/i;
    return expression.test(correo);
}





