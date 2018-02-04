module.exports = class Loop {
    constructor(ticks = 20, func) {
        if (typeof func !== "function") {
            throw new Error("A function is not present.")
        }
        if (typeof ticks !== "number") {
            throw new Error("Ticks are not a number.")
        }
        this.ticks = ticks;
        this.func = func;
    }
    startLoop() {
        setInterval(ticks, func);
        return this;
    }
    stopLoop() {
        clearInterval();
        return this;
    }
}