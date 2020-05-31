var generic = 
[{
	number:11,
	title:'SECURE OBJECTIVE 1',
	kind:'Capture and Control',
	flavor:'A vital objective has been identified in your vicinity. You are ordered to hold it at any cost.',
	body:'Score 1 victory point if you control objective marker 1 at the end of your turn.'
},{
	number:12,
	title:'SECURE OBJECTIVE 2',
	kind:'Capture and Control',
	flavor:'A vital objective has been identified in your vicinity. You are ordered to hold it at any cost.',
	body:'Score 1 victory point if you control objective marker 2 at the end of your turn.'
},{
	number:13,
	title:'SECURE OBJECTIVE 3',
	kind:'Capture and Control',
	flavor:'A vital objective has been identified in your vicinity. You are ordered to hold it at any cost.',
	body:'Score 1 victory point if you control objective marker 3 at the end of your turn.'
},{
	number:14,
	title:'SECURE OBJECTIVE 4',
	kind:'Capture and Control',
	flavor:'A vital objective has been identified in your vicinity. You are ordered to hold it at any cost.',
	body:'Score 1 victory point if you control objective marker 4 at the end of your turn.'
},{
	number:15,
	title:'SECURE OBJECTIVE 5',
	kind:'Capture and Control',
	flavor:'A vital objective has been identified in your vicinity. You are ordered to hold it at any cost.',
	body:'Score 1 victory point if you control objective marker 5 at the end of your turn.'
},{
	number:16,
	title:'SECURE OBJECTIVE 6',
	kind:'Capture and Control',
	flavor:'A vital objective has been identified in your vicinity. You are ordered to hold it at any cost.',
	body:'Score 1 victory point if you control objective marker 6 at the end of your turn.'
}];

var salamander = 
[{
    number:11,
    title:'THE PROMETHEAN CREED',
    kind:'Salamanders',
    flavor:'No objective worth obtaining is easily taken.',
    body:'When this Tactical Objective is generated, your opponent must nominate one objective marker. Score D3 victory points if you control that objective marker at the end of two consecutive turns.'
},{
    number:12,
    title:'LEGACY OF ISSTVAN',
    kind:'Salamanders',
    flavor:'Stand your ground and hold the line no matter the odds, just as your forebears did upon Isstvan.',
    body:'Score 1 victory point if at least three SALAMANDERS units from your army remained stationary in every phase of this turn whilst wholly within your deployment zone, and at least one enemy unit was destroyed as a result of an attack made by one of these units.'
},{
    number:13,
    title:'WEATHER THE STORM',
    kind:'Salamanders',
    flavor:'The Salamanders do not falter in the face of the enemy’s attack – they endure only to emerge victorious.',
    body:'Score 1 victory point if this Tactical Objective has been active at the end of two consecutive turns. Discard this Tactical Objective immediately if at least three SALAMANDERS units from your army are destroyed in the same turn.'
},{
    number:14,
    title:'VULKAN’S TASK',
    kind:'Salamanders',
    flavor:'Four of the Artefacts of Vulkan remain lost in the galaxy. Investigate every clue to their whereabouts.',
    body:'Score 1 victory point if you control more objective markers at the end of your turn than your opponent does.'
},{
    number:15,
    title:'LOOK THEM IN THE EYES',
    kind:'Salamanders',
    flavor:'Prove the superiority of Vulkan’s sons by sundering your foes when they can see your fury writ clear in your face.',
    body:'Score 1 victory point if at least one enemy unit was destroyed this turn whilst it was wholly within 6" of one or more SALAMANDERS units from your army. Score D3 victory points instead if three or more enemy units were destroyed in this way this turn.'
},{
    number:16,
    title:'FIRES OF NOCTURNE',
    kind:'Salamanders',
    flavor:'The Salamanders are renowned for their mastery of flamecraft. Burn the foes of the Imperium to ash.',
    body:'Score 2 victory points for each enemy unit that was destroyed this turn as a result of an attack made with a flame weapon or melta weapon by a SALAMANDERS unit from your army (to a maximum of 6 victory points).'
}];

