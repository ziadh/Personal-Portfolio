axios.get("https://api.github.com/repos/ziadh/Safe-Data/releases/latest")
    .then(function(response){
        var releaseDate=new Date( response.data.published_at);
        var formattedDate = releaseDate.toLocaleDateString();
        document.getElementById('sd-last-release').innerHTML="Last Release: " + formattedDate;
    });

axios.get("https://api.github.com/repos/ziadh/Desky/releases/latest")
    .then(function(response){
        var releaseDate=new Date( response.data.published_at);
        var formattedDate = releaseDate.toLocaleDateString();
        document.getElementById('d-last-release').innerHTML="Last Release: " + formattedDate;
    });