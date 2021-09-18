const inputText = document.querySelector("#app__input");
const inputBtn = document.querySelector("#app__btn");
const resetBtn = document.querySelector("#app__reset-btn");


const checkSuccess = document.querySelector("#input_success");
const checkFail = document.querySelector("#input_fail");

inputBtn.addEventListener("click", checkPalindrome);
resetBtn.addEventListener("click", resetInput);


function checkPalindrome(str) {
    // Remove the spans before another check
    checkSuccess.style = "display: none";
    checkFail.style = "display: none";

    // Remove all characters that aren't letters and digits
    str = inputText.value.toLowerCase().match(/[A-Za-z А-Яа-я 0-9]/gi).join("");

    // Reverse the string and check if it's a palindrome
    let reversedStr = str.split("").reverse().join("");

    str === reversedStr ? checkSuccess.style = "display: block" : checkFail.style = "display: block";

}

function resetInput() {
    inputText.value = "";
    checkSuccess.style = "display: none";
    checkFail.style = "display: none";
}