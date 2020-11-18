
console.log("hey");
$.ajax({
    url: "http://www.devcodecampmusiclibrary.com/api/music",
    dataType: "json",
    type: "get",
    success: function (data, textStatus, jQXhr) {
        //do something with response data (data parameter)
    },
    error: function (jQXhr, textStatus, errorThrown) {
        // if request fails, the errorThrown parameter will contain details of the error
    },
});

$("[]")


/*
$(selector).(action)  selector finds HTML elements, and action is performed on the elements.

jQuery - Selectors

$("#some-id");     <-- <ul id="some-id"> 
$(".some-class");  <-- <ul class="some-class">
$("ul li");             <-- <li>

Examples:

$("ul li");

$("ul li").filter("#coffee");   <-- finds all coffee

$("ul").find("#coffee");   <-- finds 1st instance of coffee

<ul id="drinks">
    <li id="coffee">Espresso</li>
    <li id="coffee">Cold brew</li>
</ul>

*/