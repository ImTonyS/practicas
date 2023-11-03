#Antonio Villaverde Urueta
#Maquina de soda
costosoda=40
saldo=0

print("El costo de la soda es de ", costosoda, sep=" ")

while saldo<costosoda:
    #Mostrar monto adeudado
     print("Monto adeudado: ", costosoda-saldo)     

    #Solicitar ingreso de moneda
     Monedas=int(input("Favor de introducir una moneda, solo acepta de $1, $2, $5, $10\n"))

    #Verificar validez de moneda
     if Monedas==1:
        saldo+=1

     elif Monedas==2:
        saldo+=2

     elif Monedas==5:
        saldo+=5

     elif Monedas==10:
        saldo+=10

#Salida del programa
print("Toma tu soda, tu cambio son: ", (saldo-costosoda), sep="$")
    

  