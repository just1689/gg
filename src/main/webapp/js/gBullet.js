
const bullets = []

this.timer = setInterval(() => {
    for (const bullet of bullets) {
        bullet.tick()
    }
}, (17 * 3))

class Bullet {


    constructor(obj, babylonObject) {
        this.id = BabylonUtils.getCounter()
        this.sBullet = obj
        this.bBullet = babylonObject

        this.bBullet.position.x = obj.x
        this.bBullet.position.y = obj.y
        this.bBullet.position.z = obj.z
        this.bBullet.rotation.y = obj.rotation + Math.PI

        this.tick()
        this.tick()
        this.tick()

    }

    tick() {

        this.bBullet.position.x += Math.sin(this.sBullet.rotation) * this.sBullet.speed * 3
        this.bBullet.position.x += Math.cos(this.sBullet.rotation) * this.sBullet.speed * 3

        if (this.bBullet.position.x < 0) {
            this.removeMe()
            return
        }
        if (this.bBullet.position.z < 0) {
            this.removeMe()
            return
        }
        if (this.bBullet.position.x > 50 + 1) {
            this.removeMe()
            return
        }
        if (this.bBullet.position.z > 50 + 1) {
            this.removeMe()
            return
        }

    }

    removeMe() {
        this.bBullet.dispose()
        const index = bullets.indexOf(this)
        bullets.splice(index, 1)

    }

}