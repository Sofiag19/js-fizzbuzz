// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero
// e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

// stampare numeri da 1 a 100
var input = 1;
while (input <= 100) {
 console.log(input);
 
 // sovrascrivere numeri multipli di 3 e 5 - uso il modulo var%3==0 && var%5==0
 if (((input%3)==0)&&((input%5)==0)) {
   console.log("FizzBuzz");

   // sovrascrivere numeri multipli di 5 - uso il modulo var%5==0
 } else if ((input%5)==0) {
   console.log("Buzz");

   // sovrascrivere numeri multipli di 3 - uso il modulo var%3==0
 } else if ((input%3)==0){
   console.log("Fizz");
 }
 input++;
}
