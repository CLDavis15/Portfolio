$(document).ready(function(){

    var giphy = new Image();
    giphy.src = "assets/images/technics-q-c-640-480-1.jpg"
    giphy.onclick = function() {
        window.location.href = "https://cldavis15.github.io/Giphy-API/";
    }
    $("giphy").click(function(){
        $("giphy").attr("href", 
        "https://cldavis15.github.io/Giphy-API/");
    });


    $("train").click(function(){
        $("train").attr("href", 
        "https://cldavis15.github.io/Train-Schedule/");
    });

    $("crystal").click(function(){
        $("crystal").attr("href", 
        "https://cldavis15.github.io/unit-4-game/");
    });

    $("psychic").click(function(){
        $("psychic").attr("href", 
        "https://cldavis15.github.io/Psychic-Game/");
    });

    $("project1").click(function(){
        $("project1").attr("href", 
        "https://monikanikolova.github.io/Just-Eat-It/");

    });


document.body.appendChild(giphy);
});