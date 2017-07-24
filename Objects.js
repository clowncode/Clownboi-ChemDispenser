"use strict";

var maxx = 100;
var ammo = 0;
var contain = {
ratio: 0,
amount:0,
max:maxx,
chill: function(){return (this.amount / this.max) * 100;}}

var hydrogen = {
amount:0,
ratio: 0, name:"hydrogen",
full: function(){return this.name + ': ' + this.amount;}}

var lithium = {
amount:0,
ratio: 0, name:"lithium",
full: function(){return this.name + ': ' + this.amount;}}

var carbon = {
amount:0,
ratio: 0, name:"carbon",
full: function(){return this.name + ': ' + this.amount;}}

var nitrogen = {
amount:0,
ratio: 0, name:"nitrogen",
full: function(){return this.name + ': ' + this.amount;}}

var oxygen = {
amount:0,
ratio: 0, name:"oxygen",
full: function(){return this.name + ': ' + this.amount;}}

var fluorine = {
amount:0,
ratio: 0, name:"fluorine",
full: function(){return this.name + ': ' + this.amount;}}

var sodium = {
amount:0,
ratio: 0, name:"sodium",
full: function(){return this.name + ': ' + this.amount;}}

var aluminium = {
amount:0,
ratio: 0, name:"aluminium",
full: function(){return this.name + ': ' + this.amount;}}

var silicon = {
amount:0,
ratio: 0, name:"silicon",
full: function(){return this.name + ': ' + this.amount;}}

var phosphorus = {
amount:0,
ratio: 0, name:"phosphorus",
full: function(){return this.name + ': ' + this.amount;}}

var sulfur = {
amount:0,
ratio: 0, name:"sulfur",
full: function(){return this.name + ': ' + this.amount;}}

var chlorine = {
amount:0,
ratio: 0, name:"chlorine",
full: function(){return this.name + ': ' + this.amount;}}

var potassium = {
amount:0,
ratio: 0, name:"potassium",
full: function(){return this.name + ': ' + this.amount;}}

var iron = {
amount:0,
ratio: 0, name:"iron",
full: function(){return this.name + ': ' + this.amount;}}

var copper = {
amount:0,
ratio: 0, name:"copper",
full: function(){return this.name + ': ' + this.amount;}}

var mercury = {
amount:0,
ratio: 0, name:"mercury",
full: function(){return this.name + ': ' + this.amount;}}

var radium = {
amount:0,
ratio: 0, name:"radium",
full: function(){return this.name + ': ' + this.amount;}}

var water = {
amount:0,
ratio: 0, name:"water",
full: function(){return this.name + ': ' + this.amount;}}

var ethanol = {
amount:0,
ratio: 0, name:"ethanol",
full: function(){return this.name + ': ' + this.amount;}}

var sugar = {
amount:0,
ratio: 0, name:"sugar",
full: function(){return this.name + ': ' + this.amount;}}

var sacid = {
amount:0,
ratio: 0, name:"sacid",
custom:"Sulphuric acid",
full: function(){return this.custom + ': ' + this.amount;}}

var welding_fuel = {
amount:0,
ratio: 0, name:"welding_fuel",
custom:"welding fuel",
full: function(){return this.custom + ': ' + this.amount;}}

var silver = {
amount:0,
ratio: 0, name:"silver",
full: function(){return this.name + ': ' + this.amount;}}

var iodine = {
amount:0,
ratio: 0, name:"iodine",
full: function(){return this.name + ': ' + this.amount;}}

var bromine = {
amount:0,
ratio: 0, name:"bromine",
full: function(){return this.name + ': ' + this.amount;}}

var stable_plasma = {
amount:0,
ratio: 0, name:"stable_plasma",
custom:"stable plasma",
full: function(){return this.custom + ': ' + this.amount;}}

var morphine = {
amount:0,
ratio: 0, name:"morphine",
full: function(){return this.name + ': ' + this.amount;}}

var carpotoxin = {
amount:0,
ratio: 0, name:"carpotoxin",
full: function(){return this.name + ': ' + this.amount;}}

var toxin = {
amount:0,
ratio: 0, name:"toxin",
full: function(){return this.name + ': ' + this.amount;}}

var blood = {
amount:0,
ratio: 0, name:"blood",
full: function(){return this.name + ': ' + this.amount;}}
var heat = {
temperature:300
}

/*    ~~~Recipes~~~    */


var oil = {
amount:0,
ratio: 0, name:"oil",
reagent: [1, welding_fuel, 1, carbon, 1, hydrogen, 3],
needed:function(){
if(this.reagent[1].amount >= this.reagent[0] && this.reagent[3].amount >= this.reagent[2] && this.reagent[5].amount >= this.reagent[4])
return 1;},
full: function(){return this.name + ': ' + this.amount;}}

var saltpetre = {
amount:0,
ratio: 0, name:"saltpetre",
reagent: [1, potassium, 1, nitrogen, 3, oxygen, 3],
needed:function(){
if(this.reagent[1].amount >= this.reagent[0] && this.reagent[3].amount >= this.reagent[2] && this.reagent[5].amount >= this.reagent[4])
return 1;},
full: function(){return this.name + ': ' + this.amount;}}

var phenol = {
amount:0,
ratio: 0, name:"phenol",
reagent: [1, water, 1, chlorine, 1, oil, 3],
needed:function(){
if(this.reagent[1].amount >= this.reagent[0] && this.reagent[3].amount >= this.reagent[2] && this.reagent[5].amount >= this.reagent[4])
return 1;},
full: function(){return this.name + ': ' + this.amount;}}

var acetone = {
amount:0,
ratio: 0, name:"acetone",
reagent: [1, oil, 1, welding_fuel, 1, oxygen, 3],
needed:function(){
if(this.reagent[1].amount >= this.reagent[0] && this.reagent[3].amount >= this.reagent[2] && this.reagent[5].amount >= this.reagent[4])
return 1;},
full: function(){return this.name + ': ' + this.amount;}}

