

// To fix: 1. Max amount of characters to display 
//(and small numbers like 0.00000000000000000001)

// 2. Maximum amount of input numbers

// 3. Operator at end of equation

//Global Variables
var memory = "0", current = "0", operation = 0; 
const maxChar = 10; 
//pozivanje displeya iz DOM-a
// Get display from DOM.
const display = document.querySelector('.display p');

// dodavanje vrijednosti na zaslon 
function addValue(dig){ 
     
if ((eval(current) === 0) && (current.indexOf(".") === -1)) { 
        current = dig;
        } else { 
            current += dig;
        } 
 
     display.innerHTML = current; 
}
// dodavanje decimale 
function addDecimal() {  
// If there is no number before decimal add 0. 
//ako nema broja prije decimale dodaje se 0
  if (current.length === 0) {
      current = "0.";
  } else 
    if (current.indexOf(".") === -1){
      current += ".";
    }
  
  display.innerHTML = current;
}
//plusminus funkcija
// plusMinus function
function plusMinus() {
//promjene izmedju pozitivnog i negativnog
// Changes between positive and negative.      
   if(current.indexOf("-") === 0) {
      current = current.substring(1);
    } else {
      current = "-" + current;
    }
    if (eval(current) === 0 && current.indexOf(".") === -1) {
      current = "0";
    }
  
  display.innerHTML = current;
}
//očisti sve
// Clear everything
function allClear() { 
    
  current = "0";
  Operation = 0; 
  memory = "0"; 
    
 display.innerHTML = current;
}
//dodavanje operacije
// Adding an operation
function addOperation(op) {
  if (operation !== 0) {      // If user inputs a string of values and operations
    calculate();              // i.e (1+2*3-4) our calculator only deals with two calculations
  }                           // the calculation will always be right. 
     
                              // Ako korisnik unese niz vrijednosti i operacija
                             // tj. (1 + 2 * 3-4) naš kalkulator obrađuje samo dva računa
                            // račun će uvijek biti točan.

  if (op.indexOf("*") > -1) { operation = 1};  // Shortcut to using operations rather than using html.value.
  if (op.indexOf("/") > -1) { operation = 2};  //prečac za korištenje operatora da se ne koristi html.value
  if (op.indexOf("+") > -1) { operation = 3}; 
  if (op.indexOf("-") > -1) { operation = 4};

  memory = current; // Store each entry in memory variable to always calculate 'current ipnut' against. 
                    //// Spremi svaki unos u memory varijablu kako bi uvijek izračunao 'trenutni unos'.
  current = ""; // Clear current so we can use it next, now that it is in memory.
                //Očistite trenutno kako bismo mogli koristiti sljedeće, sada kad je u memoriji.
    
  display.innerHTML = current;
    
}

function percent(){
  //ako korisnik želi izračunati postotak broja
 // If user wants to calculate a percentage of a number.
    if(eval(memory) === 0){
        current = current / 100;
    } else { // If the user wants to add use the percentage of a given number. (eg. 50 + 25% (of 50))
             //Ako korisnik želi dodati, upotrijebite postotak određenog broja. (npr. 50 + 25% (od 50))
       current = (current / 100) * memory; 
    }   
   
 display.innerHTML = current;
}

// Calculate funkcija
function calculate() {
// If the operation used was *, multiply memory with current value.
//Ako je korištena operacija *, pomnožite memoriju s trenutnom vrijednošću.
  if (operation === 1) {
    current = eval(memory) * eval(current);
  }
// If the operation used was /, multiply memory with current value.
     //Ako je korištena operacija /, pomnožite memoriju s trenutnom vrijednošću.
  if (operation === 2) {      
  if (eval(current) !== 0) {   // Only if not dividing by 0.  
      current = eval(memory) / eval(current);
    } else {
      current = "Error"; 
    }
  }
//isto za + i -
// Same for + and -    
  if (operation === 3) {
    current = eval(memory) + eval(current);
  }
  if (operation === 4) {
    current = eval(memory) - eval(current);
  }
 
// Reset memory and current. Also force current to a string after the calculation.
  // Resetiranje memorije i trenutnog. Također prisilite trenutno na niz nakon računanja.
  current = current + "";    
  operation = 0; 
  memory = "0"; 


  display.innerHTML = current;
   
  
}





Resources
