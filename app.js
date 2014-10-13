(function() {
  var app = angular.module('greenSite', ['site-directives', 'review-directives']);

  app.controller('ListController', function(){
    this.links = sites;
  });
  
  app.controller("ReviewController", function(){
    this.reviews = reviews;
    this.review = {};
    this.addReview = function(product) {
      this.review.createdOn = Date.now();
      this.review.vote = 0;
      debugger
      reviews.push(this.review);
      this.review = {};
    };
    this.upVote = function (review) {
        review.vote++;
    };
    this.downVote = function (review) {
        review.vote--;
    };
  });

  app.controller("TabController", function() {
    this.tab = 0;
    this.isSet = function(checkTab) {
      return this.tab === checkTab;
    };
    this.setTab = function(setTab) {
      if(setTab===this.tab)
        this.tab=-1;
      else
        this.tab = setTab;
    };
  });


})();