var ammonia = {
amount:0,
ratio: 0, name:"ammonia",
reagent: [3, hydrogen, 1, nitrogen, 3],
needed:function(){
if(this.reagent[1].amount >= this.reagent[0] && this.reagent[3].amount >= this.reagent[2])
return 1;},
full: function(){return this.name + ': ' + this.amount;}}

var diethylamine = {
amount:0,
ratio: 0, name:"diethylamine",
reagent: [1, ammonia, 1, ethanol, 2],
needed:function(){
if(this.reagent[1].amount >= this.reagent[0] && this.reagent[3].amount >= this.reagent[2])
return 1;},
full: function(){return this.name + ': ' + this.amount;}}



var lye = {
amount:0,
ratio: 0, name:"lye",
reagent: [1, sodium, 1, hydrogen, 1, oxygen, 3],
needed:function(){
if(this.reagent[1].amount >= this.reagent[0] && this.reagent[3].amount >= this.reagent[2] && this.reagent[5].amount >= this.reagent[4])
return 1;},
full: function(){return this.name + ': ' + this.amount;}}
/* Medicine */

var silver_sulfadiazine = {
amount:0,
ratio: 0, name:"silver_sulfadiazine",
custom:"Silver Sulfadiazine",
reagent: [1, ammonia, 1, silver, 1, sulfur, 1, oxygen, 1, chlorine, 5],
needed:function(){
if(this.reagent[1].amount >= this.reagent[0] && this.reagent[3].amount >= this.reagent[2] && this.reagent[5].amount >= this.reagent[4] && this.reagent[7].amount >= this.reagent[6] && this.reagent[9].amount >= this.reagent[8])
return 1;},
full: function(){return this.custom + ': ' + this.amount;}}




/* Pyrotechnics */

var stable_agent = {
amount:0,
ratio: 0, name:"stable_agent",
custom:"Stabilizing Agent",
reagent: [1, iron, 1, oxygen, 1, hydrogen, 3],
needed:function(){
if(this.reagent[1].amount >= this.reagent[0] && this.reagent[3].amount >= this.reagent[2] && this.reagent[5].amount >= this.reagent[4])
return 1;},
full: function(){return this.custom + ': ' + this.amount;}}

var Foam_surfactant = {
amount:0,
ratio: 0, name:"Foam_surfactant",
custom:"Foam Surfactant",
reagent: [2, carbon, 2, fluorine, 1, sacid, 5],
needed:function(){
if(this.reagent[1].amount >= this.reagent[0] && this.reagent[3].amount >= this.reagent[2] && this.reagent[5].amount >= this.reagent[4])
return 1;},
full: function(){return this.name + ': ' + this.amount;}}

var smoke = {
amount:0,
ratio: 0, name:"smoke",
reagent: [1, phosphorus, 1, potassium, 1, sacid, 3],
needed:function(){
if(this.reagent[1].amount >= this.reagent[0] && this.reagent[3].amount >= this.reagent[2] && this.reagent[5].amount >= this.reagent[4])
return 1;},
full: function(){return this.name + ': ' + this.amount;}}

var FlashP = {
amount:0,
ratio: 0, name:"FlashP",
custom:"Flash Powder",
reagent: [1, aluminium, 1, potassium, 1, sulfur, 3],
needed:function(){
if(this.reagent[1].amount >= this.reagent[0] && this.reagent[3].amount >= this.reagent[2] && this.reagent[5].amount >= this.reagent[4])
return 1;},
full: function(){return this.custom + ': ' + this.amount;}}

var napalm = {
amount:0,
ratio: 0, name:"napalm",
reagent: [1, oil, 1, welding_fuel, 1, ethanol, 3],
needed:function(){
if(this.reagent[1].amount >= this.reagent[0] && this.reagent[3].amount >= this.reagent[2] && this.reagent[5].amount >= this.reagent[4])
return 1;},
full: function(){return this.name + ': ' + this.amount;}}

var phlogiston = {
amount:0,
ratio: 0, name:"phlogiston",
reagent: [1, phosphorus, 1, sacid, 1, stable_plasma, 3],
needed:function(){
if(this.reagent[1].amount >= this.reagent[0] && this.reagent[3].amount >= this.reagent[2] && this.reagent[5].amount >= this.reagent[4])
return 1;},
full: function(){return this.name + ': ' + this.amount;}}

var sorium = {
amount:0,
ratio: 0, name:"sorium",
reagent: [1, mercury, 1, oxygen, 1, nitrogen, 1, carbon, 3],
needed:function(){
if(this.reagent[1].amount >= this.reagent[0] && this.reagent[3].amount >= this.reagent[2] && this.reagent[5].amount >= this.reagent[4] && this.reagent[7] >= this.reagent[6])
return 1;},
full: function(){return this.name + ': ' + this.amount;}}

var LDM = {
amount:0,
ratio: 0, name:"LDM",
custom:"Liquid Dark Matter",
reagent: [1, stable_plasma, 1, radium, 1, carbon, 3],
needed:function(){
if(this.reagent[1].amount >= this.reagent[0] && this.reagent[3].amount >= this.reagent[2] && this.reagent[5].amount >= this.reagent[4])
return 1;},
full: function(){return this.custom + ': ' + this.amount;}}
/* Toxins */

var Chloral_Hydrate = {
amount:0,
ratio: 0, name:"Chloral_Hydrate",
custom:"Chloral Hydrate",
reagent: [3, chlorine, 1, ethanol, 1, water, 1],
needed:function(){
if(this.reagent[1].amount >= this.reagent[0] && this.reagent[3].amount >= this.reagent[2] && this.reagent[5].amount >= this.reagent[4])
return 1;},
full: function(){return this.custom + ': ' + this.amount;}}

