var score = 0;
var runningTotal = 0;
var finalAnswer = 0;

$(document).ready(function() {
	$("highscore").text(score);
    $("#btn").bind("click", function () {
    	"document.quiz-input.answer.focus()";
    })
    $("#quiz-input").bind('change', function() {
    	if ($(this).val().length > 0) {
    		$('input[type=submit]').attr('disabled', 'disabled');
    	} else {
    		$('input[type=submit]').removeAttr('disabled');
    	}
    	//$("input[type=submit]").prop("disabled", $(this).val().length > 0);
    });
    $("#quiz-input").submit(function(event){
    	var checkNull = $("quiz-input").val();
    	if (checkNull != "") {
    		event.preventDefault();
        	var userInput = $("input[name='answer']").val();
        	// Check input against answer
        	//answers.push(mathInput);
        	$("input[name='answer']").val("");
        	if (userInput / 1 === finalAnswer) {
        		score++;
        		var rambo = Math.floor(Math.random() * 2);
        		if (rambo === 0) {
        			alert("Bingo bango that's all righto!");
        		} else {
        			alert("Righto bucky boy!");
        		}
        	} else {
        		score = 0;
        		alert("You're an absolute idiot.\nThe answer was " + finalAnswer);
        	}
        	changeHighscore();
        	finalAnswer = 0;
        	document.getElementById("beginBtn").focus();
    	}
    });
});

        function startingNumber() {
        	//var firstNumber = document.getElementById("zero");
        	$("#zero").text(Math.floor((Math.random() * 14) + 1));
        	runningTotal = $("#zero").text();
		}

		function setup() {
		document.getElementById("submitBtn").focus();
		startingNumber();
		//$("#quiz-input").focus();
		//$("#quiz-input input").prop("disabled", false);
		$("#one").text("");
		$("#two").text("");
		$("#three").text("");
		$("#four").text("");
		var determiningOperator = 0;
		var addRandom = 0;
		var multiplyRandom = 0;
		var subtractRandom = 0;
		//runningTotal = 0;
		for (i = 1; i < 5; i++) {
			//var diviseRandom;
			determiningOperator = (Math.floor(Math.random() * 3) + 1);
			//console.log(determiningOperator);
	    	//Addition
	    	if (determiningOperator === 1) {
		    	addRandom = Math.floor(Math.random() * 15) + 1;
		    	while (runningTotal + addRandom > 400) {
					addRandom = Math.floor(Math.random() * 15) + 1;
	        	}
		    	addToPage(i, "+ " + addRandom);
		    	//To show js not to concatenate
		    	runningTotal = (runningTotal / 1) + addRandom;
			//Multiplication
  			} else if (determiningOperator === 2) {
	    		multiplyRandom = (Math.floor(Math.random() * 15) + 1);
	    		while (runningTotal * multiplyRandom > 400 ||
	    				multiplyRandom == 1) {
	    			multiplyRandom = (Math.floor(Math.random() * 15) + 1);
	    		}
	    		addToPage(i, "x " + multiplyRandom);
	    		runningTotal *= multiplyRandom;
	    	//Subtraction
	    	} else {
	    		subtractRandom = (Math.floor(Math.random() * 15) + 1);
	    		while (runningTotal - subtractRandom <= 0) {
	    			subtractRandom = (Math.floor(Math.random() * 15) + 1);
	    		}
	    		addToPage(i, "- " + subtractRandom);
	    		runningTotal -= subtractRandom;
	    	}
	    	//Division
	    	/*
	    	} else {
	    		diviseRandom = Math.floor(Math.random() * 20) + 1;	
	    		while (runningTotal % diviseRandom != 0) {
	    			diviseRandom = Math.floor(Math.random() * 20) + 1;
	    		}
	    		addToPage(i, "Divided by " + diviseRandom + "\n");
	    		runningTotal /= diviseRandom;
	    	}
	    	*/
	    }
	    finalAnswer = runningTotal;
	    //alert(runningTotal);
	}

	function changeHighscore() {
		//$("highscore").innerHTML = score;
		$("#highscore").html(score);
	}
/**
	function printTotal(currTotal) {
		alert(currTotal);
	}
**/
    function addToPage(loopNum, element) {
    	if (loopNum === 1) {
    		$("#one").append(element);
    	} else if (loopNum === 2) {
    		$("#two").append(element);    		
    	} else if (loopNum === 3) {
    		$("#three").append(element);
    	} else {
    		$("#four").append(element);    		
    	} 
    	/*if (loopNum === 5) {
    		$("#five").append(element);
    	} else if (loopNum === 6) {
    		$("#six").append(element);    		
    	} else {
    		$("#seven").append(element);
    	}
    	*/
    }

/*
	function makeOpArray() {
		for (int i = 0; i < 8; i++) {
			var opChooser = Math.floor((Math.random() * 4) + 1);
			if (opChooser === 0) {
				opArray[i] = addOp;
			} else if (opChooser === 1) {
				opArray[i] = multOp;
			} else if (opChooser === 2) {
				opArray[i] = subOp;
			} else {
				opArray[i] = divOp;
			}
		}
		for (int i = 0; i < opArray.length; i++) {
			$("#zero").append(opArray[i]);
		}
		//opArray.innerHTML = "dope";
	}

	function addOp(first, second) {
		return eval("first + second");
	}

	function multOp(first second) {
		return eval("first * second");
	}

	function subOp(first, second) {
		return eval("first - second");
	}

	function divOp(first, second) {
		return eval("first / second");
	}
      
	function startingNumber() {
        var startingNumber = (Math.floor(Math.random() * 20) + 1);
		$("zero").append(startingNumber);
	}
*/
