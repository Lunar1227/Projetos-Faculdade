document.getElementById('formulariologin').addEventListener('submit'), function(event){
    event.preventDefault();//Impede o envio do formulário

    const usuario = document.getElementById('usuario').value.trim();
    const senha = document.getElementById('senha').value.trim();
    
    const mensagemDiv = document.getElementById('mensagem');
    mensagemDiv.textContent = '';

    if (!usuario || !senha) {
        mensagemDiv.textContent = 'Os campos devem ser preenchidos obrigatoriamente.';
        return;
    }
}
