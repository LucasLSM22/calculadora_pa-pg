function calcularQuantidade(a1, an, razao) {
    const n = Math.ceil((an - a1 + razao) / razao);
  
    // Criar a representação da fórmula
    const formula = `(An - A1 + r) / r`;
  
    // Criar o passo a passo da resolução
    const steps = [
      `Fórmula: ${formula}`,
      `Substituindo os valores: (${an} - ${a1} + ${razao}) / ${razao}`,
      `Calculando: (${an - a1 + razao}) / ${razao}`,
      `Calculando: ${(an - a1 + razao) / razao}`,
      `Arredondando para cima: ${n}`,
    ];
  
    return { n, formula, steps };
  }
  
  document.getElementById("calc-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const form = event.target;
    const a1 = parseFloat(form.a1.value);
    const an = parseFloat(form.an.value);
    const razao = parseFloat(form.r.value);
  
    const { n, formula, steps } = calcularQuantidade(a1, an, razao);
  
    const resultDiv = document.getElementById("calc-result");
    resultDiv.textContent = `A quantidade de termos é ${n}.`;
  
    const stepsDiv = document.getElementById("calculation-steps");
    stepsDiv.innerHTML = `
      <h3>Fórmula utilizada:</h3>
      <p>${formula}</p>
      <h3>Passo a passo da resolução:</h3>
      <ol>
        ${steps.map(step => `<li>${step}</li>`).join("")}
      </ol>
    `;
  });
  