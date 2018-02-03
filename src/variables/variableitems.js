exports.NUMBER = class NUMBER {
    constructor(value) {
        this.value = value;
        this.returned = "";
    }
    get() {
        this.returned = this.value.toString();
        return this.returned;
    }
    set(value) {
        this.value = value;
        return this;
    }
}