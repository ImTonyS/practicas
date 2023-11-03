#Antonio Villaverde Urueta

print("Bienvenido a la aplicacion\n")
usuarios=[]
contrasenas=[]

while True:
    decision=input("Introduce 'c' si deseas agregar un nuevo usuario o 's' si deseas imprimir tu registro de usuarios")

    if decision=="c" or decision=="C":
        usuario=input("Introduce el nombre de usuario: ")       
        if usuario in usuarios:
            decision2= input("El usuario ya existe, deseas actualizar contrasena introduce s(Si) o n(No): ")

            if decision2=="s" or decision2=="S":
                contrasena=input("Introduce la nueva contrasena:  ")
                index=usuarios.index(usuario)
                contrasenas[index]=contrasena

            elif decision2=="N" or decision2=="n":
                pass
        
        else:
            usuarios.append(usuarios)
            contrasenas.append(input("Introduce la contrasena:  "))
    elif decision=="s" or decision=="S":
        break

print("Nombre de usuario     Contrasena")
for i in range(len(usuarios)):
    print(f"{usuarios[i]}{contrasenas[i]}")


   
               
    

            


