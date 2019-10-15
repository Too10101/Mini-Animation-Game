let player
let platforms = []

function setup() {
  createCanvas(400, 400);
  player = new Player()
  for (let i = 0; i < 10; i++) {
    let platform = new Platform(Math.random() * 300, (i * 130) - 800)
    platforms.push(platform)
  }
}

function draw() {
  background(220);
  platforms.filter(platform => platform.active).forEach(platform => {
    platform.update()
    platform.draw()
  })
  player.draw()
  player.update()

  hit()
  
}

function hit() {
  for (let i = 0; i < 10; i++) {
    if (platforms[i].x <= player.x + player.width/2 && platforms[i].y <= player.y + player.height/2) {
      if (platforms[i].x + platforms[i].width >= player.x && platforms[i].y >= player.y) {
        player.bounce()
      }
    }
  }
  
}

function keyPressed() {
  if (keyCode === DOWN_ARROW) {
    player.move(0, 1)
  } else if (keyCode === LEFT_ARROW) {
    player.move(-1, 0)
  } else if (keyCode === RIGHT_ARROW) {
    player.move(1, 0)
  }
}
function keyReleased() {
  player.stop()
}