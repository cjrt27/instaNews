$(function() {
 
 var rawDataNyt =""

$("select").on('change', function() {
   var sections = $('select[name=selector]').val()
    var url = "https://api.nytimes.com/svc/topstories/v2/" + sections + ".json";
url += '?' + $.param({
  'api-key': "69cbc8f4739f440b86f94a43bdd196a4"
});
$.ajax({
  url: url,
  method: 'GET',
}).done(function(rawDataNyt) {
  // console.log(rawDataNyt.results);

  $( ".storiesContainer" ).empty();



  $.each(rawDataNyt.results, function(key, value) {
    var img= value.multimedia[4].url
    var abstract= value.abstract
    var url= value.url
  
  // div > a within a = p > img > div 
  // img in background, text in front of it, url linked to text
  
    $(".storiesContainer").append(
      "<div class='storyPackages'><img src="
      +"'" 
        + img 
          +"'"
            +">" 
              + "<a target ='_blank' href=" 
                + url + "><p>"
                    + abstract 
                        + "</p></a>" 
                            +"</div>");
  
return key<11;
  
  })
  
});

})


$("select").on("change", function(event) {
if(screen.width <= "599") { 
$(".header").css({"margin-top":"1rem","max-height":"200px"})  
$("#logo").css({"text-align":"center"})
$(".header img").css({"height": "50%","width":"50%", "margin":"auto"})
$("footer").css({});
}
else if(screen.width >="600" && screen.width <= "1239") {
    $(".header").css({"margin-top":"0rem","max-height":"200px", "margin-right":"20rem"})  
    $("#logo").css({"text-align":"center", "margin-right":"3rem", "max-width":"134px"})
    $(".header img").css({"height": "50%","width":"50%", "margin":"auto"})
    $("footer").css({"margin-top":"3rem"});
}
else if(screen.width >="1240" && screen.width <= "8000") {
  $(".header").css({"margin-top":"0rem","max-height":"200px", "margin-right":"0rem"})  
  $("#logo").css({"margin-right":"0rem", "padding-bottom": "0rem", "max-width":"70px","max-height":"70px"})
  $(".header img").css({"height": "100%","width":"100%", "margin":"0rem"})
  $("footer").css({"margin-top":"3rem"});
  $(".selectwords").css({"margin-left":"3rem"});
}

})

})