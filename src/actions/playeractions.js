
/**
 * Represents a player action.
 */
module.exports = class PlayerAction {
    constructor() {
        this.sleep = function(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
    }
    /**
     * Prints out items to the console.
     * @param {*} items 
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
     * @param {*} items 
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
     * @param {*} armor 
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
     * @param {*} item 
     */
    setOffHand(item) {
        console.log(item);
        return this;
    }
    /**
     * Prints out items to the console.
     * @param {*} items 
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
     * @param {*} top 
     * @param {*} middle 
     * @param {*} bottom 
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
     * @param {*} top 
     * @param {*} middle 
     * @param {*} bottom 
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
     * @param {*} number 
     */
    setSlot(number) {
        console.log(`Slot ${number} set.`)
        return this;
    }
    /**
     * Prints more items to the console.
     * @param {*} items 
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
     * @param {*} text 
     */
    sendMessage(text) {
        var text = text.toString();
        console.log(text);
        return this;
    }
    /**
     * Sends an array of text at a delay
     * @param {*} text 
     * @param {Number} delay 
     */
    sendDialogue(text, delay) {
        if (typeof text == "object") {
            for (var i = 0; i < text.length; i++) {
                console.log(text[i]);
                this.sleep(number);
            }
        } else if (typeof text == "string") {
            console.log(text);
        }
        return this;
    }
    /**
     * Prints a message with a hover.
     * @param {*} text 
     * @param {*} text1 
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
     * @param {String} sound 
     * @param {Number} opts.pitch
     * @param {LOCATION} opts.location 
     */
    playSoundEffect(sound, opts={}) {
        if (!opts.location && !opts.number) {
            
        }
        return this;
    }
    /**
     * Plays a sound like sendDialogue would.
     * @param {*} sound_effects 
     * @param {*} delay 
     */
    playSequence(sound_effects, delay) {
        if (typeof sound_effects == "object") {
            for (var t = 0; t < sound_effects.length; t++) {
                console.log("Sound "+ sound_effects[t]+" played.");
                this.sleep(delay);
            }
        } else {
            console.log("Sound "+ sound_effects +" played.");
        }
        return this;
    }
    /**
     * Prints a title to the console.
     * @param {*} title 
     * @param {*} duration 
     * @param {*} opts 
     */
    sendTitle(title, duration, opts={}) {
        console.log(title);
        (opts.subtitle) ? console.log(opts.subtitle) : console.log("Title sent");
    }
    /**
     *Prints a chat tag to the console.
     * @param {*} text 
     */
    setChatTag(text) {
        console.log("Chat tage set!");
    }
    /**
     * Prints a boss bar object to the console.
     * @param {*} text 
     * @param {*} health 
     * @param {*} wool 
     */
    addBossBar(text, health, wool) {
        console.log("Bossbar created: "+ {text: text, health: health, color: wool});
        return this;
    }
    /** 
     * Prints a message.
    */
    clearBossBar() {
        console.log("Boss bar cleared.");
        return this;
    }
    /**
     * Prints a message.
     * @param {*} text 
     */
    sendActionBar(text) {
        console.log(text);
        return this;
    }
    /**
     * Prints a message.
     * @param {*} color 
     */
    setChatColor(color) {
        console.log("Color: "+color);
        return this;
    }
    /**
     * Prints a location object.
     * @param {LOCATION} location 
     */
    teleport(location) {
        console.log("Player teleported: "+location);
        return this;
    }
    /**
     * Teleports to a random location.
     * @param {LOCATION} locations 
     */
    randomTeleport(locations) {
        if (typeof locations == "object") {
            console.log("Player teleported: "+locations[Math.floor(Math.random() * locations.length)]);
        } else {
            console.log("Player teleported: "+locations);
        }
        return this;
    }
    /**
     * Launches a player up.
     * @param {*} number 
     */
    launchUpward(number) {
        console.log("Player launched.");
        return this;
    }
    /**
     * Launches a player forward.
     * @param {*} number 
     */
    launchForward(number) {
        console.log("Player launched.");
        return this;
    }
    /**
     * Launches a player toward a location.
     * @param {*} location 
     * @param {*} number 
     */
    launchToward(location, number) {
        console.log("Player launched.");
        return this;
    }
    /**
     * Riding an entity.
     * @param {*} name 
     */
    rideEntity(name) {
        console.log("Found entity. Player riding "+name);
        return this;
    }
    /**
     * Damages a player.
     * @param {*} number 
     */
    damage(number) {
        console.log("Player damaged.");
        return this;
    }
    /**
     * Heals a player.
     * @param {*} number 
     */
    heal(number) {
        console.log("Player healed.");
        return this;
    }
    /**
     * Potion to apply.
     * @param {POTION} potion 
     */
    givePotionEffect(potion) {
        if (typeof potion == "object") {
            for (var z = 0; z < potion.length; z++) {
                console.log("Potion "+potion[z]+" applied.");
            }
        } else {
            console.log("Potion "+potion+" applied.");
        }
        return this;
    }
    /**
     * Potion to remove.
     * @param {POTION} potion 
     */
    removePotionEffect(potion) {
        if (typeof potion == "object") {
            for (var z = 0; z < potion.length; z++) {
                console.log("Potion "+potion[z]+" removed.");
            }
        } else {
            console.log("Potion "+potion+" removed.");
        }
        return this;
    }
    /**
     * Set xp level of the player.
     * @param {*} number 
     */
    setXpLevel(number) {
        console.log("XP level set.");
        return this;
    }
    /**
     * Sets the xp progress of the player.
     * @param {*} number 
     */
    setXpProgress(number) {
        console.log("Progress set to "+number);
        return this;
    }
    /**
     * Sets the player's food level.
     * @param {*} number 
     */
    setFoodLevel(number) {
        console.log("Food level set to"+ number);
        return this;
    }
    /**
     * Set the player's saturation level.
     * @param {*} number 
     */
    setSaturation(number) {
        console.log("Saturation set.");
        return this;
    }
    /**
     * Set the player's saturation level.
     * @param {*} number 
     */
    setMaxHealth(number) {
        console.log("Maximum health set.");
        return this;
    }
    /**
     * Set the player's saturation level.
     * @param {*} number 
     */
    setAttackSpeed(number) {
        console.log("Attack speed set.");
        return this;
    }
    /**
     * Set the player's saturation level.
     * @param {*} number 
     */
    setOnFire(number) {
        console.log("Player set on fire.");
        return this;
    }
    /**
     * Launches a projectile.
     * @param {*} projectile 
     * @param {*} text 
     * @param {*} number 
     * @param {*} location 
     * @param {*} particle_effect 
     */
    launchProjectile(projectile, number, location, particle_effect = "", text = "") {
        console.log("Projectile "+projectile+" launched.");
        return this;
    }
    /** 
     * Removes the arrows from a players body
    */
    removeArrowsinBody() {
        console.log("Arrows removed from body.")
        return this;
    }
    disguiseAsMob(spawn_egg, text="") {
        console.log("Disguised as "+spawn_egg);
        return this;
    }
    disguiseAsPlayer(text) {
        console.log("Disguised as "+ player);
        return this;
    }
    disguiseAsBlock(block, text = "", number = 0) {
        console.log("Disguised as "+ block);
        return this;
    }
    unDisguise() {
        console.log("Disguises removed.");
        return this;
    }
    hideOwnDisguise() {
        console.log("Disguise hidden.");
        return this;
    }
    enablePvp() {
        console.log("PvP enabled.");
        return this;
    }
    disablePvp() {
        console.log("PvP disabled.");
        return this;
    }
    setTime(number) {
        console.log("Time set.");
        return this;
    }
    enableFlight() {
        console.log("Flight enabled.");
        return this;
    }
    disableFlight() {
        console.log("Flight disabled.");
        return this;
    }
    allowDropItems() {
        console.log("Drop items allowed.");
        return this;
    }
    keepDeathItems() {
        console.log("Enabled keep items.");
        return this;
    }
    loseDeathItems() {
        console.log("Disabled keep items.");
        return this;
    }
    setWeatherClear() {
        console.log("Weather cleared.");
        return this;
    }
    setWeatherRain() {
        console.log("Raining.");
        return this;
    }
    enableProjColls() {
        console.log("Projectile collisions enabled.");
        return this;
    }
    disableProjColls() {
        console.log("Projectile collisions disabled.");
        return this;
    }
    enableNatRegen() {
        console.log("Natural regen enabled.");
        return this;
    }
    disableNatRegen() {
        console.log("Natural regen disabled.");
        return this;
    }
    allowBlockPlaceBreak(block = "") {
        console.log("Block breaking allowed.");
        return this;
    }
    disallowBlockPlaceBreak() {
        console.log("Block breaking disallowed.");
        return this;
    } 
    enableDeathDrops() {
        console.log("Drops enabled.");
        return this;
    }
    disableDeathDrops() {
        console.log("Drops disabled.");
        return this;
    }
    gmAdventure() {
        console.log("Gamemode set to adventure.");
        return this;
    }
    gmSurvival() {
        console.log("Gamemode set to survival.");
        return this;
    }
    rollBackChanges() {
        console.log("Changes rolled back.");
        return this;
    }
    autoRespawn() {
        console.log("Auto respawn triggered.");
        return this;
    }
    kickPlayer() {
        console.log("Player kicked."); 
        return this;
    }
    rewardCredit() {
        console.log("Credits rewarded.");
        return this;
    }
}
