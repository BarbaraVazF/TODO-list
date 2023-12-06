var lista = window.document.getElementById('listaTarefas');
var tarefas = [];

function exibirLista(tarefa, feita) {
    var novoItem = window.document.createElement('li');
    novoItem.innerHTML = `
    <ul class="itemTarefas">
        <input class="feito" type="checkbox" ${feita ? 'checked' : ''} onchange="atualizarEstado('${tarefa}', this.checked)"> 
        <p class="textoTarefa">${tarefa}</p>
        <button class="buttonExcluir" onclick="apagarTarefa('${tarefa}')"><img class="lixo" src="https://cdn-icons-png.flaticon.com/512/126/126468.png"></button>
    </ul>
    `;
    lista.appendChild(novoItem);
}

function inserirTarefa() {
    var tarefa = window.document.getElementById('textoInserir').value;
    tarefas.push({ descricao: tarefa, feita: false });
    atualizarLista();
    window.document.getElementById('textoInserir').value = '';
}

function atualizarEstado(tarefa, estado) {
    tarefas.forEach(function (item) {
        if (item.descricao === tarefa) {
            item.feita = estado;
        }
    });
    atualizarLista();
}

function atualizarLista() {
    lista.innerHTML = '';
    var mostrarFeitas = document.getElementById('feitas').classList.contains('selecionado');

    tarefas.forEach(function (tarefa) {
        if (mostrarFeitas && tarefa.feita) {
            exibirLista(tarefa.descricao, true);
        } else if (!mostrarFeitas && !tarefa.feita) {
            exibirLista(tarefa.descricao, false);
        }
    });
}

function apagarTarefa(tarefa) {
    tarefas = tarefas.filter(function (item) {
        return item.descricao !== tarefa;
    });
    atualizarLista();
}

document.getElementById('aFazer').addEventListener('click', function () {
    document.getElementById('aFazer').classList.add('selecionado');
    document.getElementById('feitas').classList.remove('selecionado');
    atualizarLista();
});

document.getElementById('feitas').addEventListener('click', function () {
    document.getElementById('feitas').classList.add('selecionado');
    document.getElementById('aFazer').classList.remove('selecionado');
    atualizarLista();
});
