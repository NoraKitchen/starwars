angular.module("starwars-app")
    .controller("HomeController", function(starWarsApi){
        
        var hc = this;
        
        starWarsApi.getPeople(1).then(function(dataPromiseIThink){
            hc.people = dataPromiseIThink.results;
        })
        
        
        
        
        hc.testVar = "Home controller working"
        
    })