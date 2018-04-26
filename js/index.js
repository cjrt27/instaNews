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
    var img= value.multimedia[1].url
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
})