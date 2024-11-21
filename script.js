// Chart Data
const ctx = document.getElementById('chart1').getContext('2d');
const chart1 = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['FYTD', 'Jul24', 'Aug24', 'Sep24'],
        datasets: [
            {
                label: 'Injury Frequency Rate',
                data: [5.46, 6.91, 7.08, 7.06],
                backgroundColor: '#ff6600',
            },
            {
                label: 'Serious Injury Frequency Rate',
                data: [1.71, 1.79, 1.96, 1.79],
                backgroundColor: '#cc0000',
            }
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
        },
    },
});
