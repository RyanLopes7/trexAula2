var trex, trexCorrendo, chao, imgchao, chaoinvisivel;

function preload() {
  trexCorrendo = loadAnimation("trex1.png", "trex2.png", "trex3.png");
  imgchao = loadImage("ground2.png");
}

function setup() {
  createCanvas(600, 200);
  trex = createSprite(50, 100, 40, 40);
  trex.addAnimation("correndo", trexCorrendo);
  trex.scale = 0.5;

  chao = createSprite(200, 180, 500, 10);
  chao.addImage(imgchao);

  chaoinvisivel = createSprite(200, 190, 500, 10);
  chaoinvisivel.visible = false;
}

function draw() {
  background(180);
  chao.velocityX = -2;

  if (chao.x < 0) {
    chao.x = chao.width / 2;
  }

  if (keyDown("space") && trex.y > 161) {
    trex.velocityY = -12;
  }
  trex.velocityY = trex.velocityY + 1;
  trex.collide(chaoinvisivel);
  drawSprites();
}
