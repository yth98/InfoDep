function calc(){
    let height = parseFloat(document.querySelector("#height").value);
    let weight = parseFloat(document.querySelector("#weight").value);
    let bmi = weight / Math.pow(height, 2);
    span = document.createElement("span");
    span.appendChild(document.createTextNode("BMI: "+bmi));
    document.body.appendChild(span);
    document.body.appendChild(document.createElement("br"));
    document.querySelector("#prog").value=bmi;
}

header = document.getElementsByTagName('h1')[0];
header.addEventListener('click',function(){alert('Yee ~ ~')});

let t = 0;
function animate(){
    t += 0.08;
    document.querySelector("#prog2").value=(Math.sin(t)+1)*0.5;
    window.requestAnimationFrame(animate);
}
window.requestAnimationFrame(animate);