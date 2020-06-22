var First = {
    text:"Животные",
    childs:[{text :"Млекопитающие", childs : [{text:"Коровы"},{text:"Ослы"},{text:"Собаки"},{text:"Тигры"}]},{text:"Другие",childs:  [{text:"Змеи"},{text:"Птицы"},{text:"Ящерицы"}]}]
}
var Second= {
    text:"Рыбы",
    childs:[{text: "Аквариумные",childs:[{text:"Гуппи"},{text:"Скалярии"}]},{text:"Морские",childs:[{text:"Морская форель"}]}]
}

function Start()
{
    var my = document.createElement("ul");
    Recursion(my,First);
    Recursion(my,Second);
    var body = document.getElementsByTagName("body");
    body[0].appendChild(my);
}


function Recursion(parent,tempo){
    let to_add = document.createElement("li");
    to_add.innerHTML = tempo.text;
    if(tempo.hasOwnProperty("childs"))
    {

        let inseption = document.createElement("ul");
        for (let x of tempo.childs)
        {
            Recursion(inseption,x);
        }
        to_add.appendChild(inseption);
    }
    parent.appendChild(to_add);
}
Start();