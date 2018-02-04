/*
giveItems => item(s)
setItems => item(s)
setArmor => item(s)
setOffHand => item
removeItems => item(s)
clearInventory => None
ShowInventory => item(s)
closeInventory => None
expandInventory => item(s)
saveInventory => None
loadInventory => None
setSlot => Number 1-9
giveRandomItems => item(s)

sendMessage => text
sendDialogue => text 1-27, number
sendHover => text, text
clearChat => None
PlaySoundEffect => Sound Effect, [Number, location]
PlaySequence => Sound Effect 1-27, number, [location]
StopSoundEffect => None
PlayParticle => Particle, Location [Number]
SendTitle => text, [text], number [number, number]
Set Chat Tag => text
AddBossBar => text, number 1-100, wool
ClearBossBar => None
SendActionBar => text
setChatColor => text

teleport => location
randomTeleport => location(s)
launchUpward => number
launchForward => number
launchToward => location, [number]
rideEntity => text

damage => number
heal => number
givePotionEffect => potion(s)
removePotionEffect => potion(s)
setXpLevel => number
setXpProgress => number 1-100
setFoodLevel => number 1-20
setSaturation => number 1-20
setMaxHealth => number
setAttackSpeed => number
setOnFire => number

launchProjectile => Projectile, [text], number, location, particle effect
removeArrowsInBody => None

disguiseAsMob => spawnEgg, [text]
disguiseAsPlayer => text
disguiseAsBlock => block, [text, number]
unDisguise => None
HideOwnDisguise => None
enablePvp => None
disablePvp => None
setTime => number 0-24000
enableFlight => None
disableFlight => None
allowDropItems => None
keepDeathItems => None
loseDeathItems => None
setWeatherClear => None
setWeatherRain => None
enableProjColls => None
disableProjColls => None
enableNatRegen => None
disableNatRegen => None
allowBlockPlaceBreak => [block] or [None]
disallowBlockPlaceBreak => None
enableDeathDrops => None
disableDeathDrops => None
gmAdventure => None
gmSurvival => None

rollBackChanges => None
autoRespawn => None
kickPlayer => None
rewardCredit => None

this is for player events only;
*/
module.exports = class PlayerAction {
    constructor() {
        
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
}