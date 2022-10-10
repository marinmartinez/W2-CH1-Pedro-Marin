const ball = {
    number: 0,
    matched: false,
};

const bingo = [{ ball }, { ball }, { ball }, { ball }, { ball }];
const singednumbers = [];

function RandonNumber() {
    let numero = Math.random() * 98 + 1;
    numero = parseInt(numero);
    return numero;
}

//     function CompruebaNumero() {
//         console.log(bingo.filter(function (n) {
//             if (n.number === 15) {
//                 return true;
//             }
//         })

//   }
function SearchSinged(array, num) {
    let searched = false;
    array.forEach((element) => {
        if (element === num) {
            searched = true;
        }
    });
    return searched;
}

function SearchNumber(array, num) {
    let searched = false;
    array.forEach((object) => {
        if (object.number === num) {
            searched = true;
        }
    });
    return searched;
}

function SearchCondition(array) {
    let searched = false;
    array.forEach((object) => {
        if (object.matched === false) {
            searched = true;
        }
    });
    return searched;
}

function CreateBingoCard() {
    for (let i = 0; i < 5; i++) {
        let numero = RandonNumber();
        if (SearchNumber(bingo, numero) === false) {
            bingo[i].number = numero;
            bingo[i].matched = false;
        } else {
            while (SearchNumber(bingo, numero) === true) {
                numero = randonNumber();
            }
            bingo[i].number = numero;
            bingo[i].matched = false;
        }
    }
}
function PrintBingo() {
    for (let i = 0; i < 5; i++) {
        console.log(`${bingo[i].number}-------${bingo[i].matched}`);
    }
}

function SingNumber() {
    const num = RandonNumber();

    if (SearchSinged(singednumbers, num) === true) {
        return SingNumber();
    }
    singednumbers.push(num);
    return num;
}

function CheckNumber(num) {
    console.log(`Number : ----   ${num}`);
    if (SearchNumber(bingo, num)) {
        for (let x = 0; x < bingo.length; x++) {
            if (bingo[x].number === num) {
                bingo[x].matched = true;
                console.log("I have it ,I have this number");
            }
        }
    }
}
function SingLineAndBingo() {
    if (SearchCondition(bingo) === false) {
        console.log("Line And Bingo ");
        return true;
    }
    return false;
}
function PlayBingo() {
    CreateBingoCard();
    PrintBingo();
    console.log("The Game Start Now ");
    let check = false;
    while (check === false) {
        const numero = SingNumber();
        CheckNumber(numero);
        check = SingLineAndBingo();
    }
    PrintBingo();
    console.log("Match Finished");
}

PlayBingo();
