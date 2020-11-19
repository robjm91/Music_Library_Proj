
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


$(document).ready(function () {
    $("h1").css("color", "red");
    $("h1").css("margin", "auto");
    $("h1").css("text-align", "center");
    
getMusicLibrary();
});

