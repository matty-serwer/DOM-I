let msTensNode = document.querySelector('#msTens');
let msHundredsNode = document.querySelector('#msHundreds');
let secondOnesNode = document.querySelector('#secondOnes');
let secondTensNode = document.querySelector('#secondTens');
let digits = document.querySelectorAll('.digit');

let msTens = 0;
let msHundreds = 0;
let secondOnes = 0;
let secondTens = 0;

function CountUp() {
    if(msTens < 9) {
        msTens++;
    } else {
        msTens = 0;
        if(msHundreds < 9) {
            msHundreds++;
        } else {
            msHundreds = 0;
            if(secondOnes < 9) {
                secondOnes++;
            } else {
                secondOnes = 0;
                if(secondTens < 1) {
                    secondTens++;
                    digits.forEach((digit) => {
                        digit.classList.add('redDigit')
                    });
                    clearInterval(counterGo);
                } 
            }
        }
    }
    msTensNode.innerText = msTens;
    msHundredsNode.innerText = msHundreds;
    secondOnesNode.innerText = secondOnes;
    secondTensNode.innerText = secondTens;
}

console.log(digits);

let counterGo = setInterval(CountUp, 10); 