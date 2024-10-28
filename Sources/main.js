// Usuń po wprowadzeniu już tych funkcji

function startMP() {alert("Opcja wciąż w produkcji");}

// -------------------------------------

function showAchieves() {
    document.getElementById("achievy").style.visibility = 'visible';
    document.getElementById("achievy").style.opacity = 1;
}
function closeAchieves() {
    document.getElementById("achievy").style.opacity = 0;
    setTimeout(function() {
        achievy.style.visibility = 'hidden';
      }, 300);
}

function showCredits() {
    document.getElementById("credits").style.visibility = 'visible';
    document.getElementById("credits").style.opacity = 1;
}
function closeCredits() {
    document.getElementById("credits").style.opacity = 0;
    setTimeout(function() {
        credits.style.visibility = 'hidden';
      }, 300);
}

function startCampaign() {
    document.body.style.backgroundColor = 'white'; // bo powinno być ale na początku dałem black by sie nie wyróżniało przed załadowaniem css
    document.getElementById("styleLoadTest").style.visibility = 'hidden'; // mały tekścik który ostrzega jeżeli styl się spierdolił
    sfx_newgame.play();
    document.getElementById("startGry").style.pointerEvents = 'none';
    document.getElementById("startMultigry").style.pointerEvents = 'none';
    document.getElementById("creditsy").style.pointerEvents = 'none';
    document.getElementById("achievements").style.pointerEvents = 'none';
    document.getElementById("main-menu").style.opacity = 0;
    setTimeout(function() {
        mus_intro.play();
        document.getElementById("pic1").style.visibility = 'visible';
        document.getElementById("pic1").style.opacity = 0.7;
        document.getElementById("text1").style.visibility = 'visible';
        document.getElementById("text1").style.opacity = 0.7;
        setTimeout(function() {
            addEventListener("click", function a() {
                document.getElementById("text1").style.opacity = 0;
                document.getElementById("pic1").style.opacity = 0;
                setTimeout(function() {
                    document.getElementById("text1").style.visibility = 'hidden';
                    document.getElementById("pic1").style.visibility = 'hidden';
                }, 700)
            document.getElementById("pic2").style.visibility = 'visible';
            document.getElementById("pic2").style.opacity = 0.7;
            document.getElementById("text2").style.visibility = 'visible';
            document.getElementById("text2").style.opacity = 0.7;
            setTimeout(function() {
                addEventListener("click", function b() {
                removeEventListener("click", a);
                document.getElementById("text2").style.opacity = 0;
                document.getElementById("pic2").style.opacity = 0;
                setTimeout(function() {
                    document.getElementById("text2").style.visibility = 'hidden';
                    document.getElementById("pic2").style.visibility = 'hidden';
                    addEventListener("click", function c() {
                        removeEventListener("click", b);
                        removeEventListener("click", c);
                        document.getElementById("text3").style.opacity = 0;
                        document.getElementById("pic3").style.opacity = 0;
                        setTimeout(function() {
                            document.getElementById("text3").style.visibility = 'hidden';
                            document.getElementById("pic3").style.visibility = 'hidden';
                            addEventListener("click", endIntro);
                        }, 700)
                    document.getElementById("text4").style.visibility = 'visible';
                    document.getElementById("text4").style.opacity = 0.7;
                    })
                }, 700)
            document.getElementById("pic3").style.visibility = 'visible';
            document.getElementById("pic3").style.opacity = 0.7;
            document.getElementById("text3").style.visibility = 'visible';
            document.getElementById("text3").style.opacity = 0.7;
                },700)
            })})
        },1000)
    }, 6000)
    
}

function endIntro() {
    for (let i = 10; i > 0; i--) {
        setTimeout(function() {
            mus_intro.volume = Math.max(0, mus_intro.volume - 0.1);
        }, i * 400); // Multiplied by i to stagger the timeouts
    }      
    removeEventListener("click", endIntro);
    document.getElementById("intro").style.opacity = 0;
    setTimeout(function() {
        document.getElementById("intro").style.visibility = 'hidden';
        gameBegin();}, 5000)
}

function gameBegin() {
    if (!hallRepeatBlock) {
    mus_party.play();
    mus1loop = setInterval(function loopMus() {
        mus_party.currentTime = 0;
        mus_party.play();
    },43250)
    document.getElementById("partyhall").style.visibility = 'visible';
    document.getElementById("partyhall").style.opacity = 1;
    document.body.style.backgroundColor = 'black';
    changeHallInterval = setInterval(function changehall() {
        switch (currentHall) {
            case 1:
                Hall = 'url(Materials/partyhall1.png)';
                Noor = 'sepia(1) saturate(10) hue-rotate(270deg) brightness(1.1)';
                currentHall++;
                break;
            case 2:
                Hall = 'url(Materials/partyhall2.png)';
                Noor = 'sepia(1) saturate(10) hue-rotate(190deg) brightness(1.1)';
                currentHall++;
                break;
            case 3:
                Hall = 'url(Materials/partyhall3.png)';
                Noor = 'sepia(1) saturate(10) hue-rotate(20deg) brightness(1.2)';
                currentHall++;
                break;
            case 4:
                Hall = 'url(Materials/partyhall4.png)';
                Noor = 'sepia(1) saturate(10) hue-rotate(90deg) brightness(1.1)';
                currentHall = 1;
                break;
        }
        document.getElementById("partyhall").style.backgroundImage = Hall;
        document.getElementById("dealerDoor").style.filter = Noor;
    },350)}
}

function enterDealer() {
    hallRepeatBlock = true;
    clearInterval(changeHallInterval);
    sfx_standup.play();
    clearInterval(mus1loop);
    mus_party.pause();
    mus_stage1.play();
    mus2loop = setInterval(function loopMus() {
        mus_stage1.currentTime = 0;
        mus_stage1.play();
    },43250)
    // --
    let dealerRoom = document.getElementById("dealerRoom");
    dealerRoom.style.visibility = 'visible';
    dealerRoom.style.opacity = 1; console.log(dealerRoom); // Debugging
    let dealer = document.getElementById("dealer");
    let table = document.getElementById("table");
    let revolver = document.getElementById("revolver");
    console.log(dealer, table, revolver); // Debugging
    // --
    document.getElementById("partyhall").style.opacity = 0;
    setTimeout(function() {document.getElementById("partyhall").style.visibility = 'hidden'},200)
    document.getElementById("dealerRoom").style.visibility = 'visible';
    document.getElementById("dealerRoom").style.opacity = 1;
    document.getElementById("dealerRoom").style.pointerEvents = 'auto';
    setTimeout(dealerAsk,950);
}

function dealerAsk() {
    if (dealerAskStage == 0) {
        console.log(dealerAskStage);
        document.getElementById("dealer_release").style.visibility = 'visible';
        document.getElementById("dealer_release").innerHTML = '<h2>KRUPIER:</h2><p>Proszę, podpisz dokument.</p><p class="dialogue-ignore">Kliknij, aby kontynuować...</p>';
        dealerAskStage++;
    }
    else if (dealerAskStage == 1) {
        console.log(dealerAskStage);
        document.getElementById("general-release").style.visibility = 'visible';
        document.getElementById("general-release").style.opacity = 1;
        dealerAskStage++;
    }
    else if (dealerAskStage == 2) {
        document.getElementById("dealer_release").innerHTML = '<h2>KRUPIER:</h2><p>Proszę, podpisz dokument.</p><p class="dialogue-ignore">Kliknij, aby kontynuować...</p>';
        // zmień powyższe przy edytowaniu tego później; pozdrawiam, ty z niedalekiej przeszłości!
    }
}