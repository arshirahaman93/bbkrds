var box=document.querySelectorAll(".box");
var box1=box[0];
var box2=box[1];
var box3=box[2];
 var count=0;
box1.addEventListener("click",function(){
    count=count+1;
    if((count%2)==0){
    box1.style.background='red';
    }
    else{
        box1.style.background='gray';
    }
    
})