var deathguard = 
[{
    number:11,
    title:'DEATH MARCH',
    kind:'Death Guard',
    flavor:'The slow, inexorable advance of the Death Guard has been the death knell of worlds beyond count.',
    body:'Score 1 victory point if at least three friendly DEATH GUARD INFANTRY units are completely within your opponent’s half of the battlefield.'
},{
    number:12,
    title:'DISGUSTING DEVOTIONS',
    kind:'Death Guard',
    flavor:'Nurgle despises physical frailty and blesses his devoted followers with bloated bodies filled with decay that they may forever forgo its touch.',
    body:'Whilst this Tactical Objective is active, keep a tally of the number of successful Disgustingly Resilient rolls you make in each turn. Score 1 victory point if you successfully made at least 7 Disgustingly Resilient rolls during this turn.'
},{
    number:13,
    title:'GRANDFATHER’S GIFT',
    kind:'Death Guard',
    flavor:'Nurgle enjoys little more than watching his followers spread his diseases upon the mortal races.',
    body:'Score 1 victory point if at least one enemy unit was completely destroyed during your turn, and the last model in the unit was slain by an attack made by a DEATH GUARD model attacking with a plague weapon (i.e. a plaguesword, the Plague Skull of Glothila or any weapon with the Plague Weapon ability).'
},{
    number:14,
    title:'SPREAD CONTAGION',
    kind:'Death Guard',
    flavor:'The lords of the Death Guard have survived for countless centuries, enduring to spread disease to every world they invade.',
    body:'When this Tactical Objective is generated, nominate one of your DEATH GUARD CHARACTERS. Score 1 victory point if this character is still alive at the end of the game.'
},{
    number:15,
    title:'SYMBOL OF THE FLY LORD',
    kind:'Death Guard',
    flavor:'The symbolism of the three-eyed fly holds great meaning to the worshippers of the Plague God.',
    body:'Score D3 victory points if you control exactly three objective markers at the end of the turn – no more, no less.'
},{
    number:16,
    title:'DEATH BEGETS LIFE',
    kind:'Death Guard',
    flavor:'To the followers of Nurgle, the endless cycle of sowing death that new life may bloom is nothing less than a sacred act.',
    body:'Whilst this Tactical Objective is active, keep a tally of the number of enemy models you kill in each of your turns. Score 1 victory point if you killed at least 7 enemy models this turn, and 1 additional victory point for every 7 models killed in excess of this (up to a maximum of 7 victory points).'
}];

var ironwarriors = [{
    number:11,
    title:'REPEL INVADERS',
    kind:'Iron Warriors',
    flavor:'An Iron Warriors battle line is an unbreachable fortress.',
    body:'Score D3 victory points if an enemy unit wholly within your deployment zone was destroyed as a result of an attack made by an IRON WARRIORS model from your army this turn.'
},
{
    number:12,
    title:'TACTICAL DESTRUCTION',
    kind:'Iron Warriors',
    flavor:'The enemy seeks to hold a valuable position against you. Attest to their folly by annihilating them.',
    body:'Score 1 victory point for each enemy unit controlling an objective marker at the start of the turn that was destroyed as a result of an attack made by an IRON WARRIORS model from your army this turn (to a maximum of 6 victory points).'
},
{
    number:13,
    title:'WANTON OBLITERATION',
    kind:'Iron Warriors',
    flavor:'Prove the superiority of the techno-virus by using it to ensure the foe’s annihilation.',
    body:'Score 1 victory point if an enemy unit was destroyed as a result of an attack made by an IRON WARRIORS CULT OF DESTRUCTION or IRON WARRIORS DAEMON ENGINE model from your army this turn.'
},
{
    number:14,
    title:'HOLD AND FORTIFY',
    kind:'Iron Warriors',
    flavor:'Hold this crucial position and let none dispute your control of it.',
    body:'When this Tactical Objective is generated, nominate one objective marker. Score D3 victory points if you control that objective marker at the end of your next turn (or at the end of the game).'
},
{
    number:15,
    title:'MASTERS OF DEMOLITION',
    kind:'Iron Warriors',
    flavor:'The Iron Warriors have no equal when it comes to demolition.',
    body:'Score 1 victory point if an enemy unit entirely on or within a terrain feature, or an enemy BUILDING model, was destroyed as a result of an attack made by an IRON WARRIORS model from your army this turn.'
},
{
    number:16,
    title:'DESTROY THEIR ARMOURY',
    kind:'Iron Warriors',
    flavor:'Without vehicle support, the enemy’s strength is nothing compared to your own.',
    body:'Score 1 victory point if an enemy VEHICLE model was destroyed as a result of an attack made by an IRON WARRIORS model from your army this turn. If an enemy TITANIC model was destroyed as a result of an attack made by an IRON WARRIORS model from your army this turn, score D3 victory points instead.'
}];

