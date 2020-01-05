var userArray = [];
if(JSON.parse(sessionStorage.getItem('passingArray')) != null){
	for(i=0;i<JSON.parse(sessionStorage.getItem('passingArray')).length;i++){
	 	userArray.push(JSON.parse(sessionStorage.getItem('passingArray'))[i]);
	};
};
console.log(userArray);
document.getElementById('enter').onclick = function (){authenticate()};
function authenticate(){
	var un = document.getElementById('un').value;
	var pw = document.getElementById('pw').value;
	if(userArray.length>0){
		for(i=0; i<userArray.length; i++){
			if((un == userArray[i].un) && (pw == userArray[i].pw)){
				alert("You're in!");
				document.getElementById('un').value = "";
				document.getElementById('pw').value = "";
				break;
			}
			if(i==userArray.length-1 || userArray.length==0){
				console.log('working')
				troubleshoot(un, pw);
			}
		}
	}else{
		alert("No match found. Please click the Create Account link to register a new username");
		document.getElementById('un').value = "";
		document.getElementById('pw').value = "";
	}

};
function troubleshoot(un, pw){
		for(j=0; j<userArray.length; j++){
			if(un == userArray[j].un){
				alert("Bad password");
				document.getElementById('pw').value = "";
				break;
			};
			if(j==userArray.length-1 || userArray.length==0){
				alert("No match found. Please click the Create Account link to register a new username");
				document.getElementById('un').value = "";
				document.getElementById('pw').value = "";
			};
		};
};