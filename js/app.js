//                          JSNACK 1
// L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore.
//      PROCEDIMENTO JSNACK1
//chiedere all'utente il primo numero num1
//chiedere all'utente il seconodo numero num2
//SE num1>num2 allora stampo num1
//ALTRIMENTI SE num1=num2 allora stampo che i numeri sono uguali
//ALTRIMENTI stampo num2 

// let num1 = parseInt(prompt('Inserisci il primo numero'));     //number
// let num2 = parseInt(prompt('Inserisci il secondo numero'))    //number
// if(num1 > num2){
//     console.log('Il numero maggiore è: ', num1);    //string
// } else if(num1 < num2){
//     console.log('I numeri maggiore è', num2);   //string
// } else {
//     console.log('I numeri inseriti sono uguali');    //string
// }



//                          JSNACK 2
//L’utente inserisce due parole in successione, con due prompt. 
//Il software stampa prima la parola più corta, poi la parola più lunga.
//      PROCEDIMENTO JSNACK2
//chiedere all'utente con il prompt la prima parola
//chiedere all'utente con il prompt la seconda parola
//calcolare la lunghezza della prima parola
//calcolare la lunghezza della seconda parola

// const primaParola = prompt('Inserisci la prima parola');    //string
// const secondaParola = prompt('Inserisci la seconda parola') //string
// const lunghezzaPrimaParola = primaParola.length //number
// const lunghezzaSecondaParola = secondaParola.length //number
// if(lunghezzaPrimaParola > lunghezzaSecondaParola){
//     console.log(primaParola);
//     console.log(secondaParola);
// } else {
//     console.log(secondaParola);
//     console.log(primaParola);
// }




//                          JSNACK 3
//l software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
//      PROCEDIMENTO JSNACK3
//inizializzo una somma=0
//chiedo per 10 volte di inserire un numero e lo sommo alla somma precedente
let somma = 0;  //number
for(let i = 0; i < 10; i++){
    let num = parseInt(prompt('Inserisci il '+ (i+1) + '° numero'))
    somma = somma + num;    //number
}
console.log('La somma dei numeri da te inseriti è: ', somma );
//stampo all'utente il risultato