var bloodangels = [{
    number:11,
    title:'VALOUR OF THE ANGELS',
    kind:'Blood Angels',
    flavor:'There are few warriors as noble as the sons of Sanguinius. Let the enemy’s champions witness how true heroes make war.',
    body:'Score 1 victory point if at least 1 enemy CHARACTER was slain by one of your BLOOD ANGELS units in the Fight phase of this turn. Score D3 victory points instead if at least 1 enemy CHARACTER was slain in the Fight phase of this turn by an attack made by one of your BLOOD ANGELS CHARACTERS.'
},
{
    number:12,
    title:'AERIAL ASSAULT',
    kind:'Blood Angels',
    flavor:'The scream of turbines and the roar of jump packs shall be the enemy’s funeral dirge.',
    body:'Score 1 victory point if at least 1 enemy unit was destroyed in your turn, and the last model in the enemy unit was slain by an attack made by a BLOOD ANGELS unit that can FLY. Score D3 victory points instead if at least 1 enemy unit was destroyed in this manner by a unit that arrived as reinforcements during the turn.'
},
{
    number:13,
    title:'PURITY THROUGH BLOODSHED',
    kind:'Blood Angels',
    flavor:'The curse of the Blood Angels can become a potent weapon if harnessed with discipline and control.',
    body:'Score 1 victory point if an enemy unit was destroyed during the Fight phase of this turn and the last model in the enemy unit was slain by an attack made by a BLOOD ANGELS unit. Score D3 victory points instead if at least 3 enemy units were so destroyed, or D3+3 victory points if at least 6 enemy units were so destroyed.'
},
{
    number:14,
    title:'DECAPITATING STRIKE',
    kind:'Blood Angels',
    flavor:'Sanguinius always taught that, to slay the beast, one needs only to remove the head.',
    body:'When this Tactical Objective is generated, work out which of your opponent’s CHARACTERS currently on the battlefield has the highest Power Rating. If 2 or more eligible CHARACTERS have the same Power Rating, choose one. Score 1 victory point if that character was slain by a BLOOD ANGELS unit this turn.'
},
{
    number:15,
    title:'SWIFT ADVANCE',
    kind:'Blood Angels',
    flavor:'Take the fight to your foe, and show them that nowhere is safe from the retribution of the Blood Angels.',
    body:'Score 1 victory point if at least 3 of your BLOOD ANGELS units Advanced this turn.'
},
{
    number:16,
    title:'NOBLE SELF-SACRIFICE',
    kind:'Blood Angels',
    flavor:'To be a hero of the Imperium is to walk a path towards a martyr’s death; the only question is how dearly you will sell your life.',
    body:'Score 1 victory point for each of your BLOOD ANGELS CHARACTERS that was slain this turn.'
}];

