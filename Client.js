class Client {
    constructor(person) {
        this.person = person;

        if (localStorage.getItem("messages")) {
            console.log("Retrieving Messages")
            this.messages = localStorage.getItem("messages");
        } else {
            this.messages = []
        }
    }

    updateMessages() {
        database.ref("/").on("value", function (data) {
            this.messages = data.val()
        })
    }

    sendMessage(message) {
        database.ref("/").update({
            msgs: this.messages.push({
                person: this.person,
                message: message
            }).toString()
        })
    }

    save() {
        localStorage.setItem("messages", this.messages)
    }

    handleExit() {
        window.addEventListener("beforeunload", function (e) {
            this.save()
        })
    }
}