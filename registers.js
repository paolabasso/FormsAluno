let registers = [];

function addRegistroTabela() {
  const linhaTabela = document.createElement('tr');
  let colunas = `
    <td>${identificacao.aluno}</td>
    <td>${identificacao.disciplina}</td>`;

  identificacao.notas.forEach(nota => {
    colunas += `<td>${nota}</td>`;
  });

  colunas += `
    <td>${identificacao.media}</td>
    <td>${identificacao.resultado}</td>
    `;

  linhaTabela.innerHTML = colunas;
  document.querySelector('.body-table').appendChild(linhaTabela);
}
