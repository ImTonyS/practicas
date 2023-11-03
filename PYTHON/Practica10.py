#Antonio Villaverde Urueta

#Datos base
usuario="usuario1"
contrasena="password123"
intentos=0

#Pedir informacion
askusuario=input("Introduce tu usuario: ")
askcontrasena=input("Introduce tu contrasena: ")

#Verificar que coincidan con la informacion base
if askusuario==usuario:

 while askcontrasena!=contrasena:
      print("Contrasena incorrecta, intenta denuevo")
      askcontrasena=input("Introduce tu contrasena: ")
      intentos+=1
      
      #Recibir al usuario
      if askcontrasena==contrasena:
        print(f"Bienvenido {usuario} solo te tomo {intentos} intentos el iniciar sesion")

else:
  print("Usuario incorrecto, intenta denuevo")


