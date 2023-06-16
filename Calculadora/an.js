function calcularAn(a1, n, razao) {
    const an = a1 + (n - 1) * razao;
  
    // Criar a representação da fórmula
    const formula = `A1 + (n - 1) * r`;
  
    // Criar o passo a passo da resolução
    const steps = [
      `Fórmula: ${formula}`,
      `Substituindo os valores: ${a1} + (${n} - 1) * ${razao}`,
      `Calculando: ${a1} + ${n - 1} * ${razao}`,
      `Calculando: ${a1} + ${(n - 1) * razao}`,
      `Calculando: ${an}`,
    ];
  
    return { an, formula, steps };
  }
  
  document.getElementById("calc-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const form = event.target;
    const a1 = parseFloat(form.a1.value);
    const n = parseFloat(form.n.value);
    const razao = parseFloat(form.r.value);
  
    const { an, formula, steps } = calcularAn(a1, n, razao);
  
    const resultDiv = document.getElementById("calc-result");
    resultDiv.textContent = `O ${n}º termo (An) é ${an}.`;
  
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
  