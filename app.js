function waitThreeSeconds()
{
    var ms= 3000 +new Date().getTime();
    while (new Date()< ms){}
    console.log("finished fuction");
}

function calculation()
{
    var a = 3+2*5 + "hello bitches";
    console.log(a);
}


function greet(name)
{
    name=name || "unkown" || name.item;
    console.log("Hello "+name);
}



function clicked()
{
    //document.getElementById("btn").innerHTML+= ":)";
    console.log("logo was clicked");
    document.getElementById("logo").className = 'rotate';
    
}

function hovered()
{
    document.getElementById("fondo").className = 'newclass';
    document.getElementById("menu").className = 'show';
    
    console.log("logo was hovered");
    
}

function unhovered()
{
    document.getElementById("fondo").className = 'oldclass';
    /* document.getElementById("menu").className = 'hidden';*/
    console.log("logo was unhovered");
    
}

//listen for the click event
document.getElementById("logo").addEventListener("click", clicked);
document.getElementById("logo").addEventListener("mouseover",hovered);
document.getElementById("logo").addEventListener("mouseout",unhovered);

//waitThreeSeconds();
/*calculation();
greet();
greet("camilo");

console.log(libraryName);

console.log("finished exec");*/
