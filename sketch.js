let gridSpacing = 40


function setup() {

  let body = select('body')
  body.style('background-color', 'rgb(79,50,0)')


  for (let x = gridSpacing; x < window.innerWidth - gridSpacing; x += gridSpacing) {
    for (let y = 0; y < window.innerHeight - (gridSpacing * 2); y += gridSpacing) {

      // let p = createP(randomEmoji()); // start with random emojis instead
      let p = createP("〰");

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

  let output;

  if (random(1) < 0.02) {
    let rand = floor(random(creature.length))
    output = creature[rand];
  } else {
    let rand = floor(random(emojis.length))
    output =  emojis[rand]
  }


  //favicon replacement
  //https://css-tricks.com/emojis-as-favicons/
  const linkForFavicon = document.querySelector(
    `head > link[rel='icon']`
  );

  newFavicon = faviconTemplate`${output}`;
    console.log(newFavicon);
    linkForFavicon.setAttribute(`href`, `data:image/svg+xml,${newFavicon}`);

  return output;

}


function faviconTemplate(string, icon) {
  return `
    <svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22>
      <text y=%22.9em%22 font-size=%2290%22>
        ${icon}
      </text>
    </svg>
  `.trim();
}