/* Other */
var space_cleaner = {
amount:0,
ratio: 0, name:"space_cleaner",
custom:"space cleaner",
reagent: [1, ammonia, 1, water, 2],
needed:function(){
if(this.reagent[1].amount >= this.reagent[0] && this.reagent[3].amount >= this.reagent[2])
return 1;},
full: function(){return this.custom + ': ' + this.amount;}}

var space_lube = {
amount:0,
ratio: 0, name:"space_lube",
custom:"Space Lube",
reagent: [1, oxygen, 1, silicon, 1, water, 4],
needed:function(){
if(this.reagent[1].amount >= this.reagent[0] && this.reagent[3].amount >= this.reagent[2] && this.reagent[5].amount >= this.reagent[4])
return 1;},
full: function(){return this.custom + ': ' + this.amount;}}

var Sodium_Chloride = {
amount:0,
ratio: 0, name:"Sodium_Chloride",
custom:"Sodium Chloride",
reagent: [1, sodium, 1, chlorine, 1, water, 3],
needed:function(){
if(this.reagent[1].amount >= this.reagent[0] && this.reagent[3].amount >= this.reagent[2] && this.reagent[5].amount >= this.reagent[4])
return 1;},
full: function(){return this.custom + ': ' + this.amount;}}

var space_drugs = {
amount:0,
ratio: 0, name:"space_drugs",
custom:"Space Drugs",
reagent: [1, lithium, 1, mercury, 1, sugar, 3],
needed:function(){
if(this.reagent[1].amount >= this.reagent[0] && this.reagent[3].amount >= this.reagent[2] && this.reagent[5].amount >= this.reagent[4])
return 1;},
full: function(){return this.custom + ': ' + this.amount;}}

var epinephrine = {
amount:0,
ratio: 0, name:"epinephrine",
reagent: [1, phenol, 1, acetone, 1, diethylamine, 1, oxygen, 1, chlorine, 1, hydrogen, 6],
needed:function(){
if(this.reagent[1].amount >= this.reagent[0] && this.reagent[3].amount >= this.reagent[2] && this.reagent[5].amount >= this.reagent[4]  && this.reagent[7].amount >= this.reagent[6]  && this.reagent[9].amount >= this.reagent[8]  && this.reagent[11].amount >= this.reagent[10])
return 1;},
full: function(){return this.name + ': ' + this.amount;}}

var atropine = {
amount:0,
ratio: 0, name:"atropine",
reagent: [1, ethanol, 1, acetone, 1, diethylamine, 1, phenol, 1, sacid, 6],
needed:function(){
if(this.reagent[1].amount >= this.reagent[0] && this.reagent[3].amount >= this.reagent[2] && this.reagent[5].amount >= this.reagent[4]  && this.reagent[7].amount >= this.reagent[6]  && this.reagent[9].amount >= this.reagent[8])
return 1;},
full: function(){return this.name + ': ' + this.amount;}}

var stypow = {
amount:0,
ratio: 0, name:"stypow",
custom:"Styptic Powder",
reagent: [1, aluminium, 1, hydrogen, 1, oxygen, 1, sacid, 4],
needed:function(){
if(this.reagent[1].amount >= this.reagent[0] && this.reagent[3].amount >= this.reagent[2] && this.reagent[5].amount >= this.reagent[4] && this.reagent[7].amount >= this.reagent[6])
return 1;},
full: function(){return this.custom + ': ' + this.amount;}}

var salglu = {
amount:0,
ratio: 0, name:"salglu",
custom:"Saline-Glucose Solution",
reagent: [1, Sodium_Chloride, 1, water, 1, sugar, 3],
needed:function(){
if(this.reagent[1].amount >= this.reagent[0] && this.reagent[3].amount >= this.reagent[2] && this.reagent[5].amount >= this.reagent[4])
return 1;},
full: function(){return this.custom + ': ' + this.amount;}}

/*
var synthflesh = {
amount:0,
ratio: 0, name:"synthflesh",
reagent: [1, blood, 1, carbon, 1, stypow, 3],
needed:function(){
if(this.reagent[1].amount >= this.reagent[0] && this.reagent[3].amount >= this.reagent[2] && this.reagent[5].amount >= this.reagent[4])
return 1;},
full: function(){return this.name + ': ' + this.amount;}}
*/

var ash = {
amount:0,
ratio: 0, name:"ash",
reagent: [1, oil, 1],
needed:function(){
if(this.reagent[1].amount >= this.reagent[0] && heat.temperature >= 480)
return 1;},
full: function(){return this.name + ': ' + this.amount;}}


var charcoal = {
amount:0,
ratio: 0, name:"charcoal",
reagent: [1, ash, 1, Sodium_Chloride, 2],
needed:function(){
if(this.reagent[1].amount >= this.reagent[0] && this.reagent[3].amount >= this.reagent[2])
return 1;},
full: function(){return this.name + ': ' + this.amount;}}
//Start
var sterilizine = {
amount:0,
ratio: 0, name:"sterilizine",
reagent: [1, ethanol, 1, charcoal, 1, chlorine, 3],
needed:function(){
if(this.reagent[1].amount >= this.reagent[0] && this.reagent[3].amount >= this.reagent[2] && this.reagent[5].amount >= this.reagent[4])
return 1;},
full: function(){return this.name + ': ' + this.amount;}}

var impedrezene = {
amount:0,
ratio: 0, name:"impedrezene",
reagent: [1, mercury, 1, oxygen, 1, sugar, 2],
needed:function(){
if(this.reagent[1].amount >= this.reagent[0] && this.reagent[3].amount >= this.reagent[2] && this.reagent[5].amount >= this.reagent[4])
return 1;},
full: function(){return this.name + ': ' + this.amount;}}

