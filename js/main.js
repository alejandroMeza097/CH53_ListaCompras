

//SE RECUPERAN LOS ELEMENTOS QUE CONTIENEN LA INFORMACION INGRESADA////////////////////////
const txtName = document.getElementById("Name");
const txtNumber = document.getElementById("Number");
const btnAgregar = document.getElementById("btnAgregar")
const alertValidacionesTexto = document.getElementById("alertValidacionesTexto");
const alertValidaciones = document.getElementById("alertValidaciones");
const tablaListaCompras = document.getElementById("tablaListaCompras");
const cuerpoTabla = tablaListaCompras.getElementsByTagName("tbody").item(0);
const contadorProductos =document.getElementById("contadorProductos");
const productosTotal = document.getElementById("productosTotal");
const precioTotal = document.getElementById("precioTotal");



//Numeracio nde la primer columna de la tabla...
let contador = 0;
let costoTotal = 0;
let totalEnProductos = 0;



//FUNCION QUE VALIDA LA CANTIDAD//////////////////////////////////////////////////
function validarCantidad() {

    //VERIFICA EXISTA UN VALOR INGREADO...
    if(txtNumber.value.trim().length <= 0){
        return false;
    }

    //VARIFICA QUE EL VALOR INGRESADO SEA UN NUMERO...
    if(isNaN(txtNumber.value)){
        return false;
    }

    //VERIFICA QUE EL NUMERO INGREASADO SEA MAYOR QUE CERO...
    if(Number(txtNumber.value)<=0){
        return false;
    }
    
    return true;

   
}

//FUNCION GET PRECIO////////////////////////////////////////////////////////////////////
function getPrecio(){
    return Math.round(Math.random()*10000)/100;
}






//OREJA PARA EL BOTON DE AGREGAR//////////////////////////////////////////////////////
btnAgregar.addEventListener("click",function(event){

    event.preventDefault();
    let isValid = true;
    alertValidacionesTexto.innerHTML = "";
    alertValidaciones.style.display = "none";
    txtName.style.border = "";
    txtNumber.style.border = "";


    txtName.value = txtName.value.trim();
    //txtName.innerText = txtName.value;

    txtNumber.value = txtNumber.value.trim();
    //xtNumber.innerText = txtNumber.value;


    //validar nombre...
    if(txtName.value.length < 3){
        txtName.style.border = "dashed thin red";
        alertValidacionesTexto.innerHTML = "<strong> El nombre no es correcto.</strong>";
        alertValidaciones.style.display = "block";
        isValid = false;
    }

    //VALIDAR CANTIDAD...
    if(!validarCantidad()){
        txtNumber.style.border = "dashed thin red";
        alertValidacionesTexto.innerHTML += "<br><strong> La cantidad no es correcta. </strong>";
        alertValidaciones.style.display = "block";
        isValid = false;
    }

    if(isValid){
        contador++;
        let precio = getPrecio();
        let row = `<tr>
                    <td>${contador}</td>
                    <td>${txtName.value}</td>
                    <td>${txtNumber.value}</td>
                    <td>${precio}</td>
                    </tr>`;
        cuerpoTabla.insertAdjacentHTML("beforeend",row);

        costoTotal += precio * Number(txtNumber.value);
        precioTotal.innerText = "$ " + costoTotal.toFixed(2);

        totalEnProductos += Number(txtNumber.value);
        productosTotal.innerText = totalEnProductos;

        contadorProductos.innerText = contador;
        
        txtName.value="";
        txtNumber.value = "";
        txtName.focus();
    }
  
    

});



