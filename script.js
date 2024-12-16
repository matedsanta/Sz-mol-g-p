document.addEventListener("DOMContentLoaded", () => {
    const buttons = {
        egy: document.getElementById("egy"),
        ketto: document.getElementById("ketto"),
        harom: document.getElementById("harom"),
        negy: document.getElementById("negy"),
        ot: document.getElementById("ot"),
        hat: document.getElementById("hat"),
        het: document.getElementById("het"),
        nyolc: document.getElementById("nyolc"),
        kilenc: document.getElementById("kilenc"),
        nulla: document.getElementById("nulla"),
        plusz: document.getElementById("plusz"),
        minusz: document.getElementById("minusz"),
        szor: document.getElementById("szor"),
        osztva: document.getElementById("osztva"),
        gyok: document.getElementById("gyok"),
        hatvany: document.getElementById("hatvany"),
        egyenlo: document.getElementById("egyenlo"),
        torol: document.getElementById("torol"),
        vissza: document.getElementById("vissza"),
    };

    const kimenet = document.getElementById("kimenet");

    let elsoszam = null;
    let masodikszam = null;
    let vegrehajtando = null;
    let elozo_oper = false;

    const beir = (szam) => {
        if (elozo_oper) {
            kimenet.value = "";
            elozo_oper = false;
        }
        kimenet.value += szam.toString();
    };

    const torles = () => {
        kimenet.value = "";
        elsoszam = null;
        masodikszam = null;
        vegrehajtando = null;
        elozo_oper = false;
    };

    const visszavon = () => {
        kimenet.value = kimenet.value.slice(0, -1);
    };

    const operator = (oper) => {
        if (elsoszam === null) {
            elsoszam = parseFloat(kimenet.value) || 0;
        } else if (!elozo_oper) {
            masodikszam = parseFloat(kimenet.value);
            elsoszam = calculate(elsoszam, masodikszam, vegrehajtando);
            kimenet.value = elsoszam;
        }
        vegrehajtando = oper;
        elozo_oper = true;
    };

    const calculate = (a, b, operation) => {
        switch (operation) {
            case "+":
                return a + b;
            case "-":
                return a - b;
            case "*":
                return a * b;
            case "/":
                return b !== 0 ? a / b : "Error";
            case "√":
                return Math.sqrt(a);
            case "^":
                return Math.pow(a, b);
            default:
                return a;
        }
    };

    const egyenloClick = () => {
        if (vegrehajtando && !elozo_oper) {
            masodikszam = parseFloat(kimenet.value);
            kimenet.value = calculate(elsoszam, masodikszam, vegrehajtando);
            elsoszam = null;
            masodikszam = null;
            vegrehajtando = null;
        }
    };


    buttons.egy.addEventListener("click", () => beir(1));
    buttons.ketto.addEventListener("click", () => beir(2));
    buttons.harom.addEventListener("click", () => beir(3));
    buttons.negy.addEventListener("click", () => beir(4));
    buttons.ot.addEventListener("click", () => beir(5));
    buttons.hat.addEventListener("click", () => beir(6));
    buttons.het.addEventListener("click", () => beir(7));
    buttons.nyolc.addEventListener("click", () => beir(8));
    buttons.kilenc.addEventListener("click", () => beir(9));
    buttons.nulla.addEventListener("click", () => beir(0));


    buttons.plusz.addEventListener("click", () => operator("+"));
    buttons.minusz.addEventListener("click", () => operator("-"));
    buttons.szor.addEventListener("click", () => operator("*"));
    buttons.osztva.addEventListener("click", () => operator("/"));
    buttons.gyok.addEventListener("click", () => operator("√"));
    buttons.hatvany.addEventListener("click", () => operator("^"));

    buttons.egyenlo.addEventListener("click", egyenloClick);
    buttons.torol.addEventListener("click", torles);
    buttons.vissza.addEventListener("click", visszavon);

    addEventListener("keypress", (event) => {
        console.log(event.key)
        let valid_values = [0,1,2,3,4,5,6,7,8,9]
        if (valid_values.includes(parseInt(event.key))) {
            beir(parseInt(event.key))
        } else {
            switch (event.key) {
                case "+":
                    operator("+");
                    break;
                case "-":
                    operator("-");
                    break;
                case "*":
                    operator("*");
                    break;
                case "/":
                    operator("/");
                    break;
                case "Enter":
                    egyenloClick();
                    break;
                case "b":
                    visszavon();
                    break;
                case "c":
                    torles();
                    break;
                    


            }
        }
    })
});

