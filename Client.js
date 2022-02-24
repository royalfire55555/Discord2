class Client {
    constructor(person) {
        this.person = person;

        this.messages = []

        this.people = []
    }

    update() {
        this.messages = this.getData("msgs")

        this.save();
        this.showMsgs();
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

    showMsgs() {
        this.msgBox = document.getElementById("messagesBox");
        for (var i = 0; i < this.messages.length; i++) {
            if (this.messages.length == this.people.length) {
                var msg = this.messages[i];
                var person = this.people[i];
                this.msg.innerHTML += `${person}: ${msg}<br>`
            }
        }
    }

    getData(key) {
        database.ref(key).on("value", function (data) {
            return data.val();
        })
    }
}