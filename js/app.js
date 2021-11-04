alert("Bienvenido, le Mostraremos su Edad, segun su fecha de Nacimiento");



const ejercicio = (x) => {
    const ano_actual=2021;
    const resultado = ano_actual - x;
    return resultado;
}
do{
    let _switch = 0;
    const nombre = prompt("Ingrese su Nombre");
    const edad =  parseInt(prompt("Ingrese su Año de Nacimiento"));
    if(nombre == ""){
        _switch = 1;
    }
    if(!isNaN(edad) && edad !== "" && _switch == 0){
        alert("Estimado "+nombre+ "Usted Tiene: "+ejercicio(edad)+ " Años de Edad");
        break;
    }else{
        _switch = 1;
    }
    
}while(_switch = 1);

