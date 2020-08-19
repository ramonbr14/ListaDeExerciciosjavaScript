/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


// Questao 01
function mostrarCaixa(){
    alert("#FICAEMCASA #EVITECOVID19");
}
    
//Questao 03
var var1;
var var2;
var var3;
var x;

function maiordeTres(var1,var2,var3){
    
    var a = parseFloat(document.getElementById('valor1').value);
    var b = parseFloat(document.getElementById('valor2').value);
    var c = parseFloat(document.getElementById('valor3').value);
    var maior = a;
    
    if(b > maior)
        maior = b;
    if(c > maior)
        maior = c;
    alert("O MAIOR NUMERO É "+ maior);
    //document.getElementById('btenviar').value = "O MAIOR NUMERO É "+ maior;    
    };
    
//questao 04

function maiorIdade(var1){
    
    var a = parseFloat(document.getElementById('idade').value);
    if(a>=18)
        alert("ESTE INDIVIDUO É MAIOR DE IDADE");
    else
        alert("ESTE INDIVIDUO NÃO PODE VOTAR");
}

//questao 05

function aritimeticatres(num1,num2,num3){
    //alert("ISSO FUNCIONA ATE AQUI!");
    var a = parseFloat(document.getElementById('num1').value);
    var b = parseFloat(document.getElementById('num2').value);
    var c = parseFloat(document.getElementById('num3').value);
    var r = 0;
    var msn;
    r = (a+b+c)/3;
    msn = "O resultado da aritimetica é: "+r;
    //alert(msn);
    document.getElementById("rest").value = msn;
}

//questao 06

function imc(){
    let p = parseFloat(document.getElementById('peso').value);
    let a = parseFloat(document.getElementById('altura').value);
    let imc = 0;
    imc = p / Math.pow(a,2);
    let msn = "Seu IMC é de: "+ imc;
    
    if(imc < 18.5){
        msn += " Alerta: VOCÊ ESTA ABAIXO DO PESO";
    } else if(imc >= 18.5 && imc < 25 ){
        msn += " VOCÊ ESTA NO PESO IDEAL";
    } else if(imc >= 25 && imc < 30){
        msn += " Alerta: VOCÊ ESTA ACIMA DO PESO";
    } else if(imc >= 30 && imc < 35){
        msn += " Alerta: OBESIDADE GRAU I";
    } else if(imc >= 35 && imc < 40){
        msn += " Alerta: OBESIDADE GRAU II - SEVERA";
    } else if(imc >= 40){
        msn += " Alerta: OBESIDADE GRAU III - MORBIDA";
    }
    document.getElementById('nesse').innerText = msn; //usar quando for o id
    //document.querySelector('#nesse').innerText = msn; //usar quando tiver o class 
    
}


