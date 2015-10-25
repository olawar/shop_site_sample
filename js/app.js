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




    //Example names hiding on mouse enter / timeDifference u¿yte, aby zniwelowaæ efekt wielokrotnego odpalania siê animacji przy przypadkowym przejechaniu myszk¹

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


    //Order calculator


    $("#select-chair").change(function(){
        var optionSelected = $("option:selected", this);
        var targetField = ($("form#summary-calculator input#chair"));
        targetField.attr("value", optionSelected[0].innerHTML);
        targetField = ($("form#summary-calculator input#chair-price"));
        targetField.attr("value", (optionSelected[0].value) + " PLN");
        targetField.data("value", (optionSelected[0].value));
        recalculateSum();
    });

    $("#select-color").change(function(){
        var optionSelected = $("option:selected", this);
        var targetField = ($("form#summary-calculator input#color"));
        targetField.attr("value", optionSelected[0].innerHTML);
        targetField = ($("form#summary-calculator input#color-price"));
        targetField.attr("value", (optionSelected[0].value) + " PLN");
        targetField.data("value", (optionSelected[0].value));
        recalculateSum();
    });

    $("#select-material").change(function(){
        var optionSelected = $("option:selected", this);
        var targetField = ($("form#summary-calculator input#material"));
        targetField.attr("value", optionSelected[0].innerHTML);
        targetField = ($("form#summary-calculator input#material-price"));
        targetField.attr("value", (optionSelected[0].value) + " PLN");
        targetField.data("value", (optionSelected[0].value));
        recalculateSum();
    });

    $("#transport").click(function(){
        if ($(this).is(':checked')){
            var targetField = ($("form#summary-calculator input#transport-value"));
            targetField.attr("value", "Transport");
            targetField = ($("form#summary-calculator input#transport-price"));
            targetField.attr("value", 200 + " PLN");
            targetField.data("value", 200);
            recalculateSum();
        }
        else {
            var targetField = ($("form#summary-calculator input#transport-value"));
            targetField.attr("value", "Transport");
            targetField = ($("form#summary-calculator input#transport-price"));
            targetField.attr("value", 0 + " PLN");
            targetField.data("value", 0);
            recalculateSum();
        }
    });


    function recalculateSum(){
        var inputsToSum = $("input.sum");
        var sumField = ($("form#summary-calculator input#suma-price"));
        var summaryAll=0;
        inputsToSum.each(function(){
          summaryAll = summaryAll + (parseInt($(this).data("value")) || 0);
        });
        sumField.attr("value", (summaryAll + " PLN"));
    }


});

