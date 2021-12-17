 console.log('it works')

 let nouns = ["heart", "rainbow", "ocean"];
 let verbs = ["look", "make", "continue"];
 let adjectives = ["good", "different", "possible"];


let noun = nouns[Math.floor(Math.random() * nouns.length)];
let verb = verbs[Math.floor(Math.random() * verbs.length)];
let adjective = adjectives[Math.floor(Math.random() * adjectives.length)];


let sentence = `My ${noun} leaps ${adjectives} when I ${verb} a rainbow in the sky.`;

console.log(sentence);
