function calcularRazao(a1, an, n) {
    const razao = Math.pow(an / a1, 1 / (n - 1));
  
    // Criar a representação da fórmula
    const formula = `(An / A1)^(1/(n-1))`;
  
    // Criar o passo a passo da resolução
    const steps = [
      `Fórmula: ${formula}`,
      `Substituindo os valores: (${an} / ${a1})^(1/(${n} - 1))`,
      `Calculando: (${an / a1})^(1/(${n} - 1))`,
      `Calculando: ${razao}`,
    ];
  
    return { razao, formula, steps };
  }
  
  document.getElementById("calc-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const form = event.target;
    const a1 = parseFloat(form.a1.value);
    const an = parseFloat(form.an.value);
    const n = parseFloat(form.n.value);
  
    const { razao, formula, steps } = calcularRazao(a1, an, n);
  
    const resultDiv = document.getElementById("calc-result");
    resultDiv.textContent = `A razão (r) é ${razao}.`;
  
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
  