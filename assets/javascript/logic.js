var p1Bank = ["assets/images/cronenmorty.png", "assets/images/evilmorty.png", "assets/images/morty.png", "assets/images/cronenrick.png", "assets/images/tinyrick.png","assets/images/rick.png"];

  var player1Char = 3;
  var player2Char = 3;


	function pokePick(name,healthPoint,hitPoint,battlePoints){
		this.pokeName = name;
		this.pokeHealthPoint = healthPoint;
		this.pokeHitPoint = hitPoint;
    this.pokeBattlePoint = battlePoints;
 	}

	var bulbasaur = new pokePick(p1Bank[0], 200, 1, [4,5,6]);
	var charmander = new pokePick(p1Bank[1],150, 7, [0,1,2,3,4,8,10]);
	var ekans = new pokePick(p1Bank[2],120, 4, [2,2,3,3,4,7,12]);
	var pikachu = new pokePick(p1Bank[3],125, 5, [3,4,6,7,8]);
	var sandshrew = new pokePick(p1Bank[4],175, 3, [3,4,5,6,7,8,9]);
	var squirtle = new pokePick(p1Bank[5],160, 2, [1,1,2,3,4,4,5,6]);

  var player1;
  var player2;

  

  


  // bulbasaur.pokeBattlePoints[Math.floor(Math.random() * bulbasaur.pokeBattlePoints.length)]

 $("#attack").on("click", function(){

    player1.pokeHitPoint += player1.pokeBattlePoint[Math.floor(Math.random() * player1.pokeBattlePoint.length)];
    player2.pokeHitPoint += player2.pokeBattlePoint[Math.floor(Math.random() * player2.pokeBattlePoint.length)];
    player1.pokeHealthPoint -= player2.pokeHitPoint;
    player2.pokeHealthPoint -= player1.pokeHitPoint;

    // console.log(player2.pokeHitPoint);


    $('#p1CharHealth').html(player1.pokeHealthPoint);
    $('#p2CharHealth').html(player2.pokeHealthPoint);
    $('#p1CharHit').html(player1.pokeHitPoint);
    $('#p2CharHit').html(player2.pokeHitPoint);

    if (player1.pokeHealthPoint <= 0) {
      $('#legend1').empty();
      $('#p1Select').empty();
      player1.pokeBattlePoint = null;
      player1Char--;
      $("#1").removeClass("clear");
      $("#2").removeClass("clear");
      $("#3").removeClass("clear");
      console.log(player1Char);

    }

    if (player2.pokeHealthPoint <= 0) {
      
      $('#legend2').empty();
      $('#p2Select').empty();
      player2.pokeBattlePoint = null;
     player2Char--;
      $("#4").removeClass("clear");
      $("#5").removeClass("clear");
      $("#6").removeClass("clear");
     console.log(player2Char);

    }


    if (player1Char === 0 || player2Char === 0){
      $("#resetButton").empty();
      $("#resetButton").append("<p><button type='button' class='btn btn-default btn-lg'>Play Again?</button></p>");
       $("#resetButton").click(function() {
        location.reload();
        });
    }

    if (player1Char ===0 && player1.pokeBattlePoint === null){
        alert("Rick WON!!!!!");
    }

   if (player2Char ===0 && player2.pokeBattlePoint === null){
        alert("Morty WON!!!!!!");
    }

 });

	$(document).ready(function(){

    	$("#1").click(function(){
        player1 = bulbasaur;
    		$("#p1Select").empty();
      		$(this).hide();
      		$("#p1Select").append("<img id='pokemon1Appear' src='" + bulbasaur.pokeName + "'>");
      		$("#legend1").empty();
      		$("#legend1").append("<h1>Health Points</h1>" + "<h3 id='p1CharHealth'>" + bulbasaur.pokeHealthPoint + "</h3>" + "<h1>Hit Points</h1>" +  "<h3 id='p1CharHit'>" + bulbasaur.pokeHitPoint + "</h3>");

          $("#3").addClass("clear");
          $("#2").addClass("clear");
          // if ($("#pokemon1Appea") == $("#p1Char1")) {
          //  $("#2").append("<div class = 'color: black;'></div>")
          // }

    	});

    	$("#2").click(function(){
        player1 = charmander;
    		$("#p1Select").empty();
      		$(this).hide();
      		$("#p1Select").append("<img id='pokemon1Appear' src='" + charmander.pokeName + "'>");
      		$("#legend1").empty();
      		$("#legend1").append("<h1>Health Points</h1>" +  "<h3 id='p1CharHealth'>" + charmander.pokeHealthPoint + "</h3>" + "<h1>Hit Points</h1>" + "<h3 id='p1CharHit'>" + charmander.pokeHitPoint + "</h3>");
          $("#3").addClass("clear");
          $("#1").addClass("clear");
    	});

    	$("#3").click(function(){
        player1 = ekans;
    		$("#p1Select").empty();
      		$(this).hide();
      		$("#p1Select").append("<img id='pokemon1Appear' src='" + ekans.pokeName + "'>");
      		$("#legend1").empty();
      		$("#legend1").append("<h1>Health Points</h1>" + "<h3 id='p1CharHealth'>" + ekans.pokeHealthPoint + "</h3>" + "<h1>Hit Points</h1>" + "<h3 id='p1CharHit'>" + ekans.pokeHitPoint + "</3>");
          $("#2").addClass("clear");
          $("#1").addClass("clear");
    	});

//enemy Side
    	$("#4").click(function(){
        player2 = pikachu
    		$("#p2Select").empty();
      		$(this).hide();
      		$("#p2Select").append("<img id='pokemon2Appear' src='" + pikachu.pokeName + "'>");
      		$("#legend2").empty();
      		$("#legend2").append("<h1>Health Points</h1>" + "<h3 id='p2CharHealth'>" + pikachu.pokeHealthPoint + "</h3>" + "<h1>Hit Points</h1>" + "<h3 id='p2CharHit'>" + pikachu.pokeHitPoint + "</h3>");
          $("#5").addClass("clear");
          $("#6").addClass("clear");
    	});

    	$("#5").click(function(){
          player2 = sandshrew;
    		$("#p2Select").empty();
      		$(this).hide();
      		$("#p2Select").append("<img id='pokemon2Appear' src='" + sandshrew.pokeName + "'>");
      		$("#legend2").empty();
      		$("#legend2").append("<h1>Health Points</h1>" + "<h2 id='p2CharHealth'>" + sandshrew.pokeHealthPoint + "</h3>" + "<h1>Hit Points</h1>" + "<h3 id='p2CharHit'>" + sandshrew.pokeHitPoint + "</h3>");
          $("#4").addClass("clear");
          $("#6").addClass("clear");
    	});

    	$("#6").click(function(){
         player2 = squirtle;
    		$("#p2Select").empty();
      		$(this).hide();
      		$("#p2Select").append("<img id='pokemon2Appear' src='" + squirtle.pokeName + "'>");
      		$("#legend2").empty();
      		$("#legend2").append("<h1>Health Points</h1>" + "<h2 id='p2CharHealth'>" + squirtle.pokeHealthPoint + "</h3>" + "<h1>Hit Points</h1>" + "<h3 id='p2CharHit'>" + squirtle.pokeHitPoint + "</h3>");
          $("#5").addClass("clear");
          $("#4").addClass("clear");
    	});



	}); // .ready closer