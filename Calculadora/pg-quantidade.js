function calcularQuantidade(a1, an, r) {
    const n = Math.log(an / a1) / Math.log(r) + 1;
  
    // Criar a representação da fórmula
    const formula = `log(An / A1) / log(r) + 1`;
  
    // Criar o passo a passo da resolução
    const steps = [
      `Fórmula: ${formula}`,
      `Substituindo os valores: log(${an} / ${a1}) / log(${r}) + 1`,
      `Calculando: log(${an / a1}) / log(${r}) + 1`,
      `Calculando: ${Math.log(an / a1) / Math.log(r) + 1}`,
    ];
  
    return { n, formula, steps };
  }
  
  document.getElementById("calc-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const form = event.target;
    const a1 = parseFloat(form.a1.value);
    const an = parseFloat(form.an.value);
    const r = parseFloat(form.r.value);
  
    const { n, formula, steps } = calcularQuantidade(a1, an, r);
  
    const resultDiv = document.getElementById("calc-result");
    resultDiv.textContent = `A quantidade de termos (n) é ${n}.`;
  
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
  