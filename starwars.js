var xhttp = new XMLHttpRequest();
xhttp.open("GET", "https://swapi.co/api/films/", true);
xhttp.setRequestHeader("Content-type", "application/json");
xhttp.send();
xhttp.onload = function() {
    if (this.readyState == 4 && this.status == 200) {
        var starwarsResponse = JSON.parse(this.responseText);
        dust.onLoad = function(name, callback) {
            xhttp.open("GET", "film-directive.html", true);
            xhttp.send();
            xhttp.onload = function() {
                if (this.readyState == 4 && this.status == 200) {
                    callback(undefined, xhttp.responseText);
                }
            };
        };

        //var compiledContent = dust.compile("","templatename")
        //dust.loadSource(compiledContent);

        dust.render("starwarsTemplate", starwarsResponse, function(err, response) {
            document.getElementById("starwars-container").innerHTML = response;
        });

    }
};
