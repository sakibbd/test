$(document).ready(function(){
  var length = $(':button').length;
    //alert(length);
    console.log(length);
  $('button#button1').on("click", function(){
    var message = $("<span>You have clicked "+$(this).text()+"!!!</span></br>");
    
    alert("You have selected " +$(this).text());
    $(".btn").append(message);
    $("span").click(function(){
      $(this).hide();
    });
//    $("p").click(function(){
//      $(this).hide();
//    });
  });
});