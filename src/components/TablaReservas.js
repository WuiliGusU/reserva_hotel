import React from 'react';
import axios from 'axios';

const TablaReservas = ({ reservas, fetchReservas }) => {
    const cancelarReserva = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/reservas/${id}`);
            fetchReservas(); // Actualiza la lista de reservas después de eliminar una
        } catch (error) {
            console.error('Error al cancelar la reserva', error);
        }
    };

    return (
        <div>
            <h2>Lista de Reservas</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre Cliente</th>
                        <th>Fecha Inicio</th>
                        <th>Fecha Fin</th>
                        <th>Tipo Habitación</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {reservas.map((reserva) => (
                        <tr key={reserva.id}>
                            <td>{reserva.id}</td>
                            <td>{reserva.nombreCliente}</td>
                            <td>{reserva.fechaInicio}</td>
                            <td>{reserva.fechaFin}</td>
                            <td>{reserva.tipoHabitacion}</td>
                            <td>
                                <button onClick={() => cancelarReserva(reserva.id)}>Cancelar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TablaReservas;
