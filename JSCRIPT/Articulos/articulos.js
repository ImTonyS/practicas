//Antonio Villaverde Urueta TIDBIS12M -Buscador de articulos

alert("Bienvenido a la app de Alsuper Movile donde tu puedes comprar desde casa")

//Declaramos variable y guardamos la decision del usuario
let abarrotes, farmacia, client = parseInt(prompt("De que area es el producto que deseas conocer?\n1. Abarrotes \n2. Farmacia"));

//Creamos el switch
switch (client) {


    case 1: 
        abarrotes = parseInt(prompt("Te encuentras en la zona de abarrotes de cual de los siguientes articulos quisieras saber mas detalles?\n1. Jabon\n2. Cereal\n3. Desechables\n4. Frutas\n5. Verduras"))
        switch (abarrotes) {
            case 1:
                alert("Jabon Sote en barra rosa a un super precio, paquete de 5 barras por $25 pesos mexicanos")
                break;
            case 2:
                alert("Cereal Zucaritas chabocho para el desayuno en presentacion de 920g con un precio de $90 pesos mexicanos")
                break;
            case 3:
                alert("Paquete de vasos y platos desechables con 50 unidades por el sencillo y bajo precio de $230 pesos mexicanos")
                break;  
            case 4:
                alert("Frutas disponibles:\n - Manzana en presentacion de 1kg a $30 pesos\n = Uvas rojas con semilla bolsa de 600gr en $60 pesos\n = Peras, el kilo a $50 pesos")
                break;
            case 5:
                alert("Verduras disponibles:\n - Aguacate negro en presentacion de 1kg a $15 pesos\n = Cebolla bolsa de 1kg en $34 pesos\n = Lechuga pieza a $56 pesos")
                break;
            default:
                alert("Solo hay 5 opciones, intentar denuevo")
        }
        break;
    case 2: 
        farmacia = parseInt(prompt("Te encuentras en la zona de farmacia de cual de los siguientes articulos quisieras saber mas detalles?\n1. Ensure\n2. Shampoo\n3. Suero\n4. Kleenex\n5. Rastrillos"))
        switch (farmacia) {
            case 1:
                alert("Formula de alimentacion ENSURE de 600ml a $40 pesos mexicanos")
                break;
            case 2:
                alert("Shampoo head n shoulders botella de 900ml a $89 pesos")
                break;
            case 3:
                alert("Suero ELECTROLIT sabor caldito de Maruchan con 600ml a $22 pesos mexicanos")
                break;  
            case 4:
                alert("Paquete de Kleenex con 120 unidades a $30 pesos mexicanos")
                break;
            case 5:
                alert("Paquete de Rastrillos GILLETTE doble cuchilla con 2 piezas a $89 pesos")
                break;    
            default:
                alert("Solo hay 5 opciones, intentar denuevo")
     }
default:
alert("Solo hay dos opciones, intentar denuevo")
               
}
alert("Gracias por usar este servicio! si gusta volver a conocer detalles sobre otro producto favor de refrescar la pagina!")
