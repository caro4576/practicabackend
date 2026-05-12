# Trabajo Integrador 
## Creación de API REST con Express JS

### Prerequisitos

1. Hacer un `git pull` para traer las actualizaciones del repositorio que utilizamos en clase: https://github.com/marcelobettini/GUAMINI-BE-UNTREF.git
2. Si no están usando el repositorio o lo perdieron, pueden hacer un `git clone`

*Ahora tendrán la siguiente estructura:*
- Carpeta 04-practica
- Archivo cities.json conteniendo las localidades de la Provincia de Buenos Aires.

### Instrucciones

- Todas las respuestas deben ser en formato JSON, ya sea que entreguen datos o mensajes.
- Las respuestas que entreguen mensajes deben ser de tipo { status: xxx. messsage: "mensaje informativo", data: "La información solicitada, en caso de que corresponda"}
- Los códigos de estado deben ser acorde a la respuesta, por ejemplo, si el mensaje es "recurso no encontrado" el código de estado no debe ser 200 sino 404.
- Recuerde que Express setea por defecto el estado, si usted desea modificarlo tiene el método .status().
- Para responder con un json debe usar el método .json() de Express JS.
- Si un usuario solicita un recurso y ese recurso no existe, no responda con un objeto vacío o un arreglo vacío y el código de estado 200. Lo correcto es devolver un código de estado 404 y un mensaje del estilo "recurso no encontrado".
- Hemos visto que se puede abrir un archivo .json importándolo directamente en el código, ya que Node JS puede abrirlo y parsearlos automáticamente, pero eso es un atajo. Ahora vamos a cargar los datos del archivo en un arreglo utilizando el módulo `fs` (file system) de Node JS.

---

### Requerimientos

1. Montar un servidor con Express JS.
2. Crear ruta raíz que documente la API, con un resumen del tema que trate y la lista de endpoints. Si hay endpoints que acepten parámetros debe indicar cuáles son. La idea es que quien entre a la ruta raíz sepa cómo usar la API.
3. Ruta /localidades -> lista completa de localidades.
4. Ruta /localidades/:id -> localidad que coincida con un id que se pase por parámetro (utilice parámetro de ruta)
5. Ruta /localidades/buscar -> localidad por nombre (utilice parámetro query)