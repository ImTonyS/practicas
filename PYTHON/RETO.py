alt=int(input("Que tan alto quieres que sea?\n"))
ancho=int(input("Y que tan ancho?\n"))
print("+" + ancho * "-" + "+")
print(("|" + " " * ancho + "|\n") * (alt//2), end="")
print("+" + ancho * "-" + "+")

