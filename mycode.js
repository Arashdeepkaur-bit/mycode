const PI= 3.14;
// let radius;

let circumference;
document.getElementById("button").onclick=function(){
   let radius=document.getElementById("input").value;
    radius=Number(radius);
    circumference=2 * PI * radius;
    document.getElementById("div").textContent=circumference;
}
