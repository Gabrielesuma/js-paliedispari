function palidroma(word){
    let e = word.length - 1;
    for(i = 0; i < word.length / 2; i++){
        if(word[i] !== word[e]){
            return false;
        }
        e--;
    }
    return true;
}

//let w = prompt('inserisci una parola');
//console.log(palidroma(w));

function getRandom(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function pariDispari(sum){
    if(sum % 2 === 0){
        return true;
    } else {
        return false;
    }
}

let pd = parseInt(prompt('scegli pari o dispari'));
let user = parseInt(prompt('inserisci un numero tra 1 e 5'));
let PC = getRandom(1, 5);
let sum = user + PC;
console.log(PC);
console.log(sum);
console.log(pariDispari(sum));
if(pd === 'pari' && pariDispari(sum) === true){
    console.log('l utente ha vinto');
} else {
    console.log('il computer ha vinto');
}