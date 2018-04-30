var firstNumber;
var secondNumber;
var operator;

var currentEntry1 = new Array();
var currentEntry2 = new Array();

var screen;
var result;

/* A RAJOUTER : - La fonction de calcul l'orsqu'un numbre est
                entré après saisie d'un second opérateur
                apres le l'entrée du second nombre
              - La fonction du point ( virgule ) */

function cc () {

    firstNumber = null;
    secondNumber = null;
    operator = null;
    currentEntry1 = new Array();
    currentEntry2 = new Array();
    screen.innerText = null;
    result = null;
}


function makeANumber (digit) {

    screen = document.getElementById("screen"); /* */


/* Si il y eu un précédent calcul d'éffectué. On reset le tout */
    if (result != null) {

        result = null;
        screen.innerText = null;
    }
    
/* Si l'opérateur n'a pas été choisis nous en concluons donc que 
    le nombre qui va être entré est le premier de l'opération */
    if (operator == null) {

        currentEntry1[currentEntry1.length] = digit;
        console.log(currentEntry1);

        screen.innerText += digit;

/* Sinon qu'il est le deusieme terme du calcul */
    } else {

        currentEntry2[currentEntry2.length] = digit;
        console.log(currentEntry2);

        screen.innerText += digit;
    }
}

function getOperator (operand) {

/* Si le premier nombre de l'équation est en attente dans l'array "currententry1" */
    if (firstNumber == null && currentEntry1.length > 0) {

        firstNumber = "";

        for (var i = 0; i < currentEntry1.length; i++) {

            firstNumber += currentEntry1[i];
        }
    }

/* Si le premier nombre de l'opération a été entré nous pouvons enregistrer l'opérateur */
    if (firstNumber != null && operator == null) {

        operator = operand.innerText;
        console.log(operator);
        screen.innerText += operator;  

/* Si un opérateur a déja été choisi, le remplacer */
    } else if (firstNumber != null && operator != null) {

        operator = operand.innerText;
        console.log(operator);
        screen.innerText = screen.innerText.slice(0, -1);
        screen.innerText += operator;
    }
}

function calculate () {
   

/* Si le second nombre de l'équation est en attente dans l'array "currententry2"
     nous l'y envoyons avant de commencer le calcul */
    if (secondNumber == null && currentEntry2.length > 0) {

        secondNumber = "";

        for (var i = 0; i < currentEntry2.length; i++) {

            secondNumber += currentEntry2[i];
        }

        if (operator == "+") {
            result = Number(firstNumber) + Number(secondNumber);
        } else if (operator == "-") {        
            result = Number(firstNumber) - Number(secondNumber);
        } else if (operator == "*") {        
            result = Number(firstNumber) * Number(secondNumber);
        } else if (operator == "/") {
            result = Number(firstNumber) / Number(secondNumber);
        }
    
/* Le calcul est terminé nous faisons un reset de toutes les variable sauf "result" */
        firstNumber = null;
        secondNumber = null;
        operator = null;
        currentEntry1 = new Array();
        currentEntry2 = new Array();
    
        screen.innerText = result;
        console.log(result);
    }
}