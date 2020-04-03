$.ajax({
    url: "https://api.hnpwa.com/v0/news/1.json",
    type: "GET",
    dataType: "json",
    success: data => {
        console.log("jQuery Ajax API call");
        console.log(data);
        console.log("jQuery Ajax end");
    },
    error: error => {
        console.error(error);
    },
    complete: () => {
        console.log("jQuery Ajax Complete");
    }
});