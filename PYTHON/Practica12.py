#Antonio Villaverde Urueta

#Datos base
usuario="usuario1"
contrasena="password123"
intentos_permitidos=2

#Pedir informacion
askusuario=input("Introduce tu usuario: ")


if askusuario==usuario:

    for i in range(intentos_permitidos): #{1,2,3,4,5}
      askcontrasena= input("Introducir contrasena: ")
      if askcontrasena==contrasena:
        print("Bienvenido, solo te tomo",i+1,"intentos.")
        break
      else:
        print("La contrasena introducida no es correcta, intentelo denuevo.")
    
    else:
      print("Se terminaron tus intentos, cuenta bloqueada")
else:
  print("Usuario incorrecto, intenta denuevo")

