/*
giveItems => item(s)
setItems => item(s)
setArmor => item(s)
setOffHand => item
removeItems => item(s)
clearInventory => None
ShowInventory => item(s)
closeInventory => None
expandInventory => item(s)
saveInventory => None
loadInventory => None
setSlot => Number 1-9
giveRandomItems => item(s)
*/
/*
sendMessage => text
sendDialogue => text 1-27, number
sendHover => text, text
clearChat => None
PlaySoundEffect => Sound Effect, [Number, location]
PlaySequence => Sound Effect 1-27, number, [location]
StopSoundEffect => None
PlayParticle => Particle, Location [Number]
SendTitle => text, [text], number [number, number]
Set Chat Tag => text
AddBossBar => text, number 1-100, wool
ClearBossBar => None
SendActionBar => text
setChatColor => text
teleport => location
randomTeleport => location(s)
launchUpward => number
launchForward => number
launchToward => location, [number]
rideEntity => text

damage => number
heal => number
givePotionEffect => potion(s)
removePotionEffect => potion(s)
setXpLevel => number
setXpProgress => number 1-100
setFoodLevel => number 1-20
setSaturation => number 1-20
setMaxHealth => number
setAttackSpeed => number
setOnFire => number
*/
launchProjectile => Projectile, [text], number, location, particle effect
removeArrowsInBody => None

disguiseAsMob => spawnEgg, [text]
disguiseAsPlayer => text
disguiseAsBlock => block, [text, number]
unDisguise => None
HideOwnDisguise => None
enablePvp => None
disablePvp => None
setTime => number 0-24000
enableFlight => None
disableFlight => None
allowDropItems => None
keepDeathItems => None
loseDeathItems => None
setWeatherClear => None
setWeatherRain => None
enableProjColls => None
disableProjColls => None
enableNatRegen => None
disableNatRegen => None
allowBlockPlaceBreak => [block] or [None]
disallowBlockPlaceBreak => None
enableDeathDrops => None
disableDeathDrops => None
gmAdventure => None
gmSurvival => None

rollBackChanges => None
autoRespawn => None
kickPlayer => None
rewardCredit => None

this is for player events only;