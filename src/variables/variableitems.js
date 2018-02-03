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