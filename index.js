
function getMusicLibrary() {
    $(document).ready(function () {
        $.ajax({
                url: "http://www.devcodecampmusiclibrary.com/api/music#",
                type: "GET",
                dataType: "json",
                success: function () {
                    $(".musicLibrary").html("");
                }
            })
            .then(function (data) {
                $.each(data, function (index, value) {
                    $("#musicLibrary").append( 
                        "<tr>" +
                            "<td>" + value.id + "</td>" +
                            "<td>" + value.title + "</td>" +
                            "<td>" + value.album + "</td>" +
                            "<td>" + value.artist + "</td>" +
                            "<td>" + value.genre + "</td>" +
                            "<td>" + value.releaseDate + "</td>" +
                        "</tr>"

                    )

                })

            })
    })

}

getMusicLibrary();





$(document).ready(function () {
    $("h1").css("color", "red");
    $("h1").css("margin", "auto");
    $("h1").css("text-align", "center");
});





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