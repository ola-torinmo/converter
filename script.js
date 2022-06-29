(function(){
    "use strict";
    document.getElementById('convert').addEventListener('submit',function(evt){
        evt.preventDefault();
        const distance =parseFloat(document.getElementById('distance').value);
        const answer=document.getElementById('answer');
        //alert(distance);
        if(distance){
            const conversion=(distance*1.637638).toFixed(3);
            
            answer.innerHTML=`<h2>${distance} miles converts to ${conversion} kilometer</h2>`;
        }
        else{
            answer.innerHTML='Please Provide A Number!!';

        }

    });


})();