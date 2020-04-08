let gridSpacing = 40


function setup() {

  let body = select('body')
  body.style('background-color', 'rgb(79,50,0)')


  for (let x = gridSpacing; x < window.innerWidth - gridSpacing; x += gridSpacing) {
    for (let y = 0; y < window.innerHeight - (gridSpacing * 2); y += gridSpacing) {

      // let p = createP(randomEmoji()); // start with random emojis instead
      let p = createP("♒︎");

      p.style('font-size', '2em')
      p.style('cursor', 'pointer'); //give the mario hand while mousing over


      p.position(x, y)
      p.mousePressed(changeEmoji)
      p.mouseOver(changeEmoji)

    }
  }
}

function changeEmoji() {
  //change the html inside of THIS p tag to be a new random emoji
  this.html(randomEmoji())
}


//utility function
function randomEmoji() {

  let emojis = ['🌵', '🌲', '🌳', '🌴', '🌱', '🌿', '☘️', '🍀', '🍃', '🌾', '🌷', '🌹', '🌺', '🌸', '🌼', '🌻', '🍄', '🍅', '🥕', '🍓']

  let creature = ['🐛', '🐝', '🐞', '🐌', '🐜', '🕷', '🦗', '🐍', '🦎', '🐀', '🐇', '🦋', '🦔', '🕊']

  if (random(1) < 0.02) {
    let rand = floor(random(creature.length))
    return creature[rand];
  } else {
    let rand = floor(random(emojis.length))
    return emojis[rand]
  }

}