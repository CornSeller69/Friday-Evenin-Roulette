// Dźwięki:
let mus_intro = new Audio('Materials/Music/introduction.mp3');
let mus_party = new Audio('Materials/Music/techno.mp3');
let mus_stage1 = new Audio('Materials/Music/techno_muffled.mp3');
let mus_stage2 = new Audio('Materials/Music/everyload.mp3');
let mus_stage3 = new Audio('Materials/Music/tense.mp3');
let mus_win = new Audio('Materials/Music/win.mp3');
let mus_lose = new Audio('Materials/lose.mp3');
let mus_death = new Audio('Materials/Music/hurt.mp3');
let sfx_newgame = new Audio('Materials/Sounds/newgame.mp3')
let sfx_reload = new Audio('Materials/Sounds/revolver-spin.mp3');
let sfx_shoot = new Audio('Materials/Sounds/shotty.mp3');
let sfx_shootCut = new Audio('Materials/Sounds/shotty-cut.mp3');
let sfx_click = new Audio('Materials/Sounds/dryfire.mp3');
let sfx_revive = new Audio('Materials/Sounds/defibrilator.mp3');
let sfx_standup = new Audio('Materials/Sounds/chair.mp3');

// Dane:
let liveChance; // szansa na żywy pocisk, sprawdza ile pozostało strzałów
let bulletsLeft; // sprawdza ile pocisków zostało
let bulletType; // sprawdza czy pocisk jest 'blank' czy 'live'
let bulletsFired = 0; // dla podsumowania, sprawdza ile wystrzelono pocisków podczas gry
let moneyEarned = 17000; // podsumowanie finalnych pieniędzy, różne wartości dodają punkty
let newGame = true; // sprawdza czy gracz już przegrał wcześniej
let name; // nazwa gracza - singleplayer
let name1; // nazwa gracza 1 - multiplayer
let name2; // nazwa gracza 2 - multiplayer
let yourTurn = true; // sprawdza czyja tura, zawsze grę zaczyna gracz
let round = 1; // obecna runda
let playerHP = 3; // zdrowie gracza
let dealerHP = 3; // zdrowie krupiera
let helperSavesYou = true; // sprawdzanie do zakończenia gry, wartość ulega zmianie na false przy trzeciej rundzie lub gdy newGame = false;
let currentHall = 1; // checks which color should partyhall become before the roulette room
let Hall = document.getElementById("partyhall").style.backgroundImage; // Do zmiany kolorków w partyhallu (w chuj zepsute!!!!)
let Noor = document.getElementById("dealerDoor").style.filter; // Zmiana kolorków drzwi w partyhallu
let changeHallInterval; // Usuwanie kolorkowej hali. Zrobione w sposób obejścia bo [w momencie pisania tego] chce to na szybko zrobić bo chce mi sie spać
let mus1loop; // j.w.
let mus2loop; // j.w.
let hallRepeatBlock = false; // podobnie co do j.w.
let dealerAskStage = 0; // sprawdza która część dialogu wstępnego dla krupiera ma być ukazana.