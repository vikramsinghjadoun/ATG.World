// javascript for atg.world
// function showHidden(obj)
// {
//     $(obj.nextElementSibling).slideDown();
//     $(obj).hide();
// }
// function hideHidden(obj){
//     $(obj.parentElement).slideUp();
//     $("#More").show();
// }
function showHidden() {
    var x = document.getElementById("post-text-hidden");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
function hideHidden() {
    var x = document.getElementById("post-text-hidden");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
function showHidden2() {
    var x = document.getElementById("post-text-hidden-2");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
function hideHidden2() {
    var x = document.getElementById("post-text-hidden-2");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
// dropdown menu function starts from here
function dropdown(){
   var click = document.getElementById("myDropdown");
   if(click.style.display ==="none"){
       click.style.display = "block"
   }
   else{
       click.style.display = "none";
   }
}
function dropdown2(){
    var click = document.getElementById("myDropdown2");
    if(click.style.display ==="none"){
        click.style.display = "block"
    }
    else{
        click.style.display = "none";
    }
 }
 function dropdown3(){
    var click = document.getElementById("myDropdown3");
    if(click.style.display ==="none"){
        click.style.display = "block"
    }
    else{
        click.style.display = "none";
    }
 }
 function dropdown4(){
    var click = document.getElementById("myDropdown4");
    if(click.style.display ==="none"){
        click.style.display = "block"
    }
    else{
        click.style.display = "none";
    }
 }

//  dropdown menu ends here

// icons in show button scripting here
function showIcon(){
    var click = document.getElementById("iconShow");
    if(click.style.display === "none"){
        click.style.display = "block"
    }
    else{
        click.style.display = "none";
    }
}
function showIcon2(){
    var click = document.getElementById("iconShow2");
    if(click.style.display === "none"){
        click.style.display = "block"
    }
    else{
        click.style.display = "none";
    }
}
function showIcon3(){
    var click = document.getElementById("iconShow3");
    if(click.style.display === "none"){
        click.style.display = "block"
    }
    else{
        click.style.display = "none";
    }
}
function showIcon4(){
    var click = document.getElementById("iconShow4");
    if(click.style.display === "none"){
        click.style.display = "block"
    }
    else{
        click.style.display = "none";
    }
}
console.log();