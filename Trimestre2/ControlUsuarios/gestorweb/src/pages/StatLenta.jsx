import { useEffect, useState } from "react";
import { Chart, registerables } from "chart.js";
import { Bar } from 'react-chartjs-2';

Chart.register(...registerables);

export default function StatLenta() {
    const [username, setUsername] = useState("");
    const [fecha, setFecha] = useState("");
    const [valores, setValores] = useState({}); // Inicializa con un objeto vacío
    let [anio, mes] = ['', ''];

    const handleUsername = (e) => {
        setUsername(e.target.value);
    };

    const handleFecha = (e) => {
        setFecha(e.target.value);
    };

    useEffect(() => {
        [anio, mes] = fecha.split('-');
    }, [fecha]);

    const estadisticas = async () => {
        if (username !== "") {
            const headers = {
                Accept: "application/json",
                "Content-Type": "application/json",
            };
            const data = { username, anio, mes };
            await fetch("http://localhost:8085/statLenta.php", {
                method: "POST",
                headers: headers,
                body: JSON.stringify(data),
            })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Fallo en la conexión");
                }
                return response.json();
            })
            .then((data) => {
                setValores(data['result'] || {}); // Actualiza el estado con los nuevos valores, maneja null
            })
            .catch((error) => {
                console.error('Error:', error);
                setValores({}); // Reinicia el estado en caso de error
            });
        } else {
            console.log('No se pudo administrar este usuario');
            setValores({}); // Reinicia el estado si no hay usuario
        }
    };

    // Configuración del gráfico
    const dataChart = {
        labels: ['Promedio', 'Mínimo', 'Máximo'],
        datasets: [
            {
                label: 'Valores',
                data: valores && Object.keys(valores).length > 0 ? [valores.media, valores.min, valores.max] : [0, 0, 0],
                backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)'],
                borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
                borderWidth: 1,
            },
        ],
    };

    return (
        <div className="row form text-center text-white">
            <div className="row m-auto my-5 w-75">
                <div className="mb-3 row col-6 mx-auto">
                    <div className="col-6 p-0">
                        <label htmlFor="username" className="form-label fs-5">Nombre de Usuario</label>
                        <input type="text" className="form-control fs-6" name="username" id="username" aria-describedby="usernameHelp" onChange={handleUsername} required autoComplete="off" />
                    </div>
                    <div className="mb-3 col-6">
                        <label htmlFor="fecha" className="form-label fs-3">Fecha de Estadísticas</label>
                        <input type="month" className="form-control fs-6" name="fecha" id="fecha" aria-describedby="fechaNacHelp" onChange={handleFecha} required autoComplete="off" />
                    </div>
                    <div className="align-self-end col p-0">
                        <button type="button" className="btn btn-info" onClick={estadisticas}>Buscar Estadísticas</button>
                    </div>
                </div>
            </div>
            <div id="mostrarStat" className="d-flex justify-content-center fs-5">
                {valores && Object.keys(valores).length > 0 ? (
                    <Bar data={dataChart} options={{
                        responsive: true,
                        plugins: {
                            legend: {
                                position: 'top',
                            },
                            title: {
                                display: true,
                                text: 'Estadísticas de Lenta',
                            },
                        },
                    }} />
                ) : (
                    <p>No se encontraron estadísticas.</p>
                )}
            </div>
        </div>
    );
}