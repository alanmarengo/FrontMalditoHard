# Run App
 
Para levantar la app se debe ejecutar alguna de las siguientes líneas de comando, cada terminación representa un ambiente de desarrollo, dependiendo a qué entorno quieras conectarte.
 
 
`npm run start:local`
 
`npm run start:dev`
 
`npm run start:prod`
 
# Config Enviroment
 
En la carpeta config, se encuentra la configuración, donde se almacenan las variables de entorno, la notación es key=value siempre anteponiendo `REACT_APP_` para que react pueda levantar la config en tiempo de ejecución.
 
#### example:
Archivo .env.local
```
REACT_APP_API_URL=https://localhost:43521/v1
```
Archivo .env.dev
```
REACT_APP_API_URL=https://www.estoesunexample.com.ar/
```
 
Como utilizar las variables en el código:
``` javascript
    env = process.env.REACT_APP_API_URL;
    alert(env);
```
