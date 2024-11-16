# Sistema de Gestión de Reservas de Habitaciones de un Hotel

Este proyecto consiste en un sistema de gestión de reservas para un hotel. El sistema permite registrar nuevas reservas, listar reservas existentes, actualizar fechas de reserva y cancelar reservas. Se utiliza un backend desarrollado en Java con Spring Framework, una base de datos MySQL y un frontend en React.

## Funcionalidades

El sistema incluye las siguientes funcionalidades:

1. **Registrar una nueva reserva**:
   - Nombre del cliente
   - Fecha de inicio y fecha de fin de la reserva
   - Tipo de habitación (Sencilla, Doble, Suite)

2. **Listar todas las reservas**:
   - Muestra el cliente, las fechas de reserva y el tipo de habitación.

3. **Actualizar fechas de una reserva**:
   - Permite modificar las fechas de una reserva existente.

4. **Cancelar una reserva**:
   - Elimina una reserva de la base de datos.

## Requerimientos Técnicos

### Backend
- **Lenguaje**: Java 17 o superior
- **Framework**: Spring Framework
- **API**: RESTful con operaciones CRUD para manejar las reservas
- **Base de Datos**: MySQL
  - Base de datos llamada `hotel_reservas`
  - Tabla `reservas` con las siguientes columnas:
    - `id` (Entero, clave primaria, auto-incremental)
    - `nombre_cliente` (Texto, no nulo)
    - `fecha_inicio` (Fecha, no nulo)
    - `fecha_fin` (Fecha, no nulo)
    - `tipo_habitacion` (Texto, no nulo)

### Frontend
- **Framework**: React
- **Funciones**:
  - Formulario para registrar reservas
  - Tabla para listar todas las reservas
  - Botones para actualizar fechas y cancelar reservas

