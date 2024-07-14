$(".openNav").on('click', function () {
    $("#leftMenu").animate({ width: '250px' }, 50)
    $("#home-content").animate({ marginLeft: '250px' }, 50)
    $(".openNav").toggle();
})

$(".closebtn").on('click', function () {
    $("#leftMenu").animate({ width: '0px' }, 50)
    $("#home-content").animate({ marginLeft: '0px' }, 50)
    $(".openNav").toggle();

})

$("#leftMenu a").on('click', function () {

    var sectionId = $(this).attr("href");

    var positionOfSection = $(sectionId).offset().top;

    $("html , body").animate({ scrollTop: positionOfSection }, 2000);

})


$(".imgSide").on('click', function (e) {
    let imgSrs = $(e.target).attr('src');
    $(".chang").css("background-image", `url(${imgSrs}`);
    console.log(imgSrs);
})

$('#sliderDown .toggle').on('click', function () {
    $('.inner').not($(this).next()).slideUp(500);
    $(this).next().slideToggle(500);
});

window.onload = function () {

    countDownToTime("25 october 2024 9:56:00");
}

function countDownToTime(countTo) {

    let futureDate = new Date(countTo);
    futureDate = (futureDate.getTime() / 1000);

    let now = new Date();
    now = (now.getTime() / 1000);

    timeDifference = (futureDate - now);

    let days = Math.floor(timeDifference / (24 * 60 * 60));
    let hours = Math.floor((timeDifference - (days * (24 * 60 * 60))) / 3600);
    let mins = Math.floor((timeDifference - (days * (24 * 60 * 60)) - (hours * 3600)) / 60);
    let secs = Math.floor((timeDifference - (days * (24 * 60 * 60)) - (hours * 3600) - (mins * 60)));


    $(".days").html(`${days} D`);
    $(".hours").html(`${hours} h`);
    $(".minutes").html(`${mins} m`);
    $('.seconds').html(`${secs} s`)

    setInterval(function () { countDownToTime(countTo); }, 1000);
}

let maxLength = 100;
$('textarea').on('keyup', function () {
    let length = $(this).val().length;
    let AmountLeft = maxLength - length;
    if (AmountLeft <= 0) {
        $("#chars").text("your available character finished");

    }
    else {

        $("#chars").text(AmountLeft);
    }
});



