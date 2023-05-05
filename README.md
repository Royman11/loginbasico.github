# loginbasico.github
Login básico 
UNIVERSIDAD AUTÓNOMA DEL CARIBE
ALGORITMIA Y PROGRAMACIÓN
DOCENTE:
RICARDON MARÍN
LOGIN CREADO POR:
AMAYA PADILLA DANNER MANUEL
BARRAZA MANGA TANIA MERCEDES
HERRERA FLOREZ ROYMAN JESÚS
Iniciaremos con adjuntar el código HTML que utilizamos para crear lo que se nos asignó.
<!DOCTYPE html>
<html lang="en">
<head>
 <meta charset="UTF-8">
 <title>LOGIN</title>
 <meta name="viewport" content="width=device-width, initial-scale=1">
 <link rel="stylesheet"
href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
 <link rel="stylesheet" href="style.css">
</head>
<body>
 <div class="container mt-5">
 <div class="row justify-content-center">
 <div class="col-lg-4">
 <h2 class="mb-3">LOGIN</h2>
 <form action="/login" method="POST">
 <div class="form-group">
 <label for="username">Usuario:</label>
 <input type="text" class="form-control" id="username" name="username"
required>
 </div>
 <div class="form-group">
 <label for="password">Contraseña:</label>
 <input type="password" class="form-control" id="password"
name="password" required>
 </div>
 <button type="submit" class="btn btn-primary">Login</button>
 </form>
 </div>
 </div>
 </div>
 <script
src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
 <script
src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></s
cript>
 <script
