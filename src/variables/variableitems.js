exports.NUMBER = class NUMBER {
    constructor(value) {
        if (typeof value !== "number") {
            throw new Error("Value of a NUMBER must not be a "+ typeof value)
        }
        this.value = value;
        this.returned = "";
    }
    get() {
        this.returned = this.value.toString();
        return this.returned;
    }
    set(value) {
        if (typeof value !== "string") {
            throw new Error("Value of a TEXT must not be a "+ typeof value)
        }
        this.value = value;
        return this;
    }
}

exports.TEXT = class TEXT {
    constructor(value) {
        if (typeof value !== "string") {
            throw new Error("Value of a TEXT must not be a "+ typeof value)
        }
        this.value = value;
        this.returned = "";
    }
    get() {
        this.returned = this.value;
        return this.returned;
    }
    set(value) {
        if (typeof value !== "string") {
            throw new Error("Value of a TEXT must not be a "+ typeof value)
        }
        this.value = value;
        return this;
    }
}

exports.LOCATION = class LOCATION {
    constructor(x, y, z, rotation) {
        if (typeof x !== "number" || typeof y !== "number" || typeof z !== "number" || typeof rot !== "number") {
            throw new Error("Value of an axis must not be a "+ typeof value)
        }
        this.x = x;
        this.y = y;
        this.z = z;
        this.rot = rot;
    }
    get() {
        return {x: this.x, y: this.y, z: this.z, rot: this.rot};
    }
    set(x, y, z, rotation) {
        if (typeof x !== "number" || typeof y !== "number" || typeof z !== "number" || typeof rot !== "number") {
            throw new Error("Value of an axis must not be a "+ typeof value)
        }
        this.x = x;
        this.y = y;
        this.z = z;
        this.rot = rot;
        return this;
    }
    setX(x) {
        if (typeof x !== "number") {
            throw new Error("Value of an axis must not be a "+ typeof value)
        }
        this.x = x;
        return this;
    }
    setY(y) {
        if (typeof y !== "number") {
            throw new Error("Value of an axis must not be a "+ typeof value)
        }
        this.y = y;
        return this;
    }
    setZ(z) {
        if (typeof z !== "number") {
            throw new Error("Value of an axis must not be a "+ typeof value)
        }
        this.z = z;
        return this;
    }
    setRot(rot) {
        if (typeof rot !== "number") {
            throw new Error("Value of an axis must not be a "+ typeof value)
        }
        this.rot = rot;
        return this;
    }
}

exports.SOUND_EFFECT = class SOUND_EFFECT {
    constructor(effect) {
        if (typeof effect !== "string") {
            throw new Error("Value of a SOUND_EFFECT must not be a "+ typeof value)
        }
        this.effect = effect;
    }
    get() {
        return this.effect;
    }
    set(effect) {
        if (typeof effect !== "string") {
            throw new Error("Value of a SOUND_EFFECT must not be a "+ typeof value)
        }
        this.effect = effect;
        return this;
    }
}

exports.POTION_EFFECT = class POTION_EFFECT {
    constructor(effect, multiplyer, duration) {
        if (!typeof effect == "string") {
            throw new Error("Value of a POTION_EFFECT must not be a "+ typeof value)
        }
        if (typeof duration !== "number" || typeof multiplyer !== "number") {
            throw new Error("Duration/Multiplyer of a POTION_EFFECT must not be a "+ typeof value)
        }
        this.effect = effect;
        this.multiplyer = multiplyer;
        this.duration = duration;
    }
    get() {
        return {effect: this.effect, duration: this.duration, multiplyer: this.multiplyer};
    }
    set(effect, multiplyer, duration) {
        if (typeof effect !== "string") {
            throw new Error("Value of a POTION_EFFECT must not be a "+ typeof value)
        }
        if (typeof duration !== "number" || typeof multiplyer !== "number") {
            throw new Error("Duration/Multiplyer of a POTION_EFFECT must not be a "+ typeof value)
        }
        this.effect = effect;
        this.multiplyer = multiplyer;
        this.duration = duration;
        return this;
    }
    setEffect() {
        if (typeof effect !== "string") {
            throw new Error("Value of a POTION_EFFECT must not be a "+ typeof value)
        }
        this.effect = effect;
        return this;
    }
    setMultiplyer(multiplyer) {
        if (typeof multiplyer !== "number") {
            throw new Error("Multiplyer of a POTION_EFFECT must not be a "+ typeof value)
        }
        this.multiplyer = multiplyer;
        return this;
    }
    setDuration(duration) {
        if (typeof duration !== "number") {
            throw new Error("Duration of a POTION_EFFECT must not be a "+ typeof value)
        }
        this.duration = duration;
        return this;
    }
}

exports.VARIABLE = class VARIABLE {
    constructor(name, value, saved = false) {
        this.name = name;
        this.value = value;
        this.saved = saved;
    }
    get() {
        return {name: this.name, value: this.value, saved: this.saved}
    }
    set(name, value, saved = false) {
        if (typeof name !== "string" || typeof value !== "string" || typeof saved !== "boolean") {
            throw new Error("Invalid parameter in VARIABLE");
        }
        this.name = name;
        this.value = value;
        this.saved = saved;
        return this;
    }
    setValue(value) {
        if (typeof value !== "string") {
            throw new Error("Invalid parameter in VARIABLE");
        }
        this.value = value;
        return this;
    }
    setSaved(saved) {
        if (typeof saved !== "boolean") {
            throw new Error("Invalid parameter in VARIABLE");
        }
        this.saved = saved;
        return this;
    }
}

exports.SPAWN_EGG = class SPAWN_EGG {
    constructor(name) {
        this.name = name;
    }
    get() {
        return this.name;
    }
    set(name) {
        this.name = name;
        return this;
    } 
}

exports.VALUE = class VALUE {
    constructor(name) {
        this.name = name;
    }
    get() {
        return this.name;
    }
    set(name) {
        this.name = name;
        return this;
    } 
}