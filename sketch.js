let gridSpacing = 40

let poly;
let delay;
let reverb;

let notes = ["C","D","E","G"]
// let notes = ["C","D","E","G","A"]

let octave = 4
let direction = 1

let W = window.innerWidth
let H = window.innerHeight


function setup() {

  var isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);

  console.log(isChrome, "chrome")

  poly = new p5.PolySynth();

  delay = new p5.Delay();
  reverb = new p5.Reverb();


  reverb.process(poly, 2, 2); //to only add reverb, toggle the others off.
  // delay.process(poly, 0.50, 0.5, 2300);
  // reverb.process(delay, 4, 2);

// let i = 0;
// let cts = ['c','l', 'i', 'c',' k', '〰', 'f','o','r', '〰', 's','o','u','n','d','!']


for (let y = 0; y < H - (gridSpacing * 2); y += gridSpacing) {
  for (let x = gridSpacing; x < W - gridSpacing; x += gridSpacing) {


      let p

      // if(i > cts.length-1){
        p = createP("〰");
      // }else{
      //   p = createP(cts[i]);
      //   p.class('sound-warning')
      // }
      // i++

      // let p = createP(randomEmoji()); // start with random emojis instead
      p.position(x, y)
      p.mousePressed(changeEmoji)
      p.mouseOver(changeEmoji)

    }
  }
}

function mousePressed(){
  userStartAudio()

  // let sw = document.getElementsByClassName('sound-warning')
  // console.log(sw)
  // for (let element of sw) {
  //   console.log(element);
  //     element.innerText = "〰";
  // }


}

function changeEmoji() {
  userStartAudio()

  let randNote = floor(random(notes.length))

  if(random(1)<0.1){
    octave+= direction
  }
  if(octave >= 6){
    direction = -1
  }
  if(octave <= 4){
    direction = 1
  }

  poly.play(notes[randNote] + octave , .15, 0, 0.25);


  //change the html inside of THIS p tag to be a new random emoji
  this.html(randomEmoji())
}

//
// function pick(){
//   this.html("〰")
// }

//utility function
function randomEmoji() {

  let emojis = ['🌵', '🌲', '🌳', '🌴', '🌱', '🌿', '☘️', '🍀', '🍃', '🌾', '🌷', '🌹', '🌺', '🌸', '🌼', '🌻', '🍄', '🍅', '🥕', '🍓']

  let creature = ['🐛', '🐝', '🐞', '🐌', '🐜', '🕷', '🦗', '🐍', '🦎', '🐀', '🐇', '🦋', '🦔', '🕊']

  let output;

  if (random(1) < 0.03) {
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
    // console.log(newFavicon);
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