var cryptobiolin = {
amount:0,
ratio: 0, name:"cryptobiolin",
reagent: [1, potassium, 1, oxygen, 1, sugar, 3],
needed:function(){
if(this.reagent[1].amount >= this.reagent[0] && this.reagent[3].amount >= this.reagent[2] && this.reagent[5].amount >= this.reagent[4])
return 1;},
full: function(){return this.name + ': ' + this.amount;}}

var inacusiate = {
amount:0,
ratio: 0, name:"inacusiate",
reagent: [1, water, 1, carbon, 1, charcoal, 2],
needed:function(){
if(this.reagent[1].amount >= this.reagent[0] && this.reagent[3].amount >= this.reagent[2] && this.reagent[5].amount >= this.reagent[4])
return 1;},
full: function(){return this.name + ': ' + this.amount;}}

var foamer = {
amount:0,
ratio: 0, name:"foamer",
custom:'Foaming Agent',
reagent: [1, lithium, 1,hydrogen, 2],
needed:function(){
if(this.reagent[1].amount >= this.reagent[0] && this.reagent[3].amount >= this.reagent[2])
return 1;},
full: function(){return this.custom + ': ' + this.amount;}}

var mannitol = {
amount:0,
ratio: 0, name:"mannitol",
reagent: [1, hydrogen, 1, water, 1, sugar, 3],
needed:function(){
if(this.reagent[1].amount >= this.reagent[0] && this.reagent[3].amount >= this.reagent[2] && this.reagent[5].amount >= this.reagent[4])
return 1;},
full: function(){return this.name + ': ' + this.amount;}}

var salicyclic_acid = {
amount:0,
ratio: 0, name:"salicyclic_acid",
custom:"Salicyclic Acid",
reagent: [1, sodium, 1, phenol, 1, carbon, 1, oxygen, 1, sacid, 5],
needed:function(){
if(this.reagent[1].amount >= this.reagent[0] && this.reagent[3].amount >= this.reagent[2] && this.reagent[5].amount >= this.reagent[4] && this.reagent[7].amount >= this.reagent[6] && this.reagent[9].amount >= this.reagent[8])
return 1;},
full: function(){return this.name + ': ' + this.amount;}}

var salbutamol = {
amount:0,
ratio: 0, name:"salbutamol",
reagent: [1, salicyclic_acid, 1, lithium, 1, aluminium, 1, bromine, 1, ammonia, 5],
needed:function(){
if(this.reagent[1].amount >= this.reagent[0] && this.reagent[3].amount >= this.reagent[2] && this.reagent[5].amount >= this.reagent[4] && this.reagent[7].amount >= this.reagent[6] && this.reagent[9].amount >= this.reagent[8])
return 1;},
full: function(){return this.name + ': ' + this.amount;}}

var bicaridine = {
amount:0,
ratio: 0, name:"bicaridine",
reagent: [1, carbon, 1, oxygen, 1, sugar, 3],
needed:function(){
if(this.reagent[1].amount >= this.reagent[0] && this.reagent[3].amount >= this.reagent[2] && this.reagent[5].amount >= this.reagent[4])
return 1;},
full: function(){return this.name + ': ' + this.amount;}}

var kelotane = {
amount:0,
ratio: 0, name:"kelotane",
reagent: [1, carbon, 1, silicon, 3],
needed:function(){
if(this.reagent[1].amount >= this.reagent[0] && this.reagent[3].amount >= this.reagent[2])
return 1;},
full: function(){return this.name + ': ' + this.amount;}}

var antitoxin = {
amount:0,
ratio: 0, name:"antitoxin",
reagent: [1, nitrogen, 1, silicon, 1, potassium, 3],
needed:function(){
if(this.reagent[1].amount >= this.reagent[0] && this.reagent[3].amount >= this.reagent[2] && this.reagent[5].amount >= this.reagent[4])
return 1;},
full: function(){return this.name + ': ' + this.amount;}}

var tricordrazine = {
amount:0,
ratio: 0, name:"tricordrazine",
reagent: [1, kelotane, 1, bicaridine, 1, antitoxin, 3],
needed:function(){
if(this.reagent[1].amount >= this.reagent[0] && this.reagent[3].amount >= this.reagent[2] && this.reagent[5].amount >= this.reagent[4])
return 1;},
full: function(){return this.name + ': ' + this.amount;}}

var unstable_mutagen = {
amount:0,
ratio: 0, name:"unstable_mutagen",
custom:"unstable Mutagen",
reagent: [1, chlorine, 1, phosphorus, 1, radium, 3],
needed:function(){
if(this.reagent[1].amount >= this.reagent[0] && this.reagent[3].amount >= this.reagent[2] && this.reagent[5].amount >= this.reagent[4])
return 1;},
full: function(){return this.custom + ': ' + this.amount;}}

var cryoxadone = {
amount:0,
ratio: 0, name:"cryoxadone",
reagent: [1, stable_plasma, 1, acetone, 1, unstable_mutagen, 3],
needed:function(){
if(this.reagent[1].amount >= this.reagent[0] && this.reagent[3].amount >= this.reagent[2] && this.reagent[5].amount >= this.reagent[4])
return 1;},
full: function(){return this.name + ': ' + this.amount;}}

//need plasma catalyst for Clonexadone

var oxandrolone = {
amount:0,
ratio: 0, name:"oxandrolone",
reagent: [3, carbon, 1, phenol, 1, hydrogen, 1, oxygen, 6],
needed:function(){
if(this.reagent[1].amount >= this.reagent[0] && this.reagent[3].amount >= this.reagent[2] && this.reagent[5].amount >= this.reagent[4] && this.reagent[7].amount >= this.reagent[6])
return 1;},
full: function(){return this.name + ': ' + this.amount;}}

