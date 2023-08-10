//função para carregar a lista do localStorage
function loadList() {
    const bloco = document.getElementById('list');
    let list = JSON.parse(localStorage.getItem('TDL') || '[]');
    bloco.innerHTML = '';
    list.forEach(item => {
        bloco.innerHTML += `<li>${item}<button class="ok" data-task='${item}'"><i class="bi bi-check-lg"></i></button> </li>`;
    });

    const btns = document.querySelectorAll('.ok');
    btns.forEach(button => {
        button.addEventListener('click', removeTask);
    });
}

//função que adiciona a task ao localStorage
function newTask() {
    const inputValue = document.getElementById('input-new');
    const taskValue = inputValue.value.trim();

    //validação - se ja contem, se o campo esta vazio
    if (taskValue) {
        let list = JSON.parse(localStorage.getItem('TDL') || '[]');
        if (!list.includes(taskValue)) {
            list.push(taskValue);
            localStorage.setItem('TDL', JSON.stringify(list));
            loadList();
            inputValue.value = '';
        } else {
            alert('Essa task ja existe na lista!');
        }
    } else {
        alert('Digite algo!');
    }
}

//função para remover task concluida
function removeTask(data) {
    let list = JSON.parse(localStorage.getItem('TDL',) || '[]');
    let dell = null;
    list.forEach((item, index) => {
        if (item === index) {
            dell = index;
        }
    });
    list.splice(dell, 1);
    localStorage.setItem('TDL', JSON.stringify(list));
    loadList()
}

//chamar a função que carrega os itens 
loadList();
