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

