$(document).ready(function () {
    var currentFloor = 2;
    var counterUp = $(".counter-up")
    var counterDown = $(".counter-down")
    var floorPath = $(".home-image path")

    // Наведение мышкой на этаж
    floorPath.on("mouseover", function () {
        floorPath.removeClass("current-floor");
        currentFloor = $(this).attr("data-floor");
        $(".counter").text(currentFloor)
    })

    //Изменение этажа при нажатии кнопок
    counterUp.on("click", function() {
        if (currentFloor < 18) {
            currentFloor++;
            usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2,
                useGrouping: false})
            $(".counter").text(usCurrentFloor)
            floorPath.removeClass("current-floor");
            $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
        }
    })
    counterDown.on("click", function() {
        if (currentFloor > 2) {
            currentFloor--;
            usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2,
                useGrouping: false})
            $(".counter").text(usCurrentFloor)
            floorPath.removeClass("current-floor");
            $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
        }
    })
})