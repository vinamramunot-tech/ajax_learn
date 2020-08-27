

function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    // load streetview
    var streetStr = $('#street').val();
    var cityStr = $('#city').val();
    var address = streetStr + ', ' + cityStr;

    $greeting.text('So, you want to live at ' + address + '?');

    // YOUR CODE GOES HERE!
    var streetviewUrl = 'https://maps.googleapis.com/maps/api/streetview?size=600x400&location=' + address + '&key=AIzaSyCmrBR4C2KoNvlZPyHZHsRXKljkAwiNTbU';
    
    console.log(streetviewUrl);
    $body.append('<img class="bgimg" src="' + streetviewUrl + '">');

    var nytimeUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + cityStr + "&sort=newest" + "&api-key=i9Xt1K6K5HHLdoS21kvM8AJ01sAIwgvP";


    $.getJSON(nytimeUrl, function(data) {
        console.log(data);
    });


};


// loadData();
$('#submit-btn').on("click", function (e) { 
    
    e.preventDefault();
    loadData();
   
    
});                             