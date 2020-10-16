

//Global Variables
var memory = "0", current = "0", operation = 0; 
const maxChar = 10; 
//pozivanje displeya iz DOM-a
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
function plusMinus() {
//promjene izmedju pozitivnog i negativnog      
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
function allClear() { 
    
  current = "0";
  Operation = 0; 
  memory = "0"; 
    
 display.innerHTML = current;
}
//dodavanje operacije
// Adding an operation
function addOperation(op) {
  if (operation !== 0) {     
    calculate();              
  }                           
     
                              // Ako korisnik unese niz vrijednosti i operacija
                             // tj. (1 + 2 * 3-4) naš kalkulator obrađuje samo dva računa
                            // račun će uvijek biti točan.

  if (op.indexOf("*") > -1) { operation = 1};  
  if (op.indexOf("/") > -1) { operation = 2};  //prečac za korištenje operatora da se ne koristi html.value
  if (op.indexOf("+") > -1) { operation = 3}; 
  if (op.indexOf("-") > -1) { operation = 4};

  memory = current; 
                    //// Spremi svaki unos u memory varijablu kako bi uvijek izračunao 'trenutni unos'.
  current = ""; 
                //Očistite trenutno kako bismo mogli koristiti sljedeće, sada kad je u memoriji.
    
  display.innerHTML = current;
    
}

function percent(){
  //ako korisnik želi izračunati postotak broja

    if(eval(memory) === 0){
        current = current / 100;
    } else { 
             //Ako korisnik želi dodati, upotrijebite postotak određenog broja. (npr. 50 + 25% (od 50))
       current = (current / 100) * memory; 
    }   
   
 display.innerHTML = current;
}

// Calculate funkcija
function calculate() {
//Ako je korištena operacija *, pomnožite memoriju s trenutnom vrijednošću.
  if (operation === 1) {
    current = eval(memory) * eval(current);
  }
     //Ako je korištena operacija /, pomnožite memoriju s trenutnom vrijednošću.
  if (operation === 2) {      
  if (eval(current) !== 0) {   // Only if not dividing by 0.  
      current = eval(memory) / eval(current);
    } else {
      current = "Error"; 
    }
  }
//isto za + i -    
  if (operation === 3) {
    current = eval(memory) + eval(current);
  }
  if (operation === 4) {
    current = eval(memory) - eval(current);
  }
 

  // Resetiranje memorije i trenutnog. Također prisilite trenutno na niz nakon računanja.
  current = current + "";    
  operation = 0; 
  memory = "0"; 


  display.innerHTML = current;
   
  
}





Resources
