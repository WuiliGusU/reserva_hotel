import React, { useState } from 'react';
import axios from 'axios';

const FormularioReserva = ({ fetchReservas }) => {
    const [nombreCliente, setNombreCliente] = useState('');
    const [fechaInicio, setFechaInicio] = useState('');
    const [fechaFin, setFechaFin] = useState('');
    const [tipoHabitacion, setTipoHabitacion] = useState('Sencilla');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8080/reservas', {
                nombreCliente,
                fechaInicio,
                fechaFin,
                tipoHabitacion,
            });
            fetchReservas();
            setNombreCliente('');
            setFechaInicio('');
            setFechaFin('');
            setTipoHabitacion('Sencilla');
        } catch (error) {
            console.error('Error al registrar la reserva', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Registrar Reserva</h2>
            <div>
                <label>Nombre del Cliente:</label>
                <input
                    type="text"
                    value={nombreCliente}
                    onChange={(e) => setNombreCliente(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Fecha de Inicio:</label>
                <input
                    type="date"
                    value={fechaInicio}
                    onChange={(e) => setFechaInicio(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Fecha de Fin:</label>
                <input
                    type="date"
                    value={fechaFin}
                    onChange={(e) => setFechaFin(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Tipo de Habitación:</label>
                <select
                    value={tipoHabitacion}
                    onChange={(e) => setTipoHabitacion(e.target.value)}
                >
                    <option value="Sencilla">Sencilla</option>
                    <option value="Doble">Doble</option>
                    <option value="Suite">Suite</option>
                </select>
            </div>
            <button type="submit">Registrar</button>
        </form>
    );
};

export default FormularioReserva;
