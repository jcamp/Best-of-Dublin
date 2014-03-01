$(document).ready(function() {
    var $burgerSelect = $("#burgerselect");
    var $fishchipsSelect = $("#fishchipsselect");
    var $coffeeSelect = $("#coffeeselect");
    var $breakfastSelect= $("#breakfastselect");
    var $icecreamSelect = $("#icecreamselect");
    var $pizzaSelect = $("#pizzaselect");
    var $burger = $("#burgerpanel");
    var $fishchips = $("#fishchipspanel");
    var $coffee = $("#coffeepanel");
    var $breakfast = $("#breakfastpanel");
    var $icecream = $("#icecreampanel");
    var $pizza = $("#pizzapanel");

    $burgerSelect.click(function() {
        $burger.show();
        $burger.stop().animate({top:0}, {duration:1000});
        $fishchips.add($coffee).add($breakfast).add($icecream).add($pizza).stop().animate({top:"20em"}, {duration:400});
        $fishchips.add($coffee).add($breakfast).add($icecream).add($pizza).delay(400).hide(0);
    });
    $fishchipsSelect.click(function() {
        $fishchips.show();
        $fishchips.stop().animate({top:0}, {duration:1000});
        $burger.add($coffee).add($breakfast).add($icecream).add($pizza).stop().animate({top:"20em"}, {duration:400});
        $burger.add($coffee).add($breakfast).add($icecream).add($pizza).delay(400).hide(0);
    });
    $coffeeSelect.click(function() {
        $coffee.show();
        $coffee.stop().animate({top:0}, {duration:1000});
        $fishchips.add($burger).add($breakfast).add($icecream).add($pizza).stop().animate({top:"20em"}, {duration:400});
        $fishchips.add($burger).add($breakfast).add($icecream).add($pizza).delay(400).hide(0);
    });
    $breakfastSelect.click(function() {
        $breakfast.show();
        $breakfast.stop().animate({top:0}, {duration:1000});
        $fishchips.add($coffee).add($burger).add($icecream).add($pizza).stop().animate({top:"20em"}, {duration:400});
        $fishchips.add($coffee).add($burger).add($icecream).add($pizza).delay(400).hide(0);
    });
    $icecreamSelect.click(function() {
        $icecream.show();
        $icecream.stop().animate({top:0}, {duration:1000});
        $fishchips.add($coffee).add($breakfast).add($burger).add($pizza).stop().animate({top:"20em"}, {duration:400});
        $fishchips.add($coffee).add($breakfast).add($burger).add($pizza).delay(400).hide(0);
    });
    $pizzaSelect.click(function() {
        $pizza.show();
        $pizza.stop().animate({top:0}, {duration:1000});
        $fishchips.add($coffee).add($breakfast).add($icecream).add($burger).stop().animate({top:"20em"}, {duration:400});
        $fishchips.add($coffee).add($breakfast).add($icecream).add($burger).delay(400).hide(0);
    });
    $(".exitbutton").click(function() {
        $burger.add($fishchips).add($coffee).add($breakfast).add($icecream).add($pizza).stop().animate({top:"20em"}, {duration:400});
        $burger.add($fishchips).add($coffee).add($breakfast).add($icecream).add($pizza).delay(400).hide(0);
    });
});

$(function() {
    $("#arrowright").click(function() {
        if ($("#foodmenu").css("display") !== "none") {
            $("#foodmenu").stop().hide();
            $("#shoppingmenu").stop().show();
        } else if ($("#shoppingmenu").css("display") !== "none") {
            $("#shoppingmenu").stop().hide();
            $("#activitiesmenu").stop().show();
        } else if ($("#activitiesmenu").css("display") !== "none") {
            $("#activitiesmenu").stop().hide();
            $("#nightlifemenu").stop().show();
        } else if ($("#nightlifemenu").css("display") !== "none") {
            $("#nightlifemenu").stop().hide();
            $("#foodmenu").stop().show();
        }
    });
    $("#arrowleft").click(function() {
        if ($("#foodmenu").css("display") !== "none") {
            $("#foodmenu").stop().hide();
            $("#nightlifemenu").stop().show();
        } else if ($("#nightlifemenu").css("display") !== "none") {
            $("#nightlifemenu").stop().hide();
            $("#activitiesmenu").stop().show();
        } else if ($("#activitiesmenu").css("display") !== "none") {
            $("#activitiesmenu").stop().hide();
            $("#shoppingmenu").stop().show();
        } else if ($("#shoppingmenu").css("display") !== "none") {
            $("#shoppingmenu").stop().hide();
            $("#foodmenu").stop().show();
        }
    });
});