module.exports = class PlayerAction {
    constructor() {
        this.sleep = function(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
    }
    giveItems(items) {
        if (typeof items == "object") {
            for (var c = 0; c < items.length; c++) {
                console.log(items[c])
            }
        } else if (typeof items == "string") {
            console.log(items);
        }
        return this;
    }
    setItems(items) {
        if (typeof items == "object") {
            for (var c = 0; c < items.length; c++) {
                console.log(items[c])
            }
        } else if (typeof items == "string") {
            console.log(items);
        }
        return this
    }
    setArmor(armor) {
        if (typeof armor == "object") {
            for (var c = 0; c < armor.length; c++) {
                console.log(armor[c])
            }
        } else if (typeof armor == "string") {
            console.log(armor);
        }
        return this;
    }
    setOffHand(item) {
        console.log(item);
        return this;
    }
    removeItems(items) {
        if (typeof items == "object") {
            for (var c = 0; c < items.length; c++) {
                console.log(items[c])
            }
        } else if (typeof items == "string") {
            console.log(items);
        }
        return this;
    }
    clearInventory() {
        console.log("Cleared!");
        return this;
    }
    showInventory(top, middle, bottom) {
        if (typeof top == "object") {
            for (var c = 0; c < top.length; c++) {
                console.log(top[c]);
            }
        } else if (typeof top == "string") {
            console.log(top);
        }
        if (typeof middle == "object") {
            for (var c = 0; c < middle.length; c++) {
                console.log(middle[c]);
            }
        } else if (typeof middle == "string") {
            console.log(middle);
        }
        if (typeof bottom == "object") {
            for (var c = 0; c < bottom.length; c++) {
                console.log(bottom[c]);
            }
        } else if (typeof bottom == "string") {
            console.log(bottom);
        }
        return this;
    }
    closeInventory() {
        console.log("Closed Inventory.");
        return this;
    }
    expandInventory(top, middle, bottom) {
        if (typeof top == "object") {
            for (var c = 0; c < top.length; c++) {
                console.log(top[c]);
            }
        } else if (typeof top == "string") {
            console.log(top);
        }
        if (typeof middle == "object") {
            for (var c = 0; c < middle.length; c++) {
                console.log(middle[c]);
            }
        } else if (typeof middle == "string") {
            console.log(middle);
        }
        if (typeof bottom == "object") {
            for (var c = 0; c < bottom.length; c++) {
                console.log(bottom[c]);
            }
        } else if (typeof bottom == "string") {
            console.log(bottom);
        }
        return this;
    }
    saveInventory() {
        console.log("Invenntory saved.");
        return this;
    }
    loadInventory() {
        console.log("Inventory loaded.");
        return this;
    }
    setSlot(number) {
        console.log(`Slot ${number} set.`)
        return this;
    }
    giveRandomItems(items) {
        if (typeof items == "object") {
            for (var c = 0; c < items.length; c++) {
                console.log(items[c])
            }
        } else if (typeof items == "string") {
            console.log(items);
        }
        return this;
    }
    sendMessage(text) {
        var text = text.toString();
        console.log(text);
        return this;
    }
    async sendDialogue(text, delay) {
        if (typeof text == "object") {
            for (var i = 0; i < text.length; i++) {
                console.log(text[i]);
                await this.sleep(number);
            }
        } else if (typeof text == "string") {
            console.log(text);
        }
        return this;
    }
    sendHover(text, text1) {
        console.log(text+" (Hover) "+ text1);
        return this;
    }
    clearChat() {
        console.clear();
        console.log("Chat cleared.");
        return this;
    }
    playSoundEffect(sound, opts={}) {
        if (!opts.location && !opts.number) {
            
        }
        return this;
    }
    async playSequence(sound_effects, delay, opts={}) {
        if (typeof sound_effects == "object") {
            for (var t = 0; t < sound_effects.length; t++) {
                console.log("Sound "+ sound_effects[t]+" played.");
                await this.sleep(delay);
            }
        } else {
            console.log("Sound "+ sound_effects +" played.");
        }
        return this;
    }
    sendTitle(title, duration, opts={}) {
        console.log(title)
        (opts.subtitle) ? console.log(opts.subtitle) : console.log("Title sent");
    }
}