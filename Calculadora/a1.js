function calcularA1(an, n, razao) {
    const a1 = an - (n - 1) * razao;
  
    // Criar a representação da fórmula
    const formula = `An - (n - 1) * r`;
  
    // Criar o passo a passo da resolução
    const steps = [
      `Fórmula: ${formula}`,
      `Substituindo os valores: ${an} - (${n} - 1) * ${razao}`,
      `Calculando: ${an} - ${n - 1} * ${razao}`,
      `Calculando: ${an} - ${(n - 1) * razao}`,
      `Calculando: ${a1}`,
    ];
  
    return { a1, formula, steps };
  }
  
  document.getElementById("calc-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const form = event.target;
    const an = parseFloat(form.an.value);
    const n = parseFloat(form.n.value);
    const razao = parseFloat(form.r.value);
  
    const { a1, formula, steps } = calcularA1(an, n, razao);
  
    const resultDiv = document.getElementById("calc-result");
    resultDiv.textContent = `O primeiro termo (A1) é ${a1}.`;
  
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
  