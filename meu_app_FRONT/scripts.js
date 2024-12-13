/*
  --------------------------------------------------------------------------------------
  Função para obter a lista existente do servidor via requisição GET
  --------------------------------------------------------------------------------------
*/
const getList = async () => {
  let url = 'http://127.0.0.1:5000/funcionarios';
  fetch(url, {
    method: 'get',
  })
    .then((response) => response.json())
    .then((data) => {
      data.funcionarios.forEach(item => insertList(item.nome, item.venda, item.porcentagem, item.comissao))
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

/*
  --------------------------------------------------------------------------------------
  Chamada da função para carregamento inicial dos dados
  --------------------------------------------------------------------------------------
*/
getList()


/*
  --------------------------------------------------------------------------------------
  Função para colocar um item na lista do servidor via requisição POST
  --------------------------------------------------------------------------------------
*/
const postItem = async (inputFuncionario, inputVenda, inputPorcentagem) => {
  const formData = new FormData();
  formData.append('nome', inputFuncionario);
  formData.append('venda', inputVenda);
  formData.append('porcentagem', inputPorcentagem);
  

  let url = 'http://127.0.0.1:5000/funcionario';
  fetch(url, {
    method: 'post',
    body: formData
  })
    .then((response) => response.json())
    .catch((error) => {
      console.error('Error:', error);
    });
}


/*
  --------------------------------------------------------------------------------------
  Função para criar um botão close para cada item da lista
  --------------------------------------------------------------------------------------
*/
const insertButton = (parent) => {
  let span = document.createElement("span");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  parent.appendChild(span);
}


/*
  --------------------------------------------------------------------------------------
  Função para remover um item da lista de acordo com o click no botão close
  --------------------------------------------------------------------------------------
*/
const removeElement = () => {
  let close = document.getElementsByClassName("close");
  let i;
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      let div = this.parentElement.parentElement;
      const nomeItem = div.getElementsByTagName('td')[0].innerHTML
      if (confirm("Você tem certeza?")) {
        div.remove()
        deleteItem(nomeItem)
        alert("Removido!")
      }
    }
  }
}

/*
  --------------------------------------------------------------------------------------
  Função para deletar um item da lista do servidor via requisição DELETE
  --------------------------------------------------------------------------------------
*/
const deleteItem = (item) => {
  console.log(item)
  let url = 'http://127.0.0.1:5000/funcionario?nome=' + item;
  fetch(url, {
    method: 'delete'
  })
    .then((response) => response.json())
    .catch((error) => {
      console.error('Error:', error);
    });
}

/*
  --------------------------------------------------------------------------------------
  Função para adicionar um novo item com nome, venda e porcentagem  
  --------------------------------------------------------------------------------------
*/
const newItem = () => {
  let inputFuncionario = document.getElementById("novoFuncionario").value; //nome
  let inputVenda = document.getElementById("novaVenda").value; //vendas
  let inputPorcentagem = document.getElementById("novaPorcentagem").value; //porcentagem
  

  if (inputFuncionario === '') {
    alert("Escreva o nome de um item!");
  } else if (isNaN(inputVenda) || isNaN(inputPorcentagem)) {
    alert("Salário e porcentagem precisam ser números!");
  } else {
    insertList(inputFuncionario,inputVenda, inputPorcentagem)
    postItem(inputFuncionario, inputVenda, inputPorcentagem)
    alert("Item adicionado!")
  }
}

/*
  --------------------------------------------------------------------------------------
  Função para inserir items na lista apresentada
  --------------------------------------------------------------------------------------
*/
const insertList = (nome, venda, porcentagem, comissao) => {
  var item = [nome, venda, porcentagem , comissao]
  var table = document.getElementById('myTable');
  var row = table.insertRow();

  for (var i = 0; i < item.length; i++) {
    var cel = row.insertCell(i);
    cel.textContent = item[i];
  }
  insertButton(row.insertCell(-1))
  document.getElementById("novoFuncionario").value = "";
  document.getElementById("novaVenda").value = "";
  document.getElementById("novaPorcentagem").value = "";

  removeElement()
}

// 