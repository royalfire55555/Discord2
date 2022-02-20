class Client {
    constructor() {
        if (localStorage.getItem("messages")) {
            console.log("Retrieving Messages")
            this.messages = localStorage.getItem("messages");
        } else {
            this.messages = []
        }
    }

    sendMessage(message) {
    }

    save() {
        localStorage.setItem("messages", this.messages)
    }

    handleExit() {
        window.addEventListener("beforeunload", function(e) {
            this.save()
        })
    }
}