var formaldehyde = {
amount:0,
ratio: 0, name:"formaldehyde",
reagent: [1, ethanol, 1, oxygen, 1, silver, 3],
needed:function(){
if(this.reagent[1].amount >= this.reagent[0] && this.reagent[3].amount >= this.reagent[2] && this.reagent[5].amount >= this.reagent[4] && heat.temperature >= 420)
return 1;},
full: function(){return this.name + ': ' + this.amount;}}

var cyanide = {
amount:0,
ratio: 0, name:"cyanide",
reagent: [1, oil, 1, ammonia, 1, oxygen, 3],
needed:function(){
if(this.reagent[1].amount >= this.reagent[0] && this.reagent[3].amount >= this.reagent[2] && this.reagent[5].amount >= this.reagent[4] && heat.temperature >= 380)
return 1;},
full: function(){return this.name + ': ' + this.amount;}}

var pentetic_acid = {
amount:0,
ratio: 0, name:"pentetic_acid",
custom:"Pentetic Acid",
reagent: [1, welding_fuel, 1, chlorine, 1, ammonia, 1, formaldehyde, 1, sodium, 1, cyanide, 6],
needed:function(){
if(this.reagent[1].amount >= this.reagent[0] && this.reagent[3].amount >= this.reagent[2] && this.reagent[5].amount >= this.reagent[4])
return 1;},
full: function(){return this.name + ': ' + this.amount;}}

var Perfluorodecalin = {
amount:0,
ratio: 0, name:"Perfluorodecalin",
reagent: [1, hydrogen, 1, fluorine, 1, oil, 3],
needed:function(){
if(this.reagent[1].amount >= this.reagent[0] && this.reagent[3].amount >= this.reagent[2] && this.reagent[5].amount >= this.reagent[4] && heat.temperature >= 370)
return 1;},
full: function(){return this.name + ': ' + this.amount;}}

var calomel = {
amount:0,
ratio: 0, name:"calomel",
reagent: [1, mercury, 1, chlorine, 2],
needed:function(){
if(this.reagent[1].amount >= this.reagent[0] && this.reagent[3].amount >= this.reagent[2] && heat.temperature >= 374)
return 1;},
full: function(){return this.name + ': ' + this.amount;}}

var mutadone = {
amount:0,
ratio: 0, name:"mutadone",
reagent: [1, unstable_mutagen, 1, acetone, 1, bromine, 3],
needed:function(){
if(this.reagent[1].amount >= this.reagent[0] && this.reagent[3].amount >= this.reagent[2] && this.reagent[5].amount >= this.reagent[4])
return 1;},
full: function(){return this.name + ': ' + this.amount;}}

var potassium_iodide = {
amount:0,
ratio: 0, name:"potassium_iodide",
custom:"Potassium Iodide",
reagent: [1, potassium, 1, iodine, 2],
needed:function(){
if(this.reagent[1].amount >= this.reagent[0] && this.reagent[3].amount >= this.reagent[2])
return 1;},
full: function(){return this.name + ': ' + this.amount;}}

var ephedrine = {
amount:0,
ratio: 0, name:"ephedrine",
reagent: [1, diethylamine, 1, sugar, 1, oil, 1, hydrogen, 4],
needed:function(){
if(this.reagent[1].amount >= this.reagent[0] && this.reagent[3].amount >= this.reagent[2] && this.reagent[5].amount >= this.reagent[4] && this.reagent[7].amount >= this.reagent[6])
return 1;},
full: function(){return this.name + ': ' + this.amount;}}

var diphenhydramine = {
amount:0,
ratio: 0, name:"diphenhydramine",
reagent: [1, oil, 1, carbon, 1, bromine, 1, diethylamine, 1, ethanol, 5],
needed:function(){
if(this.reagent[1].amount >= this.reagent[0] && this.reagent[3].amount >= this.reagent[2] && this.reagent[5].amount >= this.reagent[4] && this.reagent[7].amount >= this.reagent[6] && this.reagent[9].amount >= this.reagent[8])
return 1;},
full: function(){return this.name + ': ' + this.amount;}}

var oculine = {
amount:0,
ratio: 0, name:"oculine",
reagent: [1, charcoal, 1, carbon, 1, hydrogen, 3],
needed:function(){
if(this.reagent[1].amount >= this.reagent[0] && this.reagent[3].amount >= this.reagent[2] && this.reagent[5].amount >= this.reagent[4])
return 1;},
full: function(){return this.name + ': ' + this.amount;}}

var antihol = {
amount:0,
ratio: 0, name:"antihol",
reagent: [1, ethanol, 1, charcoal, 1, copper, 3],
needed:function(){
if(this.reagent[1].amount >= this.reagent[0] && this.reagent[3].amount >= this.reagent[2] && this.reagent[5].amount >= this.reagent[4])
return 1;},
full: function(){return this.name + ': ' + this.amount;}}

var synaptizine = {
amount:0,
ratio: 0, name:"synaptizine",
reagent: [1, sugar, 1, lithium, 1, water, 3],
needed:function(){
if(this.reagent[1].amount >= this.reagent[0] && this.reagent[3].amount >= this.reagent[2] && this.reagent[5].amount >= this.reagent[4])
return 1;},
full: function(){return this.name + ': ' + this.amount;}}

//rezadone

var spaceacillin = {
amount:0,
ratio: 0, name:"spaceacillin",
reagent: [1, epinephrine, 1, cryptobiolin, 3],
needed:function(){
if(this.reagent[1].amount >= this.reagent[0] && this.reagent[3].amount >= this.reagent[2])
return 1;},
full: function(){return this.name + ': ' + this.amount;}}

