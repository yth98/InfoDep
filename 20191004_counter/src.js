let counterDiv = document.getElementById('counterDiv');

function increment (inc) {
    counterDiv.textContent = (parseInt(counterDiv.textContent) + inc).toString();
}