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

let w = prompt('inserisci una parola');
console.log(palidroma(w));