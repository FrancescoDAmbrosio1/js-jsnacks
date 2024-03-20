//                          JSNACK 1
// L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore.
//PROCEDIMENTO JSNACK1
//chiedere all'utente il primo numero num1
//chiedere all'utente il seconodo numero num2
//SE num1>num2 allora stampo num1
//ALTRIMENTI SE num1=num2 allora stampo che i numeri sono uguali
//ALTRIMENTI stampo num2 

let num1 = parseInt(prompt('Inserisci il primo numero'));     //number
let num2 = parseInt(prompt('Inserisci il secondo numero'))    //number
if(num1 > num2){
    console.log('Il numero maggiore è: ', num1);    //string
} else if(num1 < num2){
    console.log('I numeri maggiore è', num2);   //string
} else {
    console.log('I numeri inseriti sono uguali');    //string
}
