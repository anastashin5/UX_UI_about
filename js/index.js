$(document).ready(function(){
  $(".education").on("click", function(){
     if($(this).css("zIndex") == "0") {
	$(this).css("zIndex", 1);
     } else {
        $(this).css("zIndex", 0);
     }
     $(".education").toggleClass("bring-into-focus");
  });

  $(".skills").on("click", function(){
     if($(this).css("zIndex") == "0") {
	$(this).css("zIndex", 1);
     } else {
        $(this).css("zIndex", 0);
     }
     $(".skills").toggleClass("bring-into-focus");
  });

  $(".hobbies").on("click", function(){
     if($(this).css("zIndex") == "0") {
	$(this).css("zIndex", 1);
     } else {
        $(this).css("zIndex", 0);
     }
     $(".hobbies").toggleClass("bring-into-focus");
  });

  $(".contact").on("click", function(){
     if($(this).css("zIndex") == "0") {
	$(this).css("zIndex", 1);
     } else {
        $(this).css("zIndex", 0);
     }
     $(".contact").toggleClass("bring-into-focus");
  });
});


