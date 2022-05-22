//Validación de un formulario con Javascript
function valida_envia() {
    //valido el nombre
    if (document.fvalida.nombre.value.length == 0) {
        alert("Tiene que escribir su nombre")
        document.fvalida.nombre.focus()
        return 0;
    }

    //valido la edad. tiene que ser entero mayor que 18
    edad = document.fvalida.edad.value
    edad = validarEntero(edad)
    document.fvalida.edad.value = edad
        if (edad == "") {
            alert("Tenes que ingresar tu edad con un número entero.")
            document.fvalida.edad.focus()
            return 0;
        } 
        else {
            if (edad < 18) {
                alert("Debes ser mayor de 18 años.")
                document.fvalida.edad.focus()
                return 0;
            }
        }

    //valido el celular
    if (document.fvalida.celular.value.length == 0) {
        alert("Tenes que escribir un número de celular para contacto")
        document.fvalida.nombre.focus()
        return 0;
    } 

    //valido el tipo de cliente
        if (document.fvalida.tipoCliente.selectedIndex == 0) {
            alert("Tenes seleccionar un tipo de cliente.")
            document.fvalida.interes.focus()
            return 0;
        }
    
    //valido el pedido
        if (document.fvalida.pedido.value.length == 0) {
            alert("Ingresá tu pedido. Recordá: Mínimo por estilo: 6 latas. Mínimo por pedido: 24 latas. Para bares o expendios ingresá MAYORISTA")
            document.fvalida.nombre.focus()
            return 0;
        }    

    //el formulario se envia
    alert("Muchas gracias por enviar el formulario");
    document.fvalida.submit();
}

function validarEntero(valor) {
    //intento convertir a entero.
    //si era un entero no le afecta, si no lo era lo intenta convertir
    valor = parseInt(valor)
        //Compruebo si es un valor numérico
        if (isNaN(valor)) {
        //entonces (no es numero) devuelvo el valor cadena vacia
            return "";
        } 
        else {
            //En caso contrario (Si era un número) devuelvo el valor
            return valor;
        }
}

