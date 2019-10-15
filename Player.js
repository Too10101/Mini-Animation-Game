class Player {
  constructor() {
    this.x = 175
    this.y = 0
    this.vx = 0
    this.vy = 0
    this.width = 25
    this.height = 25
    this.color = "blue"
    this.SPEED = 5
    this.active = true
    this.lift = -9
    this.grav = .2
    this.vel = 0
  }
  draw() {
    fill(this.color)
    ellipse(this.x, this.y, this.width, this.height)
  }
  die() {
    this.active = false
  }
  move(dx, dy) {
    this.vx = dx * this.SPEED
    this.vy = dy * this.SPEED
  }
  update() {
    this.x += this.vx
    this.y += this.vy
    
    this.vel += this.grav
    this.vel *= .99
    this.y += this.vel
  }
  bounce() {
    this.vel = this.lift;
  }
  stop() {
    this.vx = 0
    this.vy = 0
  }
}