function luffy(container) {

    var app = document.getElementById(container);

   var typewriter = new Typewriter(app, {
       wrapperClassName: 'Typewriter__wrapper',
       delay: 35,
       loop: false
   });

   typewriter.typeString('Monkey D. Luffy,')
       .pauseFor(1500)
       .typeString('<br>')
       .typeString('also known as "Straw Hat Luffy" and commonly as "Straw Hat"')
       .pauseFor(1500)
       .typeString('<br>')
       .typeString('is the main protagonist of the manga and anime, One Piece.')
       .pauseFor(1500)
       .typeString('<br>')
       .typeString('He is the founder and captain of the increasingly infamous and powerful <strong>Straw Hat Pirates</strong>')
       .pauseFor(1500)
       .typeString('<br>')
       .typeString('as well as one of its top fighters.')
       .pauseFor(1500)
       .typeString('<br>')
       .typeString('His lifelong dream is to become the Pirate King by finding the legendary treasure left behind by the late Gol D. Roger.')
       .pauseFor(1500)
       .typeString('He believes that being the <strong>Pirate King</strong> means having the most freedom in the world.')
       .start();
}

function zoro(container) {

   var app = document.getElementById(container);

   var typewriter = new Typewriter(app, {
       wrapperClassName: 'Typewriter__wrapper',
       delay: 35,
       loop: false
   });

   typewriter.typeString('Roronoa Zoro,')
       .typeString('<br>')
       .pauseFor(1500)
       .typeString('also known as <strong>"Pirate Hunter"</strong> Zoro,')
       .pauseFor(1500)
       .typeString('<br>')
       .typeString('is the combatant of the <strong>Straw Hat Pirates</strong>, and one of their two swordsmen. Formerly a bounty hunter,')
       .pauseFor(1500)
       .typeString('<br>')
       .typeString('he is the second member of the crew and the first to join, doing so in the Romance Dawn Arc.')
       .start();
}

function nami(container) {

   var app = document.getElementById(container);

   var typewriter = new Typewriter(app, {
       wrapperClassName: 'Typewriter__wrapper',
       delay: 35,
       loop: false
   });

   typewriter.typeString('"Cat Burglar" Nami,')
       .typeString('<br>')
       .pauseFor(1500)
       .typeString('is the navigator of the <strong>Straw Hat Pirates</strong>. She is the third member of the crew and the second to join,')
       .pauseFor(1500)
       .typeString('<br>')
       .typeString('doing so during the Orange Town Arc.')
       .pauseFor(1500)
       .typeString('<br>')
       .typeString('She is the adoptive sister of Nojiko after the two were orphaned and taken in by Bell-mère.')
       .start();
}

function usopp(container) {

   var app = document.getElementById(container);

   var typewriter = new Typewriter(app, {
       wrapperClassName: 'Typewriter__wrapper',
       delay: 35,
       loop: false
   });

   typewriter.typeString('""God" Usopp,')
       .typeString('<br>')
       .pauseFor(1500)
       .typeString('is the sniper of the <strong>Straw Hat Pirates</strong>')
       .pauseFor(1500)
       .typeString('<br>')
       .typeString('He is the fourth member of the crew and the third to join,')
       .pauseFor(1500)
       .typeString('<br>')
       .typeString('doing so at the end of the Syrup Village Arc. Although he left the crew during the Water 7 Arc, he rejoined at the end of the Post-Enies Lobby Arc.')
       .start();
}

function sanji(container) {

   var app = document.getElementById(container);

   var typewriter = new Typewriter(app, {
       wrapperClassName: 'Typewriter__wrapper',
       delay: 35,
       loop: false
   });

   typewriter.typeString('"Black Leg" Sanji,')
       .typeString('<br>')
       .pauseFor(1500)
       .typeString('born as Vinsmoke Sanji,')
       .pauseFor(1500)
       .typeString('<br>')
       .typeString('is the cook of the <strong>Straw Hat Pirates</strong>')
       .pauseFor(1500)
       .typeString('<br>')
       .typeString('He is the fifth member of the crew and the fourth to join, doing so at the end of the Baratie Arc.')
       .start();
}