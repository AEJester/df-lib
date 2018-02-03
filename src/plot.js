const events = require("./events/events.js");
exports.plot = class Plot {
    constructor(name, icon) {
        this.variables = [];
        this.savedVars = [];
        this.plotName = name;
        this.plotIcon = icon;
        this.functions = [];
    }
    onEvent(event, callback) {
        if (!typeof callback == "function") {
            throw new Error("The callback for an event must be a function");
        }
        events.isEvent(event);
        return this;
    }
    createLoop(ticks) {
        return this;
    }
    createFunction(name) {
        return this;
    }
    setVariable(variable, value, saved = false) {
        this.variables.push({
            variable: variable,
            value: value,
            saved: saved
        });
        return this;
    }
}