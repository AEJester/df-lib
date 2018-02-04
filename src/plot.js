const events = require("./events/events.js");
module.exports = class Plot {
    constructor(name, icon) {
        this.variables = [];
        this.savedVars = [];
        this.plotName = name;
        this.plotIcon = icon;
        this.functions = [];
    }
}