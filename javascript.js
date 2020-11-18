$.ajax({
    url: "http://www.devcodecampmusiclibrary.com/api/music",
    dataType: "json",
    type: "get",
    success: function (data, textStatus, jQXhr) {
        //do something with response data (data parameter)
    },
    error: function (jQXhr, textStatus, errorThrown) {
        // if request fails, the errorThrown parameter will contain details of the error
        console.log(errorThrown);
    },
});