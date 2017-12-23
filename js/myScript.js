/* =====================================
==============Start Opject==============
===================================== */    

var Persons = [{
        name: 'John',
        surname: 'Doe',
        favoritePerformers :["Justin Timberlake", " Ed Sheeran", " Emma Watson"],
        age: 26,
        myPhoto: "img/boy1.800x1000.jpg",	
        likes: 152,   // numeric property used to store likes
        id: 1,
        sex: "man"
    },{
        name: 'Maria',
        surname: 'Doe',
        favoritePerformers : ["Justin Timberlake", " Ed Sheeran", " Emma Watson"],
        age: 27,
        myPhoto: "img/girl1.800x1000.jpg",	
        likes: 438,    // numeric property used to store likes
        id: 2,
        sex: "woman"
    },{
        name: 'Divid',
        surname: 'porche',
        favoritePerformers : ["Justin Timberlake", " Ed Sheeran", " Emma Watson"],
        age: 24,
        myPhoto: "img/boy2.800x1000.jpg",	
        likes: 864,    // numeric property used to store likes
        id: 3,
        sex: "man"
    },{
        name: 'manuela',
        surname: 'porche',
        favoritePerformers : ["Justin Timberlake", " Ed Sheeran", " Emma Watson"],
        age: 22,
        myPhoto: "img/girl2.800x1000.jpg",	
        likes: 999,   // numeric property used to store likes
        id: 4,
        sex: "woman"
    }]
var i = 0,
x = 1

for (i = 0; i < Persons.length; i++) {
    document.getElementById("persons").innerHTML += ('<div class="box_persons all '+Persons[i].sex+'"><div class="img"><img src="'+ Persons[i].myPhoto  +'" alt="Persons"></div><div class="date"><h3 class="name">' + Persons[i].name + '</h3><h4 class="surname">Name: ' + Persons[i].surname + '</h4><p>Age: ' + Persons[i].age + '</p><details><summary>Hoppys</summary>' + Persons[i].favoritePerformers + '</details><button id="button'+Persons[i].id+'"><i id="heart'+Persons[i].id+'" class="fa fa-heart-o" aria-hidden="true"> Like</i><span id="likenu'+Persons[i].id+'"> ' + Persons[i].likes + '</span></button></div></div>'); 
        
    }

$("#button1").click(function() {
    $("#heart1").removeClass("fa-heart-o");
    $("#heart1").addClass("fa-heart");
    $("#likenu1").text(" "+(Persons[0].likes + 1));
    $("#button1").css("color", "red")
})

        $("#button1").dblclick(function() {
            $("#heart1").addClass("fa-heart-o");
            $("#heart1").removeClass("fa-heart");
            $("#likenu1").text(" "+(Persons[0].likes));
            $("#button1").css("color", "black")
        })

$("#button2").click(function() {
    $("#heart2").removeClass("fa-heart-o");
    $("#heart2").addClass("fa-heart");
    $("#likenu2").text(" "+(Persons[1].likes + 1));
    $("#button2").css("color", "red")
})

        $("#button2").dblclick(function() {
            $("#heart2").addClass("fa-heart-o");
            $("#heart2").removeClass("fa-heart");
            $("#likenu2").text(" "+(Persons[1].likes));
            $("#button2").css("color", "black")
        })

$("#button3").click(function() {
    $("#heart3").removeClass("fa-heart-o");
    $("#heart3").addClass("fa-heart");
    $("#likenu3").text(" "+(Persons[2].likes + 1));
    $("#button3").css("color", "red")
})

        $("#button3").dblclick(function() {
            $("#heart3").addClass("fa-heart-o");
            $("#heart3").removeClass("fa-heart");
            $("#likenu3").text(" "+(Persons[2].likes));
            $("#button3").css("color", "black")
        })

$("#button4").click(function() {
    $("#heart4").removeClass("fa-heart-o");
    $("#heart4").addClass("fa-heart");
    $("#likenu4").text(" "+(Persons[3].likes + 1));
    $("#button4").css("color", "red")
})

        $("#button4").dblclick(function() {
            $("#heart4").addClass("fa-heart-o");
            $("#heart4").removeClass("fa-heart");
            $("#likenu4").text(" "+(Persons[3].likes));
            $("#button4").css("color", "black")
        })


/* =====================================
=======Start Box Show and Hidden========
===================================== */

$(document).ready(function(){
    $("#all").on("click", function(){
        $(".all").show();
    });
    
    $("#man").click(function(){
        $(".man").show();
        $(".woman").hide();
    });
    
    $("#woman").click(function(){
        $(".woman").show();
        $(".man").hide();
    });
});  

