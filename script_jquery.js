$(document).ready(function(){
    $('button').click(function(){
        $('#unico').css("color", "red");
    });
        
});

$(function(){
    $('#azul').click(function(){
        $('p').css("color", "blue")
    });
    $('#vermelho').click(function(){
        $('p').css("color", "red");
    });

   $('#desaparecer').click(function (){
       $('#sumir').hide();       
   })

   $('#aparecer').click(function () {
       $('#sumir').show();
   })
});
