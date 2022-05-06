var currentDiv = 0;

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

function newDiv(text) {
    currentDiv++;
    var newDiv = document.createElement("span");
    newDiv.innerHTML = text;
    newDiv.setAttribute("id", "option" + currentDiv);
    newDiv.setAttribute("class", "choice");
    document.getElementById("choices").appendChild(newDiv);
}

document.getElementById("typedText").addEventListener("keyup", choices);

function choices() {
    currentDiv = 0;
    array = this.value.split(",");
    document.getElementById("choices").innerHTML = "";
    array.forEach(element => {
        newDiv(element);
    });
}

document.addEventListener("keypress", function(event) {
    if(event.key === "Enter") {
       change();
    }
});

function change() {
    var temp = 1;
    for(var x=1; x<6; x++) {
        for(var i=1; i<=currentDiv; i++) {
            setTimeout(function(i) {
                if(i > 1) {
                    document.getElementById("option"+(i-1)).style.backgroundColor = 'Aqua';
                }   
                document.getElementById("option"+i).style.backgroundColor = 'Blue';
            }, 100*temp, i);
            temp++;
        }   
        setTimeout(() => {
            document.getElementById("option"+currentDiv).style.backgroundColor = 'Aqua';
        }, 100*temp+100);
    }
    
    setTimeout(() => {
        var random = getRndInteger(1, currentDiv+1);
        document.getElementById("option"+random).style.backgroundColor = "Green";
    }, 100*temp+200);
}