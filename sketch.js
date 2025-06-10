let gameState = "start" 
let btnPlay;
let inicial;
let sprites = []
let cenario = []

let transicao
let transitionAlpha = 0;
let telaAtual

function preload(){
   inicial = loadImage("img/inicial.jpeg")
   sprites[0] = loadImage ('btnPlay.png')

}


function setup() {
  createCanvas(400, 400);
  criarSprites()
  
}

function draw() {
  background(220)
  verificarStatus()
  if (btnPlay.mouse.hovering()) {
    mouse.cursor = 'pointer';
    btnPlay.scale = 1.2
}
    else {
      mouse.cursor = 'default';
      btnPlay.scale = 1
      }
}
  
function telainicial(){
   img = image(inicial,0,0, width,height)

  textAlign(CENTER)
textSize(30)
text(100)
fill(255)
  text("Em busca do meu chapeu",width/2,height/2)
}


function criarSprites(){
  
  btnPlay = new Sprite()
  btnPlay.w = 100; // largura do botão
  btnPlay.h = 50; //altura do botão
  btnPlay.x = width/2; // posição X
  btnPlay.y = 250; // posição Y
  btnPlay.image = sprites[0]
  btnPlay.image.scale = 0.25
  
  
  }
function mousePressed(){
  if (gameState === 'start' && btnPlay.mouse.pressing()){
    transicao = true;
    transitionAlpha = 0;
    gameState = 'playing'
    btnPlay.visible = false;
  }
}

function verificarStatus(){
  switch(gameState){
      case "start":
       telainicial()
       break;
       case "playing":
       telaDoJogo()
  }
}

function telaDoJogo(){
  image(cenarios[0], 0,0,width,height)
  
  
}