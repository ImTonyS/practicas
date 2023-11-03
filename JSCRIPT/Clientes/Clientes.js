var decision, carrera;
decision = 0
alert("Bienvenido al seleccionador \n Dependiendo de tu carrera se evaluara el equipo que necesitas ");
alert("Coloca el numero de tu carrera \n 1. Arquitectura \n 2. Diseno Grafico \n 3. Derecho");
//Prompt
decision= Number(prompt("Ingresa el numero de tu carrera: "));
//Error
while (decision > 3) {
    alert("Numero fuera de rango, intentarlo denuevo");
    decision= Number(prompt("Ingresa el numero de tu carrera: "));
}

    if (decision==1) //Arquitectura
        alert("Arquitectura. Para correr los programas afines a la carrera como: "+
        "SolidWorks, AutoCAD o AutoDesk tu PC ideal deberia minimo incluir: \n" + 
        "Windows® 10 (64 bits) \n"+
        "Mínimo: CPU de doble núcleo. Recomendación: Quad core \n"+
        "Mínimo: RAM de 8 GB. Recomendación: 16 GB \n"+
        "Mínimo: 2 GB de espacio libre en el disco. Recomendación: 5 GB \n"+
        "Mínimo: 2 GB o más de RAM de GPU. Recomendación: 4 GB \n"+
        "Se necesita un mínimo de 4 GB de memoria de vídeo para poder utilizar la función Denoiser")
        
    else if(decision==2) //Diseno grafico
        alert("Diseno grafico. Para correr los programas afines a la carrera como: "+
        "Adobe Photoshop, Adobe Illustrator o Corel Draw tu PC ideal deberia minimo incluir: \n"+
        "Procesador de sexta generación de Intel o superior o equivalente AMD con compatibilidad con SSE4.1 \n"+
        "Microsoft Windows 10 versión 21H1 o posterior (versión 21H2 recomendada); Windows 11 (versión 21H2); solo versión de 64 bits; Windows 7, Windows 8.1 no compatibles \n"+
        "8 GB de RAM \n"+
        "9 GB de espacio disponible en el disco duro para instalar la aplicación; espacio adicional necesario para descargar el contenido online opcional; hasta 20 GB de espacio adicional necesario para los archivos temporales durante la instalación del producto (no se puede instalar en un volumen que emplee un sistema de archivos con distinción entre mayúsculas y minúsculas, ni en dispositivos de almacenamiento flash extraíbles) \n"+
        "Resolución de pantalla de 1280 por 800 (con un factor de escala máximo del 100 %) \n"+
        "Controlador de pantalla y sonido compatible con Microsoft DirectX 12 \n"+
        "Reproductor de Windows Media (necesario para importar archivos de Windows Media)")

    else if(decision==3) //Derecho
        alert("Derecho. Para correr los programas afines a la carrera como: "+
        "Sistema operativo:	Windows 11, Windows 10, Windows 10 LTSC 2019, Windows Server 2019 de 32 o 64 bits \n"+
        "Procesador:	Procesador de doble núcleo de 1 GHz \n"+
        "Memoria RAM:	4 GB como mínimo \n"+
        "Disco Duro:	4 GB de espacio disponible \n"+
        "Pantalla:	1280 x 768 \n"+
        "Gráficos:	DirectX 9 con WDDM 2.0 \n"+
        "Versión .NET:	Microsoft .NET 4.6 o superior")
    


