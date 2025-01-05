// Gravar metas e refeições
let metaDiaria = { proteinas: 0, carboidratos: 0, gorduras: 0 };
let refeicoesDia = [];

// Formulário de meta
document.getElementById("meta-form").addEventListener("submit", (e) => {
  e.preventDefault();
  metaDiaria.proteinas = parseInt(document.getElementById("proteinas").value);
  metaDiaria.carboidratos = parseInt(document.getElementById("carboidratos").value);
  metaDiaria.gorduras = parseInt(document.getElementById("gorduras").value);
  alert("Meta diária definida com sucesso!");
  atualizarGraficoDia();
});

// Formulário de refeição
document.getElementById("refeicao-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const nome = document.getElementById("nome-refeicao").value;
  const proteinas = parseInt(document.getElementById("prot-ref").value);
  const carboidratos = parseInt(document.getElementById("carb-ref").value);
  const gorduras = parseInt(document.getElementById("gord-ref").value);

  refeicoesDia.push({ nome, proteinas, carboidratos, gorduras });
  atualizarTabela();
  atualizarGraficoDia();
});

// Atualizar tabela de refeições
function atualizarTabela() {
  const tbody = document.getElementById("refeicoes-dia").querySelector("tbody");
  tbody.innerHTML = "";
  refeicoesDia.forEach((refeicao) => {
    const row = `<tr>
      <td>${refeicao.nome}</td>
      <td>${refeicao.proteinas}</td>
      <td>${refeicao.carboidratos}</td>
      <td>${refeicao.gorduras}</td>
    </tr>`;
    tbody.innerHTML += row;
  });
}

// Atualizar gráfico do dia
function atualizarGraficoDia() {
  const totals = refeicoesDia.reduce(
    (acc, cur) => {
      acc.proteinas += cur.proteinas;
      acc.carboidratos += cur.carboidratos;
      acc.gorduras += cur.gorduras;
      return acc;
    },
    { proteinas: 0, carboidratos: 0, gorduras: 0 }
  );

  const data = [
    (totals.proteinas / metaDiaria.proteinas) * 100 || 0,
    (totals.carboidratos / metaDiaria.carboidratos) * 100 || 0,
    (totals.gorduras / metaDiaria.gorduras) * 100 || 0,
  ];

  // Configurar gráfico
  new Chart(document.getElementById("grafico-dia"), {
    type: "bar",
    data: {
      labels: ["Proteínas", "Carboidratos", "Gorduras"],
      datasets: [
        {
          label: "Progresso (%)",
          data: data,
          backgroundColor: ["#ff6384", "#36a2eb", "#ffce56"],
        },
      ],
    },
  });
}
