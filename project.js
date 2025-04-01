var btnplus=document.getElementById("btn1");
var overlayss=document.getElementById("inpop");
var diabox=document.getElementById("indes");
btnplus.addEventListener("click",function()
{
    overlayss.style.display="block";
    diabox.style.display="block";
})
    
function cancl(event)
{
    event.preventDefault()
    overlayss.style.display="none";
    diabox.style.display="none";

}
function del(event)
{
    event.target.parentElement.remove()
}

var container= document.querySelector(".container");
var adbtn = document.getElementById("addbook") 
var booktit= document.getElementById("book-title");
var bookauth= document.getElementById("book-author");
var bookdes= document.getElementById("des");

adbtn.addEventListener("click",function(event) 
{
    event.preventDefault(event)
    var div=document.createElement("div")
    div.setAttribute("class","conbody")
    div.innerHTML=`<h2>${booktit.value}</h2>
    <h3>${bookauth.value}</h3> 
    <p>${bookdes.value}</p>
    <button onclick="del(event)" id="btnn">Delete</button>`
    container.append(div)
    overlayss.style.display="none";
    diabox.style.display="none";
    document.getElementById("book-title").value="";
    document.getElementById("book-author").value="";
    document.getElementById("des").value="";

})