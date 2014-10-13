(function(){
  var app = angular.module("review-directives", []);

  app.directive("reviewDescription", function(){
    return {
      restrict: 'E',
      templateUrl: "suggestion-description.html",
      controller: function() {
        this.reviews = reviews;
        this.review = {};
        this.addReview = function(product) {
          this.review.createdOn = Date.now();
          this.review.votes = 0;
          reviews.push(this.review);
          this.review = {};
        };
        this.upVote = function () {
            review.vote++;
        };
        this.downVote = function () {
            review.vote--;
        };
      },
      controllerAs: "review"
    };
  });

})();