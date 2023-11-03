#Antonio Villaverde

num= int(input("Introduce tu numero para sacar su factorial: "))

factorial=1

for i in range(1,num+1):
    factorial*=i

print(f"Su factorial es {factorial}")