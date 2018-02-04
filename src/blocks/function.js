module.exports = class Fn {
    constructor(name, func) {
        if (typeof func !== "function") {
            throw new Error("A function is not present.")
        }
        if (typeof name !== "string") {
            throw new Error("There is no name for the function.")
        }
        this.name = name;
        this.func = func;
    }
    callFunction() {
        if (typeof func !== "function") {
            throw new Error("A function is not present.")
        }
        return eval(this.func);
    }
}