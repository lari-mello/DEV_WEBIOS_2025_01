let atividadeEntregue = true
let diaFinalEntrega = 19
if (atividadeEntregue == true){
    console.log("Parabéns");
    if(diaFinalEntrega <= 13){
        console.log("Entregou a atividade na data e sua nota é 10!");
    }else{
console.log("Entregou a sua atividade fora da data prevista e será retirado dois pontos da nota final");
    }
}else if(atividadeEntregue == false ){
    console.log("Ops, você ainda não entregou sua atividade");
    
}else{
    console.log("Você inseriu uma informação inválida");
}

let nota = 7
//se a nota for igual ou maior que 7, então o aluno passou na materia
//se não, a nota nota for igual ou menor que 6,9 o alunp vai ficar de recuperação

if(nota >= 7){
    console.log("Passou na matéria");
}else{
    console.log("Vai ficar de recuperação");
}



