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
                    element: "#phone-box",
                    placement: "top",
                    title: "Phone Tutorials",
                    content: "This is the first section, learning all the basics on how to use your phone."
                },
                {
                    element: "#internet-box",
                    placement: "top",
                    title: "How to use the Internet",
                    content: "Want to learn the greatest use of your phone or computer? Here is the section all about the internet!"
                },
                {
                    element: "#software-box",
                    placement: "top",
                    title: "Software",
                    content: "Here you can find information on what software is, what it can be used for, and how you can get your hands on it."
                },
                {
                    element: "#communication-box",
                    placement: "top",
                    title: "Communication",
                    content: "Get connected with everybody you know (who has a device and regardless of physical location) and learn how to make it happen here!"
                },
                {
                    element: "#hardware-box",
                    placement: "top",
                    title: "Hardware",
                    content: "There are all sorts of devices you can attach to your computer, learn about them here!"
                },
                {
                    element: "#virtual-box",
                    placement: "top",
                    title: "Simulations",
                    content: "Visual learner? No problem! Here you can see your device on the screen and you can click on the app you'd like to know more on how to use."
                },
                {
                    element: "#contact",
                    placement: "top",
                    title: "Contact Us",
                    content: "Anything you'd like to talk about with the owners of this organization? Feel free!"
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
