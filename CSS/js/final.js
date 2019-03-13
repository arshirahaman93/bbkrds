

//grab all the eliment of who-i div
var whoImain=document.querySelectorAll(".who-i");
var whoI=whoImain[0].children;
var whoIh1=whoI[0];
var whoIP=whoI[1];


//grab all the eliment of prject section
var projBox=document.querySelectorAll(".proj-box");






window.addEventListener("scroll",function(e){

    // animetin for header

    if(scrollY >(whoImain[0].offsetTop-200) && scrollY < (whoImain[0].offsetTop)){
        
         whoIP.classList.add("ani-who-i");
         whoIh1.classList.add("ani-who-h");

   
    }
    if(scrollY < (whoImain[0].offsetTop-300)){
        whoIP.classList.remove("ani-who-i");
        whoIh1.classList.remove("ani-who-h");
         
    }

    // animetion for project
    if(scrollY >(projBox[0].offsetTop-300) && scrollY < (projBox[0].offsetTop))
        for(i=0;i<projBox.length;i++){
           
            {
               
                projBox[i].classList.add("ani-box"+i);
                
                
                console.log("hay")
            }
  
        }

        for(i=0;i<projBox.length;i++)
        {
            if(scrollY <(projBox[0].offsetTop-300))
            {
                
                projBox[i].classList.remove("ani-box"+i);
                
                
                console.log("hi")
            }
  
        }



})