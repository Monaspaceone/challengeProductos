Proyecto de API de Gestión de Productos
Este proyecto es una API básica para gestionar productos, utilizando Node.js y Express. Permite crear, obtener y eliminar productos. La API se ha diseñado para ser utilizada en el lado del cliente, donde los datos de productos son administrados en una interfaz simple. En este proyecto, no se utiliza una base de datos, ya que la funcionalidad de almacenamiento es simulada.

Características
Obtener productos: La API permite obtener la lista de productos disponibles (simulada).
Agregar productos: La API permite agregar un nuevo producto a la lista (en el lado del cliente).
Eliminar productos: La API permite eliminar un producto específico (simulado).
Estructura del proyecto
php

proyecto
│
├ public/                   # Carpeta con archivos estáticos como HTML, CSS y JavaScript
│    index.html            # Archivo HTML principal que sirve de interfaz de usuario
│
├src/
│   server.js             # Archivo principal del servidor
│
├README.md                 # Documentación del proyecto
└package.json              # Archivo de configuración del proyecto Node.js
Archivos principales
server.js: Archivo principal del servidor que configura la API utilizando Express.
index.html (en la carpeta public): Interfaz de usuario donde el cliente puede interactuar con la API.
Configuración e instalación
Clona este repositorio en tu computadora local.

Asegúrate de tener Node.js instalado en tu sistema.

Navega hasta la carpeta del proyecto y ejecuta el siguiente comando para instalar las dependencias:

bash
Copiar código
npm install
Inicia el servidor con el comando:

bash
Copiar código
node src/server.js
Abre tu navegador y navega a http://localhost:3000 para ver la interfaz de usuario y comenzar a interactuar con la API.

Descripción de endpoints de la API
GET /api/productos
Obtiene la lista de productos disponibles (actualmente vacía ya que los productos no se almacenan).

Método: GET
Respuesta:
200 OK: Devuelve un array vacío en formato JSON [].
POST /api/productos
Permite agregar un nuevo producto. Los datos se envían en formato JSON.

Método: POST
Parámetros en el cuerpo de la solicitud:
nombre (string) - Nombre del producto.
precio (number) - Precio del producto.
imagen (string) - URL o base64 de la imagen del producto.
Respuesta:
201 Created: Devuelve el producto recién creado.
400 Bad Request: Devuelve un mensaje de error si faltan datos.
DELETE /api/productos/:id
Permite eliminar un producto específico mediante su id.

Método: DELETE
Parámetro en la URL:
id (string) - ID del producto que se desea eliminar.
Respuesta:
204 No Content: La eliminación se realiza correctamente.
400 Bad Request: Devuelve un mensaje de error si falta el ID.
Tecnologías utilizadas
Node.js: Entorno de ejecución para JavaScript en el servidor.
Express: Framework web para construir la API.
HTML/CSS/JavaScript: Interfaz de usuario en el lado del cliente.
Código CSS para diseño y estilos
Los estilos CSS se encuentran en el archivo principal de la interfaz de usuario y configuran los elementos visuales de la página, incluyendo formularios, contenedores y botones. El diseño también es responsive.

Notas importantes
La funcionalidad de obtener, agregar y eliminar productos es simulada. Actualmente, no se guarda información en una base de datos.
Error Handling: Se utilizan bloques try-catch en los endpoints de la API para manejar errores de manera segura y evitar que el servidor falle ante solicitudes malformadas.
Mejoras futuras
Agregar una base de datos: Implementar una base de datos como MongoDB o MySQL para almacenar los productos de manera persistente.
Validación adicional: Ampliar la validación de entradas para garantizar que los datos sean correctos y completos.
Autenticación: Añadir autenticación y autorización para mejorar la seguridad de la API.
