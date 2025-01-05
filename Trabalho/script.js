// Configuração inicial do gráfico de nutrientes
const ctx = document.getElementById('grafico-nutrientes').getContext('2d');
const graficoNutrientes = new Chart(ctx, {
  type: 'bar', // Tipo de gráfico
  data: {
    labels: ['Proteínas', 'Carboidratos', 'Gorduras'], // Eixos X
    datasets: [{
      label: 'Gramas Consumidas',
      data: [95, 140, 35], // Dados de exemplo
      backgroundColor: [
        'rgba(75, 192, 192, 0.8)', // Proteínas
        'rgba(255, 159, 64, 0.8)', // Carboidratos
        'rgba(153, 102, 255, 0.8)' // Gorduras
      ],
      borderColor: [
        'rgba(75, 192, 192, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(153, 102, 255, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
