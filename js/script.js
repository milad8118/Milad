// typewriter codes
var app = document.getElementById('Milad');

var typewriter = new Typewriter(app, {
    loop: true,
    cursor: '>'
});

typewriter.typeString('< Hi it\'s Milad')
    .pauseFor(2500)
    .deleteAll()
    .typeString('< i\'m 20 years old')
    .pauseFor(2500)
    .deleteAll()
    .typeString('< i\'ve started coding since 2020')
    .pauseFor(2500)
    .deleteAll()
    .typeString('< You can see my resume from the button below')
    .pauseFor(2500)
    .start();