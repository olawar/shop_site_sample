/**
 * Created by Awar on 2015-10-16.
 */

$(function(){


    //task 2 - timeDifference u¿yte, aby zniwelowaæ efekt wielokrotnego odpalania siê animacji przy przypadkowym przejechaniu myszk¹

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


    //task3

    var images = $(".jumbotron li");
    var visibleImage = 0;

    images.eq(visibleImage).show();

    $(".arrowRight").click(function(){
        images.eq(visibleImage).hide();
        visibleImage++;
        if(visibleImage >= images.length){
            visibleImage=0;
        }
        images.eq(visibleImage).show(200);
    });

    $(".arrowLeft").click(function(){
        images.eq(visibleImage).hide();
        visibleImage--;
        if(visibleImage < 0){
            visibleImage=images.length-1;
        }
        images.eq(visibleImage).show(200);
    });
























});

