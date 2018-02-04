
/**
 * Represents a player action.
 */
exports.PlayerAction = class PlayerAction {
    constructor() {
        this.sleep = function(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
    }
    /**
     * Prints out items to the console.
     * @param {*} items Array of items to print.
     */
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
    /**
     * Prints out items to the console
     * @param {*} items Array of items to print.
     */
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
    /**
     * Prints the armor out to the console.
     * @param {*} armor Array of items to print.
     */
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
    /**
     * Prints out an item to the console.
     * @param {*} item Item to print.
     */
    setOffHand(item) {
        console.log(item);
        return this;
    }
    /**
     * Prints out items to the console.
     * @param {*} items Array of items to print.
     */
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
    /** 
     * Prints "Cleared!" to the console.
    */
    clearInventory() {
        console.log("Cleared!");
        return this;
    }
    /**
     * Prints each item in an array to the console.
     * @param {*} top Array of items to print.
     * @param {*} middle Array of items to print.
     * @param {*} bottom Array of items to print.
     */
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
    /** 
     * Prints "Closed Inventory" to the console.
    */
    closeInventory() {
        console.log("Closed Inventory.");
        return this;
    }
    /**
     * Acts like ShowInventory.
     * @param {*} top Array of items to print.
     * @param {*} middle Array of items to print.
     * @param {*} bottom Array of items to print.
     */
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
    /** 
     * Prints "Inventory Saved." to the console.
    */
    saveInventory() {
        console.log("Invenntory saved.");
        return this;
    }
    /** 
     * Prints "Inventory loaded." to the console.
    */
    loadInventory() {
        console.log("Inventory loaded.");
        return this;
    }
    /**
     * Prints what slot was set.
     * @param {*} number Prints a number.
     */
    setSlot(number) {
        console.log(`Slot ${number} set.`)
        return this;
    }
    /**
     * Prints more items to the console.
     * @param {*} items Array of items to print.
     */
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
    /**
     * Prints a string to the console.
     * @param {*} text String to print.
     */
    sendMessage(text) {
        var text = text.toString();
        console.log(text);
        return this;
    }
    /**
     * Sends an array of text at a delay
     * @param {*} text String to print.
     * @param {Number} delay Delay in MS.
     */
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
    /**
     * Prints a message with a hover.
     * @param {*} text String to send.
     * @param {*} text1 String to hover with.
     */
    sendHover(text, text1) {
        console.log(text+" (Hover) "+ text1);
        return this;
    }
    /**
     * Clears the console.
     */
    clearChat() {
        console.clear();
        console.log("Chat cleared.");
        return this;
    }
    /**
     * Plays a sound effect with an optional pitch
     * @param {String} sound The sound variable object
     * @param {Number} opts.pitch Pitch of the sound to play
     * @param {LOCATION} opts.location Location of the sound
     */
    playSoundEffect(sound, opts={}) {
        if (!opts.location && !opts.number) {
            
        }
        return this;
    }
    /**
     * Plays a sound like sendDialogue would.
     * @param {*} sound_effects Sound effect(s).
     * @param {*} delay Delay in MS.
     */
    async playSequence(sound_effects, delay) {
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
    /**
     * Prints a title to the console.
     * @param {*} title String of title.
     * @param {*} duration Duration in milis
     * @param {*} opts.subtitle Optional subtitle. 
     */
    sendTitle(title, duration, opts={}) {
        console.log(title)
        (opts.subtitle) ? console.log(opts.subtitle) : console.log("Title sent");
    }
    /**
     *Prints a chat tag to the console.
     * @param {*} text String of chat tag.
     */
    setChatTag(text) {
        console.log("Chat tage set!");
    }
    /**
     * Prints a boss bar object to the console.
     * @param {*} text String of text.
     * @param {*} health Number to tell how filled.
     * @param {*} wool (String) Color.
     */
    addBossBar(text, health, wool) {

    }
}