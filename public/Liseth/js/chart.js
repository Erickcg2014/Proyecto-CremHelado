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
