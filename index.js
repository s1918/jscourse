let count = 0;
const colorlist = ["red", "blue", "green","pink","yellow"]


document.getElementById("count-el").innerText = count;


function showResult() {
    document.getElementById("count-el").innerText = count;
    document.getElementById("count-el").style.color = colorlist[count%5];
}


function changeCounter(value) {
    count += value
}

function onCounterChange(value) {
    changeCounter(value)
    showResult()
}