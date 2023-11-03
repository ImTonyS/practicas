#Antonio Villaverde Urueta

Num1= (input("Ingresa el primer numero: "))
Num2= (input("Ingresa el segundo numero: "))
Num3= (input("Ingresa el tercer numero: "))
Num4= (input("Ingresa el cuarto numero numero: "))

Numgrande=Num1

if Num2 > Numgrande:
   Numgrande = Num2

if Num3 > Numgrande:
   Numgrande = Num3

if Num4 > Numgrande:
   Numgrande = Num4

print("El numero mas grande es: ", Numgrande, sep=" ")