"use strict";

// GLOBAL VARIABLES
 let templateStorage = document.querySelector("#storageTemp").content;
 let templateBartender = document.querySelector("#bartenderTemp").content;
 let templatebeertype = document.querySelector("#beerTypeTemp").content;
 let templateQue = document.querySelector("#queTemp").content;
 let templateServ = document.querySelector("#servTemp").content;
 let templateTabs = document.querySelector("#tapsTemp").content;


let bar;
let data;

document.addEventListener("DOMContentLoaded", loadScript);

function loadScript(){
    data = JSON.parse(FooBar.getData());
    document.querySelector("#bartender").innerHTML = "";
    document.querySelector("#beertype").innerHTML = "";
    document.querySelector("#que").innerHTML = "";
    document.querySelector("#storage").innerHTML = "";
    document.querySelector("#serv").innerHTML = "";
    document.querySelector("#tap").innerHTML = "";
    //resetter, så det ikke bliver apennded flere gange efter hinanden
    


                        //      STORAGE         //

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


                        //      BARTENDER       //

                data.bartenders.forEach(function(e){

                        let clone = templateBartender.cloneNode(true);
                        clone.querySelector(".bName").textContent = e.name;
                        clone.querySelector(".status").textContent = e.status;
                        clone.querySelector(".statusdetail").textContent = e.statusDetail;
                        // clone.querySelector(".waiting").textContent = e.waiting;
                        if (e.status == "READY"){
                                clone.querySelector(".status").style.color = "#4de41fd2"
                        }
                        else if (e.status == "WORKING"){
                                clone.querySelector(".status").style.color = "#F0A700"
                        }

                        document.querySelector("#bartender").appendChild(clone);
                        

                        //     BEER TYPE        //

                     });
                     data.beertypes.forEach(function(e){
                        let clone = templatebeertype.cloneNode(true);
                        clone.querySelector(".bename").textContent = e.name;
                        clone.querySelector(".cate").textContent = e.category;
                        clone.querySelector(".pouring").textContent = e.pouringSpeed;
                        clone.querySelector(".alco").textContent = e.alc;
                                clone.querySelector(".beerimg img").src = "images/"+e.label;

                        document.querySelector("#beertype").appendChild(clone);
                     });


                     //         QUEUE           //

                     data.queue.forEach(function(e){
                        let clone = templateQue.cloneNode(true);
                        clone.querySelector(".ord").textContent = e.order;
                        
                        document.querySelector("#que").appendChild(clone);
                     });
        
                        data.serving.forEach(function(e){
                                let clone = templateServ.cloneNode(true);
                                clone.querySelector(".orde").textContent = e.order;
                                document.querySelector("#serv").appendChild(clone);
                        });

                                data.taps.forEach(function(e){
                                let clone = templateTabs.cloneNode(true);
                                clone.querySelector(".lvl").textContent = e.level;
                                clone.querySelector(".capa").textContent = e.capacity;
                                clone.querySelector(".beers").textContent = e.beer;
                                let beerLabel = e.beer.toLowerCase();
                                clone.querySelector(".tapimg img").src = "images/tabs/"+beerLabel+".png";
                               
                                if (e.level == 2500){ 
                                
                                        clone.querySelector(".procent .indhold").style.background = " linear-gradient(90deg,  #F0A700 100%, white 0%)";
                                }
                                else{
                                        let fuld = ((e.level * 10)/25)/10;
                                        let resten = 100 - fuld;
                                        clone.querySelector(".procent .indhold").style.background = ` linear-gradient(90deg,  #F0A700 ${fuld}%, white ${resten}%)`;

                                }
                                document.querySelector("#tap").appendChild(clone);
                                });



                }

 setInterval(function () {
         loadScript();
 }, 10000);