var miner_salve = {
amount:0,
ratio: 0, name:"miner_salve",
custom:"Miner's Salve",
reagent: [1, iron, 1, oil, 1, water, 3],
needed:function(){
if(this.reagent[1].amount >= this.reagent[0] && this.reagent[3].amount >= this.reagent[2] && this.reagent[5].amount >= this.reagent[4])
return 1;},
full: function(){return this.custom + ': ' + this.amount;}}

var haloperidol = {
amount:0,
ratio: 0, name:"haloperidol",
reagent: [1, chlorine, 1, fluorine, 1, aluminium, 1, potassium_iodide, 1, oil, 3],
needed:function(){
if( this.reagent[1].amount >= this.reagent[0] && this.reagent[3].amount >= this.reagent[2] && this.reagent[5].amount >= this.reagent[4] && this.reagent[7].amount >= this.reagent[6] && this.reagent[9].amount >= this.reagent[8])
return 1;},
full: function(){return this.name + ': ' + this.amount;}}

//leporazine

var corazone = {
amount:0,
ratio: 0, name:"corazone",
reagent: [2, phenol, 1, lithium, 3],
needed:function(){
if(this.reagent[1].amount >= this.reagent[0] && this.reagent[3].amount >= this.reagent[2])
return 1;},
full: function(){return this.name + ': ' + this.amount;}}

var krokodil = {
amount:0,
ratio: 0, name:"krokodil",
reagent: [1, diphenhydramine, 1, space_cleaner, 1, potassium, 1, morphine, 1, phosphorus, 1, welding_fuel, 6],
needed:function(){
if(this.reagent[1].amount >= this.reagent[0] && this.reagent[3].amount >= this.reagent[2] && this.reagent[5].amount >= this.reagent[4] && this.reagent[7].amount >= this.reagent[6] && this.reagent[9].amount >= this.reagent[8] && this.reagent[11].amount >= this.reagent[10] && heat.temperature >= 390)
return 1;},
full: function(){return this.name + ': ' + this.amount;}}

var crank = {
amount:0,
ratio: 0, name:"crank",
reagent: [1, diphenhydramine, 1, ammonia, 1, lithium, 1, sacid, 1, welding_fuel, 5],
needed:function(){
if(this.reagent[1].amount >= this.reagent[0] && this.reagent[3].amount >= this.reagent[2] && this.reagent[5].amount >= this.reagent[4] && this.reagent[7].amount >= this.reagent[6] && this.reagent[9].amount >= this.reagent[8] && heat.temperature >= 390)
return 1;},
full: function(){return this.name + ': ' + this.amount;}}

var methamphetamine = {
amount:0,
ratio: 0, name:"methamphetamine",
reagent: [1, ephedrine, 1, iodine, 1, phosphorus, 1, hydrogen, 4],
needed:function(){
if(this.reagent[1].amount >= this.reagent[0] && this.reagent[3].amount >= this.reagent[2] && this.reagent[5].amount >= this.reagent[4] && this.reagent[7].amount >= this.reagent[6] && heat.temperature >= 374)
return 1;},
full: function(){return this.name + ': ' + this.amount;}}

var aranesp = {
amount:0,
ratio: 0, name:"aranesp",
reagent: [1, epinephrine, 1, atropine, 1, morphine, 3],
needed:function(){
if(this.reagent[1].amount >= this.reagent[0] && this.reagent[3].amount >= this.reagent[2] && this.reagent[5].amount >= this.reagent[4])
return 1;},
full: function(){return this.name + ': ' + this.amount;}}

var pyrosium = {
amount:0,
ratio: 0, name:"pyrosium",
reagent: [1, stable_plasma, 1, radium, 1, phosphorus, 3],
needed:function(){
if(this.reagent[1].amount >= this.reagent[0] && this.reagent[3].amount >= this.reagent[2] && this.reagent[5].amount >= this.reagent[4])
return 1;},
full: function(){return this.name + ': ' + this.amount;}}

var cryostalane = {
amount:0,
ratio: 0, name:"cryostalane",
reagent: [1, water, 1, stable_plasma, 1, nitrogen, 3],
needed:function(){
if(this.reagent[1].amount >= this.reagent[0] && this.reagent[3].amount >= this.reagent[2] && this.reagent[5].amount >= this.reagent[4])
return 1;},
full: function(){return this.name + ': ' + this.amount;}}

var chlorine_trifluoride = {
amount:0,
ratio: 0, name:"chlorine_trifluoride",
custom:"Chlorine Trifluoride",
reagent: [1, chlorine, 3, fluorine, 4],
needed:function(){
if(this.reagent[1].amount >= this.reagent[0] && this.reagent[3].amount >= this.reagent[2] && heat.temperature >= 424)
return 1;},
full: function(){return this.name + ': ' + this.amount;}}

var meth_explode = {
amount:0,
ratio: 0, name:"meth_explode",
custom:"Meth Explosion: Boom",
reagent: [1, diethylamine, 1, iodine, 1, phosphorus, 1, hydrogen, 1],
needed:function(){
if( this.reagent[1].amount >= this.reagent[0] && this.reagent[3].amount >= this.reagent[2] && this.reagent[5].amount >= this.reagent[4] && this.reagent[7].amount >= this.reagent[6] && heat.temperature >= 300)
return 1;},
full: function(){return this.custom;}}

var black_powder = {
amount:0,
ratio: 0, name:"black_powder",
custom:"Black Powder",
reagent: [1, saltpetre, 1, charcoal, 1, sulfur, 3],
needed:function(){
if(this.reagent[1].amount >= this.reagent[0] && this.reagent[3].amount >= this.reagent[2] && this.reagent[5].amount >= this.reagent[4])
return 1;},
full: function(){return this.custom + ': ' + this.amount;}}

