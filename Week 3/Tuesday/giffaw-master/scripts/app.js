$(document).on("ready", function() {
  $(".btn-primary").on("click", function(e) {
    e.preventDefault();

    let giphyUrl = "https://api.giphy.com/v1/gifs/search?q=";
    let key = "&api_key=7b8hYdN1AZDUNQZXer7dgov7YLERZ3KR";
    var fullUrl = `${giphyUrl}${$(".gif-input").val()}${key}`;

    $(".gif-gallery").empty();
    $.ajax({
      method: "GET",
      url: fullUrl,
      success: displayGiphy,
      error: gifError
    });
  });

  const displayGiphy = response => {
    response.data.forEach(gif => {
      $(".gif-gallery").append(`<img src=${gif.images.fixed_height.url}>`);
    });
  };

  const gifError = (error1, error2, error3) => {
    console.log(error1);
    console.log(error2);
    console.log(error3);
  };

  $.ajax({
    method: "GET",
    url:
      "https://api.giphy.com/v1/gifs/search?q=trending&api_key=7b8hYdN1AZDUNQZXer7dgov7YLERZ3KR",
    success: displayGiphy,
    error: gifError
  });
});
