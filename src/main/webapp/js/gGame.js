
class Game {

    constructor() {
        this.scores = []
        
    }

    static appStart() {
        Web.toggleElement("VIEW_CANVAS", false)
        Web.toggleElement("VIEW_GAMES", false)

        const localHostname = window.location.hostname
        const port = window.location.port
        let s
        if (port == 80) {
            s = localHostname + "/"
        } else {
            s = localHostname + ":" + port + "/"
        }
        document.querySelector('#selectServer [value="' + s + '"]').selected = true
    }

}

game = new Game()
window.onload = Game.appStart