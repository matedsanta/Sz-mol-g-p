addEventListener("DOMContentLoaded", () => {
    const egy = document.getElementById("egy");
    const ketto = document.getElementById("ketto");
    const harom = document.getElementById("harom");
    const negy = document.getElementById("negy");
    const ot = document.getElementById("ot");
    const hat = document.getElementById("hat");
    const het = document.getElementById("het");
    const nyolc = document.getElementById("nyolc");
    const kilenc = document.getElementById("kilenc");
    const nulla = document.getElementById("nulla");
    const plusz = document.getElementById("plusz");
    const minusz = document.getElementById("minusz");
    const szor = document.getElementById("szor");
    const osztva = document.getElementById("osztva");
    const gyok = document.getElementById("gyok");
    const hatvany = document.getElementById("hatvany");
    const egyenlo = document.getElementById("egyenlo");
    const torol = document.getElementById("torol");
    const vissza = document.getElementById("vissza");

    const kimenet = document.getElementById('kimenet');

    let elozoszam = 0
    let elozo_oper = false
    let kovi_oper = ''

    beir = szam => {
        if (elozo_oper) {kimenet.value = ''; elozo_oper = false}
        kimenet.value = kimenet.value.toString() + szam.toString()
    }

    torles = () => {
        kimenet.value = ''
    }

    operator = oper => {

        if(elozo_oper) {kimenet.value = oper} else { elozoszam = kimenet.value; kimenet.value = oper; elozo_oper = true}

        
    }

    visszavon = () => {
        if(!elozo_oper) {kimenet.value = kimenet.value.slice(0, -1)}
    }



    egy.addEventListener("click", () => {
        beir(1)
    })
    ketto.addEventListener('click', () => {
        beir(2)
    })
    harom.addEventListener("click", () => {
        beir(3)
    })
    negy.addEventListener('click', () => {
        beir(4)
    })
    ot.addEventListener("click", () => {
        beir(5)
    })
    hat.addEventListener('click', () => {
        beir(6)
    })
    het.addEventListener("click", () => {
        beir(7)
    })
    nyolc.addEventListener('click', () => {
        beir(8)
    })
    kilenc.addEventListener("click", () => {
        beir(9)
    })
    nulla.addEventListener('click', () => {
        beir(0)
    })
    torol.addEventListener('click', () => {
        torles()
    })

    plusz.addEventListener('click', () => {
        operator('+')
        console.log(elozoszam)
    })
    minusz.addEventListener('click', () => {
        operator('-')
        console.log(elozoszam)
    })
    szor.addEventListener('click', () => {
        operator('*')
        console.log(elozoszam)
    })
    osztva.addEventListener('click', () => {
        operator('/')
        console.log(elozoszam)
    })
    gyok.addEventListener('click', () => {
        operator('√')
        console.log(elozoszam)
    })
    hatvany.addEventListener('click', () => {
        operator('^')
        console.log(elozoszam)
    })
    
    vissza.addEventListener('click', () => {
        visszavon()
    })

});



