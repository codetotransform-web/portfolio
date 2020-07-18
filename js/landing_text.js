
window.onload=function(){
    
    // setInterval(type_writer,100);
    type_writer();
    
    
}
const services=["Web-Designing .","Backend-Development .","Database-Design .","Full-Stack Web-Development .","Cloud Solution .","API Integration ."];
const curr_service = document.getElementById("services");
var i=0;
var j=0;

function type_writer(){
    if(j == 0){
        curr_service.innerHTML="";
    }
    
    if(j<services[i].length){
        curr_service.innerHTML += services[i][j];
        setTimeout(type_writer,50);
        j++;
    }
    else{
        window.setTimeout(type_writer,800);
        if(i<services.length-1){
            i++;
        }
        else{
            i=0;
        }
        j=0;
    }
    
}
// function delay(){
//     setTimeout(delay,1000);
// }
