#Antonio Villaverde Urueta

#Obtener datos de entrada
h_inicial=int(input("En que hora empezo la tarea? (de 0 a 23 horas)\n Aqui: "))
m_inicial=int(input("En que minuto comenzo la tarea? (de 0 a 59 minutos)\n Aqui: "))
d_inicial=int(input("Cuanto durara la tarea? (En minutos)\n Aqui: "))

#Horas 
final_hora=((h_inicial+(m_inicial+d_inicial)//60)%24)          #Conversion de minutos a horas
#final_hora=(h_inicial+op_hora)%24          #Horas a dias
#Minutos
final_min=(m_inicial+d_inicial)%60         #Resta de los minutos a horas

print("La hora final de su tarea es:",final_hora,":",final_min, sep=" ")