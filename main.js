"use strict";

// GLOBAL VARIABLES
 let templateStorage = document.querySelector("#storageTemp").content;
 let templateBartender = document.querySelector("#bartenderTemp").content;
 let templatebeertype = document.querySelector("#beerTypeTemp").content;
 let templateQue = document.querySelector("#queTemp").content;


let bar;
let data;

document.addEventListener("DOMContentLoaded", loadScript);

function loadScript(){
    data = JSON.parse(FooBar.getData());

    console.log(bar);

//document.querySelector(".bartender").textContent = mitJson.bartenders;

//Storage
//resetter, så det ikke bliver apennded flere gange efter hinanden 

                data.storage.forEach(function(e){

                        // laver klon
                        let clone = templateStorage.cloneNode(true);

                        // indsætter navn på element (i dette tilfælde storage navn)
                        clone.querySelector(".sName").textContent = e.name;

                        // indsætter mængden på storage element 
                        clone.querySelector(".amount").textContent = e.amount;
                        
                        // appender storage klonen til storage-div'en i html'en. 
                        document.querySelector("#storage").appendChild(clone);
                        });

                data.bartenders.forEach(function(e){
                        let clone = templateBartender.cloneNode(true);
                        clone.querySelector(".bName").textContent = e.name;
                        clone.querySelector(".status").textContent = e.status;
                        clone.querySelector(".statusdetail").textContent = e.statusDetail;
                        clone.querySelector(".waiting").textContent = e.waiting;
                        document.querySelector("#bartender").appendChild(clone);
                     });
                     data.beertypes.forEach(function(e){
                        let clone = templatebeertype.cloneNode(true);
                        clone.querySelector(".bename").textContent = e.name;
                        clone.querySelector(".cate").textContent = e.category;
                        clone.querySelector(".pouring").textContent = e.pouringSpeed;
                        clone.querySelector(".alco").textContent = e.alc;
                        document.querySelector("#beertype").appendChild(clone);
                     });
                     data.queue.forEach(function(e){
                        let clone = templateQue.cloneNode(true);
                        clone.querySelector(".starttime").textContent = e.startTime;
                        clone.querySelector(".ord").textContent = e.order;
                        
                        document.querySelector("#que").appendChild(clone);
                     });
                        
}
// setInterval(function () {
//     loadScript();
// }, 10000);

