//Nome da função, tempo para chamar a função  - Tempo deve ser incluido em mi
// window.setTimeout(mensagem, 2500)

//Function > Ações que o codigo pode executar quando for solicitado pelo usuário no navegador
function Mensagem(){
alert("Aprendendo Dom com JS")
alert(Date())
}



let tagH1 = document.createElement("H1")
//innerHTML > Serve para adicionar uma informação dentro das tags do HTML
tagH1.innerHTML = "Olá Mundo, criei você"
//Digo a quem ela vai pertencer
document.body.appendChild(tagH1)