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
        return events.isEvent(event);;
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
    readVariable(variable) {
        for (var x = 0; x < this.variables.length; x++) {
            if (!typeof this.variables[x].variable == "string") {
                throw new Error("unreadable variable at position "+x+". Variable names must be a string.");
            } else {
                var returned = this.variables[x];
            }
        }
        return returned;
    }
}