window.addEventListener("load", sidenVises);


function sidenVises() {
    console.log("sidenVises");
    //nulstil alting

    showStart(); //DEN HER ER VIGTIG - DEN KALDER PÅ DEN FUNCTION DU HAR ANGIVET!!!!!!!!
}



function showStart() {
    console.log("showStart");
    //Vis startskærm + kat + knap
    document.querySelector("#menu_background").classList.add("show");
    document.querySelector("#playknap").classList.add("show");
    document.querySelector("#catronautmenu1").classList.add("show");

}

//klik på start knap
document.querySelector("#playknap").addEventListener("click", hideStart);

//klik på settingsknap
document.querySelector("#settings_titel").addEventListener("click", settingsKnap);


function settingsKnap() {
    console.log("settingsKnap");

    document.querySelector("#settings_skaerm").classList.add("show");
    document.querySelector("#lyd").classList.add("show");
    document.querySelector("#musik").classList.add("show");
    document.querySelector("#settings_titel_tilbage").classList.add("show");

}

document.querySelector("#settings_titel_tilbage").addEventListener("click", settingsSkjul);

//skjul tilbage knap
function settingsSkjul() {
    console.log("settingsSkjul");

    document.querySelector("#settings_skaerm").classList.remove("show");
    document.querySelector("#settings_titel_tilbage").classList.remove("show");
    document.querySelector("#lyd").classList.remove("show");
    document.querySelector("#musik").classList.remove("show");
}


function hideStart() {
    console.log("hideStart");
    //Stop animation på start knap
    document.querySelector("#menu_background").classList.add("menu_animation");
    console.log("animationstart");

    document.querySelector("#playknap").classList.remove("show");

    document.querySelector("#playknap").classList.add("hide");
    document.querySelector("#catronautmenu1").classList.remove("show");


    document.querySelector("#menu_background").classList.remove("show");

    document.querySelector("#catronautmenu1").classList.add("hide");



}


//når rotation-animation er færdig --> startGame
document.querySelector("#menu_background").addEventListener("animationend", startGame);



function startGame() {
    console.log("startGame");
    document.querySelector("#menu_background").classList.add("hide");
    //vis spilskærm
    document.querySelector("#game_background").classList.add("show");

    start();
}



function start() {

    console.log("start");


    document.querySelector("#komet").classList.add("comet_fall_down");
    document.querySelector("#komet1").classList.add("comet_fall_down1");
    document.querySelector("#komet2").classList.add("comet_fall_down2");
    document.querySelector("#komet3").classList.add("comet_fall_down3");
    document.querySelector("#komet4").classList.add("comet_fall_down4");
    document.querySelector("#komet5").classList.add("comet_fall_down5");
    document.querySelector("#komet6").classList.add("comet_fall_down6");

    document.querySelector("#komet").addEventListener("click", cometForsvind);

    document.querySelector("#komet1").addEventListener("click", cometForsvind);

    document.querySelector("#komet2").addEventListener("click", cometForsvind);

    document.querySelector("#komet3").addEventListener("click", cometForsvind);

    document.querySelector("#komet4").addEventListener("click", cometForsvind);

    document.querySelector("#komet5").addEventListener("click", cometForsvind);

    document.querySelector("#komet6").addEventListener("click", cometForsvind);


}

//FORSVIND KOMET
function cometForsvind() {
    console.log("cometGone");
    this.classList.add("hide");

    /*
        document.querySelector("#komet").classList.add("cometGone");

        document.querySelector("#komet1").classList.add("cometGone");
        document.querySelector("#komet2").classList.add("cometGone");
        document.querySelector("#komet3").classList.add("cometGone");
        document.querySelector("#komet4").classList.add("cometGone");
        document.querySelector("#komet5").classList.add("cometGone");
        document.querySelector("#komet6").classList.add("cometGone");
     */
    clickComet(this);

}


let point = 0;

function clickComet(comet) {
    console.log("clickComet");

    //GIV POINT
    point++;
    console.log(point);
    document.querySelector(".antal").textContent = point;

    //FLYT KOMET OG GIV EN NY POSITION///
    let myNumber = Math.floor((Math.random() * 5) + 1);

    comet.classList = "komet komet_pos" + myNumber;

    comet.classList.add("comet_fall_down" + myNumber);
}


document.querySelector("#komet").addEventListener("animationend", loseLife);
document.querySelector("#komet1").addEventListener("animationend", loseLife);
document.querySelector("#komet2").addEventListener("animationend", loseLife);
document.querySelector("#komet3").addEventListener("animationend", loseLife);
document.querySelector("#komet4").addEventListener("animationend", loseLife);
document.querySelector("#komet5").addEventListener("animationend", loseLife);
document.querySelector("#komet6").addEventListener("animationend", loseLife);


let liv = 3;

function loseLife() {
    console.log("loseLife");

    //mist liv
    console.log("#heart" + liv);

    let heart = "#heart" + liv;
    document.querySelector(heart).classList.add("hide");

    liv--;
    console.log(liv);



}
