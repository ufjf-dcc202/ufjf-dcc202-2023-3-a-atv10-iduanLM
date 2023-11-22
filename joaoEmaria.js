console.log("MAIN");
let joao= 1;
let maria = 2;
export (maria,joao,getMaria,getJoao);
function setjoao(valor){
    if(valor>=0){
        joao=valor;
    }
    else{
        joao = 0;
    }
}
function setmaria(valor){
    if(valor>=0){
        maria=valor;
    }
    else{
        maria = 0;
    }
}

function getMaria(){
    return maria;}

    function getJoao(){
        return joao;
    }
    function deMariaPraJoao(){
         maria= maria + joao;
        joao=0;
        return maria;}

    function deJoaoPraMaria(){

        joao= joao + maria;
        maria = 0;

    }