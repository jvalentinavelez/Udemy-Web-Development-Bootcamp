
//When the script is included at the head tag, instead of the end of the document, right before the body end tag
// $(document).ready(function() {   //Executes once the jQuery library is loaded
//   $("h1").css("color","red");
//
// })


$("h1").addClass("big-title    margin-50");
$("h1").text("Bye");
$("button").html("<em>Hey</em>");

//console.log($("img").attr("src"));

$("a").attr("href","https://www.yahoo.com");

$("h1").click(function(){
	$("h1").css("color","purple");
})

$("button").click(function(){
	$("h1").css("color","purple");
});

$(document).keydown(function(event){
//console.log(event.key);
  $("h1").text(event.key);
})


$("h1").on("mouseover",function(){
  $("h1").css("color","purple");
})


$("h1").prepend("<button>New</button>")