src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script
>
</body>
</html>
A continuación, explicamos brevemente c/u de las partes de nuestro código:
Este código es una página web de inicio de sesión simple que utiliza Bootstrap
para el diseño y jQuery para algunas funciones.
1. En el encabezado del documento HTML, se especifica la codificación del
documento, el título de la página y la meta etiqueta para la visualización en
dispositivos móviles. También se enlaza el archivo de hojas de estilo CSS de
Bootstrap y un archivo de estilo personalizado llamado "style.css".
2. En el cuerpo del documento HTML, se encuentra el formulario de inicio de
sesión que se divide en dos campos de entrada para el nombre de usuario y la
contraseña, y un botón para enviar la información del formulario.
3. Para el formulario, se usa el atributo "action" para especificar la ruta a la que se
enviará la información del formulario cuando se envíe. En este caso, se enviará a
"/login" a través del método POST.
4. Para los campos de entrada, se utiliza la etiqueta "label" para proporcionar una
etiqueta legible para cada campo, y se utiliza la etiqueta "input" para permitir la
entrada del usuario. Además, se agrega el atributo "required" para garantizar que
el usuario complete ambos campos antes de enviar el formulario.
5. Para el botón de envío, se utiliza la etiqueta "button" con el atributo "type"
establecido en "submit" para permitir que el usuario envíe el formulario.
6. En la parte inferior del cuerpo del documento HTML, se enlazan los archivos de
script de jQuery y Bootstrap, que se utilizan para agregar funcionalidad a la página
web.
En resumen, este código utiliza HTML para crear la estructura de la página web,
Bootstrap para dar estilo y diseño a los elementos de la página, y jQuery para
agregar interactividad y funcionalidad a la página.
Seguimos con nuestro código CSS:
body {
 background-color: #000;
}
.container {
 background-color: rgba(255, 255, 255, 0.1);
 padding: 30px;
 border-radius: 10px;
 box-shadow: 0 0 20px rgba(0, 255, 0, 0.5);
}
h2 {
 color: #fff;
 text-align: center;
 text-shadow: 0 0 20px rgba(0, 255, 0, 0.5);
}
label {
 color: #fff;
 text-shadow: 0 0 20px rgba(0, 255, 0, 0.5);
}
input[type="text"], input[type="password"] {
 background-color: rgba(255, 255, 255, 0.2);
 border: none;
 border-radius: 20px;
 padding: 10px 20px;
 color: #fff;
 text-shadow: 0 0 20px rgba(0, 255, 0, 0.5);
}
button[type="submit"] {
 background-color: #0f0;
 border: none;
 border-radius: 20px;
 padding: 10px 20px;
 color: #000;
 text-shadow: 0 0 20px rgba(0, 255, 0, 0.5);
 box-shadow: 0 0 20px rgba(0, 255, 0, 0.5);
}
button[type="submit"]:hover {
 background-color: #00ff00;
 color: #000;
}
Explicamos nuestro código:
El código CSS proporcionado es un conjunto de reglas de estilo que se aplican a
los elementos HTML en la página.
- `body`: Se establece el color de fondo de la página en negro.
- `.container`: Se establece el color de fondo del contenedor en blanco
transparente con un valor de opacidad de 0.1. También se establece el relleno del
contenedor, el radio de borde y la sombra del cuadro.
- `h2`: Se establece el color de texto del encabezado en blanco y el sombreado de
texto.
- `label`: Se establece el color de texto de la etiqueta en blanco y el sombreado de
texto.
- `input[type="text"], input[type="password"]`: Se establece el color de fondo del
campo de entrada de texto en blanco transparente con un valor de opacidad de
0.2. También se establece el borde, el radio de borde, el relleno, el color de texto y
el sombreado de texto.
- `button[type="submit"]`: Se establece el color de fondo y el borde del botón en
verde, el radio de borde, el relleno, el color de texto y el sombreado de texto y el
sombreado del cuadro.
- `button[type="submit"]:hover`: Se establece el color de fondo y el color de texto
del botón al pasar el mouse por encima.
Se utilizaron las siguientes propiedades CSS en este código:
- `background-color`: Establece el color de fondo de un elemento.
- `color`: Establece el color de texto de un elemento.
- `border`: Establece el borde de un elemento.
- `border-radius`: Establece el radio de borde de un elemento.
- `padding`: Establece el relleno interno de un elemento.
- `text-shadow`: Establece el sombreado de texto de un elemento.
- `box-shadow`: Establece la sombra de caja de un elemento.
- `opacity`: Establece la opacidad de un elemento.
En general, el código CSS proporcionado se utiliza para aplicar un estilo visual a la
página de inicio de sesión. El estilo se basa en una combinación de colores verdes
y negros, con sombras y opacidad para crear un efecto visual atractivo y legible.
Adjuntamos código JavaScript:
Este código implementa una funcionalidad de inicio de sesión utilizando JavaScript
y la API Fetch. A continuación, se explica cada parte del código:
1. Primero se selecciona el elemento 'form' en la página HTML y se almacena en
la variable 'form'.
const form = document.querySelector('form');
2. A continuación, se agrega un evento de escucha al formulario que se activará
cuando se envíe el formulario.
form.addEventListener('submit', (event) => {
3. El evento de envío de formulario predeterminado se cancela para que el
formulario no se envíe inmediatamente.
event.preventDefault();
4. Se recuperan los valores de entrada de usuario y contraseña del formulario y se
almacenan en las variables 'username' y 'password', respectivamente.
const username = document.getElementById('username').value;
const password = document.getElementById('password').value;
5. Se realiza una verificación para asegurarse de que se ingresaron valores
válidos en los campos de entrada. Si alguno de los valores está vacío después de
eliminar espacios en blanco, se muestra una alerta y se sale de la función.
if (username.trim() === '' || password.trim() === '') {
 alert('Por favor ingrese un usuario y una contraseña válidos');
 return;
}
6. Se envía una solicitud POST al servidor en la ruta '/login' utilizando la función
fetch(). Se proporciona un objeto de opciones que incluye el método de solicitud,
los datos que se envían y el tipo de contenido.
fetch('/login', {
method: 'POST',
 body: JSON.stringify({
 username,
 password
 }),
 headers: {
 'Content-Type': 'application/json'
 }
})
7. Si la respuesta del servidor no es correcta, se lanza una excepción y se muestra
una alerta de error.
.then(response => {
 if (!response.ok) {
 throw new Error('Credenciales inválidas');
 }
 window.location.href = '/inicio';
})
.catch(error => {
 alert(error.message);
});
8. Finalmente, se agrega un evento de escucha para cuando la página se cargue
por completo. Cuando esto sucede, se enfoca el campo de entrada de usuario
para que el usuario pueda comenzar a escribir de inmediato.
window.addEventListener('load', () => {
 document.getElementById('username').focus();
});
