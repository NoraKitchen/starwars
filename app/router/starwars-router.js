angular.module("starwars-app")
    .config(function($stateProvider){
        
        $stateProvider.state("home", {
            url: "",
            templateUrl: "app/home/home.html",
            controller: "HomeController",
            controllerAs: "hc"            
        })
        
        
    })