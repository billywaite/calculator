$(document).ready(function(){
  /*******************************************
            Initial Display Variable
  *******************************************/
  var current = '0';
  /*******************************************
             add numbers to display
   *******************************************/
  $(".zero").click(function() {
     if (current == '0') {
     $('h2').html(current);
     } else {
       current += '0';
       $('h2').html(current);
     }
     });
  
    $(".one").click(function() {
     if (current == '0') {
       current = '1';
     $('h2').html(current);   
     } else {
       current += '1';
       $('h2').html(current);
     }
     });
  
      $(".two").click(function() {
     if (current == '0') {
       current = '2';
     $('h2').html(current);   
     } else {
       current += '2';
       $('h2').html(current);
     }
     });
  
     $(".three").click(function() {
     if (current == '0') {
       current = '3';
     $('h2').html(current);   
     } else {
       current += '3';
       $('h2').html(current);
     }
     });
  
       $(".four").click(function() {
     if (current == '0') {
       current = '4';
     $('h2').html(current);   
     } else {
       current += '4';
       $('h2').html(current);
     }
     });
  
       $(".five").click(function() {
     if (current == '0') {
       current = '5';
     $('h2').html(current);   
     } else {
       current += '5';
       $('h2').html(current);
     }
     });
  
       $(".six").click(function() {
     if (current == '0') {
       current = '6';
     $('h2').html(current);   
     } else {
       current += '6';
       $('h2').html(current);
     }
     });
  
       $(".seven").click(function() {
     if (current == '0') {
       current = '7';
     $('h2').html(current);   
     } else {
       current += '7';
       $('h2').html(current);
     }
     });
  
       $(".eight").click(function() {
     if (current == '0') {
       current = '8';
     $('h2').html(current);   
     } else {
       current += '8';
       $('h2').html(current);
     }
     });
  
       $(".nine").click(function() {
     if (current == '0') {
       current = '9';
     $('h2').html(current);   
     } else {
       current += '9';
       $('h2').html(current);
     }
     });
  
     $(".decimal").click(function() {
         current += '.';
       $('h2').html(current);
       
     });
 
  /*******************************************
              arithmetic operators
   *******************************************/
  $(".plus").click(function(){
    current += '+';
    $('h2').html(current);
  });
 
  $(".minus").click(function(){
    current += '-';
    $('h2').html(current);
  });
  
    $(".multiply").click(function(){
    current += '*';
    $('h2').html(current);
  });
  
  $(".divide").click(function(){
    current += '/';
    $('h2').html(current);
  });
  
  /*******************************************
          Other Manipulators
   *******************************************/
  
  $(".equal").click(function(){
    current = eval(current);
    $('h2').html(current);
  });
  
  $(".clear").click(function(){
    current = '0';
    $('h2').html(current);
  });

  //End
  });