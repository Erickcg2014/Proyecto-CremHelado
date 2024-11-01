// Inicializar el mapa de Leaflet
document.addEventListener("DOMContentLoaded", function () {
    var map = L.map('map').setView([4.710989, -74.072092], 6); // Centrado en Colombia (lat, lng, zoom)

    // Cargar capas de OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Marcar las sedes activas (puedes modificar las coordenadas y mensajes)
    var marker1 = L.marker([7.119349, -73.122741]).addTo(map).bindPopup('Sede Bucaramanga');
    var marker2 = L.marker([4.7110, -74.0721]).addTo(map).bindPopup('Sede Bogotá');
    var marker3 = L.marker([7.8891, -72.4967]).addTo(map).bindPopup('Sede Cúcuta');
});

document.addEventListener('DOMContentLoaded', () => {
    const ctx = document.getElementById('myChart').getContext('2d');

    if (!ctx) {
        console.error('No se pudo obtener el contexto del gráfico');
        return;
    }

    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
            datasets: [{
                label: 'Estadísticas de ventas',
                data: [120, 190, 30, 50, 200, 300],
                backgroundColor: 'rgba(93, 95, 239, 0.2)',
                borderColor: 'rgba(93, 95, 239, 1)',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true, 
        maintainAspectRatio: false, 
        }
    });
});