var Explosion = {
amount:0,
ratio: 0, name:"Explosion",
reagent: [1, potassium, 1, water, 2],
needed:function(){
if(this.reagent[1].amount >= this.reagent[0] && this.reagent[3].amount >= this.reagent[2])
return 1;},
full: function(){
if (this.amount >= 25){
if (this.amount >= 50){
if (this.amount >= 75){
if (this.amount >= 100){
return this.name + ': BOOM';}
else{
return this.name + ': BOOm';}}
else{
return this.name + ': BOom';}}
else{
return this.name + ': Boom';}}
else{
return this.name + ': boom';}}}

var thermite = {
amount:0,
ratio: 0, name:"thermite",
reagent: [1, aluminium, 1, iron, 1, oxygen, 3],
needed:function(){
if(this.reagent[1].amount >= this.reagent[0] && this.reagent[3].amount >= this.reagent[2] && this.reagent[5].amount >= this.reagent[4])
return 1;},
full: function(){return this.name + ': ' + this.amount;}}

var teslium = {
amount:0,
ratio: 0, name:"teslium",
reagent: [1, stable_plasma, 1, silver, 1, black_powder, 3],
needed:function(){
if(this.reagent[1].amount >= this.reagent[0] && this.reagent[3].amount >= this.reagent[2] && this.reagent[5].amount >= this.reagent[4] && heat.temperature >= 400)
return 1;},
full: function(){return this.name + ': ' + this.amount;}}

var mindbreaker_toxin = {
amount:0,
ratio: 0, name:"mindbreaker_toxin",
custom:"Mindbreaker Toxin",
reagent: [1, charcoal, 1, hydrogen, 1, silicon, 3],
needed:function(){
if(this.reagent[1].amount >= this.reagent[0] && this.reagent[3].amount >= this.reagent[2] && this.reagent[5].amount >= this.reagent[4])
return 1;},
full: function(){return this.custom + ': ' + this.amount;}}

var test1 = {
amount:0,
ratio: 0, name:"testing",
reagent: [1, space_lube, 1, hydrogen, 1, oxygen, 3],
needed:function(){
if(this.reagent[1].amount >= this.reagent[0] && this.reagent[3].amount >= this.reagent[2] && this.reagent[5].amount >= this.reagent[4])
return 1;},
full: function(){return this.name + ': ' + this.amount;}}

var test2 = {
amount: test1.amount,
ratio: 0, name:"testing",
reagent: [1, space_lube, 1, carbon, 1, oxygen, 3],
needed:function(){
if(this.reagent[1].amount >= this.reagent[0] && this.reagent[3].amount >= this.reagent[2] && this.reagent[5].amount >= this.reagent[4])
return 1;},
full: function(){return this.name + ': ' + this.amount;}}

//mute toxin
//need tesla shock from those 2 things
//lexorin
//new
var sulfonal = {
amount:0,
ratio: 0, name:"sulfonal",
reagent: [1, acetone, 1, diethylamine, 1, sulfur, 3],
needed:function(){
if(this.reagent[1].amount >= this.reagent[0] && this.reagent[3].amount >= this.reagent[2] && this.reagent[5].amount >= this.reagent[4])
return 1;},
full: function(){return this.name + ': ' + this.amount;}}

var lipolicide = {
amount:0,
ratio: 0, name:"lipolicide",
reagent: [1, mercury, 1, diethylamine, 1, ephedrine, 3],
needed:function(){
if(this.reagent[1].amount >= this.reagent[0] && this.reagent[3].amount >= this.reagent[2] && this.reagent[5].amount >= this.reagent[4])
return 1;},
full: function(){return this.name + ': ' + this.amount;}}

var neurotoxin = {
amount:0,
ratio: 0, name:"neurotoxin",
reagent: [1, space_drugs, 1],
needed:function(){
if(this.reagent[1].amount >= this.reagent[0] && heat.temperature >= 674)
return 1;},
full: function(){return this.name + ': ' + this.amount;}}

var itching_powder = {
amount:0,
ratio: 0, name:"itching_powder",
custom:"itching powder",
reagent: [1, welding_fuel, 1, ammonia, 1, charcoal, 3],
needed:function(){
if(this.reagent[1].amount >= this.reagent[0] && this.reagent[3].amount >= this.reagent[2] && this.reagent[5].amount >= this.reagent[4])
return 1;},
full: function(){return this.custom + ': ' + this.amount;}}

var heparin = {
amount:0,
ratio: 0, name:"heparin",
reagent: [1, formaldehyde, 1, sodium, 1, chlorine, 1, lithium, 4],
needed:function(){
if(this.reagent[1].amount >= this.reagent[0] && this.reagent[3].amount >= this.reagent[2] && this.reagent[5].amount >= this.reagent[4] && this.reagent[7].amount >= this.reagent[6])
return 1;},
full: function(){return this.name + ': ' + this.amount;}}

var rotatium = {
amount:0,
ratio: 0, name:"rotatium",
reagent: [1, mindbreaker_toxin, 1, teslium, 1, neurotoxin, 3],
needed:function(){
if(this.reagent[1].amount >= this.reagent[0] && this.reagent[3].amount >= this.reagent[2] && this.reagent[5].amount >= this.reagent[4])
return 1;},
full: function(){return this.name + ': ' + this.amount;}}
//skewium

var anacea = {
amount:0,
ratio: 0, name:"anacea",
reagent: [1, haloperidol, 1, impedrezene, 1, radium, 3],
needed:function(){
if(this.reagent[1].amount >= this.reagent[0] && this.reagent[3].amount >= this.reagent[2] && this.reagent[5].amount >= this.reagent[4])
return 1;},
full: function(){return this.name + ': ' + this.amount;}}

var carpet = {
amount:0,
ratio: 0, name:"carpet",
reagent: [1, space_drugs, 1, blood, 2],
needed:function(){
if(this.reagent[1].amount >= this.reagent[0] && this.reagent[3].amount >= this.reagent[2])
return 1;},
full: function(){return this.name + ': ' + this.amount;}}

