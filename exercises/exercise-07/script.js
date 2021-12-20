 console.log('it works')

 var verbs, nouns, adjectives;

nouns = ["heart", "rainbow", "ocean"];
verbs = ["look", "make", "continue"];
adjectives = ["good", "different", "possible"];

function randomGen(){
    return Math.floor(Math.random() * 3);
}

function sentence() {
    
var noun, verb, adjective, text;

noun = nouns[Math.floor(Math.random() * nouns.length)];
verb = verbs[Math.floor(Math.random() * verbs.length)];
adjective = adjectives[Math.floor(Math.random() * adjectives.length)];

text = `My ${noun} leaps ${adjectives} when I ${verb} a rainbow in the sky.`;

document.getElementById('sentence').innerHTML = text;

}
console.log(sentence);
sentence();