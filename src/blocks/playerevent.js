module.exports = class PlayerEvent {
    constructor(event) {
        this.events = [
            "PlayerJoin",
            "PlayerLeave",
            "PlayerRightClick",
            "PlayerLeftClick",
            "PlayerRespawn",
            "PlayerDeath",
            "PlayerSneak",
            "PlayerUnsneak",
            "PlayerDamagePlayer",     
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
            "PlayerBreakBlock",
            "PlayerPickupItem",
            "PlayerDropItem",
            "PlayerConsume",
            "PlayerSwapHands",
            "PlayerChangeSlot",
            "PlayerStartSprint",
            "PlayerStopSprint",
            "PlayerWalk",
            "PlayerTakeFallDamage"
        ];
        this.event = event;
        for (var i = 0; i < this.events.length; i++) {
            if (this.event !== this.events[i]) {
                throw new Error("Event not recognised! Please use a different event.")
            }
        }
    }
    
}
