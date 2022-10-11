# Comando /tiempo

- OBJETIVO:  Recuperar ciertos datos de temperaturas de una ciudad seleccionada a partir de la ejecución de un comando en el Bot.

-EJECUCION
    -/tiempo Madrid
    -/tiempo Santiago de compostela
    -/tiempo Berlin

# TAREAS:
-Definir en index.js y en su fichero correspondiente el comando /tiempo
-¡Probar que funciona!

-Extraer la ciduad seleccionada
    - ¿De dónde saco el texto? --> Hay que mirar ctx.message
    - De ese mensaje, ¿ Cómo extraigo unicamente la ciudad ?

- ¿Cómo saco los valores de temperatura de esa ciudad ?
    -API: https://openweathermap.org/
    -Hay que registrarse par obtener un API Key
    -Mediante la URL: https://api.openweathermap.org/data/2.5/weather?q={cityname}&appid={APIkey}
    -Para recuperar la informaciñon a partir de esa URL usamos la librería 
    AXIOS(GET sobre la URL anterior)

-Como respuesta enviaremos los datos de:
    temperatura actual
    temperatura max
    temperatura min
    humedad


##Comando /donde

-OBJETIVO: A partir de una dirección devolvernos la posición exacta.
-EJECUCION:
	- /donde Calle Gran Vía 23, Madrid

###TAREAS:
-Generar el fichero que gestiona el comando.
-Extraer la dirección del texto
-La librería node-geocoder nos permite recuperar lat y lng a partid de una dirección.
- Con ctx.replyWithLocation ( lat, lng) podemos responder con un mapa interactivo
