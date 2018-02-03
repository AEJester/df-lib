exports.event = class Event {
    constructor() {
        this.events = [
            "PlayerLeftClick",
            "PlayerRightClick",
            "PlayerSneak",
            "PlayerUnsneak",
            "PlayerPickupItem",
            "PlayerDropItem",
            "PlayerDamagePlayer",
            "PlayerKillPlayer",
            "PlayerTakeDamage",
            "PlayerDamageMob",
            "MobDamagePlayer",
            "PlayerPlaceBlock",
            "PlayerBreakBlock"
        ];
    }
    isEvent(event) {
        for (var i = 0; i < this.events.length; i++) {
            if (!event == this.events[i]) {
                throw new Error("Event not recognised! Please use a different event.")
            }
        }
        return this;
    }
}
