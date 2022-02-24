class Client {
    constructor(person) {
        this.person = person;

        if (localStorage.getItem("messages")) {
            console.log("Retrieving Messages")
            this.messages = localStorage.getItem("messages");
        } else {
            this.messages = []
        }

        if (localStorage.getItem("people")) {
            console.log("Retrieving people")
            this.people = localStorage.getItem("people");
        } else {
            this.people = []
        }
    }

    updateMessages() {
        database.ref("msgs").on("value", function (data) {
            this.messages = data.val();
        })

        database.ref("ppl").on("value", function (data) {
            this.people = data.val();
        })
    }

    sendMessage(message) {
        this.messages.push(message);
        this.people.push(this.person);

        database.ref("/").update({
            msgs: this.messages.toString(),
            ppl: this.people.toString(),
        })
    }

    save() {
        localStorage.setItem("messages", this.messages);
        localStorage.setItem("people", this.people);
    }

    handleExit() {
        window.addEventListener("beforeunload", function (e) {
            this.save()
        })
    }


}