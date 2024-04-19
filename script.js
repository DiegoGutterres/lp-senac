let button = document.getElementById("handleSubmit");


button.onclick = async function(event) {
    event.preventDefault();
    
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let telefone = document.getElementById("number").value;
    let data_nascimento = document.getElementById("data_nascimento").value;
    let cpf_cnpj = document.getElementById("cpf_cnpj").value;
    let valor_investimento = document.getElementById("valor_investimento").value;

    let data = {name, email, telefone, data_nascimento, cpf_cnpj, valor_investimento}

    const response = await fetch('http://localhost:3003/api/store/post/', {
        method: "POST",
        headers: {"Content-type": "application/json;charset=UTF-8"},
        body: JSON.stringify(data)
    });

    // let content = await response.json();
    // if(content.sucess) {
    //     alert("sucesso")
    // } else {
    //     alert('nao')
    // }
}

let queroMaisInfo = document.getElementById('goto');

queroMaisInfo.addEventListener('click', () => {
    let destino = document.getElementById('destino')
    destino.scrollIntoView({
        behavior: 'smooth'
    })

});

let queroMaisInfo2 = document.getElementById('goto2');

queroMaisInfo2.addEventListener('click', () => {
    let destino2 = document.getElementById('destino2')
    destino2.scrollIntoView({
        behavior: 'smooth'
    })

});

