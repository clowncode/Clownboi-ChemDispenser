"use strict";
var kill = 0;
var yeeeel = 0;
var rmove = 0;
var action;
var saved;
function yeet(action,typ,ammo){
switch(action){
case "dispense":
if (contain.chill() >= 100){
console.log("container full, clear it");
break;
} else {
kill = 0;
for(var x = 1; x <=ammo; x++){
checkit(typ.name);
if (kill == 1){
  break;
} else {
typ.amount+=1;
document.getElementById(typ.name).innerHTML = typ.full();
}}
makerecipe();
document.getElementById('container').innerHTML = contain.amount + "/" + contain.max;
console.log(contain.chill() + "%");
}
break;
case "remove":
var remov = [];
for (var x = 0;x<=total.length - 1;x++){
if (total[x].amount >= 1){
remov.push(total[x]);}
}
console.log(remov);
//alert('not working, back off');
if (remov.length == 0){
break;}
rmove = ammo / remov.length - 1;
console.log(rmove);
/*
rmove =
ammo rmove remov.length contain.amount*/
for (var x = 0;x<=remov.length - 1;x++){
for (var y = 0;y<=rmove; y+= .2){
remov[x].amount -= .2;
contain.amount -= .2;
document.getElementById(remov[x].name).innerHTML = remov[x].full();
document.getElementById('container').innerHTML = contain.amount + "/" + contain.max;
if (remov[x].amount == 0){
document.getElementById(remov[x].name).innerHTML = "";
break;
}}}
break;

case "eject":
console.log("working?");
for(var x = 0;x<=total.length - 1;x++){
console.log("working...");
total[x].amount = 0;
document.getElementById(total[x].name).innerHTML = "";
}
console.log("worked!");
contain.amount = 0;
document.getElementById('container').innerHTML = contain.amount + "/" + contain.max;
break;
}}

function makerecipe(){
for(var y = 0; y<= checking.length - 1; y++){
while(checking[y].needed() == 1){
console.log(checking[y].name + " being made");
for(var x = 1; x <= checking[y].reagent.length - 1; x+=2){
checking[y].reagent[x].amount -= checking[y].reagent[x - 1];
contain.amount -=checking[y].reagent[x-1];
switch(checking[y].reagent[x].amount){
case 0:document.getElementById(checking[y].reagent[x].name).innerHTML = "";break;
default:document.getElementById(checking[y].reagent[x].name).innerHTML = checking[y].reagent[x].full();
break;}}
checking[y].amount+= checking[y].reagent[checking[y].reagent.length - 1];
contain.amount+= checking[y].reagent[checking[y].reagent.length - 1];
if (contain.amount > maxx){
checking[y].amount-=1;
contain.amount-= 1;}
document.getElementById(checking[y].name).innerHTML = checking[y].full();
}}}

function checkit(nam){
if (contain.chill() >= 100){
return kill = 1;
}
else {
contain.amount++;
console.log("adding " + ammo + " to " + nam);
document.getElementById('container').innerHTML = contain.amount + "/" + contain.max;
}}

function ammore(more){
for(var x = 0; x<= amore.length - 1; x++){
document.getElementById(amore[x]).style.backgroundColor = "rgb(64,98,138)";}
document.getElementById("a" + more).style.backgroundColor = "rgb(47,148,60)";
ammo = more;}
