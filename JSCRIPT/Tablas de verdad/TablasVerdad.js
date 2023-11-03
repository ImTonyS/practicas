//Antonio Villaverde Urueta TIDBIS12M -Tablas de la Verdad
alert("Bienvenido al mostrador de tablas de verdad creado \npor Antonio Villaverde Urueta")

//Declaramos variable
alert("Cual tabla quieres que te muestre?");
let tables = parseInt(prompt("1) And && \n2) Or || \n3) Not !"));

//Creamos el switch
switch(tables) {
  case 1:
    alert("AND &&    \nP     Q     R\n1     1      " + (1&&1) + "\n" + 
     "1     0      " + (1&&0) + "\n" + "0     1      " + (0&&1) + "\n" +
     "0     0      " + (0&&0))
    window.location.reload()
    break;

  case 2:
    alert("OR ||    \nP     Q     R\n1     1      " + (1||1) + "\n" + 
    "1     0      " + (1||0) + "\n" + "0     1      " + (0||1) + "\n" +
    "0     0      " + (0||0))
    window.location.reload()
    break;

  case 3:
    alert("NOT !    \nP     R\n1    " + (!1) + "\n" + 
    "0    " + (!0))
    window.location.reload()
    break;
    
   default:
        alert("Hay 3 opciones solamente, volver a intentar")
        window.location.reload()
}