var common =
[{
	number:21,
	title:'SECURE OBJECTIVE 1',
	kind:'Take and Hold',
	flavor:'A vital objective has been identified in your vicinity. You are ordered to hold it at any cost.',
	body:'Score 1 victory point if you control objective marker 1 at the end of your turn.'
},{
	number:22,
	title:'SECURE OBJECTIVE 2',
	kind:'Take and Hold',
	flavor:'A vital objective has been identified in your vicinity. You are ordered to hold it at any cost.',
	body:'Score 1 victory point if you control objective marker 2 at the end of your turn.'
},{
	number:23,
	title:'SECURE OBJECTIVE 3',
	kind:'Take and Hold',
	flavor:'A vital objective has been identified in your vicinity. You are ordered to hold it at any cost.',
	body:'Score 1 victory point if you control objective marker 3 at the end of your turn.'
},{
	number:24,
	title:'SECURE OBJECTIVE 4',
	kind:'Take and Hold',
	flavor:'A vital objective has been identified in your vicinity. You are ordered to hold it at any cost.',
	body:'Score 1 victory point if you control objective marker 4 at the end of your turn.'
},{
	number:25,
	title:'SECURE OBJECTIVE 5',
	kind:'Take and Hold',
	flavor:'A vital objective has been identified in your vicinity. You are ordered to hold it at any cost.',
	body:'Score 1 victory point if you control objective marker 5 at the end of your turn.'
},{
	number:26,
	title:'SECURE OBJECTIVE 6',
	kind:'Take and Hold',
	flavor:'A vital objective has been identified in your vicinity. You are ordered to hold it at any cost.',
	body:'Score 1 victory point if you control objective marker 6 at the end of your turn.'
},{
	number:31,
	title:'DEFEND OBJECTIVE 1',
	kind:'Storm and Defend',
	flavor:'You are charged with the defence of a key objective. It must not be permitted to fall into enemy hands.',
	body:'Score 2 victory points if you control objective marker 1 at the end of two consecutive turns.'
},{
	number:32,
	title:'DEFEND OBJECTIVE 2',
	kind:'Storm and Defend',
	flavor:'You are charged with the defence of a key objective. It must not be permitted to fall into enemy hands.',
	body:'Score 2 victory points if you control objective marker 2 at the end of two consecutive turns.'
},{
	number:33,
	title:'DEFEND OBJECTIVE 3',
	kind:'Storm and Defend',
	flavor:'You are charged with the defence of a key objective. It must not be permitted to fall into enemy hands.',
	body:'Score 2 victory points if you control objective marker 3 at the end of two consecutive turns.'
},{
	number:34,
	title:'DEFEND OBJECTIVE 4',
	kind:'Storm and Defend',
	flavor:'You are charged with the defence of a key objective. It must not be permitted to fall into enemy hands.',
	body:'Score 2 victory points if you control objective marker 4 at the end of two consecutive turns.'
},{
	number:35,
	title:'DEFEND OBJECTIVE 5',
	kind:'Storm and Defend',
	flavor:'You are charged with the defence of a key objective. It must not be permitted to fall into enemy hands.',
	body:'Score 2 victory points if you control objective marker 5 at the end of two consecutive turns.'
},{
	number:36,
	title:'DEFEND OBJECTIVE 6',
	kind:'Storm and Defend',
	flavor:'You are charged with the defence of a key objective. It must not be permitted to fall into enemy hands.',
	body:'Score 2 victory points if you control objective marker 6 at the end of two consecutive turns.'
},{
	number:41,
	title:'ADVANCE',
	kind:'Seize Ground',
	flavor:'You must advance swiftly into no man’s land to prevent your opponent seizing the battlefield.',
	body:'Score 1 victory point if no unit from your army is within your deployment zone at the end of your turn.'
},{
	number:42,
	title:'BEHIND ENEMY LINES',
	kind:'Seize Ground',
	flavor:'Break through the foe’s army and cut off their lines of escape.',
	body:'Score 1 victory point if you have at least one unit completely within the enemy’s deployment zone at the end of your turn. If you have at least three units within your opponent’s deployment zone at the end of your turn, score D3 victory points instead.'
},{
	number:43,
	title:'HOLD THE LINE',
	kind:'Seize Ground',
	flavor:'It is critical that no foe breaks through your defences. Maintain a strong rearguard to proteyour supply lines.',
	body:'Score 1 victory point if you have at least three units completely within your deployment zone, and your opponent has no models within your deployment zone, at the end of your turn. This objective cannot be <a href="http://wahapedia.ru/wh40k8ed/the-rules/matched-play#Achieving-Tactical-Objectives">achieved</a> on your first turn.'
},{
	number:44,
	title:'MISSION CRITICAL OBJECTIVE',
	kind:'Seize Ground',
	flavor:'This area is of extreme importance. You are to lead an immediate all-out assault to capture it.',
	body:'When this Tactical Objective is <a href="http://wahapedia.ru/wh40k8ed/the-rules/matched-play#Generating-Tactical-Objectives">generated</a>, roll a D6. Score 1 victory point if you control the corresponding <a href="http://wahapedia.ru/wh40k8ed/the-rules/matched-play#Objective-Markers">objective marker</a>. If the corresponding objective marker was controlled by your opponent at the start of your turn and you control it at the end of your turn, score D3 victory points instead.'
},{
	number:45,
	title:'SUPREMACY',
	kind:'Seize Ground',
	flavor:'The battleground is won one yard at a time. Continue to establish a strong military presence in the area.',
	body:'Score D3 victory points if you control any three <a href="http://wahapedia.ru/wh40k8ed/the-rules/matched-play#Objective-Markers">objective markers</a> at the end of your turn.'
},{
	number:46,
	title:'DOMINATION',
	kind:'Seize Ground',
	flavor:'Dominate the field of battle. Storm every site of tactical import and leave the foe with no place to hide.',
	body:'Score D3+3 victory points if you control every <a href="http://wahapedia.ru/wh40k8ed/the-rules/matched-play#Objective-Markers">objective marker</a> on the battlefield at the end of your turn.'
},{
	number:51,
	title:'OVERWHELMING FIREPOWER',
	kind:'Purge',
	flavor:'A show of strength is required. Scour the enemy from the face of the battlefield with the use of extreme firepower.',
	body:'Score 1 victory point if an enemy unit was destroyed during the <a href="http://wahapedia.ru/wh40k8ed/the-rules/core-rules#3.-SHOOTING-PHASE">Shooting phase</a> of your turn. If 3 or more enemy units were destroyed during the Shooting phase of your turn, score D3 victory points instead.'
},{
	number:52,
	title:'BLOOD AND GUTS',
	kind:'Purge',
	flavor:'Close with the foe and engage them in hand-to-hand combat. Show them no quarter, no mercy.',
	body:'Score 1 victory point if an enemy unit was destroyed during the <a href="http://wahapedia.ru/wh40k8ed/the-rules/core-rules#5.-FIGHT-PHASE">Fight phase</a> of this turn. If 3 or more enemy units were destroyed during the Fight phase of this turn, score D3 victory points instead.'
},{
	number:53,
	title:'NO PRISONERS',
	kind:'Purge',
	flavor:'Exterminate your enemy, show them no mercy.',
	body:'Score 1 victory point if an enemy unit was destroyed during your turn. If between 3 and 5 enemy units were destroyed during your turn, score D3 victory points instead. If 6 or more enemy units were destroyed during your turn, score D3+3 victory points instead.'
},{
	number:54,
	title:'AREA DENIAL',
	kind:'Purge',
	flavor:'It is critical that this area is dominated. No enemy vanguard or guerilla units can be allowed to disrupt our plans.',
	body:'Score 1 victory point if there are no enemy models within 6" of the centre of the battlefield at the end of your turn. If there are no enemy models within 12" of the centre of the battlefield at the end of your turn, score D3 victory points instead.'
},{
	number:55,
	title:'PSYCHOLOGICAL WARFARE',
	kind:'Purge',
	flavor:'Break the enemy’s morale, make your foes tremble before you.',
	body:'Score 1 victory point if your opponent failed a <span class="tooltip tooltipstered" data-tooltip-content="#tooltip_content00012">Morale test</span> during this turn. If your opponent failed 3 or more Morale tests, score D3 victory points instead.'
},{
	number:56,
	title:'MASTER THE WARP',
	kind:'Purge',
	flavor:'Desperate times call for desperate measures – harness the power of the warp to defeat your foes.',
	body:'Score 1 victory point if you <span class="tooltip tooltipstered" data-tooltip-content="#tooltip_content00015">manifested</span> or <span class="tooltip tooltipstered" data-tooltip-content="#tooltip_content00031">denied</span> a psychic power during this turn. If you manifested or denied 3 or more <a href="http://wahapedia.ru/wh40k8ed/the-rules/core-rules#Psychic-Powers">psychic powers</a>, score D3 victory points instead.'
},{
	number:61,
	title:'KINGSLAYER',
	kind:'Annihilation',
	flavor:'The enemy commander is a powerful and effective leader and should be slain as quickly as possible.',
	body:'Score D3 victory points if your opponent’s <a href="http://wahapedia.ru/wh40k8ed/the-rules/core-rules#The-Warlord">Warlord</a> has been destroyed during this or any previous turn.'
},{
	number:62,
	title:'WITCH HUNTER',
	kind:'Annihilation',
	flavor:'The presence of enemy psykers can no longer be tolerated. Eliminate them with extreme prejudice.',
	body:'Score 1 victory point if at least one enemy <span class="tooltip tooltipstered" data-tooltip-content="#tooltip_content00007">PSYKER</span> was destroyed during this turn.'
},{
	number:63,
	title:'SCOUR THE SKIES',
	kind:'Annihilation',
	flavor:'It is vital to maintain air superiority.',
	body:'Score 1 victory point if at least one enemy unit that can <a href="http://wahapedia.ru/wh40k8ed/the-rules/core-rules#Moving">FLY</a> was destroyed during this turn.'
},{
	number:64,
	title:'ASSASSINATE',
	kind:'Annihilation',
	flavor:'The enemy looks to their champions for courage. Identify and assassinate them.',
	body:'Score 1 victory point if at least one enemy <span class="tooltip tooltipstered" data-tooltip-content="#tooltip_content00003">CHARACTER</span> was destroyed during this turn. If 3 or more enemy CHARACTERS were destroyed during this turn, score D3 victory points instead.'
},{
	number:65,
	title:'BIG GAME HUNTER',
	kind:'Annihilation',
	flavor:'The larger the foe, the greater the glory…',
	body:'Score 1 victory point if at least one enemy unit with a Wounds characteristic of 10 or more was destroyed during this turn. If at least one enemy unit with a Wounds characteristic of 20 or more was destroyed this turn, score D3 victory points instead.'
},{
	number:66,
	title:'PRIORITY ORDERS RECEIVED',
	kind:'Priority Order',
	flavor:'This mission is of the utmost importance, and cannot be entrusted to anyone else.',
	body:'When this <a href="http://wahapedia.ru/wh40k8ed/the-rules/matched-play#Tactical-Objectives">Tactical Objective</a> is <a href="http://wahapedia.ru/wh40k8ed/the-rules/matched-play#Generating-Tactical-Objectives">generated</a>, immediately generate a bonus Tactical Objective – this does not count towards the number of Active Tactical Objectives you currently have in play. Your <a href="http://wahapedia.ru/wh40k8ed/the-rules/core-rules#The-Warlord">Warlord</a> is the only unit that can be used to achieve the bonus Tactical Objective – they must be the only unit used to control an <a href="http://wahapedia.ru/wh40k8ed/the-rules/matched-play#Objective-Markers">objective marker</a>, the unit that destroys the last model in an enemy unit, and so on. If you achieve this, you score both the number of victory points stated on the bonus Tactical Objective and an additional 3 victory points. If this Tactical Objective is discarded, so too is the bonus Tactical Objective.'
}];