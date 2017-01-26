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
   /* document.getElementById("logo").className = 'rotate';*/
   
        if(i===images.length) i=0;
        console.log('url("'+images[i]+'") no-repeat center center fixed;');
        var image = "url(\""+images[i]+"\") no-repeat center center fixed";
        document.getElementById("fondo").style.background= image;
        document.getElementById("fondo").style.backgroundSize="cover";
        
        i++;
}

function hovered()
{
    document.getElementById("fondo").className = 'newclass';
    document.getElementById("menu").className = 'show';
    document.getElementById("logo").style.cursor="pointer";
    console.log("logo was hovered");
}

function unhovered()
{
    document.getElementById("fondo").className = 'oldclass';
    /* document.getElementById("menu").className = 'hidden';*/
    console.log("logo was unhovered");
}
var i=0;

var images = ["imagenesprueba/elcrimendejuaquin2.png","imagenesprueba/elcrimendejuaquin.png","imagenesprueba/laruleta2.png","imagenesprueba/videomusical.png","imagenesprueba/crimen_joaquin.png"]


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
