var lista = window.document.getElementById('listaTarefas')
var tarefas = []

function exibirLista(tarefa) {
    var novoItem = window.document.createElement('li');
    novoItem.innerHTML = `
    <ul class="itemTarefas">
        <input class="feito" type="checkbox"> 
        ${tarefa}
        <button class="buttonExcluir"><img class="lixo" src="https://cdn-icons-png.flaticon.com/512/126/126468.png"></button>
    </ul>
    `
    lista.appendChild(novoItem);
}

function inserirTarefa() {
    var tarefa = window.document.getElementById('textoInserir').value;
    tarefas.push(tarefa);
    exibirLista(tarefa);
    window.document.getElementById('textoInserir').value = ''
}

function atualizarTabela() {
    tabela.innerHTML = '';
    tarefas.forEach(exibirLista);
}