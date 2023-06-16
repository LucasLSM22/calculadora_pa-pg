function calcularSoma(a1, an, n) {
    const soma = (a1 * (Math.pow(an / a1, n) - 1)) / (an / a1 - 1);
  
    // Criar a representação da fórmula
    const formula = `(A1 * ((An / A1)^n - 1)) / (An / A1 - 1)`;
  
    // Criar o passo a passo da resolução
    const steps = [
      `Fórmula: ${formula}`,
      `Substituindo os valores: (${a1} * ((${an} / ${a1})^${n} - 1)) / (${an} / ${a1} - 1)`,
      `Calculando: (${a1} * (${Math.pow(an / a1, n)} - 1)) / (${an / a1} - 1)`,
      `Calculando: ${soma}`,
    ];
  
    return { soma, formula, steps };
  }
  
  document.getElementById("calc-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const form = event.target;
    const a1 = parseFloat(form.a1.value);
    const an = parseFloat(form.an.value);
    const n = parseFloat(form.n.value);
  
    const { soma, formula, steps } = calcularSoma(a1, an, n);
  
    const resultDiv = document.getElementById("calc-result");
    resultDiv.textContent = `A soma dos termos é ${soma}.`;
  
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
  