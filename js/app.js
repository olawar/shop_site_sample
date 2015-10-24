/**
 * Created by Awar on 2015-10-16.
 */

$(function(){


    //dropdown menu


    var firstMenuElements = $(".first-level li");
    var secondMenuElements = $(".second-level li");

    firstMenuElements.click(function(){
        var mySecondLevel = $(this).find(".second-level li");
        if(mySecondLevel.is(':visible')){
            secondMenuElements.hide();
        }
        else {
            secondMenuElements.hide();
            mySecondLevel.show();
        }
    });




    //Example names hiding on mouse enter / timeDifference u�yte, aby zniwelowa� efekt wielokrotnego odpalania si� animacji przy przypadkowym przejechaniu myszk�

    var pictureChair = $(".picture_chair");
    var examplesDescription = $("div.examples_description");
    var timeLast = 0, timeDifference = 0;

    pictureChair.mouseenter(function (){
        timeDifference = event.timeStamp - timeLast;
        if(timeDifference > 1000){
            var order = $(this).data("order");
            examplesDescription.eq(order).hide(500);
            timeLast = event.timeStamp;
        }
    });

    pictureChair.mouseleave(function (){
        var order = $(this).data("order");
        examplesDescription.eq(order).show(500);
    });


    //Slider

    var images = $(".jumbotron li");
    var visibleImage = 0;

    images.eq(visibleImage).show();

    $(".arrow-right").click(function(){
        images.eq(visibleImage).hide();
        visibleImage++;
        if(visibleImage >= images.length){
            visibleImage=0;
        }
        images.eq(visibleImage).show(200);
    });

    $(".arrow-left").click(function(){
        images.eq(visibleImage).hide();
        visibleImage--;
        if(visibleImage < 0){
            visibleImage=images.length-1;
        }
        images.eq(visibleImage).show(200);
    });
























});

