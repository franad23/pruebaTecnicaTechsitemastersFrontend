# Prueba Técnica TechSiteMaster

Este proyecto contiene el frontend de la prueba tecnica de TechsiteMaster.

## Objetivo: Validar conocimientos en NODEJS - REACT 

- Frontend se debe utilizar Angular versión 10 o superior o React versión 16 o
superior.
- Backend se debe utilizar Node v12 o superior.
- Manejador de Base de datos mongodb 4.4 o superior.
- Partiendo de la siguiente estructura de tabla en BD
personas:{
nombre: string,
apellido: string,
fecha_nacimiento: date,
telefono: string,
email: string
}

## Ejercicio 1. Desarrollar en el frontend 2 páginas

- Página 1: Formulario de Creación de Personas (Solo alta)
Todos los siguientes campos deben ser obligatorios en el formulario.
➔ nombre
➔ apellido
➔ fecha_nacimiento
➔ teléfono
➔ email

- Página 2: Dividir en dos columnas.
<div class="row">
<div class="col-md-8">.col-md-8</div>
<div class="col-md-4">.col-md-4</div>
</div>
○ Columna 1 -> Listado de personas, donde se podrán eliminar uno a uno
todas las personas creadas, columnas del listado (nombre, apellido,
fecha_nacimiento, teléfono, email).
○ Columna 2 -> Gráfica por edades donde existirán 3 rangos o valores
(Personas de menores de 30 años, Personas de 31 a 60 años y Personas
mayores de 60 años)

## Ejercicio 2. Desarrollar en node js

- Sistema de apis necesarias y conexión con la bbdd para para la creación, listado y
eliminación de personas.

## Ejercicio 3. -Validación

- Validar tanto en el frontend como en el backend que el correo introducido para cada
persona tenga el formato correcto de email.
