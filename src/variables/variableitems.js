exports.NUMBER = class NUMBER {
    constructor(value) {
        if (!typeof value == "number") {
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
        if (!typeof value == "string") {
            throw new Error("Value of a TEXT must not be a "+ typeof value)
        }
        this.value = value;
        return this;
    }
}
exports.TEXT = class TEXT {
    constructor(value) {
        if (!typeof value == "string") {
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
        this.value = value;
        return this;
    }
}
exports.LOCATION = class LOCATION {
    constructor(x, y, z, rotation) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.rot = rot;
    }
    get() {
        return {x: this.x, y: this.y, z: this.z, rot: this.rot};
    }
    set(x, y, z, rotation) {
        if (!typeof x == "number" || !typeof y == "number" || !typeof z == "number" || !typeof rot == "number") {
            throw new Error("Value of an axis must not be a "+ typeof value)
        }
        this.x = x;
        this.y = y;
        this.z = z;
        this.rot = rot;
        return this;
    }
    setX(x) {
        if (!typeof x == "number") {
            throw new Error("Value of an axis must not be a "+ typeof value)
        }
        this.x = x;
        return this;
    }
    setY(y) {
        if (!typeof y == "number") {
            throw new Error("Value of an axis must not be a "+ typeof value)
        }
        this.y = y;
        return this;
    }
    setZ(z) {
        if (!typeof z == "number") {
            throw new Error("Value of an axis must not be a "+ typeof value)
        }
        this.z = z;
        return this;
    }
    setRot(rot) {
        if (!typeof rot == "number") {
            throw new Error("Value of an axis must not be a "+ typeof value)
        }
        this.rot = rot;
        return this;
    }
}