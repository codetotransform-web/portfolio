
// $(window).load(function() {
//     console.log("Hello");
// });

window.addEventListener("scroll",function(){
    nav_bar = document.getElementById("nav-bar");
    nav_bar.classList.toggle("nav_scroll",this.window.scrollY>0);
    // if(window.scrollY>0){
    //     nav_bar.classList.toggle("nav_scroll");
    // }
    
    
    var mob_nav = document.getElementById("mob_nav").children;
    
    if(this.window.scrollY>0){
        for(var i=0;i<mob_nav.length;i++){
            mob_nav[i].style.backgroundColor = "white";
        }
    }
    else{
        for(var i=0;i<mob_nav.length;i++){
            mob_nav[i].style.backgroundColor = "black";
        }
    }
    
    
});


var mob_nav_tab_opened = 0;
$("#mob_nav").click(function () {
    if(mob_nav_tab_opened == 0){
        $(".nav_tabs").css(
            {
                "transform":"translateX(0)",
                "transition": "all 0.5s ease-in",
            },"ease-in"
        )
        mob_nav_tab_opened = 1;
    }
    else{
        $(".nav_tabs").css(
            {
                "transform":"translateX(100%)",
                "transition": "all 0.5s ease-in",
            },"ease-in"
        )
        mob_nav_tab_opened = 0;
    }
    
    
})
// var mob_nav = document.getElementById("mob_nav");
// console.log(mob_nav);





