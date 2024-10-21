function generate_uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,
    function(c) {
       var uuid = Math.random() * 16 | 0, v = c == 'x' ? uuid : (uuid & 0x3 | 0x8);
       return uuid.toString(16);
    });
}
 


function SalvarDados () {

    
    var usuario = document.getElementById('campousuario').value

    var senha = document.getElementById('camposenha').value

    var usu = {login: usuario};

    var sen =  {senha: senha};

    localStorage.setItem('chamandosenha'+ '-' + generate_uuidv4(), JSON.stringify(sen));

    localStorage.setItem('chamandousu' +'-'+ generate_uuidv4() , JSON.stringify(usu));

    console.log('Dados salvos')

}
