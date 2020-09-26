/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//voltar
function voltarIndex(){
    document.location.href = "index.html";
}

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


//questao 07

function multiplo3e5(){
    let soma = 0;
    let msn = "";
    for (let i = 1; i <= 1000; i++){
        if(i%3==0||i%5==0){
            soma = i+soma;
        }
    }
    msn = "A Soma dos multiplos de 3 e 5 é: " + soma;
    document.getElementById('aqui').innerText = msn;

}

//questão 08

function fibonatisopares(){
    let soma = 0;
    let fib1 = 0;
    let fib2 = 1;
    let fibo = 0;
    let msn = "";
    
    while(fibo <= 50000){
        fibo = fib1 + fib2;
    if(fibo%2==0){
        soma = soma + fibo;
    }
    fib1 = fib2;
    fib2 = fibo;
    console.log("FIBO no valor: " + fibo);
    }
    msn = "A Soma dos termos pares da sequencia FIBONACCi é: " + soma;
    document.getElementById('aqui').innerText = msn;
        

}

//questão 08

function numeroprimo(){
    // Baseado nas regras do site https://matematicasimples.pmvs.pt/2018/01/27/calcular-numeros-primos/#:~:text=Assim%2C%20um%20n%C3%BAmero%20ser%C3%A1%20primo%20se%20tiver%20apenas,11%7D.%20O%20conjunto%20dos%20n%C3%BAmeros%20primos%20%C3%A9%20infinito.
    let msn = "";
    let primos = [ 2, 3, 5, 7, 11, 13];
    let imprimos = "sequencia de primos: ";
    let num = 13;
    let somad = 0;
    let d1 = 0;
    let psp = 3;
    let p = 0;
    let pmx = 20;
    let cont = 6;
    let status = false;
    //primos do exercicio 2 3 5 7 11 13
    
    //primos depois 17 19 23 31 37
    
    
    //Regra: Primo Não pode ser um numero par
    while(cont<pmx+1){
        num = num +1;
        console.log("Suposto primo: "+ num);
        if(num%2 != 0){ //Regra do par
            //console.log("REGRA DE 2");
            //Proxima regra: Sona os digitos não poder ser divisivel por 3
            d1 = num; 
            somad = 0;
            while (d1 > 0) {
                somad   += d1 % 10;
                d1  = parseInt(d1 / 10); // <--- atenção
            }
            
            if(somad%3!=0){ //regra do primo 3
            //console.log("REGRA DE 3");
                // Não pode ser divisivel por 5
                if(num%5!=0){ //regra do Primo 5
                    //console.log("REGRA DE 5");
                    //divisão pelo primo p testando os primos ate quociente ser menor que que o numero P e/ou o resto for diferente de 0
                    
                    do{
                        if(num%p!=0){
                            p = primos[psp]
                            psp = psp +1;
                            d1 = Math.round(num/p); // controle
                            console.log("O resultado de " +num+ " dividido por "+p+" deve ser igual a: "+ d1); 
                            somad = num%p; //controle 
                            console.log("O RESTO" +num+ " dividido por "+p+" é "+ somad); 
                                if(Math.round(num/p)>p && num%p!=0){
                                    console.log("PASSOU PELOS TESTES NOS PRIMOS: "+num);
                                    primos.push(num);
                                    cont = cont+1;
                                    status=true;
                                    console.log("Status do teste PRIMO: "+status);
                                    //console.log(cont);
                                //console.log("TESTE FINAL: "+ num);
                                }else{
                                    status = false;
                                    console.log("Status do teste PRIMO: "+status);
                                }
                        }else{
                            status = true;
                            console.log("Status do teste: "+status);
                        }
                    }while(status==false)
                    // continua dando tudo errado!
                        
                    
                }        
            }
        }
    }
    

    d1=1;
    for(let i = 0; i< primos.length; i++){
        console.log("Primo "+d1+" é "+primos[i]);
        imprimos += primos[i] + ", ";
        d1++;
    }
    document.getElementById("primos").innerText = imprimos;


    msn = "o 10º termo primo é: " + primos[pmx];
    document.getElementById('aqui').innerText = msn;

} 



    