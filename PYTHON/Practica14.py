#Antonio Villaverde Urueta
print("Bienvenido a tu lista de compras\n",)

prod=[]
cant=[]

while True:
    decision=input("Introduce 'C' si deseas agregar un nuevo producto o 'S' si deseas imprimir la lista\n")

    if decision=="C" or decision=="c":
        prod.append(input("Introduce el nombre del producto: \n"))
        cant.append(int(input("Introduce la cantidad que deseas del producto: \n")))
    
    elif decision=="S" or decision=="s":
        break

print("Producto       Cantidad")
for i in range(len(prod)):
    print(f"{prod[i]:20}{cant[i]}")



    

    
