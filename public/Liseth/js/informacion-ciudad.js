// Datos de la sede
const sedeData = {
    numeroSede: "32081239129",
    email: "gerBucara@gmail.com",
    mejorArea: "Innovación",
    retosActuales: 300,
    numeroPromotores: 24,
    promedioRetos: "Media"
};

// Datos de la tabla
const tableData = [
    { nombre: "Luis Carlos", area: "Innovación", fecha: "10/09/2024", status: "Reciente" },
    { nombre: "Luz Marina", area: "Producción", fecha: "07/09/2024", status: "Reciente" },
    { nombre: "Pedro Casas", area: "Finanzas", fecha: "11/08/2024", status: "Antiguo" },
    { nombre: "Sandra Milena", area: "Producción", fecha: "05/07/2024", status: "Antiguo" },
    { nombre: "Carlos Alberto", area: "Innovación", fecha: "10/06/2024", status: "Reciente" }
];

// Datos estáticos para el gráfico
const chartData = {
    labels: ['Retos Recientes', 'Retos Antiguos', 'Retos En Proceso'],
    data: [30, 20, 50] 
};

// Función para crear el gráfico
function createChart() {
    const ctx = document.getElementById('myChart').getContext('2d');
    new Chart(ctx, {
        type: 'doughnut', // 'doughnut' crea un gráfico de anillo
        data: {
            labels: chartData.labels,
            datasets: [{
                label: 'Estadísticas',
                data: chartData.data,
                backgroundColor: [
                    'rgba(93, 95, 239, 0.2)', // iris-100
                    'rgba(120, 121, 241, 0.2)', // iris-80
                    'rgba(206, 24, 24, 0.2)' // rojo para el tercer color
                ],
                borderColor: [
                    'rgba(93, 95, 239, 1)', // iris-100
                    'rgba(120, 121, 241, 1)', // iris-80
                    'rgba(206, 24, 24, 1)' // rojo para el tercer color
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true, 
            plugins: {
                legend: {
                    position: 'top',
                }
            }
        }
    });
}


// Función para cargar los datos
function cargarDatos() {
    // Cargar los datos de la sede
    document.getElementById('sede-number').innerText = sedeData.numeroSede;
    document.getElementById('sede-email').innerText = sedeData.email;
    document.getElementById('mejor-area').innerText = sedeData.mejorArea;
    document.getElementById('retos-sede').innerText = sedeData.retosActuales;
    document.getElementById('numero-promotores').innerText = sedeData.numeroPromotores;
    document.getElementById('promedio-retos').innerText = sedeData.promedioRetos;

    // Cargar los datos en la tabla
    const tbody = document.getElementById('data-table');
    tableData.forEach(({ nombre, area, fecha, status }) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${nombre}</td>
            <td>${area}</td>
            <td>${fecha}</td>
            <td><span class="${status.toLowerCase()}">${status}</span></td>
        `;
        tbody.appendChild(row);
    });
}

// Llamar a la función para crear el gráfico y cargar los datos
document.addEventListener("DOMContentLoaded", () => {
    createChart();
    cargarDatos();
});
