window.onload = function() {
    var screen = document.getElementById("screen");
    var button = document.getElementsByTagName("button");  
    button[0].addEventListener("click", function(){
        if(screen.innerText == "0")
            screen. innerText = "1";
        else
            screen.innerText += "1";
    });
    button[1].addEventListener("click", function(){
        if(screen.innerText == "0")
            screen. innerText = "2";
        else
            screen.innerText += "2";
    });
    button[2].addEventListener("click", function(){
        if(screen.innerText == "0")
            screen. innerText = "3";
        else
            screen.innerText += "3";
    });
    button[3].addEventListener("click", function(){
        if(screen.innerText == "0")
            screen. innerText = "+";
        else
            screen.innerText += "+";
    });
    button[4].addEventListener("click", function(){
        if(screen.innerText == "0")
            screen. innerText = "4";
        else
            screen.innerText += "4";
    });
    button[5].addEventListener("click", function(){
        if(screen.innerText == 0)
            screen. innerText = "5";
        else
            screen.innerText += "5";
    });
    button[6].addEventListener("click", function(){
        if(screen.innerText == 0)
            screen. innerText = "6";
        else
            screen.innerText += "6";
    });
    button[7].addEventListener("click", function(){
        if(screen.innerText == 0)
            screen. innerText = "-";
        else
            screen.innerText += "-";
    });
    button[8].addEventListener("click", function(){
        if(screen.innerText == 0)
            screen. innerText = "7";
        else
            screen.innerText += "7";
    });
    button[9].addEventListener("click", function(){
        if(screen.innerText == 0)
            screen. innerText = "8";
        else
            screen.innerText += "8";
    });
    button[10].addEventListener("click", function(){
        if(screen.innerText == 0)
            screen. innerText = "9";
        else
            screen.innerText += "9";
    });
    button[11].addEventListener("click", function(){
        if(screen.innerText == 0)
            screen. innerText = "/";
        else
            screen.innerText += "/";
    });
    button[12].addEventListener("click", function(){
        screen.innerText = "0";
    });
    button[13].addEventListener("click", function(){
        screen.innerText += "0";
    });
    button[14].addEventListener("click", function(){
        screen.innerText = eval(screen.innerText);
    });
    button[15].addEventListener("click", function(){
        if(screen.innerText == 0)
            screen. innerText = "*";
        else
            screen.innerText += "*";
    });
}