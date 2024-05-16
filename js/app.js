let amigos = [];

function adicionar(){
    let amigo = document.getElementById('nome-amigo').value.trim();  
    let lista = document.getElementById('lista-amigos');
    
   // Verifica se o campo está vazio (melhoria)
  if (amigo === '') {
    alert('Por favor, insira um nome antes de adicionar à lista.');
    return;
  }
   
    // Verifica se o nome já existe na lista (melhoria)
    if (amigos.includes(amigo)) {
      alert('Este nome já foi adicionado. Por favor, insira um nome diferente.');
      return;
    }
    
    amigos.push(amigo); // Corrigido aqui, removido o .value (melhoria)
    
    // Atualiza o texto da lista na tela (melhoria)
    lista.textContent = amigos.join(', ');
  
    // Limpa o campo de entrada (melhoria)
    document.getElementById('nome-amigo').value = '';
  }

function sortear(){
    if (amigos.length < 4) {
        alert("Adicione pelo menos 4 amigos");
        return;
}
    embaralha (amigos);
    let sorteio = document.getElementById('lista-sorteio');

    for (let i = 0; i < amigos.length; i++){
        if(i == amigos.length -1){
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + '-->' + amigos [0] + '<br>';

        } else {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + '-->' + amigos [i + 1] + '<br>';
        }
        
        
    }

}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar(){
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';

}