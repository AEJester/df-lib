exports.event = class Event {
    constructor() {
        this.events = [
            "PlayerJoin",
            "PlayerLeave",
            "PlayerRightClick",
            "PlayerLeftClick",
            "PlayerRespawn",
            "PlayerDeath",
            "PlayerSneak",
            "PlayerUnsneak",
            "PlayerDamagePlayer"     
            "PlayerProjDamagePlayer", 
            "PlayerTakeDamage",
            "PlayerKillPlayer",
            "PlayerKillMob",
            "MobKillPlayer",
            "PlayerDamageMob",
            "MobDamagePlayer",
            "ProjectileHit",
            "PlayerCommand",
            "PlayerClickItem",
            "PlayerClickEntity",
            "PlayerPlaceBlock",
            "PlayerBreakBlock"
            "PlayerPickupItem",
            "PlayerDropItem",
            "PlayerConsume",
            "PlayerSwapHands",
            "PlayerChangeSlot",
            "PlayerStartSprint",
            "PlayerStopSprint",
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
