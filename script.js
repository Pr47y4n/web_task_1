function changeColor(divId, divid2){
    changeColors(divId)
    changeColors(divid2)
}

function textAndColor(divId) {
    toggleText(divId);
    changeColors(divId);
}

function toggleText(divId) {
    var button = document.getElementById(divId).querySelector('button');
    if (button.textContent === 'Hello') {
        button.textContent = 'Bye';
    } else {
        button.textContent = 'Hello';
    }
}

function changeColors(divId) {
    var div = document.getElementById(divId);

    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    div.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

function Hide(btnId) {
        var x = document.getElementById("dv_1");
        var y = document.getElementById(btnId);

        if (x.style.display === "none") {
          x.style.display = "block";
          y.textContent = 'hide'
        } else {
          x.style.display = "none";
          y.textContent = 'show'
        } 
}