class Platform {
  constructor(x,y) {
    this.x = x
    this.y = y
    this.vx = 0
    this.vy = 0
    this.width = 100
    this.height = 10
    this.color = "green"
    this.SPEED = 5
    this.active = true
  }
  draw() {
    fill(this.color)
    rect(this.x, this.y, this.width, this.height)
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
  }
  stop() {
    this.vx = 0
    this.vy = 0
  }
}