/**
 * Created by andrew on 3/22/17.
 */

// var tour;
// $(document).ready(function(){
//     tour = new Tour({
//         steps: [
//             {
//                 element: "#getstarted",
//                 title: "TESTING",
//                 content: "Wow it works"
//             },
//             {
//                 element: "#tutorials",
//                 title: "Tutorial Categories",
//                 content: "Here are the things"
//             },
//             {
//                 path: "phone.html",
//                 element: "#tutorials",
//                 title: "Test",
//                 content: "WOW"
//             }
//         ]});
//     // Initialize the tour
//     tour.init();
// });
// function startTour(){
//     // Start the tour
//     tour.start();
//     tour.restart(); //I found this is needed
//     console.log("TEST");
// }

(function() {
    $(function() {
        var $demo, duration, remaining, tour;
        $demo = $("#getstarted");
        duration = 5000;
        remaining = duration;
        tour = new Tour({
            onStart: function() {
                return $demo.addClass("disabled", true);
            },
            onEnd: function() {
                return $demo.removeClass("disabled", true);
            },
            debug: true,
            steps: [
                {
                    element: "#getstarted",
                    placement: "right",
                    title: "Welcome to Techademy!",
                    content: "This is a tutorial that will walk you through the website's features step by step."
                }, {
                    element: "#tutorials",
                    placement: "top",
                    title: "Tutorial Categories",
                    content: "Here are the tutorial categories. Hover (move your mouse over) these squares to view each topic!"
                }, {
                    element: "#tutorials",
                    placement: "bottom",
                    title: "Best of all, it's free!",
                    content: "Yeah! Free as in beer... or speech. Use and abuse, but don't forget to contribute!"
                }
            ]
        }).init();
        if (tour.ended()) {
            $('<div class="alert alert-info alert-dismissable"><button class="close" data-dismiss="alert" aria-hidden="true">&times;</button>You ended the demo tour. <a href="#" data-demo>Restart the demo tour.</a></div>').prependTo(".content").alert();
        }
        $(document).on("click", "#getstarted", function(e) {
            e.preventDefault();
            if ($(this).hasClass("disabled")) {
                return;
            }
            tour.restart();
            return $(".alert").alert("close");
        });
    });

}).call(this);
