$(document).ready(function(){
   
    var answer= 3;
    //Put all of your code under here.
    $("button").click(function(){
        console.log("you clicked");
        
     
       var guess = $('input').val()
       if(guess==answer){
           $("body").append("correct.") ;
       } else if (answer<guess){
           $("body").append("too high.") ;
       } else if (answer>guess){
            $("body").append("too low.");
       }
    });
});