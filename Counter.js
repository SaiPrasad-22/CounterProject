let counter = document.querySelector('.Counter')
let btns = document.querySelectorAll('.btnContainer')
let incrementButton = document.querySelector(".Increment");
let decrementButton = document.querySelector(".Decrement");
let clearButton = document.querySelector(".Clear");


let count = 0;
let errorDisplayed = false;
if (count == 0) {
    clearButton.style.display = "none";
}

incrementButton.addEventListener("click", increase);
decrementButton.addEventListener("click", decrease);
clearButton.addEventListener("click", clear);


function increase() {
    count++;
    if (count == 1 && errorDisplayed) {
        let errorMessage = document.querySelector(".error");
        errorDisplayed = false;
        errorMessage.style.display = "none";
    }
    counter.innerHTML = `Your Current Count is : ${count}`;
    clearButton.style.display = "inline";
}


function decrease() {
    if (!errorDisplayed) {
        if (count == 1) clearButton.style.display = "none";
        if (count == 0) {
            errorDisplayed = true;
            let errorMessage = document.createElement("div");
            errorMessage.innerText = `Error : Cannot go below 0`;
            errorMessage.className = "error";

            btnContainer.prepend(errorMessage);
        } else {
            count--;
            counter.innerHTML = `Your Current Count is : ${count}`;
            console.log(count);
        }
    }
}


function clear() {
    count = 0;
    counter.innerText = `Your Current Count is : 0`;
    clearButton.style.display = "none";
}
