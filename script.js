function game(){
	var player1 = prompt("please choose your item: rock, paper, scissors");
	var player2 = Math.random();

	var player2item = " ";

	if(player2<0.3){
		player2item = "rock";
	}
	else if(player2<0.7){
		player2item = "paper";
	}
	else if(player2<1){
		player2item = "scissors";
	}


	if(player1===player2item){
		alert("the result is same, try again!" + " computer:" + player2item);
	}

	else if(player1==="rock"){
		if(player2item==="scissors"){
			alert("you are winner!" + " computer:" + player2item);
		}
		else{
			alert("computer is winner!" + " computer:" + player2item);
		}
	}

		else if(player1==="paper"){
		if(player2item==="rock"){
			alert("you are winner!" + " computer:" + player2item);
		}
		else{
			alert("computer is winner!" + " computer:" + player2item);
		}
	}

		else if(player1==="scissors"){
		if(player2item==="paper"){
			alert("you are winner!" + " computer:" + player2item);
		}
		else{
			alert("computer is winner!" + " computer:" + player2item);
		}
	}

}