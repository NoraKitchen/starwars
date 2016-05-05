angular.module("starwars-app")
    .controller("HomeController", function(StarWarsService){
        
        var hc = this;
        hc.people = StarWarsService.getPeople();
        
        console.log(hc.people)
        console.log(hc.people.$$state.value) //doesn't work
        
        hc.testVar = "Home controller working"
        
    })