var barber_aid = {
amount:0,
ratio: 0, name:"barber_aid",
custom:"Barber's Aid",
reagent: [1, carpet, 1, radium, 1, space_drugs, 3],
needed:function(){
if(this.reagent[1].amount >= this.reagent[0] && this.reagent[3].amount >= this.reagent[2] && this.reagent[5].amount >= this.reagent[4])
return 1;},
full: function(){return this.custom + ': ' + this.amount;}}

var cbarber_aid = {
amount:0,
ratio: 0, name:"cbarber_aid",
custom:"Concentrated Barber's Aid",
reagent: [1, unstable_mutagen, 1, barber_aid, 2],
needed:function(){
if(this.reagent[1].amount >= this.reagent[0] && this.reagent[3].amount >= this.reagent[2])
return 1;},
full: function(){return this.custom + ': ' + this.amount;}}

var co2 = {
amount:0,
ratio: 0, name:"co2",
custom:"Carbon Dioxide",
reagent: [1, carbon, 2, oxygen, 3],
needed:function(){
if(this.reagent[1].amount >= this.reagent[0] && this.reagent[3].amount >= this.reagent[2] && heat.temperature >= 777)
return 1;},
full: function(){return this.custom + ': ' + this.amount;}}

var drying_agent = {
amount:0,
ratio: 0, name:"drying_agent",
custom:"Drying Agent",
reagent: [2, stable_plasma, 1, ethanol, 1, sodium, 3],
needed:function(){
if(this.reagent[1].amount >= this.reagent[0] && this.reagent[3].amount >= this.reagent[2] && this.reagent[5].amount >= this.reagent[4])
return 1;},
full: function(){return this.custom + ': ' + this.amount;}}

var fluacid = {
amount:0,
ratio: 0, name:"fluacid",
custom:"Flurosulfuric Acid",
reagent: [1, fluorine, 1, hydrogen, 1, potassium, 1, sacid, 4],
needed:function(){
if(this.reagent[1].amount >= this.reagent[0] && this.reagent[3].amount >= this.reagent[2] && this.reagent[5].amount >= this.reagent[4] && this.reagent[7].amount >= this.reagent[6] && heat.temperature >= 380)
return 1;},
full: function(){return this.name + ': ' + this.amount;}}

//did not include any traitor uplink stuff

/*
var ex = {
amount:0,
ratio: 0, name:"ex",
reagent: [1, ex, 1, ex, 1, ex, 3],
needed:function(){
if(this.reagent[1].amount >= this.reagent[0] && this.reagent[3].amount >= this.reagent[2] && this.reagent[5].amount >= this.reagent[4])
return 1;},
full: function(){return this.name + ': ' + this.amount;}}
*/

/*
2 this.reagent[1].amount >= this.reagent[0] && this.reagent[3].amount >= this.reagent[2]
3 this.reagent[1].amount >= this.reagent[0] && this.reagent[3].amount >= this.reagent[2] && this.reagent[5].amount >= this.reagent[4]
4 this.reagent[1].amount >= this.reagent[0] && this.reagent[3].amount >= this.reagent[2] && this.reagent[5].amount >= this.reagent[4] && this.reagent[7].amount >= this.reagent[6]
5 this.reagent[1].amount >= this.reagent[0] && this.reagent[3].amount >= this.reagent[2] && this.reagent[5].amount >= this.reagent[4] && this.reagent[7].amount >= this.reagent[6] && this.reagent[9].amount >= this.reagent[8]
6 this.reagent[1].amount >= this.reagent[0] && this.reagent[3].amount >= this.reagent[2] && this.reagent[5].amount >= this.reagent[4] && this.reagent[7].amount >= this.reagent[6] && this.reagent[9].amount >= this.reagent[8] && this.reagent[11].amount >= this.reagent[10]
*/

var access = [
hydrogen,
lithium,
carbon,
nitrogen,
oxygen,
fluorine,
sodium,
aluminium,
silicon,
phosphorus,
sulfur,
chlorine,
potassium,
iron,
copper,
mercury,
radium,
water,
ethanol,
sugar,
sacid,
welding_fuel,
silver,
iodine,
bromine,
stable_plasma
];


var checking = [
oil,
phenol,
acetone,
diethylamine,
ammonia,
saltpetre,
lye,
space_drugs,
napalm,
stable_agent,
Foam_surfactant,
smoke,
FlashP,
phlogiston,
sorium,
LDM,
Chloral_Hydrate,
space_lube,
space_cleaner,
Sodium_Chloride,
silver_sulfadiazine,
epinephrine,
atropine,
stypow,
salglu,
ash,
charcoal,
sterilizine,
impedrezene,
cryptobiolin,
inacusiate,
foamer,
mannitol,
salicyclic_acid,
salbutamol,
bicaridine,
kelotane,
antitoxin,
tricordrazine,
unstable_mutagen,
cryoxadone,
oxandrolone,
formaldehyde,
cyanide,
pentetic_acid,
Perfluorodecalin,
calomel,
mutadone,
potassium_iodide,
ephedrine,
diphenhydramine,
oculine,
antihol,
synaptizine,
spaceacillin,
miner_salve,
haloperidol,
corazone,
krokodil,
crank,
methamphetamine,
aranesp,
pyrosium,
cryostalane,
chlorine_trifluoride,
meth_explode,
black_powder,
Explosion,
thermite,
teslium,
mindbreaker_toxin,
test1,
test2,
sulfonal,
lipolicide,
neurotoxin,
itching_powder,
heparin,
rotatium,
anacea,
carpet,
barber_aid,
cbarber_aid,
co2,
drying_agent,
fluacid
];
var total = access.concat(checking);
var amore = [
"a5",
"a10",
"a15",
"a20",
"a25",
"a30",
"a50"
];
