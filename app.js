let who = ['The dog', 'My grandma', 'His turtle', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'the keys', 'the car'];
let when = ['before the class', 'right on time', 'when I finished', 'during my lunch', 'while I was praying'];

function excuse(who,action,what,when){

    aleatorioWho = who[Math.floor(Math.random()*who.length)];
    aleatorioAction = action[Math.floor(Math.random()*action.length)];
    aleatorioWhat = what[Math.floor(Math.random()*what.length)];
    aleatorioWhen = when[Math.floor(Math.random()*when.length)];

    return `${aleatorioWho} ${aleatorioAction} ${aleatorioWhat} ${aleatorioWhen}.`
}

const parrafo = document.querySelector("#excuse");
parrafo.innerHTML = excuse(who,action,what,when);