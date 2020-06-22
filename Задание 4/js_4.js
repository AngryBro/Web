function GetSOfEllipse(){
	var A = parseFloat(document.getElementById("ElA").value);
	var B = parseFloat(document.getElementById("ElB").value);
	
	if(isNaN(A) || isNaN(B)){
		alert("Неверные данные");
	}
	else{
		let S = Math.PI*A*B;
		alert(S.toFixed(3));
	}
};

function Factorial(val){
	var res = 1;
	for(var i = 0; i < val; i++){
		res *= (i+1);
	}
	return res;
}

function GetCos(){
	var X = parseFloat(document.getElementById("CosX").value);
	if(isNaN(X)){
		alert("Неверные данные");
	}
	else{
		var CosX = 1;
		for(var i = 0; i < 100; i++){
			CosX += Math.pow(X,(i+1)*2)/Factorial((i+1)*2) * (i%2 == 0?-1:1);
		}
	}
	document.getElementById("CosXVal").innerHTML = String(CosX.toFixed(3));
}

function ArrFunc(){
	var M = [];
	var Sum = 0;
	for(var i = 0; i < 5; i++){
		M.push(parseInt(parseFloat(document.getElementById("thM1" + String(i+1)).value)));
		if(isNaN(M[i])){
			alert("Неверные данные");
			return;
		}
		else{
			Sum += M[i];
		}
	}
	Sum /= 5;
	for(var i = 0; i < 5; i++){
		document.getElementById("thM" + String(i+1)).innerHTML = M[i] - Sum;
	}
}

function getRandomInt(a,b) {
    return ((b - 1 - a)*Math.random() + a);
}

function getArray(n) {
    var Arr = [];
    for(var i = 0; i < n; i++)
    {
        Arr[i] = parseInt(getRandomInt(0,n*10));
    }
    return Arr;
}

function getResultArray(Arr){
	var Temp;
	for(var i = 0; i < Arr.length; i++){
		for(var j = 0; j < Arr.length - i - 1; j++){
			if(Arr[j] > Arr[j+1]){
				Temp = Arr[j];
				Arr[j] = Arr[j+1];
				Arr[j+1] = Temp;
			}
		}
	}
	return Arr;
}

function FullFillTable(){
	var n = parseInt(document.getElementById('n').value);
	if(isNaN(n))
	{
		alert("Неверные данные");	
	}
	else{
		if(n > 30)
			n = 30;
		var Arr = getResultArray(getArray(n**2));
		var  Prev = document.getElementsByClassName("fth");
		
		while(Prev.length > 0){
			Prev[0].parentNode.removeChild(Prev[0])
		}
		
		var Table = document.createElement("table");
		Table.className = "fth";
		for(var i = 0; i < n; i++){
			var Tr = document.createElement("tr");
			for(var j = 0; j < n; j++){
				var Th = document.createElement("th");
				if(j%2 == 0){
					Th.innerHTML = Arr[j*n + n-i-1];
				}
				else{
					Th.innerHTML = Arr[j*n+i];
				}
				Tr.appendChild(Th);
			}
			Table.appendChild(Tr);
		}
		document.getElementById("tsk4").appendChild(Table);
	}
}
